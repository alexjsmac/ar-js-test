window.onload = () => {
  const sayHiButton = document.querySelector(".say-hi-button");
  sayHiButton.addEventListener("click", () => {
    const audio = document.querySelector("audio");
    audio.play();
  });
};
