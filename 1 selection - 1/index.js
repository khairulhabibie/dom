// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'yellow';
judul.innerHTML = 'khairul habibie';

// document.geteElementsByTagName() -> html collection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

document.getElementsByTagName('h1')[0].style.fontSize = '50px';

// document.getElementByClassName -> htmlCollection
document.getElementsByClassName('p1')[0].innerHTML = 'ini dirubah daru java scripts';
