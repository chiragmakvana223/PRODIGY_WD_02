let second = 0;
let minut = 0;
let hour = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}

function pause() {
  timer = false;
}

function stop() {
  timer = false;
  second = 0;
  minut = 0;
  hour = 0;
  count = 0;

  document.getElementById("hour").innerHTML = "00";
  document.getElementById("minut").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
  if (timer == true) {
    count = count + 1;

    if (count == 100) {
      second = second + 1;
      count = 0;
    }
    if (second == 60) {
      minut = minut + 1;
      count = 0;
      second = 0;
    }
    if (minut == 60) {
      hour += 1;
      minut = 0;
      second = 0;
      count = 0;
    }

    var secondstr = second;
    var minutstr = minut;
    var hourstr = hour;

    if (minut < 10) {
      minutstr = "0" + minutstr;
    }
    if (hour < 10) {
      hourstr = "0" + hourstr;
    }
    if (second < 10) {
      secondstr = "0" + secondstr;
    }
    document.getElementById("hour").innerHTML = hourstr;
    document.getElementById("minut").innerHTML = minutstr;
    document.getElementById("second").innerHTML = secondstr;
    document.getElementById("count").innerHTML = count;
    setTimeout("stopwatch()", 10);
  }
}
