gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
    smoothContent: false
});

let leftItems = gsap.utils.toArray(".gallery__left");

leftItems.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: "-850",
            end: "-100",
            scrub: true,
        }
    })
});

let rightItems = gsap.utils.toArray(".gallery__right");

rightItems.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: item,
            start: "-750",
            end: "top",
            scrub: true
        }
    })
})