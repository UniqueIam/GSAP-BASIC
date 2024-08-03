// gsap.to("#box1",{
//     x:1100,
//     duration:2, 
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,  
//     borderRadius:"50%",
//     repeat:1,
//     yoyo:true           //sec
// })

// gsap.from("#box2",{
//     x:1100,
//     duration:4,
//     delay:1,
//     rotate:180,
//     backgroundColor:"orange"
// })

// gsap.from("h2",{
//     color:"red",
//     y:50,
//     opacity:0,
//     duration:1,
//     delay:1,
//     stagger:0.3

// })

//   setting timeline asynchronasaly

// gsap.to("#first",{
//     x:1100,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })
// gsap.to("#second",{
//     x:1100,
//     duration:1.5,
//     rotate:360,
//     delay:2.5
// })
// gsap.to("#third",{
//     x:1100,
//     duration:1.5,
//     rotate:360,
//     delay:4
// })

// Setting timeline synchronsaly using gsap.tmeline

// var t1 = gsap.timeline();

// t1.to("#first",{
//     x:1100,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// t1.to("#second",{
//     x:1100,
//     rotate:360,
//     duration:1.5
// })
// t1.to("#third",{
//     x:1100,
//     rotate:360,
//     duration:1.5
// })

// var t1 = gsap.timeline();

// t1.from(".left",{
//     y:-30,
//     duration:1,
//     delay:0.5,
//     opacity:0
// })
// t1.from(".center p",{
//     y:-30,
//     duration:1,
//     opacity:0,
//     stagger:0.3
// })
// t1.from(".right",{
//     y:-30,
//     duration:1,
//     opacity:0
// })
// t1.from("#detail",{
//     y:20,
//     duration:0.5,
//     opacity:0,
//     scale:0.2
// })

// Scroll Trigger Animation

// gsap.from("#page1 #box",{
//     rotate:360,
//     duration:2,
//     delay:1
// })
// gsap.from("#page2 p",{
//     x:200,
//     duration:2,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#page2 p",
//         scroller:"body",
//         markers:"true",
//         start:"top 60%",
//         scrub:2
//     }
// })
// gsap.from("#page3 #box",{
//     rotate:360,
//     duration:2,
//     delay:1
// })

// var path = `M 60 180 Q 400 180 790 180`;
// var finalPath = `M 60 180 Q 400 180 790 180`;

// var string = document.querySelector("#string");

// string.addEventListener("mousemove", function(dets) {
//     path = `M 60 180 Q ${dets.x} ${dets.y} 790 180`
//     console.log(path);
    
//     gsap.to("svg path", {
//         attr: {d: path},
//         duration:0.2,
//         ease:"power3.out"
//     });
// });

// string.addEventListener("mouseleave",function(dets){
//     path = finalPath

//     gsap.to("svg path",{
//         attr:{d:path},
//         duration:1.8,
//         ease:"elastic.out"  
//     })
// })


// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")

// main.addEventListener("mousemove",function(event){
//     gsap.to(cursor,{
//         x:event.x,
//         y:event.y,
//         duration:0.5,
//         ease:"back.out"
//     })
// })

var burger = document.querySelector("#nav i");
var close = document.querySelector("#full i");
var t1 = gsap.timeline();

t1.to("#full",{
    duration:0.5,
    right:0
})

t1.from("#full h4",{
    x:150,
    duration:0.5,
    opacity:0,
    stagger:0.2
})
t1.from("#full i",{
    opacity:0
})

t1.pause();

burger.addEventListener("click",function(){
    t1.play();
})
close.addEventListener("click",function(){
    t1.reverse();
})