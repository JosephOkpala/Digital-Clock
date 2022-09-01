const hoursElement = document.querySelector('.hour');
const minsElement = document.querySelector('.mins');
const secsElement = document.querySelector('.secs');

function digitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? '0' + h : h;

  hoursElement.innerText = h;
  minsElement.innerText = m;
  secsElement.innerText = s;

  setTimeout(() => {
    digitalClock();
  }, 1000);
}

digitalClock();
