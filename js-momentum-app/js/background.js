const images = ["0.jpeg", "1.jpeg", "2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const body = document.querySelector("body");
bgImage.src = `img/${chosenImage}`;
body.style.backgroundImage = `url(img/${chosenImage}`; 
body.style.backgroundSize ="100% 100%";