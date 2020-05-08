function validationInput(id, q) {
    const input = document.getElementById(id).value
    const camp = document.getElementById(id)
    
    if (input.length >= Number(q)) {
        camp.classList.remove('border-light')
        camp.classList.remove('border-danger')
        camp.classList.add('border-success')
        camp.style.background = "url('../static/build/img/certo.png') 95% 50% no-repeat"
        emailCreate = false
        
    } else if(input.length == ''){
        camp.classList.add('border-light')
        emailCreate = false
        
    } else {
        camp.classList.remove('border-light')
        camp.style.background = "none"
        camp.classList.add('border-danger') 
        emailCreate = false 
    }
}

let emailCreate = false
let emailLogin = false

function validationEmail(id, btn){
    const input = document.getElementById(id).value
    const camp = document.getElementById(id)
    const user = input.substring(0, input.indexOf('@'))
    const domain = input.substring(input.indexOf('@') + 1, input.length)
    
    if( (user.length > 3) &&
        (user.search(' ') === -1) &&
        (domain.length > 5) && 
        (domain.search(' ') === -1) &&
        (domain.indexOf('.') != -1)
    ){
        camp.classList.remove('border-light')
        camp.classList.remove('border-danger')
        camp.classList.add('border-success')
        camp.style.background="url('../static/build/img/certo.png') 95% 50% no-repeat"
        emailCreate = true
        emailLogin = true
        verificationButton(btn)

    } else if(input.length == 0 || input.value === '') {
        emailCreate = false
        emailCreate = false
        camp.classList.add('border-light')
        disableButton(btn)
        
    } else {
        disableButton(btn)
        emailCreate = false
        emailLogin = false
        camp.style.background='none'
        camp.classList.remove('border-light')
        camp.classList.add('border-danger')
    }
}


function disableButton(btn){
    const b = document.querySelector(btn)
    b.setAttribute('disabled', 'disabled')
    b.classList.remove('btn-outline-light')
    b.classList.add('btn-outline-secondary')
}

function enableButton(btn){
    const b = document.querySelector(btn)
    b.removeAttribute('disabled')
    b.classList.add('btn-outline-light')
}


function verificationButton(btn){
    setInterval(() => {
        if( (document.getElementById('entName').value.length >= 3) &&
            (document.getElementById('entPass').value.length >= 6) &&
            (emailCreate === true) ){
                enableButton(btn)

        } else if(emailLogin === true && document.getElementById('pass').value.length >= 6) {
            enableButton(btn)

        } else {
            disableButton(btn)
        }
    }, 100);
}