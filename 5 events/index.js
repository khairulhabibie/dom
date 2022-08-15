// cara 1
// function ubahWarna1() {
//   document.querySelector('.p3').style.backgroundColor = 'lightblue';
// }

// cara 2
// function ubahWarna2() {
//   p2.style.backgroundColor = 'lightblue';
// }
// const p2 = document.querySelector('.p2');
// p2.onClick = ubahWarna2();

// cara 3
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');
  const textBaru = document.createTextNode('item baru');

  liBaru.appendChild(textBaru);
  ul.appendChild(liBaru);
});

// daftar events
`
- mouse event : click, dblclick, mouseleave, mouseenter, wheel
- keyboard event : keydown, keyup
- resources event 
- focus event
- view event : resize, view
- form event : reset, submit
- css animation and transition
- drag and drop event
`;
