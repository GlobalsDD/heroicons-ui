document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const target = document.getElementById('target');
  const scoreDisplay = document.getElementById('score');
  const gameArea = document.getElementById('gameArea');
  let score = 0;
  let gameActive = false;
  let moveInterval;
  let gameTimeout;

  function randomPosition() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
  }

  function endGame() {
    gameActive = false;
    clearInterval(moveInterval);
    clearTimeout(gameTimeout);
    target.style.display = 'none';
    startBtn.disabled = false;
    alert(`Juego terminado. Tu puntuación es: ${score}`);
  }

  target.addEventListener('click', () => {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = `Puntuación: ${score}`;
    randomPosition();
  });

  startBtn.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = 'Puntuación: 0';
    startBtn.disabled = true;
    gameActive = true;
    target.style.display = 'block';
    randomPosition();
    moveInterval = setInterval(randomPosition, 800);
    gameTimeout = setTimeout(endGame, 10000);
  });
});
