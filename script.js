var background= new Howl({
    src:['bacground.mp3'],
    loop:true
  
    });

  background.play()
let cuurentScore=document.getElementById("cuurentScore")
let area1= document.getElementById("area1")
let area2=document.getElementById("area2")

 let playagain=document.getElementById("play")
let sccoore=document.getElementById("sccore")
let bbbscor=document.getElementById("bevstScore")
let scor=0
let bscor= document.getElementById("bscor");
let score=document.getElementById("scor");

  if (typeof localStorage["highScorebb"] !== 'undefined') {
 document.getElementById("cuurentBestScore").innerHTML= localStorage["highScorebb"]
  
}
else  if (localStorage["highScorebb"] = 0){
   
    document.getElementById("cuurentBestScore").innerHTML="0"
}
        
        

let canvas= document.querySelector("#canvas")
  
  canvas.width=window.innerWidth
  canvas.height=window.innerHeight
  let c= canvas.getContext("2d")





  function Circle(x ,y,dx,dy,radius,rx,ry,rdx,rdy,rw,rh){
 this.x=x
  this.y=y
   this.dx=dx
    this.dy=dy
     this.radius=radius
this.rx=rx
this.ry=ry
this.rdx=rdx
this.rdy=rdy
this.rw=rw
this.rh=rh
     this.draw=function(){
      c.beginPath()
       c.globalAlpha=0.8
     c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
      c.fillStyle="white"
        c.fill()
         c.globalAlpha=1
        c.fillRect(this.rx,this.ry,this.rw,this.rh)

     }
     this.update=function(){
    this.y-=this.dy
    this.ry-=this.rdy
    if (this.y+this.radius<0) {
      this.y=innerHeight

 
    }

    if (this.ry+this.rh-5<0) {
      this.xr=Math.random()*(window.innerWidth- rw *2 ) +rw;
      this.ry=innerHeight
  
    }

this.draw()
     }

}



let circleStore=[]


for(let i=0; i<25;i++){
let radius=1
let x=Math.random()*(window.innerWidth- radius *2 ) +radius;
let y=Math.random()*(window.innerHeight- radius *2 ) +radius;
let dx=1
let dy=1
let rw=5
let rh=5
let rx=Math.random()*(window.innerWidth- rw *2 ) +rw;
let ry=Math.random()*(window.innerHeight- rw *2 ) +rw;
let rdx=0.7
let rdy=0.7


  circleStore.push(new Circle(x ,y,dx,dy,radius,rx,ry,rdx,rdy,rw,rh))
}

function animate(){
  requestAnimationFrame(animate)

  
   c.clearRect(0, 0, canvas.width, canvas.height);

for(var i = 0; i<circleStore.length; i++){
  circleStore[i].update();
 }




}
animate()

let changeDimension
changeDimension="radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%"
 let change=setInterval(function(){
  let dimenion= ["radial-gradient(ellipse at bottom, #145A32   0%, #0B5345   100%)",
  "radial-gradient(ellipse at bottom, #191919  0%,#641E16  100%)",
  "radial-gradient(ellipse at bottom, #2980B9 0%, #282741 100%)",
  "radial-gradient(ellipse at bottom, #FF6138 0%, #FFBE53 100%)",
  "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)" ]
 
let randomDmenion =Math.floor(Math.random()*dimenion.length)

 let givedimenion=dimenion[randomDmenion]

 canvas.style.backgroundImage=givedimenion

},15000)
    






let ai=document.getElementById("ai")
let rightmove=document.getElementById("right")
let topmove=document.getElementById("top")
let botommove=document.getElementById("bottom")
let leftmove=document.getElementById("left")
let aiMove;
 let aiRandom;
 let giveAi
let result=document.getElementById("result2")
let time=0
let randomMove;
let giveRandowMove;
let message

function swicthMove(){
  


 aiMove=[
"url(right-arrow1.png)",
"url(right-arrow2.png)",
"url(right-arrow3.png)",
"url(right-arrow4.png)",

"url(top-arrow1.png)",
"url(top-arrow2.png)",
"url(top-arrow3.png)",
"url(top-arrow4.png)",


"url(down-arrow1.png)",
"url(down-arrow2.png)",
"url(down-arrow3.png)",
"url(down-arrow4.png)",


"url(left-arrow1.png)",
"url(left-arrow2.png",
"url(left-arrow3.png)",
"url(left-arrow4.png)"
]
aiRandom=Math.floor(Math.random()*aiMove.length)
giveAi=aiMove[aiRandom]
document.getElementById("ai").style.backgroundImage=giveAi


}
let changeAi
function waitAi(){
 changeAi =setInterval(function(){
  swicthMove()
},2000)

}



