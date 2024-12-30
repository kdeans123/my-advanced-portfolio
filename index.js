// template_1m5maw7    new:  template_me72hl8
// service_a317dbs    new:   service_t91zppx
// public key, user id:    zoYiX0Ta0E9JsH9IP  new:   mjZvT58fzh8LQDid4

// advised to keep all the variables at the top 

let isModalOpen = false;
let contrastToggle = false
const scaleFactor = 1 / 20


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i=0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const oddInteger  = isOdd ? -1 : 1;
        // it alows the shapes to move in different directions as it shows false and true alternately 
        shapes[i].style.transform = 'translate(${x * oddInteger}px, ${y * oddInteger}px)'
    }

    // queryselectorAll - as we target them all 
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    
}



function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
// the space is very important before the modal__overlay as it is a list of classes, when you add a class we need a space 
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_t91zppx',
            'template_me72hl8',
            event.target,
            'mjZvT58fzh8LQDid4'
     ).then(() => {
          // throw new Error("error")   - you can use this line of code to pretent the error for test purposes of what pops up when there is an error
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
     }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on email: kat.m.deans@gmail.com."
        )
     }    
    )
// promises have also a catch - if the service is down, if there is an error, this is when the error comes in, it is important for user experience 
     setTimeout(() => {
         console.log('it worked 2')
     }, 1000);
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal__open";

    // best practice is to target the body
}

