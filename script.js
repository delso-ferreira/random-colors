const randomColor = () => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b})`;
};

const splitRGB = (string) => string.split('b')[1];

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

const colorCircle = document.getElementsByClassName('ball');
for (let index = 0; index < colorCircle.length; index += 1) {
  colorCircle[index].addEventListener('click', (event) => {
    const colorGuess = document.getElementById('rgb-color');
    const textAnswer = document.getElementById('answer');
    if (splitRGB(event.target.style.backgroundColor) === colorGuess.innerHTML) {
      textAnswer.innerHTML = 'Acertou!';
    } else {
      textAnswer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}

const diceRoll = () => Math.floor(Math.random() * 6);

const resetBtn = document.getElementById('reset-game');

resetBtn.addEventListener('click', () => {
  const textAnswer = document.getElementById('answer');
  textAnswer.innerHTML = 'Escolha uma cor';
  const gabarito = diceRoll();
  const colorGuess = document.getElementById('rgb-color');
  for (let index = 0; index < colorCircle.length; index += 1) {
    colorCircle[index].style.backgroundColor = randomColor();
    if (index === gabarito) {
      const rightColor = colorCircle[index].style.backgroundColor;
      const splitColor = splitRGB(rightColor);
      colorGuess.innerHTML = splitColor;
    }
  }
});
