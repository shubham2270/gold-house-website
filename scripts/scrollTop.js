const scrollTopBtn = document.getElementById("scrollTop");

//toggle scroll btn display
window.onscroll = () => scrollBtnToggle();
const scrollBtnToggle = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
}


//Scroll window to top on click
scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


//pop social from left
setTimeout(() => {
    document.getElementById('stickySocial').style.transform = 'translateX(0em)';
    console.log('test');
},2000)