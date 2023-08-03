let size = 32;


let gridCont = document.querySelector("#container");
let reset = document.querySelector("#erase-all");
let pix32 = document.querySelector("#pix32");
let pix64 = document.querySelector("#pix64");
let pix128 = document.querySelector("#pix128");

gridCont.addEventListener("mousedown", changecolor);
reset.addEventListener("click", erase);
//pix32.addEventListener("click", grid);
//pix64.addEventListener("click", grid);
//pix128.addEventListener("click", grid);


function createGrid(rowSize, colSize) {
  let grid = [];
  for (let i = 0; i < rowSize; i++){
    grid[i] = document.createElement("div");
    grid[i].setAttribute("class", "container");
    let pixels = [];
    for (let j = 0; j < colSize; j++){
      
      pixels[j] = document.createElement("div");
      pixels[j].setAttribute("class", "pixel");
      grid[i].appendChild(pixels[j]);
    }
    
  }
  return grid;

}



grid = createGrid(size, size);
gridCont.innerHTML = "";
gridCont.append(...grid);



function changecolor(e){
  e.target.setAttribute("style", "background-color:black;");
}

function erase(){
const pixels = document.querySelectorAll(".pixel");
for (let i = 0; i < size * size; i++){
  pixels[i].setAttribute("style", "background-color:'white';");
}
}
//features to add:

//set a "mode" after clicking a button?
//a "mode" for erase on pixel at a time?
//a "mode" for rainbow colors
//a "mode" for shading colors
//buttons also for changing the number of pixels on the screen!
