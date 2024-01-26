


function scroll() {

  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}
scroll();

function firstpage() {

  var tl = gsap.timeline();
  tl.to("#loader h2", {
    x: 100,
    opacity: 1,
    stagger: 0.5,
    delay: 1
  })
  tl.to("#loader", {
    y: -1000,
    duration: 1.5,
    delay: 1

  })


  tl.from(".img", {
    y: -100,
    duration: 0.5,

  })
  tl.from(".img h5", {
    y: -30,
    duration: 0.5
  })
  tl.from(".content a", {
    delay: -1,
    opacity: 0,
    x: 100,
    duration: 0.5,
    stagger: 0.2
  })
  tl.from(".writing-content h1", {
    opacity: 0,
    y: 80,
    stagger: 0.3,
    delay: -1
  })
  tl.from(".writing-content h4", {
    opacity: 0,
    y: 80,
    stagger: 0.3,
    duration: 0.5,

  })
  tl.from(".btn1", {
    scale: 0,
  })
  tl.from(".scroll", {
    y: 10,
    opacity: 0,
    repeat: -1,
    yoyo: true
  })

}

firstpage();


function secondpage() {
  var tit = gsap.timeline();
  tit.from(".second-content h2", {
    x: 100,
    duration: 0.5,
    stagger: 0.5,
    opacity: 0,
    scrollTrigger: {
      trigger: ".second", // Adjusted trigger to target the second page
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      scrub: 1,
    },
  });

  var slide = document.querySelectorAll(".slide1");
  slide.forEach(function (img) {
    img.addEventListener("mouseenter", function () {

      var tl = gsap.timeline();
      tl.from(img.querySelector("h3"), {
        opacity: 1,
        duration: 1.5,
      })
      tl.from(img.querySelector("h4"), {
        opacity: 1,
        duration: 1.5,
      })
    })
    img.addEventListener("mousemove", function () {

      var tl = gsap.timeline();
      tl.from(img.querySelector("h3"), {
        scale: 1,
        ease: Power3,
      })
      tl.from(img.querySelector("h4"), {
        ease: Power3,
        scale: 1
      })
    })


  })
}
secondpage();

function thirdpage() {
  var ti = gsap.timeline();
  ti.from(".top h2", {
    y: -50,
    duration: 2,
    stagger: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".top h2",
      start: "top 80%",
      end: "top 50%",
      scroller: "#main",
      scrub: 1,
    },
  })
  ti.to(".box .card", {
    opacity: 1,
    y: 40,
    duration: 1,
    delay: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".box .card",
      start: "top 80%",  // Adjusted start position
      end: "top 50%",   // Adjusted end position
      scroller: "#main",
      scrub: 1,
      // markers: true, 
      // scrub:1,
    }


  })
}
thirdpage();



function fourthpage() {
  let tl = gsap.timeline();


  tl.from(".fcontent h1", {
    y: -50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".fcontent h1",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      scrub: 1
    }
  })

  tl.from(".packages img ", {

    stagger: 1,
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: ".packages img",
      scroller: "#main",
      start: "top 80%",
      end: "top 50%",
      // markers:true, 
      scrub: 3,
    }

  })
  tl.from(".packages h3 ", {

    stagger: 1,
    y: 40,
    opacity: 0,
    duration: 1,
    delay: -1,
    scrollTrigger: {
      trigger: ".packages h3",
      scroller: "#main",
      start: "top 100%",
      end: "top 90%",
      scrub: 1,
    }

  })
  tl.from(".packages h5 ", {

    stagger: 1,
    y: 40,
    opacity: 0,
    duration: 1,
    delay: -1,
    scrollTrigger: {
      trigger: ".packages h5",
      scroller: "#main",
      start: "top 100%",
      end: "top 98%",

      scrub: 1,
    }

  })
  tl.from(".packages h6 ", {

    stagger: 1,
    y: 40,
    opacity: 0,
    duration: 1,
    delay: -1,
    scrollTrigger: {
      trigger: ".packages h6",
      scroller: "#main",
      start: "top 100%",
      end: "top 99%",
      scrub: 1,
    }

  })



}
fourthpage(); 

function fifthpage(){
  var tl = gsap.timeline() ; 
   
  tl.from(".boxx img", {
    x:-50  , 
    duration:1,   
    opacity:0,
      
    scrollTrigger:{
      trigger:".boxx img" ,
      scroller:"#main", 
      scrub:3,   
      start:"top 70%", 
      end:"top 60%", 
      // markers:true
    } 
    



  })


} 
fifthpage();

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
 
Shery.makeMagnet("#nav a" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
}); 

























function swiper() {

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

  });
}

swiper();