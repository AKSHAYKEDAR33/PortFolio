var time=gsap.timeline();

time.from(".nav",{
    height:"120px",
    delay:1,
    duration:2
})

time.from(".content-page1 h1",{
    x:-650,
    duration:0.8,
});


var time2=gsap.timeline();

time2.from(".up h1",{
    y:100,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".content-page1",
        scroller:"body",
        start:"top 10%",
        end:"top 20%",
        scrub:2
    }
});

time2.from(".up p",{
    opacity:0,
    backgroundColor:"transparent",
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".up",
        scroller:"body",
        start:"top 80%",
        end:"top 70%",
        scrub:2
    }
})

time2.from(".below h1",{
    y:100,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:".up",
        scroller:"body",
        start:"top 15%",
        end:"top 5%",
        scrub:2
    }
})

time2.from(".gurukilli",{
    opacity:0,
    backgroundColor:"transparent",
    duration:3,
    delay:1,
    scrollTrigger:{
        trigger:".below",
        scroller:"body",
        start:"top 90%",
        end:"top 45%",
        scrub:2
    }
})

var time3=gsap.timeline();

time3.from(".signature-font",{
    y:100,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 90%",
        end:"top 85%",
        scrub:2
    }
})

time3.from(".below2 h4",{
    y:100,
    duration:2,
    delay:0.2,
    stagger:2,
    scrollTrigger:{
        trigger:".up2",
        scroller:"body",
        start:"top 90%",
        end:"top 60%",
        scrub:2,
    }
});