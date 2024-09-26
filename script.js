// scroll secetion 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let secetion = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// scroll bar 

window.onscroll = () => {
    secetion.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height){
            navLinks.forEach(Links =>{
                Links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });

            // active section for animation on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use animation that repearts on scroll use this 
        else{
            sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove taggle icon and navbar when aclick navbar links(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation on the footer 

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}