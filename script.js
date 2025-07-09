let startBtn = document.getElementById('start-btn');
let textResult = document.getElementById('result')
let inputCharacter = document.getElementById('char');
let inputCount = document.getElementById('length');

startBtn.addEventListener('click', printResult);

function printResult() {
  
  const character = inputCharacter.value;
  const count = inputCount.value;

  if (startBtn.textContent == 'Start') {
    for (let i = 1; i <= count; i = i + 1) {
      setTimeout(() => {
        textResult.textContent += character.repeat(i);
        textResult.textContent += '\n';

        if(i == count){
          triggerAnimation();
        }
      }, i * 150);
    }
    startBtn.textContent = 'Reset'
  }
  else {
    textResult.textContent = ''
    startBtn.textContent = 'Start';
  }
}

function triggerAnimation() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
