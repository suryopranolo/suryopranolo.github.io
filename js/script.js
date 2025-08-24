(function(){
  // Theme persistence
  const key = 'pi-theme';
  const saved = localStorage.getItem(key);
  if (saved === 'dark') document.body.classList.add('dark-mode');
  const btn = document.getElementById('theme-toggle');
  if (btn){
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem(key, document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  }

  // Simple search on materi page
  const inp = document.getElementById('search-input');
  if (inp){
    const cards = Array.from(document.querySelectorAll('.material-card'));
    const filter = () => {
      const q = inp.value.trim().toLowerCase();
      cards.forEach(card => {
        const keys = (card.getAttribute('data-keywords') || '').toLowerCase();
        card.style.display = (!q || keys.includes(q)) ? '' : 'none';
      });
    };
    inp.addEventListener('input', filter);
  }
})();
