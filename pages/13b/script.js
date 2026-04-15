import gsap from "gsap";

// Initial states using gsap.set()
gsap.set(".nav", { y: -80, opacity: 0 });
gsap.set(".arrow", { x: -80, opacity: 0 });
gsap.set("h1", { y: 100, opacity: 0 });

// Timeline animation
const tl = gsap.timeline();

// Navbar enters
tl.to(".nav", {
  y: 0,
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
});

// Arrow slides in
tl.to(".arrow", {
  x: 0,
  opacity: 1,
  duration: 0.6,
}, "-=0.4");

// Heading animation
tl.to("h1", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
});

// Extra: subtle floating effect on heading
gsap.to("h1", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut",
});