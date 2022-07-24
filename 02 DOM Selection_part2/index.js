// document.querySelection()

document.querySelector('#b p').style.color = 'green';
document.querySelector('section#b ul li:nth-child(2)').style.backgroundColor = 'orange';

// document.querySelectiorAll()
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.background = 'lightgreen';
}
