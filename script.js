const btn =  document.querySelector(".btn"),
      image = document.querySelector(".img"),
      images = document.querySelectorAll(".img"),
      qouteText = document.querySelector(".text"),
      author = document.querySelector(".author");

function imgEffect(){ 
     image.classList.add('img-effect'); 
}      

const url = '.src/quotes.js';

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
