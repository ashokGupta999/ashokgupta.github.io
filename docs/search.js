
async function main(){
  const pubs = await fetch('pubs.json').then(r => r.json());
  const grid = document.getElementById('grid');
  const q    = document.getElementById('query');
  function makeCard(p){
    return `<article class="card">
      <a href="figures/${p.image}" target="_blank"><img src="figures/${p.image}" alt="${p.title}"></a>
      <h3>${p.title}</h3>
      <p><i>${p.authors}</i> · <em>${p.journal}</em></p>
      <p>${p.summary}</p>
      <p class="bottom">Bottom line: ${p.bottom}</p>
    </article>`;
  }
  function render(list){ grid.innerHTML = list.map(makeCard).join(''); }
  render(pubs);
  q.oninput = e => {
    const val = e.target.value.toLowerCase();
    render(pubs.filter(p => Object.values(p).some(v => v && v.toLowerCase().includes(val))));
  };
}
document.addEventListener('DOMContentLoaded', main);
