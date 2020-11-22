let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-border");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter) {
  if (letter === "r") return "石头";
  if (letter === "p") return "布";
  return "剪刀";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "用户".fontsize(3).sub();
  const smallCompWord = "电脑".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} 战胜 ${converToWord(computerChoice)}${smallCompWord}. 你赢了 👍!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(()=> userChoice_div.classList.remove('green-glow'), 300);
}
function lose(userChoice, computerChoice) {
  const smallUserWord = "用户".fontsize(3).sub();
  const smallCompWord = "电脑".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} 输给 ${converToWord(computerChoice)}${smallCompWord}. 你输了 💩!`;
  userChoice_div.classList.add('red-glow');
  setTimeout( ()=> userChoice_div.classList.remove('red-glow'), 300);

}
function draw(userChoice, computerChoice) {
  const smallUserWord = "用户".fontsize(3).sub();
  const smallCompWord = "电脑".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${converToWord(userChoice)}${smallUserWord} 相同于 ${converToWord(computerChoice)}${smallCompWord}. 这是个平局 😶.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout( () => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();
