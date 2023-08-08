
let gridCont = document.querySelector("#container_paint");
let reset = document.querySelector("#erase-all");
let reset_single = document.querySelector("#erase-single");
let pix32 = document.querySelector("#pix_1");
let pix64 = document.querySelector("#pix_2");
let pix128 = document.querySelector("#pix_3");
let color_mode = document.querySelectorAll(".color_mode");
let userColor = document.querySelector("#input-color");
var color = "black";



reset.addEventListener("click", erase);



function createGrid(rowSize, colSize) {

  let grid = [];
  for (let i = 0; i < rowSize; i++){
    grid[i] = document.createElement("div");
    grid[i].setAttribute("class", "container_col");
    let pixels = [];
    for (let j = 0; j < colSize; j++){
      
      
      pixels[j] = document.createElement("div");
      pixels[j].setAttribute("class", "pixel");
      grid[i].appendChild(pixels[j]);
    }
    
  }
  gridCont.innerHTML = "";
  gridCont.append(...grid);
  gridCont.addEventListener("mousedown", colorSelector);
}


function colorSelector(e){
  switch (color){
    case 'erase':
      e.target.setAttribute("style", "background-color: white;");
      break;
    case 'black':
      e.target.setAttribute("style", "background-color:black;");
      break;
    case 'gray':
      e.target.setAttribute("style", "background-color: rgb(94, 94, 94);");
      break;
    case 'rainbow':
      const randomColor =  getRandomColor();
      e.target.style.backgroundColor = randomColor;
      break;
    default:
      e.target.style.backgroundColor = color;
      break;
  }

}

function getRandomColor() {
  const letters = '0123456789ABCDEF'; // Hexadecimal characters for RGB

  let pixel_color = '#';
  for (let i = 0; i < 6; i++) {
    pixel_color += letters[Math.floor(Math.random() * 16)];
  }

  return pixel_color;
}

function changeColor(event) {
  switch (event.target.dataset.color){
    case 'rainbow':
      color = "rainbow";
      break;
    case "gray":
      color = "gray";
      break;
    case "erase":
      color = "erase";
      break;
    default:
      color = 'black';
      break;
  }
}

function userColorSelected(event){
  color = event.target.value;
}

function erase(){

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
}

reset.addEventListener('click', erase);
pix32.addEventListener('click', function () {createGrid(32,32)});
pix64.addEventListener('click', function () {createGrid(64,64)});
pix128.addEventListener('click', function (){createGrid(128,128)})
color_mode.forEach(color_modes => color_modes.addEventListener('click', changeColor));
userColor.addEventListener('change', userColorSelected);
userColor.addEventListener('input', userColorSelected);

//reset_single.addEventListener('click', erase_single);

//createGrid(10,10);

//features to add:

//set a "mode" after clicking a button?
//a "mode" for erase on pixel at a time?
//a "mode" for rainbow colors
//a "mode" for shading colors
//buttons also for changing the number of pixels on the screen! (done 32 64 128 grid)

