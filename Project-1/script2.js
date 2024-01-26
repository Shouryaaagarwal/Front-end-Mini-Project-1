// var main =document.querySelector("#main") ;
// var cursor= document.querySelector(".cursor"); 
// main.addEventListener("mousemove",function(dets){
//     cursor.style.top=dets.y+"px";
//     cursor.style.left=dets.x+"px";
// }) 

function cur(){ 
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".cursor").style.top=dets.y+"px";
        document.querySelector(".cursor").style.left=dets.x+"px";
    })
} ;
 cur();