
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
 
gsap.to("#nav-part1 svg",{
    transform:`translateY(-100%)`, 
    scrollTrigger:{
        trigger:"#nav-part1 svg" ,  
        scroller:"#main", 
        start:"top 0 ",
        end:"top -5%",
        scrub:1
    }
})
gsap.to("#nav-part2 #nav-links",{
    transform:`translateY(-100%)`,  
    opacity:0,
    scrollTrigger:{
        trigger:"#nav-part1 svg" ,  
        scroller:"#main", 
        start:"top 0 ",
        end:"top -5%",
        scrub:1
    }
})

function videoanim() {
    let video = document.querySelector("#video");
    let play = document.querySelector("#play")
    video.addEventListener("mouseenter", function () {
        gsap.to(play, {
            opacity: 1,
            scale: 1
        })
    })

    video.addEventListener("mouseleave", function () {
        gsap.to(play, {
            opacity: 0,
            scale: 0
        })
    })
    video.addEventListener("mousemove", function (dets) {
        gsap.to(play, {
            top: dets.y - 60,
            left: dets.x - 90
        })
    })
}

videoanim();
function load() {

    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5,
        duration: 0.8
    })
    gsap.from("#page1 #video ", {
        scale: 1,
        opacity: 0,
        delay: 1.5,
        duration: 0.3
    })
}
load();



document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        top: dets.clientY,
        left: dets.clientX
    })
})

// let a = document.querySelectorAll(".child")

// a.forEach(function (elem) {
//     elem.addEventListener("mousemove", function () {
//         gsap.to("#cursor", {
//             transform: `translate(-50%, -50%) scale(1)`

//         })

//     })
//     elem.addEventListener("mouseleave", function () {
//         gsap.to("#cursor", {
//             transform: `translate(-50%, -50%) scale(0)`

//         })

//     })
// }) 
let a = document.querySelectorAll(".child");
const cursorColors = ['red', 'blue', 'green', 'yellow']; 

a.forEach(function (elem, index) {
    elem.addEventListener("mousemove", function () {
        const color = cursorColors[index % cursorColors.length]; 
        gsap.to("#cursor", {
            transform: `translate(-50%, -50%) scale(1)`,
            backgroundColor: color
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: `translate(-50%, -50%) scale(0)`
        });
    });
});


