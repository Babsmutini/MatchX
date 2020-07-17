gsap.fromTo(".circle3,.circle4", {
  delay: 2,
  scale: 0.1
}, {
  scale: 1,
  duration: 1,
  ease: "expoScale(0.1, 1)",
  repeat: -1
})
gsap.fromTo(".circle2,.circle5", {
  delay: 3,
  scale: 0.1
}, {
  scale: 1,
  duration: 1.7,
  ease: "expoScale(0.1, 1)",
  repeat: -1
})
gsap.fromTo(".circle1,.circle6", {
  delay: 4,
  scale: 1
}, {
  scale: 0.1,
  duration: 2.3,
  ease: "expoScale(0.1, 1)",
  repeat: -1
})
var tl = new gsap.timeline({
  repeat: -1,
  yoyo: false,
  paused: false,
});

tl.from(".heading", 1, {
  delay: 1,
  opacity: 0,
  y: -300,
  ease: Expo.easeInOut
})

tl.from(".inner", 1, {
  delay: 0.,
  opacity: 0,
  x: -200,
  ease: Expo.easeInOut
})
tl.from(".form", 1, {
  delay: 0.5,
  opacity: 0,
  y: 300,
  ease: Expo.easeInOut
})
tl.from("#screen-1", {
  duration: 1,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
})
tl.from("#screen-2", {
  duration: 1,
  delay: 1,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
})
tl.fromTo(".inner", {
  x: 200,
}, {
  delay: 3,
  opacity: 0,
  duration: 1,
  visibility: "hidden",
  x: 0,
  ease: Expo.easeOut
})
tl.to(".secondaryColor", {
  css: {
    background: "#FFF"
  },
  duration: 1.2,
  ease: Power2.easeOut
})
tl.fromTo("#section-text2", {
  opacity: 0,
  x: -200,
  y: 0
}, {
  duration: 1,
  opacity: 1,
  x: 0,
  y: 0,
  ease: Expo.easeInOut,
  display: "block"
})
tl.to("#screen-2", {
  delay: 1,
  opacity: 0,
  x: 100,
  display: "none",
  ease: Expo.easeOut
})
tl.to("#screen-1", {
  opacity: 0,
  x: 200,
  display: "none",
  ease: Expo.easeOut
})
tl.fromTo("#screen-3", {
  delay: 2,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
}, {
  duration: 1,
  x: 0,
  opacity: 1,
  display: "block"
})
tl.fromTo("#screen-4", {
  delay: 1,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
}, {
  duration: 1,
  x: 0,
  display: "block",
  opacity: 1
})
tl.fromTo("#section-text2", {
  x: 0,
  delay: 3
}, {
  opacity: 0,
  duration: 1,
  display: "none",
  x: 0,
  ease: Expo.easeOut
})
tl.to(".secondaryColor", {
  css: {
    background: "#F3E4FF"
  },
  duration: 2,
  ease: "expoScale(0.1, 1)"
})
tl.fromTo("#section-text3", {
  opacity: 0,
  x: -200,
  y: 0
}, {
  duration: 1,
  opacity: 1,
  x: 0,
  y: 0,
  ease: Expo.easeInOut,
  display: "block"
})
tl.to("#screen-4", {
  delay: 1,
  opacity: 0,
  x: 100,
  display: "none",
  ease: Expo.easeOut
})
tl.to("#screen-3", {
  opacity: 0,
  x: 200,
  display: "none",
  ease: Expo.easeOut
})
//bring in screens
tl.fromTo("#screen-5", {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
}, {
  duration: 1,
  x: 0,
  opacity: 1,
  display: "block"
})
tl.fromTo("#screen-6", {
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut
}, {
  duration: 1,
  x: 0,
  display: "block",
  opacity: 1
})
//Next Screen1
tl.to("#screen-6", {
  delay: 4,
  opacity: 0,
  x: 100,
  display: "none",
  ease: Expo.easeOut
})
tl.to("#screen-5", {
  opacity: 0,
  x: 200,
  display: "none",
  ease: Expo.easeOut
})
