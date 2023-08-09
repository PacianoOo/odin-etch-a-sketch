
let gridCont = document.querySelector("#container_paint");
let reset = document.querySelector("#erase-all");
let reset_single = document.querySelector("#erase-single");
let pix32 = document.querySelector("#pix_1");
let pix64 = document.querySelector("#pix_2");
let pix128 = document.querySelector("#pix_3");
let color_mode = document.querySelectorAll(".color_mode");
let userColor = document.querySelector("#input-color");


let rainbow_color = document.querySelector('#rainbow_color');
let default_black = document.querySelector('#default_black');
let gray_scale = document.querySelector('#gray_scale');
let specific_color = document.querySelector('#specific_color');
let color_mode_selected = document.querySelector('.color_mode_selected');


let grid_lines = document.querySelector("#grid");


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
      rainbow_color.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');

      specific_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      default_black.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      reset_single.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      gray_scale.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      break;
    case "gray":
      color = "gray";
      gray_scale.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');

      specific_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      default_black.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      reset_single.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      rainbow_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      break;
    case "erase":
      color = "erase";
      reset_single.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');

      specific_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      default_black.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      gray_scale.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      rainbow_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      break;
    case "color_type":
      specific_color.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');

      default_black.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      reset_single.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      gray_scale.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      rainbow_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      break;

    case "color_picked":
      specific_color.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');


      default_black.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      reset_single.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      gray_scale.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      rainbow_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      break;
    default:
      color = 'black';
      default_black.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');

      specific_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      reset_single.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      gray_scale.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      rainbow_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
      break;
  }
}

function userColorSelected(event){
  color = event.target.value;


  specific_color.setAttribute('style', 'box-shadow: 0 0 1rem #a37643;');
}

function erase(){

const pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.style.backgroundColor = 'white');


default_black.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
reset_single.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
gray_scale.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
rainbow_color.setAttribute('style', 'background-color: #F5F5F5; border: 1px solid #F1DEC9;');
}

function show_grid() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.classList.toggle('gridline'));
}


reset.addEventListener('click', erase);
pix32.addEventListener('click', () =>{
  createGrid(32,32);
  pix32.classList.toggle('effect');
  pix64.classList.toggle('effect');
  pix128.classList.toggle('effect');
});


pix64.addEventListener('click', () =>{
  createGrid(64,64);
  pix32.classList.toggle('effect');
  pix64.classList.toggle('effect');
  pix128.classList.toggle('effect');
});





pix128.addEventListener('click',() =>{
  createGrid(128,128);
  pix32.classList.toggle('effect');
  pix64.classList.toggle('effect');
  pix128.classList.toggle('effect');
});





color_mode.forEach(color_modes => color_modes.addEventListener('click', changeColor));
userColor.addEventListener('change', userColorSelected);
userColor.addEventListener('input', userColorSelected);


grid_lines.addEventListener('click', show_grid);

//reset_single.addEventListener('click', erase_single);

//createGrid(10,10);

//features to add:

//set a "mode" after clicking a button?
//a "mode" for erase on pixel at a time?
//a "mode" for rainbow colors
//a "mode" for shading colors
//buttons also for changing the number of pixels on the screen! (done 32 64 128 grid)

