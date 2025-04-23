
function fadeIn(){
  document.querySelectorAll('.card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){ card.classList.add('visible'); }
  });
}
window.addEventListener('scroll', fadeIn);
document.addEventListener('DOMContentLoaded', fadeIn);
