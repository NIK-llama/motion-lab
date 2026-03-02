import gsap from "gsap";

gsap.to('.card', {
    boxShadow: `
    0 20px 50px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(84, 160, 255, 0.7)
  `,
    scale: 0.85,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
})