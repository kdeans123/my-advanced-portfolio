// template_1m5maw7    new:  template_me72hl8
// service_a317dbs    new:   service_t91zppx
// public key, user id:    zoYiX0Ta0E9JsH9IP  new:   mjZvT58fzh8LQDid4


function contact (event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'seservice_t91zppx',
            'template_me72hl8',
            event.target,
            'mjZvT58fzh8LQDid4'
     ).then(() => {
        console.log('this worked1')
     })


}