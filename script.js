let startBtn = document.getElementById('start-btn');
let result = document.getElementById('result')

startBtn.addEventListener('click', alerta);

function alerta() {
    result.textContent = 'voce clicou';
}

