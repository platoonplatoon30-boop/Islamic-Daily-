let count = 0;
let zikrIndex = 0;

const azkar = [
"SubhanAllah",
"Alhamdulillah",
"Allahu Akbar",
"La ilaha illa Allah",
"Astaghfirullah",
"SubhanAllahi wa bihamdihi",
"SubhanAllahi al-azim"
];

function countUp(){

count++;
document.getElementById("counter").innerText = count;

if(navigator.vibrate){
navigator.vibrate(30);
}

if(count >= 33){

count = 0;

zikrIndex++;

if(zikrIndex >= azkar.length){
zikrIndex = 0;
}

document.getElementById("zikr-txt").innerText = azkar[zikrIndex];
document.getElementById("counter").innerText = count;

}

}

function resetT(){

count = 0;
document.getElementById("counter").innerText = 0;

}
function loadDuas() {
  const duaList = document.getElementById('duaList');
  duaList.innerHTML = "";
  douas.forEach((d, index) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="dua-title">${index + 1}.${d.titre}</div>
      <span class="arabic">${d.arab}</span>
      <div class="traduction">${d.trad}</div>
    `;
    duaList.appendChild(card);
  });
}

function filterDuas() {
  let query = document.getElementById('duaSearch').value.toLowerCase();
  const cards = document.querySelectorAll('#duaList .card');
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
}

window.onload = () => loadDuas();


// Changer de section
function changeTab(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active-section'));
  document.getElementById(id).classList.add('active-section');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}
function loadCitations() {
  const citList = document.getElementById('citList');
  citList.innerHTML = "";

  citations.forEach(c => {
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<div class="citation-text">"${c.texte}"</div>`;
    citList.appendChild(div);
  });
}

// Au chargement de la page
window.onload = () => {
  loadDuas();       // tes douas
  loadCitations();  // tes citations
};
