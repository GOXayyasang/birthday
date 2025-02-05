// Add a special wish when the button is clicked
window.onload = () => {
  const sound = new Audio("happy-birthday-song-background-music-295823.mp3");
  sound.loop = true;
  sound.play();
};
const wishButton = document.querySelector(".wish-button");
const message = document.querySelector(".message");
const wishes = [
  "You mean the world to me! Here's to many more amazing years together. 🎉",
  "Wishing you endless joy and success in everything you do. 🌟",
  "You're not just my best friend, you're my family. 💖",
  "May all your dreams come true today and always. 🌈",
  "Thank you for being the most amazing friend ever! 🥳",
];

wishButton.addEventListener("click", () => {
  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  message.textContent = randomWish;
  message.style.color = "#ff3b3f";
  message.style.fontWeight = "bold";
});
