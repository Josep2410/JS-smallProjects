let currentPlayer = 'X';
let winner = false;
let gamemode = true;
const [player1, player2] = ['player1', 'player2'];
let availCells = 9;
let allCellsBtn;
const playerStatus = document.querySelector(".playerStatus");
const changePlayerBtn = document.querySelector("#changePlayer");
const allCells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restartBtn");
let options = [Math.random(),Math.random(),
  Math.random(),Math.random(),Math.random(),
  Math.random(),Math.random(),Math.random()];

  if(gamemode){
    allCellsBtn = allCells.forEach(item =>{
        item.addEventListener("click", function(){
          console.log(item.getAttribute("cellIndex"));
          item.textContent = getChar();
          options[item.getAttribute("cellIndex")] = item.textContent;
          availCells--;
          console.log(availCells);
          if(availCells ===0 && !winner){
            endGame();
          } 
          else{
            checkWinner();
          }
         
          winner? endGame(): changePlayer();  
        })
    })

  }

function getChar(){
  return currentPlayer === 'X' ? 'X': 'O'; 
}

function displayPlayer(){
  playerStatus.textContent = `Player ${currentPlayer}'s turn`;
}
function changePlayer(){
  currentPlayer === 'X' ? currentPlayer = 'O' :  currentPlayer = 'X';
  displayPlayer();
}

restartBtn.addEventListener("click", function(){
  options = [Math.random(),Math.random(),
    Math.random(),Math.random(),Math.random(),
    Math.random(),Math.random(),Math.random()];
  currentPlayer = 'X';
  availCells = 9;
  displayPlayer();
  winner= false;
  gamemode = true;
  allCells.forEach(item =>{
    item.textContent = "";
  })
})

function endGame(){
  gamemode = false;
  if(availCells ===0 && !winner){
    playerStatus.textContent = `Draw!`
  }else{
    
    playerStatus.textContent = `Game Over! Player ${currentPlayer} Wins`
  }

}



function checkWinner(){
  return options[0] === options[1] && options[0] === options[2]? winner = true : options[3] === options[4] && options[3] === options[5]?
  winner = true: options[6] === options[7] && options[6] === options[8]? winner = true: options[0] === options[4] && options[0] === options[8]?
  winner = true: options[6] === options[4] && options[6] === options[2]? winner = true: options[0] === options[3] && options[0] === options[6]?
  winner = true: options[1] === options[4] && options[1] === options[7]? winner = true: options[2] === options[5] && options[2] === options[8]? 
  winner = true : winner = false;
}

