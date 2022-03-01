
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
// Clock code

function currentTime() {
  let cTime = new Date;
  let hour = addZero(cTime.getHours());
  let minute = addZero(cTime.getMinutes());
  let second = addZero(cTime.getSeconds());

  document.getElementById("clock").innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(currentTime, 1000);

