let gameArr = []

function play(clickID){
let playerSpan = document.getElementById('player')
let clickElement = document.getElementById(clickID) 
   
    if (playerSpan.innerText === 'X') {
       playerSpan.innerText = 'O'
       clickElement.innerText = "X"
       gameArr[clickID] = 'X'
   } else {
    playerSpan.innerText = 'X'
    clickElement.innerText = "O"
    gameArr[clickID] = 'O'
   }
   console.log(gameArr)


let topLeft = gameArr[0]

let topCenter = gameArr[1]

let topRight = gameArr[2]

let middleLeft = gameArr[3]

let middleCenter = gameArr[4]

let middleRight = gameArr[5]

let bottomLeft = gameArr[6]

let bottomCenter = gameArr[7]

let bottomRight = gameArr[8]

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
    alert(`${topLeft} is the winner!`)
}

if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {   
    alert(`${middleLeft} is the winner`);
    return;
}

if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (gameArr[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("CAT's game");
  }
}

function reset()