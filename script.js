let tl = gsap.timeline()

tl.from(("#nav"),{
    opacity:0,
    delay:0.3
})

tl.from(('#nav h1, h3 '),{
    scale:0,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.3
})

tl.from(('#left h1'),{
    x:-900,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
tl.from(('#right img'),{
   scale:0,
   delay:0.3,
   duration:0.3

})

// tl.from(('#solution'),{
//     opacity:0,
//     delay:0.3
// })

tl.from(('#solution h2'),{
    x:-900,
    duration:0.2,
    delay:0.2,
    stagger:0.3
})

gsap.from(("#page2 .box"),{
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        scrub:2
    }
})