
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ 30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -200 + "px"
    blur.style.top = dets.y -200 +"px"
})


var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "0.5px solid #fff"
    })
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 2
    })
})

gsap.from("#aboutus,aboutusin3",{
    y:50,
    opacity:0,
    duration:5,
    scrollTrigger:{
        trigger:"aboutus",
        scroller:"body",
        // markers :true,
        start:"top 70%",
        end:"top 59%",

    }

})

gsap.to("#nav",{
    backgroundColor :"#000",
    duration :0.5,
    // delay:1,
    height:90,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start : "top -10%",
        end : "top -10%",
        scrub :1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top - 90%",
        scrub:2,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });