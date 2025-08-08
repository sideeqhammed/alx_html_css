const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");
// const line = document.getElementsByClassName("line");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2"); 
const line3 = document.querySelector(".line3"); 

hamburger.addEventListener("click", () => {
  ul.classList.toggle("unactive");
  // line.classList.toggle("clicked");
  line1.classList.toggle("clicked");
  line2.classList.toggle("clicked");
  line3.classList.toggle("clicked");
  // hamburger.classList.toggle("clicked");
})