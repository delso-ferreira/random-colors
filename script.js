const randomColor = () => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
};

const splitRGB = (string) => string.split('b')[1];
const score = document.getElementById('score');

const container = document.getElementsByTagName('section');
for (let index = 0; index < container.length; index += 1) {
  for (let j = 0; j < 6; j += 1) {
    const colorCircle = document.createElement('div');
    colorCircle.classList.add('ball');
    colorCircle.style.border = '3px solid black';
    colorCircle.style.padding = '5px';
    colorCircle.style.backgroundColor = randomColor();
    container[index].appendChild(colorCircle);
  }
}

const addScore = () => {
  const currentScore = parseInt(score.innerText.split(' ')[1], 10);
  score.innerText = `Placar: ${currentScore + 3}`;
};

const loseScore = () => {
  const currentScore = parseInt(score.innerText.split(' ')[1], 10);
  score.innerText = `Placar: ${currentScore - 1}`;
  if (currentScore <= 0) {
    score.innerText = 'Placar: 0';
  }
  else {
    score.innerText = `Placar: ${currentScore - 1}`;
  }
};

const saveScore = () => {
  localStorage.setItem('score', score.innerHTML);
};
saveScore();

const loadScore = () => {
  const savedScore = localStorage.getItem('score');
  score.innerHTML = `Placar ${savedScore}`;
};
loadScore();

const colorCircle = document.getElementsByClassName('ball');
for (let index = 0; index < colorCircle.length; index += 1) {
  colorCircle[index].addEventListener('click', (event) => {
    const colorGuess = document.getElementById('rgb-color');
    const textAnswer = document.getElementById('answer');
    if (splitRGB(event.target.style.backgroundColor) === colorGuess.innerHTML) {
      textAnswer.innerHTML = 'Acertou!';
      addScore();
    } else {
      textAnswer.innerHTML = 'Errou! Tente novamente!';
      loseScore();
    }
  });
}

const colorGuess = document.getElementById('rgb-color');
for (let index = 0; index < colorCircle.length; index += 1) {
  const rightColor = colorCircle[index].style.backgroundColor;
  const splitColor = splitRGB(rightColor);
  colorGuess.innerHTML = splitColor;
}

const diceRoll = () => Math.floor(Math.random() * 6);

const resetBtn = document.getElementById('reset-game');

resetBtn.addEventListener('click', () => {
  const textAnswer = document.getElementById('answer');
  textAnswer.innerHTML = 'Escolha uma cor';
  const feedback = diceRoll();
  for (let index = 0; index < colorCircle.length; index += 1) {
    colorCircle[index].style.backgroundColor = randomColor();
    if (index === feedback) {
      const rightColor = colorCircle[index].style.backgroundColor;
      const splitColor = splitRGB(rightColor);
      colorGuess.innerHTML = splitColor;
      console.log(score.innerText);
    }
    }
});
