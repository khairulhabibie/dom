// DOM Manipulation
//1.  element.classList.add()
//2.  element.classList.remove()
//3.  element.classList.item()
//4.  element.classList.contains()
//5.  element.classList.replace()

// 01 - inner html
// document.getElementById('judul').innerHTML = '<i>khairul habibie</i>';
// document.querySelector('section#a').innerHTML = "Hello world"

// 02 - set style css
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue"
// judul.style.backgroundColor = "salmon"

// 03 - seAttribute
// document.getElementsByTagName('h1')[0].setAttribute('name', 'khairul habibie');

// 03 - set atribut : jika ada akan di timpa
// document.querySelector('.p2').setAttribute('class', 'label');

// toggle class
document.querySelector('.p2').classList.toggle('toggleClass');
