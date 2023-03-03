let containerElement = document.getElementById('container');
let cellNumber = 100;
let cellPerRow = Math.sqrt(cellNumber);

console.log(cellPerRow);

for (i = 0; i < cellNumber; i++) {

    let newSquare = document.createElement('div');
    containerElement.append(newSquare);
    newSquare.classList.add("square");
    newSquare.style.width= "calc(100% / " + cellPerRow + " )";
    newSquare.innerText = i + 1;

}