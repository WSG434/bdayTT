// const slides = document.querySelectorAll('.slide');

// for (const slide of slides) {
//   slide.addEventListener('click', () => {
//     clearActiveClasses();
//     slide.classList.add('active');
//   })
// }

// function clearActiveClasses() {
//   slides.forEach((slide) => {
//     slide.classList.remove('active');
//   })
// }




const slides = document.querySelectorAll('.slide');


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('slide')) {
    if (e.target.classList.contains('active')) {
      e.target.classList.toggle('active');
    } else {
      for (const slide of slides) {
        slide.classList.remove('active');
      }
      e.target.classList.toggle('active');
    }
  }


  if (e.target.classList.contains('blur')) {
    if (e.target.classList.contains('active')) {
      e.target.classList.remove('blur');
    }
  }

  if (e.target.classList.contains('surprise')) {
    // e.target.style.backgroundImage = url('https://www.ridus.ru/images/2019/10/18/994096/in_article_c5a1086bc4.JPG');
    e.target.style.backgroundImage = "";
    e.target.style.backgroundImage = "https://www.ridus.ru/images/2019/10/18/994096/in_article_c5a1086bc4.JPG";
    e.target.style.backgroundImage = url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80');


  }


})
