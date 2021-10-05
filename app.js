let image = document.querySelector(".image");

let imageArray = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpeg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
];
let imageIndex = 1;

function next() {
  // image.style.backgroundImage=`url({imageArray[imageIndex]})`
  image.style.backgroundImage = `url(${imageArray[imageIndex]})`;
  if (imageIndex == 5) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
}

function back() {
  image.style.backgroundImage = `url(${imageArray[imageIndex]})`;
  if (imageIndex == 1) {
    imageIndex = 5;
  } else {
    imageIndex--;
  }
}
