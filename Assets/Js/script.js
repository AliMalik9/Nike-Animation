let lt = gsap.timeline();

gsap.set(".a", {
  opacity:0,
  y: 10
})
gsap.set("#right>img", {
  opacity:0,
  // y:20,
  scale: 1.6,
  rotate:0
})

lt
.from("#left", {
  width:0,
  duration: 1,
  ease: Expo.easeInOut
})
.from("#right", {
  width:0,
  duration: 1,
  ease: Expo.easeInOut
})
.to(".a", {
  delay:-1,
  stagger: .3,
  opacity: 1,
  y:0,
  duration: 2,
  ease: Expo.easeInOut
})
.to("#right>img", {
  delay: -3,
  opacity: 1,
  rotate:-30,
  // y:0,
  scale: 1,
  duration: 1,
  ease: Expo.easeInOut
})
