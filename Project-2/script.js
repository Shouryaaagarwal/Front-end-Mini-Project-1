const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function first() {

    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    tl.to(".boundingelem", {
        y: '0',
        duration: 1,
        stagger: 0.3,
        delay: -1
    })

    tl.from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1


    })

}



var timeout;


function chaptakaro() {
    clearTimeout(timeout);
    var xscale = 1;
    var yscale = 1;


    var prevx = 0;
    var prevy = 0;
    window.addEventListener("mousemove", function (dets) {
        var xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - prevx);
        var yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - prevy);

        prevx = dets.clientX;
        prevy = dets.clientY;


        crs(xscale, yscale);


        timeout = setTimeout(() => {
            document.querySelector("#circles").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(1, 1)`;

        }, 100);

    });
}



function crs(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#circles").style.opacity = "1";
        document.querySelector("#circles").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)  scale(${xscale}, ${yscale})`;
    });

}


chaptakaro();
first();
crs();




document.querySelectorAll(".elem").forEach(function (elem) { 

    var diffrot=0 ;
    var rotate=0; 
    
    elem.addEventListener("mouseleave", function () {
    
        gsap.to(elem.querySelector("img"), {
            opacity:0,
            ease: Power3,
           
        });
      
    });  

    elem.addEventListener("mousemove", function (dets) {
        var diffy = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX-rotate ; 
        rotate =dets.clientX ;  

      requestAnimationFrame(function(){
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diffy - elem.querySelector("img").offsetHeight / 2,
            left: dets.clientX, 
            rotate:gsap.utils.clamp(-20, 20 , diffrot*0.5)
        });
      }) ;
    });
});   
 