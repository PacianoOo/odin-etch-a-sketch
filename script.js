let size = 16;


let gridCont = document.querySelector("#container");


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