
function showAnswer(){
    const myLink = document.getElementById('btnRegister-js')
    function stopPadrao(event) {
        event.preventDefault()
    } 
    myLink.addEventListener("click", stopPadrao) 
    
    clearInput('entName')
    clearInput('entPass')
    clearInput('entEmail')

    const divLogin = document.querySelector('.cont')
    const divLoad = document.querySelector('.loading')
    const divForm = document.querySelector('.containerForm')

    divLogin.classList.remove('d-block')
    divLogin.classList.add('d-none')
    divLoad.classList.add('d-block')     

    setTimeout(() => {
        divLoad.classList.remove('d-block')
        divForm.classList.remove('d-none')
        divForm.classList.add('d-block')   
    }, 2000);
} 

