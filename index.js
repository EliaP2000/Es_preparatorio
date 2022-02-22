const plateaEl = document.getElementById('platea');
const nomeEl = document.getElementById('nome');

const nfile = 5;
const nposti = 10;

const platea = Array(nfile);
for ( var i = 0; i < nfile; i++ ) {
  platea[i]= new Array(nposti).fill("x");
}
platea[2][1] = 'Alessio';
platea[3][4] = 'Gianna';

console.log(JSON.stringify(platea));

var prenotazione = new Array(nfile).fill(Array(nposti));

prenotazione=platea.map( (fila,i) => {
  p=fila.map( (nome,j) => {
    btn = document.createElement('button');
    plateaEl.appendChild(btn);
    btn.value=nome;
    btn.innerHTML = 'P' +  (j + 1) + (i + 1);
    btn.addEventListener('click', mostraNome);
    return btn;
  })
  plateaEl.appendChild(document.createElement('br'));
  return p;
})

function mostraNome() {
  nomeEl.innerHTML = this.value;
}