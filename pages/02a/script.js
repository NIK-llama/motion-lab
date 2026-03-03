import gsap from "gsap";
gsap.to(".card", {
    opacity: 1,
    rotation: 360,
    // background: "#ff6f61",
    // borderRadius: "50%",
    scale: 1,
    duration: 2,
    delay: 0.5,
    ease: "bounce",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.50,
    // paused: true,
}) 