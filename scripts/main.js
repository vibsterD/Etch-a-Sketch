function colorChange(e){
    e.target.style.backgroundColor = "black";
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
    console.log(len);
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
    console.log("hel")
}

document.querySelectorAll(".items").forEach((item) => {item.addEventListener("mouseover", colorChange)});

const resBtn = document.querySelector("#reset");
resBtn.addEventListener("click", gridInfo) 