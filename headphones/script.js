const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav-links");
const line = document.querySelectorAll(".line");

// const line1 = document.querySelector(".line1");
// const line2 = document.querySelector(".line2"); 
// const line3 = document.querySelector(".line3"); 


hamburger.addEventListener("click", () => {
  ul.classList.toggle("unactive");
  for (i = 0; i < line.length; i++) {
    line[i].classList.toggle("clicked")
  };

  // line1.classList.toggle("clicked");
  // line2.classList.toggle("clicked");
  // line3.classList.toggle("clicked");
})