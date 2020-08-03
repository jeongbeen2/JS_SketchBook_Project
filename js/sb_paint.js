const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");


canvas.width = 600;
canvas.height = 400;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(event){
    painting = false;
}

function startPainting(event){
    painting = true;
}

function onMouseMove(event){
    let x = event.offsetX;
    let y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}