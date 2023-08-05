
let gridCont = document.querySelector("#container");
let reset = document.querySelector("#erase-all");
let reset_single = document.querySelector("#erase-single");
let pix32 = document.querySelector("#pix_1");
let pix64 = document.querySelector("#pix_2");
let pix128 = document.querySelector("#pix_3");


reset.addEventListener("click", erase);



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
  gridCont.innerHTML = "";
  gridCont.append(...grid);
  gridCont.addEventListener("mousedown", changecolor);
}



//grid = createGrid(size, size);
//gridCont.innerHTML = "";
//gridCont.append(...grid);



function changecolor(e){
  e.target.setAttribute("style", "background-color:black;");
}

function erase(){

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
}

reset.addEventListener('click', erase);
pix32.addEventListener('click', function () {createGrid(32,32)});
pix64.addEventListener('click', function () {createGrid(64,64)});
pix128.addEventListener('click', function (){createGrid(128,128)})


//reset_single.addEventListener('click', erase_single);

//createGrid(10,10);

//features to add:

//set a "mode" after clicking a button?
//a "mode" for erase on pixel at a time?
//a "mode" for rainbow colors
//a "mode" for shading colors
//buttons also for changing the number of pixels on the screen! (done 32 64 128 grid)

