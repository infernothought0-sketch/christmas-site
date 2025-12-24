let tulipsClicked = 0;
let currentOrder = 1;

function goTo(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${n}`).classList.add('active');
}

/* Tulips */
document.querySelectorAll('.tulip').forEach(t => {
  t.addEventListener('click', () => {
    if (!t.classList.contains('clicked')) {
      t.classList.add('clicked');
      tulipsClicked++;
      if (tulipsClicked === 5) {
        document.getElementById('toCards').classList.remove('hidden');
      }
    }
  });
});

/* Cards */
document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('click', () => {
    const order = Number(c.dataset.order);
    if (order === currentOrder) {
      c.classList.add('correct');
      currentOrder++;
      if (currentOrder === 6) {
        setTimeout(() => goTo(4), 600);
      }
    } else {
      c.classList.add('wrong');
      setTimeout(() => c.classList.remove('wrong'), 300);
    }
  });
});