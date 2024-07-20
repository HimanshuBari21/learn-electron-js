setInterval(() => {
  SecondTime = new Date().getSeconds();
  srotation = 6 * SecondTime;
  //For Second Rotation
  document.getElementById("second-hand").style.transform =
    "rotate(" + srotation + "deg)";

  //For Minute Rotation
  MinuteTime = new Date().getMinutes();
  mrotation = 6 * MinuteTime;

  document.getElementById("minute-hand").style.transform =
    "rotate(" + mrotation + "deg)";

  // For Hour Rotation
  HourTime = new Date().getHours();
  hrotation = 30 * HourTime + MinuteTime / 2;

  document.getElementById("hour-hand").style.transform =
    "rotate(" + hrotation + "deg)";

  // displays AM PM conditionally
  if (HourTime > 11) {
    document.getElementById("center-pin").innerText = "PM";
  }

  let frameColor = document.getElementById("framecolor");
  document.getElementById("clock-container").style.borderColor =
    frameColor.value;
}, 100);
