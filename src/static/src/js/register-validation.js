function validationInput(id, q) {
    const input = document.getElementById(id).value
    const camp = document.getElementById(id)
    
    if (input.length >= Number(q)) {
        camp.style.borderColor = "green"
        camp.style.background = "url('../static/build/img/certo.png') 95% 50% no-repeat"
        
    } else if(input.length == ''){
        camp.classList.add('border-light')
        
    } else {
        camp.classList.remove('border-light')
        camp.style.background = "none"
        camp.style.borderColor = "red"  
    }
}


function validationEmail(){
    const input = document.getElementById('entEmail').value
    const camp = document.getElementById('entEmail')
    const user = input.substring(0, input.indexOf('@'))
    const domain = input.substring(input.indexOf('@') + 1, input.length)
    
    if( (user.length > 3) &&
        (user.search(' ') === -1) &&
        (domain.length > 5) && 
        (domain.search(' ') === -1) &&
        (domain.indexOf('.') != -1)
    ){
        camp.style.borderColor="green"
        camp.style.background="url('../static/build/img/certo.png') 95% 50% no-repeat"
        verificationButtonCreate()

    } else if(input.length == 0) {
        camp.classList.add('border-light')
        disableButtonCreate()
        
    } else {
        camp.classList.remove('border-light')
        camp.style.borderColor="red"
        camp.style.background="none" 
        disableButtonCreate()
    }
}


const buttonCreate = document.querySelector('.btnCreate-js')

function disableButtonCreate(){
    buttonCreate.setAttribute('disabled', 'disabled')
    buttonCreate.classList.remove('btn-outline-light')
    buttonCreate.classList.add('btn-outline-secondary')
}

function enableButtonCreate(){
    buttonCreate.removeAttribute('disabled')
    buttonCreate.classList.add('btn-outline-light')
}

function verificationButtonCreate(){
    setInterval(() => {
        if( (document.getElementById('entName').value.length >= 3) &&
            (document.getElementById('entPass').value.length >= 6) &&
            (document.getElementById('entEmail').style.borderColor == 'green') ){
            enableButtonCreate()
        } else {
            disableButtonCreate()
        }
    }, 100);
}