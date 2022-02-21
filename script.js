/*async function getQuote() {  
    const quotes = './src/qoutes.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  getQuote();
/*
function randomQoute(data){
  let random = data[Math.floor(Math.random() * data.length)];
  const element = document.createElement ('div');
  element.innerHTML =`
  <img src= ${random.img} alt= ${random.altimg}>
  <p class="text">${random.text}</p>
  <p class="author">${random.author}</p>`;
  parent.append(element);
}*/

const btn =  document.querySelector(".btn"),
      image = document.querySelector(".img"),
      images = document.querySelectorAll(".img"),
      qouteText = document.querySelector(".text"),
      author = document.querySelector(".author");


function imgEffect(){ 
 // if(event.target.classList.contains('.img')) {
 image.classList.add('img-effect'); 

  //}
}      
//btn.addEventListener('click', randomQoute);

//const url = 'https://type.fit/api/quotes';

const url = ' http://localhost:3000/ru';
//const url = './src/qoutes.json';

let getQuote = () => {
  fetch(url)
  .then((data) => data.json())
  .then ((item)=>{
  let random = item[Math.floor(Math.random() * item.length)];
  image.src = random.img;
 image.alt = random.altimg;
  console.log(random.text);
  qouteText.innerText = random.text;
  author.innerText = random.author;
  });
};
const eng = '.src/eng.json';
let getQuoteEng = () => {
  fetch(eng)
  .then((data) => data.json())
  .then ((item)=>{
  let random = item[Math.floor(Math.random() * item.length)];
  image.src = random.img;
 image.alt = random.altimg;
  console.log(random.text);
  qouteText.innerText = random.text;
  author.innerText = random.author;
  });
};




window.addEventListener("load", getQuote);
btn.addEventListener('click', getQuote);
btn.addEventListener('click', imgEffect);

image.addEventListener("animationend", AnimationHandler, false);
function AnimationHandler () {
  // Удаляем класс с анимацией
  image.classList.remove('img-effect');
  
}


    let selectedLng = "en";
// ru en
function switchLng(userSelectedLng) {

    const lng = document.querySelectorAll('.lng-btn');
    lng.forEach((element) => {
        element.classList.remove('active');
    });

    selectedLng = userSelectedLng;

    if (selectedLng == 'ru') {
        getQuote();
    }
    if (selectedLng == 'en') {
      getQuoteEng();
    }

    let btn = document.querySelector('.lng-btn-' + userSelectedLng);
    btn.classList.add('active');

}


switchLng();
