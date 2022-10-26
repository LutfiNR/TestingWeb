const imgs = document.getElementById("container-img");
const img = document.querySelectorAll("#container-img img");

let idx = 0;
let interval = setInterval(run, 2000);


function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 100}vw)`;
}


function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
