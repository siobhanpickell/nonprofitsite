/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

let carousalImages = [
  "https://cdn.glitch.global/c4f5814e-600a-487f-a6bb-a74a886075de/Share-our-strength-logo.jpg?v=1670522801783",
  "https://cdn.glitch.global/c4f5814e-600a-487f-a6bb-a74a886075de/NKH_2018_Endorsed_90_10_rgb_0logo.png?v=1671049309272",
  "https://cdn.glitch.global/c4f5814e-600a-487f-a6bb-a74a886075de/SE106310_logo_orig.jpg?v=1670522836704",
];

let carousalIMG = document.getElementById("carousalIMG");
let currentIndex = 2;
let changeButton = document.getElementById("changeIMG");

let changeSlide = function () {
  console.log(currentIndex);
  if (currentIndex === 0) {
    carousalIMG.src = carousalImages[1];
    currentIndex += 1;
  } else if (currentIndex === 1) {
    carousalIMG.src = carousalImages[2];
    currentIndex += 1;
  } else {
    carousalIMG.src = carousalImages[0];
    currentIndex = 0;
  }
};


window.addEventListener("load", function () {
  setInterval(changeSlide, 2000);
});

changeButton.addEventListener("click", carousalImages);
