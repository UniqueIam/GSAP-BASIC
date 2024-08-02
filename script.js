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

var t1 = gsap.timeline();

t1.from(".left",{
    y:-30,
    duration:1,
    delay:0.5,
    opacity:0
})
t1.from(".center p",{
    y:-30,
    duration:1,
    opacity:0,
    stagger:0.3
})
t1.from(".right",{
    y:-30,
    duration:1,
    opacity:0
})
t1.from("#detail",{
    y:20,
    duration:0.5,
    opacity:0,
    scale:0.2
})