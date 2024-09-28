// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navber');


// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navber.classList.toggle('active');
// }

// JavaScript code for portfolio website

// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navber');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

// Typing Animation
const typingText = document.querySelector('.text-animation span');
const typingWords = ['App Developer', 'Web Developer', 'Programmer', 'Learner'];
let typingIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {
  currentWord = typingWords[typingIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingWords.length;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 150);
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
