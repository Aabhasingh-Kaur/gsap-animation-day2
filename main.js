var tl= gsap.timeline()
tl.from(".nav-left,.nav-center,.nav-rgt",{
    opacity:0,
    duration:2,
    y:-100,
    stagger:0.3
})
tl.from("#plant-img",{
    opacity:0,
    duration:1,
    delay:0.2,
    scale:0.5
})
tl.from(".description",{
    opacity:0,
    duration:1.2,
    scale:0.5
})

gsap.from(".selectplanter",{
    y:200,
    duration:1.5,
    scrollTrigger:{
      trigger:".selectplanter",
      scroller:"body",
    //   markers:true,
      star:"top 10%",
    //  scrub:true
}})
const button= document.querySelector(".small-buynow>button");
// console.log(button);
button.addEventListener("click",() => {
    button.innerHTML= "Item added✅"
})

let close= document.querySelector(".close-btn");
let n= document.querySelector(".notification-bar");
function show(){
    n.style.display="block";
}
function closes(){
    n.style.display="none";
    n.style.cursor="pointer";
}