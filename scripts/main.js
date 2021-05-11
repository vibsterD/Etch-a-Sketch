function colorChange(e){
    e.target.style.backgroundColor = "black";
}


const container = document.querySelector("#container");

const divs = document.createElement("div");

divs.classList.add("items");

divs.addEventListener("mouseover", colorChange);
let sqLen = 60/16;
divs.style.minWidth = sqLen.toString() + "vh";
divs.style.minHeight = sqLen.toString() + "vh";

for(let i=0; i<16*16; i++){
    container.appendChild(divs.cloneNode(true));
    console.log("hel")
}

document.querySelectorAll(".items").forEach((item) => {item.addEventListener("mouseover", colorChange)});