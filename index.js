// template_1m5maw7
// service_a317dbs
// public key, user id:    zoYiX0Ta0E9JsH9IP


function contact (event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_a317dbs',
            'template_1m5maw7',
            event.target,
            'zoYiX0Ta0E9JsH9IP'
     ).then(() => {
        console.log('this worked1')
     })


}