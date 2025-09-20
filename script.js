const reiJu = document.querySelector('.reiJu');
const strokes = document.querySelectorAll('.reiJu .stroke');

function animateReiJu() {
  reiJu.style.opacity = 1;
  strokes.forEach((s, i) => {
    setTimeout(() => {
      s.style.transition = 'transform 0.5s ease-out';
      s.style.transform = 'scaleY(1)';
    }, i * 200);
  });

  
  setTimeout(() => {
    reiJu.style.transition = 'opacity 0.5s';
    reiJu.style.opacity = 0;
    strokes.forEach(s => s.style.transform = 'scaleY(0)');
  }, 1500);
}

// ページ読み込み時に発動
window.addEventListener('load', animateReiJu);
