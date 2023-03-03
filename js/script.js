let containerElement = document.getElementById('container');
let playButton = document.getElementById('play-button');
let cellNumber = 100;
let cellPerRow = Math.sqrt(cellNumber);

playButton.addEventListener('click', function() {

    for (i = 1; i <= cellNumber; i++) {

        let newSquareElement = createSquare(i);
        
        newSquareElement.addEventListener('click', function() {

            newSquareElement.classList.toggle('blue');
            console.log('Hai cliccato la cella ' + newSquareElement.innerText);
        
        }); 

        containerElement.append(newSquareElement);
    };

});

//---------function: create a square----------------
function createSquare(squareText) {

    let newElement = document.createElement('div');
    newElement.classList.add("square");
    newElement.style.width= "calc(100% / " + cellPerRow + " )";
    newElement.innerText = squareText;

    return newElement;
}   