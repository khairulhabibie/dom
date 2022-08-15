// ubah warna
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', () => {
  document.body.classList.toggle('biru-muda');
});

// acak warna
const tAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// slider warna
const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', () => {
  const r = Math.round(sMerah.value * 2.55);
  //   console.log(r);
  document.body.style.background = `rgb(${r},100,100)`;
});

const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', () => {
  const g = Math.round(sHijau.value * 2.55);
  document.body.style.background = `rgb(100,${g},100)`;
});

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', () => {
  const b = Math.round(sBiru.value * 2.55);
  document.body.style.background = `rgb(100,100,${b})`;
});

// mouse over
document.body.addEventListener('mousemove', (e) => {
  // posisi mouse
  // console.log(e.clientX)
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerHeight) * 255);
  console.log(yPos);

  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
