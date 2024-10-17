Shery.mouseFollower()
Shery.makeMagnet('.magnet')
Shery.hoverWithMediaCircle('.hrv', {
  videos: ['./0.mp4', './2.mp4', './3.mp4']
})

gsap.from('.nleft', {
  y: -100,
  opacity: 0,
  duration: 0.5,
  delay: 0.4,
  ease: 'bounce.out'
})

var menu = document.querySelector('.nright i')

var cross = document.querySelector('.slidemenu1 i')

var tl = gsap.timeline()

tl.to('.slidemenu', {
  left: '0%',
  duration: 0.1,
  delay: 0.1,
  ease: 'sirc.inOut',
  backgroundColor: '#111'
})

tl.to('.slidemenu1', {
  right: '0%',
  duration: 0.1,
  delay: 0.1,
  ease: 'sirc.inOut',
  backgroundColor: '#19312F'
})

tl.from('.slidemenu h1', {
  opacity: 0,
  x: -100,
  duration: 0.1,
  ease: 'power3.out'
})

tl.from('.slidemenu h4', {
  opacity: 0,
  y: -100,
  duration: 0.2,
  delay: 0.1,
  ease: 'step(24)',
  stagger: -0.1
})

tl.from('.slidemenu h5', {
  opacity: 0,
  y: 100,
  duration: 0.1,
  delay: 0.1,
  ease: 'power3.out'
})

tl.from('.slidemenu i', {
  opacity: 0,
  y: -200,
  duration: 0.1,
  ease: 'step(40)',
  stagger: 0.1
})

tl.from('.slidemenu1 h2', {
  opacity: 0,
  y: -100,
  duration: 0.1,
  ease: 'step(12)',
  stagger: 0.1
})

tl.from('.slidemenu1 h3', {
  opacity: 0,
  y: -100,
  duration: 0.1,
  ease: 'step(12)',
  stagger: 0.1
})

tl.from('.slidemenu1 i', {
  opacity: 0,
  x: 200,
  duration: 0.1,
  ease: 'step(24)',
  stagger: 0.1
})

tl.pause()

menu.addEventListener('click', function () {
  tl.play()
})

cross.addEventListener('click', function () {
  tl.reverse()
})

gsap.from('.fheading', {
  scrollTrigger: {
    trigger: '.fheading',
    start: 'top 60%'
  },
  x: -100,
  duration: 0.7,
  delay: 0.4,
  opacity: 0
})

gsap.from('.hleft', {
  scrollTrigger: {
    trigger: '.hleft',
    start: 'top 30%'
  },
  x: -200,
  opacity: 0,
  duration: 0.5,
  delay: 0.1,
  ease: 'circ.out'
})

gsap.to('.elem', {
  scrollTrigger: {
    trigger: '.hero',
    pin: true,
    start: 'top top',
    end: 'bottom bottom',
    endTrigger: '.last',
    scrub: 1
  },
  y: '-300%',
  ease: Power1
})

let sections = document.querySelectorAll('.elem')

Shery.imageEffect('.images', {
  style: 3,
  config: {
    uFrequencyX: { value: 12.98, range: [0, 100] },
    uFrequencyY: { value: 13.74, range: [0, 100] },
    uFrequencyZ: { value: 16.79, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.8386437908496732 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0.1830065359477124 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.76, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] }
  },
  slideStyle: setScroll => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index)
        }
      })
    })
  }
})

gsap.from('#dev', {
  scrollTrigger: {
    trigger: '#dev p',
    start: 'top 70%'
  },
  x: -500,
  duration: 0.2,
  opacity: 0,
  delay: 0.1,
  ease: 'back.out(1.2)'
})

var slide = document.querySelectorAll('.slide')

gsap.from(slide, {
  scrollTrigger: {
    trigger: slide,
    start: 'top 40%'
  },
  y: -100,
  opacity: 0,
  duration: 0.2,
  delay: 0.1,
  stagger: 0.2
})

gsap.from('#main-footer', {
  opacity: 0,
  x: 100,
  duration: 0.4,
  delay: 0.1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '#main-footer',
    start: 'top 65%',
    end: 'bottom bottom'
  }
})
