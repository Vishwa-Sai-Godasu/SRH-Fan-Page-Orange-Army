// Simple carousel for fan quotes
const quotes = document.querySelector('.quotes');
const totalQuotes = document.querySelectorAll('.quote').length;
let index = 0;

setInterval(() => {
  index = (index + 1) % totalQuotes;
  quotes.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
