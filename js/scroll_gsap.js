gsap.registerPlugin(ScrollTrigger);

var about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section"

    }
});

about.fromTo(".about-right",{x: 300, opacity: 0}, {x: 0, opacity: 1, duration: 3, ease: "power4.out"});
about.fromTo(".about-left",{x: -300, opacity: 0}, {x: 0, opacity: 1, duration: 3, ease: "power4.out"}, "-=3");

gsap.from(".sch-1",{
    scrollTrigger: ".sch-1",
    y: 100,
    opacity: 0,
    duration: 3,
    ease: "power4.out"
});
gsap.from(".sch-2",{
    scrollTrigger: ".sch-2",
    y: 100,
    opacity: 0,
    duration: 3,
    ease: "power4.out"
});
gsap.from(".sch-3",{
    scrollTrigger: ".sch-3",
    y: 100,
    opacity: 0,
    duration: 3,
    ease: "power4.out"
});
gsap.from(".sch-4",{
    scrollTrigger: ".sch-4",
    y: 100,
    opacity: 0,
    duration: 3,
    ease: "power4.out"
});
gsap.from(".sch-5",{
    scrollTrigger: ".sch-5",
    y: 100,
    opacity: 0,
    duration: 3,
    ease: "power4.out"
});