var ImageList = ('0123');

// '3' is the "Danger(?)" image

// '0', '1', '2' represent "Images"

// ()


function PullButt() {

  var WinLose = document.getElementsByClassName('bet')[0].value * 1;

  if (WinLose == 0) {
    alert('Need to place a bet');
    return;
  }



  var cntr = 5;

  do {

    var p1 = Math.floor(Math.random() * ImageList.length);

    document.getElementsByClassName('sp1')[0].src = ImageList.charAt(p1) + '.png';

    document.getElementsByClassName('sp1')[0].alt = ImageList.charAt(p1) + '.png';

    var p2 = Math.floor(Math.random() * ImageList.length);

    document.getElementsByClassName('sp2')[0].src = ImageList.charAt(p2) + '.png';

    document.getElementsByClassName('sp2')[0].alt = ImageList.charAt(p2) + '.png';

    var p3 = Math.floor(Math.random() * ImageList.length);

    document.getElementsByClassName('sp3')[0].src = ImageList.charAt(p3) + '.png';

    document.getElementsByClassName('sp3')[0].alt = ImageList.charAt(p3) + '.png';

    cntr--;

  } while (cntr > 0); // un-necessary loop to delay displays



  scr = document.getElementsByClassName('score')[0].value * 1;

  var msg = 'Lose';

  if (p1 == '3') {
    msg = "Penalty: 1 coin";
  }

  if (p2 == '3') {
    msg = "Penalty: 1 coin";
  }

  if (p3 == '3') {
    msg = "Penalty: 1 coin";
  }

  if ((p1 == p2) || (p1 == p3) || (p2 == p3)) {
    msg = 'Pair';
  } // pair

  if ((p1 == p2) && (p1 == p3) && (p2 == p3)) {
    msg = '3 of a kind';
  } // total match

  if ((p1 == '3') && (p2 == '3')) {
    msg = "Penalty: 5 coins";
  }

  if ((p2 == '3') && (p3 == '3')) {
    msg = "Penalty: 5 coins";
  }

  if ((p1 == '3') && (p3 == '3')) {
    msg = "Penalty: 5 coins";
  }

  if ((p1 == '3') && (p2 == '3') && (p3 == '3')) {
    msg = 'Bad news - Lose all';
  }

  // Add appropriate logic for 'images' above and below

  switch (msg) {

    case '3 of a kind':
      WinLose *= 5;
      break;

    case "Pair":
      WinLose *= 2;
      break;

    case "Bad news - Lose all":
      scr = 0;
      WinLose = 0;
      break;

    case "Penalty: 1 coin":
      WinLose = -1;
      break;

    case "Penalty: 5 coins":
      WinLose = -5;
      break;

    default:
      WinLose *= 1;
      break; // default = 'Win' ,  maybe check on this again as lotsa states shld set to "Lose".

  }

  scr += WinLose;

  document.getElementsByClassName('score')[0].value = scr;

  document.getElementsByClassName('sp4')[0].innerHTML = msg;

}
