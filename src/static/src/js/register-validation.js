function validationInput(id, q) {
    const input = document.getElementById(id).value
    const camp = document.getElementById(id)
    
    if (input.length >= Number(q)) {
        camp.classList.remove('border-danger')
        camp.classList.add('border-success')
        camp.style.background = "url('../static/build/img/certo.png') 95% 50% no-repeat"
        
    } else if(input.length == ''){
        camp.classList.add('border-light')
        
    } else {
        camp.classList.remove('border-light')
        camp.style.background = "none"
        camp.classList.add('border-danger')  
    }
}

const buttonCreate = document.querySelector('.btnCreate-js')
const buttonLogin = document.querySelector('.btnLogin-js')
let valid = false

function validationEmail(id){
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
        camp.classList.remove('border-danger')
        camp.classList.add('border-success')
        camp.style.background="url('../static/build/img/certo.png') 95% 50% no-repeat"
        valid = true
        verificationButtonCreate()

    } else if(input.length == 0) {
        valid = false
        camp.classList.add('border-light')
        disableButtonCreate()
        
    } else {
        disableButtonCreate()
        valid = false
        camp.style.background='none'
        camp.classList.remove('border-light')
        camp.classList.add('border-danger')
    }
}



function disableButtonCreate(){
    buttonCreate.setAttribute('disabled', 'disabled')
    buttonCreate.classList.remove('btn-outline-light')
    buttonCreate.classList.add('btn-outline-secondary')
}

function enableButtonCreate(){
    buttonCreate.removeAttribute('disabled')
    buttonCreate.classList.add('btn-outline-light')
}
function enableButtonLogin(){
    buttonLogin.removeAttribute('disabled')
    buttonLogin.classList.add('btn-outline-light')
}

function verificationButtonCreate(){
    setInterval(() => {
        if( (document.getElementById('entName').value.length >= 3) &&
            (document.getElementById('entPass').value.length >= 6) &&
            (valid === true) ){
                enableButtonCreate()

        } else if(valid === true && document.getElementById('pass').value.length >= 6) {
            enableButtonLogin()

        } else {
            disableButtonCreate()
        }
    }, 100);
}