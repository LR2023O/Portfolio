// Typing text for the header
const headerText = "Web Developer | UI Designer | Tech Enthusiast";

// Typing text for the About section const aboutText = ``;

// Get the elements
const headerTyping = document.getElementById("headerTyping");
const aboutTyping = document.getElementById("aboutTyping");

let i = 0;
let j = 0;

// Function to type the header text
function typeHeader() {
  if (i < headerText.length) {
    headerTyping.textContent += headerText.charAt(i);
    i++;
    setTimeout(typeHeader, 50); // typing speed
  } else {
    headerTyping.style.borderRight = "none"; // remove cursor after done
    setTimeout(typeAbout, 4); // pause before About section starts
  }
}

// Function to type the About paragraph
function typeAbout() {
  if (j < aboutText.length) {
    aboutTyping.textContent += aboutText.charAt(j);
    j++;
    setTimeout(typeAbout, 25); // typing speed
  } else {
    aboutTyping.style.borderRight = "none";
  }
}

// Start typing when page loads
window.addEventListener("DOMContentLoaded", typeHeader);


function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btn = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = " Read more";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = " Discover less";
    }
}

const sidebar = document.querySelector('header');
const toggleBtn = document.getElementById('sidebarToggle');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // slides header in/out
});