
// Hamburger animation toggle
const menubtn = document.getElementById('nav-icon3')
menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('open')
})


//Nav bar animation
const nav = document.getElementById('nav')

let toggle = true;
menubtn.addEventListener('click', () => {

    if (toggle) {
        nav.style.width = '12em';
        nav.style.padding = '1.5em';
        Array.from(nav.children).map((li) => {
            li.style.display = 'block'
        })
        toggle = false; 

    } else if (toggle === false) {
        nav.style.width = '0em';
        nav.style.padding = '0em';
        toggle = true;
        setTimeout(() => {
            Array.from(nav.children).map((li) => {
                li.style.display = 'none'
            })
        }, 200)
      
    }
   
})

