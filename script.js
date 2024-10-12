Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

 document.querySelector("#page1 h6").addEventListener("mouseover", function(){
    gsap.to("#page1 h6",{
        color:'grey'
    })
 })
 document.querySelector("#page1 h6").addEventListener("mouseleave", function(){
    gsap.to("#page1 h6",{
        color:'black',
      
    })
 })

 document.querySelector("#nav #h41").addEventListener("mouseover", function(){
    gsap.to("#nav #h41",{
        color:'grey',
        duration:1
    })
 })
 document.querySelector("#nav  #h41").addEventListener("mouseleave", function(){
    gsap.to("#nav #h41",{
        color:'black',
        duration:1
      
    })
 })
 document.querySelector("#nav #h43").addEventListener("mouseover", function(){
    gsap.to("#nav #h43",{
        color:'grey',
        duration:1
    })
 })
 document.querySelector("#nav  #h43").addEventListener("mouseleave", function(){
    gsap.to("#nav #h43",{
        color:'black',
        duration:1
      
    })
 })
 document.querySelector("#nav #h42").addEventListener("mouseover", function(){
    gsap.to("#nav #h42",{
        color:'grey',
        duration:1
    })
 })
 document.querySelector("#nav  #h42").addEventListener("mouseleave", function(){
    gsap.to("#nav #h42",{
        color:'black',
        duration:1
      
    })
 })

 document.querySelector("#page2 #elem #item1 ").addEventListener("mouseover", function(){
    gsap.to("#page2 #elem #item1",{
        padding:'20px',
        duration:.1
    })
 })

 document.querySelector("#page2 #elem #item1 ").addEventListener("mouseleave", function(){
    gsap.to("#page2 #elem #item1",{
        padding:'10px',
        duration:.1
    })
 })

 document.querySelector("#page2 #elem #item2 ").addEventListener("mouseover", function(){
    gsap.to("#page2 #elem #item2",{
        padding:'20px',
        duration:.1
    })
 })

 document.querySelector("#page2 #elem #item2 ").addEventListener("mouseleave", function(){
    gsap.to("#page2 #elem #item2",{
        padding:'10px',
        duration:.1
    })
 })


 document.querySelector("#page2 #elem #item3 ").addEventListener("mouseover", function(){
    gsap.to("#page2 #elem #item3",{
        padding:'20px',
        duration:.1
    })
 })

 document.querySelector("#page2 #elem #item3 ").addEventListener("mouseleave", function(){
    gsap.to("#page2 #elem #item3",{
        padding:'10px',
        duration:.1
    })
 })