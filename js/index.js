// Hamburger menu animation
const hamburgerMenuButton = document.querySelector(".header__toggle");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector("body");


hamburgerMenuButton.addEventListener("click", () => {
  header.classList.toggle("open");
  headerMenu.classList.toggle("active");
  body.classList.toggle("noscroll");
})

headerMenu.childNodes.forEach((e) => {
  e.addEventListener('click', () => {
    body.classList.remove('noscroll');
    headerMenu.classList.remove('active');
    header.classList.remove("open");
  })
})


/*------TYPEWRITER------*/
const textArray = ["web developer", "game developer"];
const typingDelay = 300;
const erasingDelay = 200;
const newTextDelay = 5000;
const dynText = document.querySelector(".d-text");
const cursorSpan = document.querySelector(".cursor");
let charIndex = 0;
let textArrayIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    dynText.innerHTML += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    dynText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 4000);
})



