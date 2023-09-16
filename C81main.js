canvas=document.getElementById("myCanvas");
color="red";
ctx=canvas.getContex("2d");
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.strokeStyle();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown