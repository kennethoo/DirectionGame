
let aiMove=[
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

let rightmove=["url(right-arrow1.png)","url(right-arrow2.png)","url(right-arrow3.png)","url(right-arrow4.png)"]
let rightRandom=Math.floor(Math.random()*rightmove.length);
let giveRight=rightmove[rightRandom]





let leftMove=["left-arrow1.png","left-arrow2.png","left-arrow3.png","left-arrow4.png"]
let leftRandom=Math.floor(Math.random()*leftMove.length);
let giveleft=leftMove[leftRandom]






let topMove=["url(top-arrow1.png)","url(top-arrow2.png)","url(top-arrow3.png)","url(top-arrow4.png)"]
let topRandom=Math.floor(Math.random()*topMove.length);
let givetop=topMove[topRandom]





let bottomMove=["url(down-arrow1.png)","url(down-arrow2.png)","url(down-arrow3.png)","url(down-arrow4.png)"]
let bottomRandom=Math.floor(Math.random()*bottomMove.length);
let giveBottom=bottomMove[bottomRandom]