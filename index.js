// template_1m5maw7    new:  template_me72hl8
// service_a317dbs    new:   service_t91zppx
// public key, user id:    zoYiX0Ta0E9JsH9IP  new:   mjZvT58fzh8LQDid4


function contact (event) {
    event.preventDefault();
    // emailjs
    //     .sendForm(
    //         'service_t91zppx',
    //         'template_me72hl8',
    //         event.target,
    //         'mjZvT58fzh8LQDid4'
    //  ).then(() => {
    //     console.log('this worked1')
    //  })

     const loading = document.querySelector('.modal__overlay--loading')
     const success = document.querySelector('.modal__overlay--success')
     loading.classList += " modal__overlay--visible";
// the space is very important before the modal__overlay as it is a list of classes, when you add a class we need a space 
     setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
         console.log('it worked 2')
     }, 1000);
 



}