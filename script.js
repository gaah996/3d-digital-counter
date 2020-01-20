function onload() {
  const display1 = new Display;
  const display2 = new Display;

  display1.init();
  document.body.appendChild(display1.display);

  display2.init();
  document.body.appendChild(display2.display);

  let i = 99;
  const interval = setInterval(() => {
    if(i >= 0) {
      display1.setValue(Math.floor(i / 10));
      display2.setValue(i % 10)
    } else {
      clearInterval(interval);
    }

    i--;
  }, 500);
}