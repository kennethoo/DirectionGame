let dimenion
let randomDmenion
let givedimenion
let change
console.log(givedimenion)
 change=setInterval(function(){
  dimenion= ["radial-gradient(ellipse at bottom, #145A32   0%, #0B5345   100%)",
  "radial-gradient(ellipse at bottom, #191919  0%,#641E16  100%)",
  "radial-gradient(ellipse at bottom, #2980B9 0%, #282741 100%)",
  "radial-gradient(ellipse at bottom, #FF6138 0%, #FFBE53 100%",
  "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)" ]
 
randomDmenion=Math.floor(Math.random()*dimenion.length)

 givedimenion=dimenion[randomDmenion]

},1000)
    