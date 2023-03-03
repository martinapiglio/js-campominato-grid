let containerElement = document.getElementById('container');
let playButton = document.getElementById('play-button');
let cellNumber = 81;
let cellPerRow = Math.sqrt(cellNumber);

playButton.addEventListener('click', function() {

    for (i = 1; i <= cellNumber; i++) {

        newElement = createSquare(i);
        containerElement.append(newElement);

    };

});




//---------function: create a square----------------
function createSquare(squareText) {

    let newSquare = document.createElement('div');
    newSquare.classList.add("square");
    newSquare.style.width= "calc(100% / " + cellPerRow + " )";
    newSquare.innerText = squareText;

    return newSquare;
}   