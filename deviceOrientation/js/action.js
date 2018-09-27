if (window.DeviceMotionEvent) {
    window.addEventListener('deviceorientation', deviceMotionHandler, false);
  }
  let alpha = 0;
  function deviceMotionHandler(eventData) {
    console.log(eventData);
    const gamma = eventData.gamma;
    if (Math.abs(gamma) < 50) {
      var left = gamma / 360;
      document.getElementById('move').style.transform = `translateX(${left * 1000}px)`;
      document.getElementById('light').style.transform = `translateX(${left * 1000}px)`;
    }
    console.log(document.getElementById('move').style);
  }