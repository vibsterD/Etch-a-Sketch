let randCol = false;
// changes brush color based on bool val of randCol var(randomColor)
function colorChange(e){
    if(!randCol){
        e.target.style.backgroundColor = "black";
    }else{
        let red = Math.floor(255*Math.random());
        let green = Math.floor(255*Math.random());
        let blue = Math.floor(255*Math.random());
        let alpha = Math.random();
        e.target.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
    }
}

// creates a newgrid and replaces the old one also resets the color
function newGrid(newLen){
    let newSqLen = 60/newLen;
    divs.style.minWidth = newSqLen.toString() + "vh";
    divs.style.minHeight = newSqLen.toString() + "vh";
    document.querySelectorAll(".items").forEach((item) => container.removeChild(item));
    for(let i=0; i<newLen*newLen; i++){
        container.appendChild(divs.cloneNode(true));
    }
    document.querySelectorAll(".items").forEach((item) => {item.addEventListener("mouseover", colorChange)});
}

// gets the info for the new grid from the user
function gridInfo(e){
    let len = prompt("Please enter no. of boxes in row(1-100)");
    if(len === null){
        return;
    }else if(len == ""){
        len = 1
    }
    newGrid(len)
}


const container = document.querySelector("#container");

const divs = document.createElement("div");

divs.classList.add("items");

// creating initial 16x16 grid
let sqLen = 60/16;
divs.style.minWidth = sqLen.toString() + "vh";
divs.style.minHeight = sqLen.toString() + "vh";


for(let i=0; i<16*16; i++){
    container.appendChild(divs.cloneNode(true));
}

document.querySelectorAll(".items").forEach((item) => {item.addEventListener("mouseover", colorChange)});
// reset button
const resBtn = document.querySelector("#reset");
resBtn.addEventListener("click", gridInfo) 
// Color buttons
document.querySelector("#random").addEventListener("click", () => randCol = true);
document.querySelector("#black").addEventListener("click", () => randCol = false);

