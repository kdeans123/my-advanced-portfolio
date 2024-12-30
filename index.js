// template_1m5maw7    new:  template_me72hl8
// service_a317dbs    new:   service_t91zppx
// public key, user id:    zoYiX0Ta0E9JsH9IP  new:   mjZvT58fzh8LQDid4


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
    document.body.classList += " modal--open";

    // best practice is to target the body
}

