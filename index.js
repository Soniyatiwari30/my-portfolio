// alert('working')
const popupBox = document.getElementById('popup-box')

document.getElementById('popup-open').addEventListener("click",function(){
    // console.log('clicked1')
    popupBox.style.display="block";
})
document.getElementById('popup-close').addEventListener("click",function(){
    // console.log('clicked2')
    popupBox.style.display="none";
})


// **********************************************************************************************************


//background color of menu icon

// const menuIcon = document.querySelector('.toggle');
// const sections = document.querySelectorAll('.section');

// Callback for Intersection Observer
// const observerCallback = (entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             const bgColor = window.getComputedStyle(entry.target).backgroundColor;
//             console.log(bgColor)

//             if (bgColor === 'rgb(72, 49, 212)') { // #4831D4
//                 menuIcon.style.backgroundColor = '#CCF381';
//                 menuIcon.style.setProperty('--after-color', '#CCF381');
//             } else {
//                 menuIcon.style.backgroundColor = '#4831D4';
//                 menuIcon.style.setProperty('--after-color', '#4831D4');
//             }
//         }
//     });
// };

// Set up Intersection Observer
// const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
// sections.forEach((section) => observer.observe(section));
