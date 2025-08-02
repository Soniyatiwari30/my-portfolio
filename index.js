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
window.addEventListener("click", function (event) {
    if (event.target === popupBox) {
        popupBox.style.display = "none";
    }
});

