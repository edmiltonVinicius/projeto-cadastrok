
function showAnswer(){
    const myLink = document.getElementById('btnRegister-js')
    function stopPadrao(event) {
        event.preventDefault()
    } 
    myLink.addEventListener("click", stopPadrao) 
    
    clearInput('entName')
    clearInput('entPass')
    clearInput('entEmail')

    const divLogin = document.querySelector('.divLogin')
    const divEfectLoadingRegister = document.querySelector('.divEfectLoadingRegister')
    const containerForm = document.querySelector('.containerForm')
    const logo = document.querySelector('.logo')
    const divEfectLoadingRegisterImg = document.querySelector('.dImg2')

    divLogin.classList.remove('d-block')
    divLogin.classList.add('d-none')
    logo.classList.remove('d-block')
    logo.classList.add('d-none')
    divEfectLoadingRegister.classList.add('d-block')     
    divEfectLoadingRegisterImg.classList.add('d-block')     
         

    setTimeout(() => {
        divEfectLoadingRegister.classList.remove('d-block')
        divEfectLoadingRegisterImg.classList.remove('d-block')
        containerForm.classList.remove('d-none')
        logo.classList.remove('d-none')
        containerForm.classList.add('d-block')
        logo.classList.add('d-block')   
    }, 2000);
} 

