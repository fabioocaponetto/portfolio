const music = document.getElementById("music-hobbies");
const video = document.getElementById("video-hobbies");
let spacePressed = false;

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !spacePressed) {
    event.preventDefault();
      spacePressed = true;
      video.play();
      music.play();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    spacePressed = false;
    video.pause();
    music.pause();
  }
});