function goodword(){
  let word=["GoodMove", "Smarth", "Perfect","incredible","Awesome","GoodJob","Continue"]
  let randomWord=Math.floor(Math.random()*word.length)
  let giveword=word[randomWord]
  document.getElementById("result2").style.display="inline-block"
  result.textContent=giveword;


}
function colordesign(){
  let color=["red", "geen", "blue"]
  let randomColor=Math.floor(Math.random()*color.length)
  let giveColor=color[randomColor]
  document.getElementById("result2").style.color=giveColor
}


            
let decont=document.getElementById("timecont")

  let timme=3

let countDown=setInterval(function(){
  timme=timme-1
  decont.textContent=timme
  if (timme==-1) {
document.getElementById("counter").style.display="none"
    clearInterval(countDown)
swicthMove()
begin()
waitAi()
  }
},1000)

 function begin() {

                document.addEventListener('swiped-left', function(e) {
                    
                    rightmove.style.display="none"
                    topmove.style.display="none"
                    botommove.style.display="none";
  let leftMove=["url(left-arrow1.png)","url(left-arrow2.png)","url(left-arrow3.png)","url(left-arrow4.png)"]
    let leftRandom=Math.floor(Math.random()*leftMove.length);
    let giveleft=leftMove[leftRandom]
   document.getElementById("left").style.backgroundImage=giveleft
 colordesign()
                   leftmove.style.display="flex";
                  if (giveAi==aiMove[12]||giveAi==aiMove[13]||giveAi==aiMove[14]||giveAi==aiMove[15]||
                    giveAi==aiMove[4]||giveAi==aiMove[5]||giveAi==aiMove[6]||giveAi==aiMove[7]||
                    giveAi==aiMove[8]||giveAi==aiMove[9]||giveAi==aiMove[10]||giveAi==aiMove[11]){

                                     document.getElementById("result2").style.display="inline-block"
                                              result.style.display="none"
                                             
                                              sccoore.style.display="flex"
                                                bbbscor.style.display="flex" ;
                                                playagain.style.display="block";
                                                  ai.style.display="none";
                              rightmove.style.display="none"
                    topmove.style.display="none"
                    botommove.style.display="none";
                 leftmove.style.display="none";
                 area2.style.display="none";
                 area1.style.display="none";
     score.style.display="none"
     clearInterval(changeAi)

  
 return false
    
                  }                          
                  else if (giveAi!==aiMove[12]||giveAi!==aiMove[13]||giveAi!==aiMove[14]||giveAi!==aiMove[15]||
                    giveAi!==aiMove[4]||giveAi!==aiMove[5]||giveAi!==aiMove[6]||giveAi!==aiMove[7]||
                    giveAi!==aiMove[8]||giveAi!==aiMove[9]||giveAi!==aiMove[10]||giveAi!==aiMove[11]) {
                 
                 goodword()
               scor=scor+1
              
               console.log(scor)
               score.textContent=scor;
               cuurentScore.textContent=scor
               if (scor > localStorage["highScorebb"]) {
      localStorage["highScorebb"] = scor;
    }

    if (typeof localStorage["highScorebb"] !== 'undefined') {
   document.getElementById("cuurentBestScore").innerHTML=localStorage["highScorebb"];
}
                  }
                   
                });



























                document.addEventListener('swiped-right', function(e) {
                   
                     
                    topmove.style.display="none"
                    botommove.style.display="none";
                   leftmove.style.display="none";
  let rightmoe=["url(right-arrow1.png)","url(right-arrow2.png)","url(right-arrow3.png)","url(right-arrow4.png)"]
let rightRandom=Math.floor(Math.random()*rightmoe.length);
let giveRight=rightmoe[rightRandom]
document.getElementById("right").style.backgroundImage=giveRight
 colordesign()
                   rightmove.style.display="flex"
              if (giveAi==aiMove[0]||giveAi==aiMove[1]||giveAi==aiMove[2]||giveAi==aiMove[3]||
                giveAi==aiMove[4]||giveAi==aiMove[5]||giveAi==aiMove[6]||giveAi==aiMove[7]||
                    giveAi==aiMove[8]||giveAi==aiMove[9]||giveAi==aiMove[10]||giveAi==aiMove[11]) {
                 document.getElementById("result2").style.display="inline-block"
                                             
                                    result.style.display="none"
                                             
                                              sccoore.style.display="flex"
                                                bbbscor.style.display="flex" ;
                                                playagain.style.display="block";
                                                  ai.style.display="none";
                              rightmove.style.display="none"
                    topmove.style.display="none"
                    botommove.style.display="none";
                 leftmove.style.display="none";
                 area2.style.display="none";
                 area1.style.display="none";
     score.style.display="none"
     clearInterval(changeAi)

 return false
 
                  }
                  else if (giveAi!==aiMove[0]||giveAi!==aiMove[1]||giveAi!==aiMove[2]||giveAi!==aiMove[3]||
                giveAi!==aiMove[4]||giveAi!==aiMove[5]||giveAi!==aiMove[6]||giveAi!==aiMove[7]||
                    giveAi!==aiMove[8]||giveAi!==aiMove[9]||giveAi!==aiMove[10]||giveAi!==aiMove[11]) {
                   
                  goodword()
                scor=scor+1
             
               console.log(scor)
               score.textContent=scor;
                 cuurentScore.textContent=scor
               if (scor > localStorage["highScorebb"]) {
      localStorage["highScorebb"] = scor;
    }

    if (typeof localStorage["highScorebb"] !== 'undefined') {
   document.getElementById("cuurentBestScore").innerHTML=localStorage["highScorebb"];
}
                  }
                   
                });






































                document.addEventListener('swiped-up', function(e) {
                   
                      rightmove.style.display="none";
                    botommove.style.display="none";
                   leftmove.style.display="none";
          let topMove=["url(top-arrow1.png)","url(top-arrow2.png)","url(top-arrow3.png)","url(top-arrow4.png)"]
let topRandom=Math.floor(Math.random()*topMove.length);
let givetop=topMove[topRandom]
document.getElementById("top").style.backgroundImage=givetop
colordesign()
                    topmove.style.display="flex"
                  
                   if (giveAi==aiMove[4]||giveAi==aiMove[5]||giveAi==aiMove[6]||giveAi==aiMove[7]
                    ||giveAi==aiMove[12]||giveAi==aiMove[13]||giveAi==aiMove[14]||giveAi==aiMove[15]||
                    giveAi==aiMove[0]||giveAi==aiMove[1]||giveAi==aiMove[2]||giveAi==aiMove[3]) {
                  document.getElementById("result2").style.display="inline-block"
                               
                             
                                              result.style.display="none"
                                             
                                              sccoore.style.display="flex"
                                                bbbscor.style.display="flex" ;
                                                playagain.style.display="block";
                                                  ai.style.display="none";
                              rightmove.style.display="none"
                    topmove.style.display="none"
                    botommove.style.display="none";
                 leftmove.style.display="none";     
                  area2.style.display="none";
                 area1.style.display="none";
     score.style.display="none"
     clearInterval(changeAi)

 return false

                  }
                  else if (giveAi!==aiMove[4]||giveAi!==aiMove[5]||giveAi!==aiMove[6]||giveAi!==aiMove[7]
                    ||giveAi!==aiMove[12]||giveAi!==aiMove[13]||giveAi!==aiMove[14]||giveAi!==aiMove[15]||
                    giveAi!==aiMove[8]||giveAi!==aiMove[9]||giveAi!==aiMove[10]||giveAi!==aiMove[11]) {
                   
               goodword()
                  scor=scor+1
                             console.log(scor)
               score.textContent=scor;
                 cuurentScore.textContent=scor
               if (scor > localStorage["highScorebb"]) {
      localStorage["highScorebb"] = scor;
    }

    if (typeof localStorage["highScorebb"] !== 'undefined') {
   document.getElementById("cuurentBestScore").innerHTML=localStorage["highScorebb"];
}
                  }
                   
                });




































                document.addEventListener('swiped-down', function(e) {
                    rightmove.style.display="none"
                    topmove.style.display="none"
                     leftmove.style.display="none";
let bottomMove=["url(down-arrow1.png)","url(down-arrow2.png)","url(down-arrow3.png)","url(down-arrow4.png)"]
let bottomRandom=Math.floor(Math.random()*bottomMove.length);
let giveBottom=bottomMove[bottomRandom]
 colordesign()
                    document.getElementById("bottom").style.backgroundImage=giveBottom
                    botommove.style.display="flex";
                  botommove.style.visibility="show"
                   if (giveAi==aiMove[0]||giveAi==aiMove[1]||giveAi==aiMove[2]||giveAi==aiMove[3]
                    ||giveAi==aiMove[12]||giveAi==aiMove[13]||giveAi==aiMove[14]||giveAi==aiMove[15]||
                    giveAi==aiMove[8]||giveAi==aiMove[9]||giveAi==aiMove[10]||giveAi==aiMove[11]) {
                   
                    document.getElementById("result2").style.display="inline-block"
                                         

                                              result.style.display="none"
                                             
                                              sccoore.style.display="flex"
                                                bbbscor.style.display="flex" ;
                                                playagain.style.display="block";
                                                  ai.style.display="none";
                              rightmove.style.display="none"
                    topmove.style.display="none"
                    botommove.style.display="none";
                 leftmove.style.display="none";   
                 area2.style.display="none";
                 area1.style.display="none";
     score.style.display="none"
     clearInterval(changeAi)   


 return false

                  }
                  else if (giveAi==aiMove[4]||giveAi==aiMove[5]||giveAi==aiMove[6]||giveAi==aiMove[7]) {
                  
         goodword()
         scor=scor+1
           
               console.log(scor)
               score.textContent=scor;
                 cuurentScore.textContent=scor
               if (scor > localStorage["highScorebb"]) {
      localStorage["highScorebb"] = scor;
    }

    if (typeof localStorage["highScorebb"] !== 'undefined') {
   document.getElementById("cuurentBestScore").innerHTML=localStorage["highScorebb"];
}
                  }
                   
                });

            }

playagain.onclick=function(){
   location.reload();
}