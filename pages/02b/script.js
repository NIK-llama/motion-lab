import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

const animation = gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    borderRadius: "50%",
    scale: 1.25,
    duration: 2,
    paused: true,
})

// Play
play.addEventListener("click", () => {
  animation.play();
});

// Pause
pause.addEventListener("click", () => {
  animation.pause();
});

// Resume
resume.addEventListener("click", () => {
  animation.resume();
});

// Restart
restart.addEventListener("click", () => {
  animation.restart();
});

// Reverse
reverse.addEventListener("click", () => {
  animation.reverse();
});

// Kill
kill.addEventListener("click", () => {
  animation.kill();
});

// Yoyo
yoyo.addEventListener("click", () => {
  animation.yoyo(true).repeat(2).play();
});
