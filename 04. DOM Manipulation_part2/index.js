// dom manipulation
// manipulation element (part1)
// manipulation node (part2)
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removedChild()
// parentNode.replaceChild()
// ...dst

// 1a. buat elemen baru
const pBaru = document.createElement('p');
const text1 = document.createTextNode('ini paragraf baru');

// 1b. simpan tulisan ke dalam paragraf
pBaru.appendChild(text1);

// 1c. simpan pBaru ke id(a)
document.getElementById('a').appendChild(pBaru);

// 2a. buat element baru
const liBaru = document.createElement('li');
const tLiBaru = document.createTextNode('Item baru');

// 2b. simpan tulisan ke paragraf
liBaru.appendChild(tLiBaru);

// 2c. simpan list sebelum ul ke-2
const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

//3a. removeChild
const remove = document.getElementsByTagName('a')[0];
document.getElementById('a').removeChild(remove);

//4. replaceChild
const id_b = document.getElementById('b');
const paragraf = id_b.querySelector('p');

const add_h2 = document.createElement('h2');
const text2 = document.createTextNode('judul Baru !');

add_h2.appendChild(text2);
id_b.replaceChild(add_h2, paragraf);

//

pBaru.style.background = 'lightgreen';
liBaru.style.background = 'lightgreen';
add_h2.style.background = 'lightgreen';
