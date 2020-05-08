const { body } = document;
const scoreEl = document.getElementById('score');
const reset = document.getElementById('reset');

let score = 0;

window.addEventListener('keydown', (e) => {
  const letters = document.querySelectorAll('.letter');

  const { key } = e;

  letters.forEach((letter) => {
    if (key === letter.innerText) {
      letter.remove();
      score++;
    }
  });
});

setInterval(gameBoard, 1000);

function gameBoard() {
  addLetterToScreen();
  scoreEl.innerText = score;
}

function addLetterToScreen() {
  const letter = document.createElement('p');
  letter.classList.add('letter');
  letter.innerText = generateRandomLetter();

  letter.style.left = Math.random() * 100 + '%';

  setTimeout(() => {
    letter.remove();
  }, 6000);

  body.appendChild(letter);
}

function generateRandomLetter() {
  const char = Math.floor(Math.random() * 26) + 97;
  return String.fromCharCode(char);
}
