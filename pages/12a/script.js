import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar,index) => {
  gsap.fromTo(bar, {
    scaleY: 0.4
  }, {
    scaleY: 1.6,
    duration: 0.6,
    repeat: -1,
    ease: "sine.inOut",
    yoyo: "true",
    delay: index * 0.1,
  })
})