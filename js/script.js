document.querySelector('.dropdown_main').addEventListener('click', () => {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });


// carousel


// let slides = document.querySelectorAll('.slides');
// let currentIndex = 0;

// slides.forEach((slide,index)=>{
//   slide.style.left = `${index * 100}%`;
// });

// function showSlide(index){
//   slides.forEach((slide)=>{
//     slide.style.transform = `translateX(-${index * 100}%)`;
//   });
//   document.getElementById('previous').style.display = index === 0 ? 'none' : 'flex';
//   document.getElementById('next').style.display = index === slides.length - 1 ? 'none' : 'flex';
// }

// showSlide(currentIndex);
// document.getElementById('carousel_next').addEventListener('click', ()=>{
//   if(currentIndex < slides.length - 1){
//     currentIndex += 1;
//     showSlide(currentIndex);
//   }
// })
// document.getElementById('carousel_previous').addEventListener('click', ()=>{
//   if(currentIndex > 0){
//     currentIndex -= 1;
//     showSlide(currentIndex);
//   }
// })



    const slides = document.querySelectorAll('.slide');
    const contents = document.querySelectorAll('.content');
    const prevBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        contents.forEach((content) => {
            content.classList.remove('active');
        });
        contents[index].classList.add('active');
        prevBtn.style.display = index === 0 ? 'none' : 'flex';
        nextBtn.style.display = index === slides.length - 1 ? 'none' : 'flex';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            showSlide(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex += 1;
            showSlide(currentIndex);
        }
    });

    showSlide(currentIndex); // Initial display


