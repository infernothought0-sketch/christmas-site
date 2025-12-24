function goTo(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${n}`).classList.add('active');

  if (n === 6) {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, i) => {
      line.style.animationDelay = `${i * 0.35}s`;
    });
  }
}