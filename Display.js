class Display {
  display = null;
  segments = [];

  init() {
    this.display = document.createElement('div');
    this.display.classList.add('display');

    const segmentA = document.createElement('span');
    segmentA.classList.add('segment');
    segmentA.style.transform = 'rotate(-90deg)';
    segmentA.style.top = '0px';
    segmentA.style.left = '5px';
    this.display.appendChild(segmentA);
    this.segments.push(segmentA);

    const segmentB = document.createElement('span');
    segmentB.classList.add('segment');
    segmentB.style.top = '0px';
    segmentB.style.left = '65px';
    this.display.appendChild(segmentB);
    this.segments.push(segmentB);

    const segmentC = document.createElement('span');
    segmentC.classList.add('segment');
    segmentC.style.top = '65px';
    segmentC.style.left = '65px';
    this.display.appendChild(segmentC);
    this.segments.push(segmentC);

    const segmentD = document.createElement('span');
    segmentD.classList.add('segment');
    segmentD.style.transform = 'rotate(-90deg)';
    segmentD.style.top = '130px';
    segmentD.style.left = '5px';
    this.display.appendChild(segmentD);
    this.segments.push(segmentD);

    const segmentE = document.createElement('span');
    segmentE.classList.add('segment');
    segmentE.style.top = '65px';
    segmentE.style.left = '0px';
    this.display.appendChild(segmentE);
    this.segments.push(segmentE);
    
    const segmentF = document.createElement('span');
    segmentF.classList.add('segment');
    segmentF.style.top = '0px';
    segmentF.style.left = '0px';
    this.display.appendChild(segmentF);
    this.segments.push(segmentF);

    const segmentG = document.createElement('span');
    segmentG.classList.add('segment');
    segmentG.style.transform = 'rotate(-90deg)';
    segmentG.style.top = '65px';
    segmentG.style.left = '5px';
    this.display.appendChild(segmentG);
    this.segments.push(segmentG);
  }

  setValue(value) {
    console.log(value)
    switch (value) {
      case 0:
        this.segments[0].classList.add('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.add('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.remove('on');
        break;
      case 1:
        this.segments[0].classList.remove('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.remove('on');
        this.segments[4].classList.remove('on');
        this.segments[5].classList.remove('on');
        this.segments[6].classList.remove('on');
        break;
      case 2:
        this.segments[0].classList.add('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.remove('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.add('on');
        this.segments[5].classList.remove('on');
        this.segments[6].classList.add('on');
        break;
      case 3:
        this.segments[0].classList.add('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.remove('on');
        this.segments[5].classList.remove('on');
        this.segments[6].classList.add('on');
        break;
      case 4:
        this.segments[0].classList.remove('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.remove('on');
        this.segments[4].classList.remove('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.add('on');
        break;
      case 5:
        this.segments[0].classList.add('on');
        this.segments[1].classList.remove('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.remove('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.add('on');
        break;
      case 6:
        this.segments[0].classList.add('on');
        this.segments[1].classList.remove('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.add('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.add('on');
        break;
      case 7:
        this.segments[0].classList.add('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.remove('on');
        this.segments[4].classList.remove('on');
        this.segments[5].classList.remove('on');
        this.segments[6].classList.remove('on');
        break;
      case 8:
        this.segments[0].classList.add('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.add('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.add('on');
        break;
      case 9:
        this.segments[0].classList.add('on');
        this.segments[1].classList.add('on');
        this.segments[2].classList.add('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.remove('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.add('on');
        break;
      default:
        this.segments[0].classList.add('on');
        this.segments[1].classList.remove('on');
        this.segments[2].classList.remove('on');
        this.segments[3].classList.add('on');
        this.segments[4].classList.add('on');
        this.segments[5].classList.add('on');
        this.segments[6].classList.add('on');
        break;
    }
  }
}