
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
    const logo = document.querySelector('.logo')
    const divLoadImg = document.querySelector('.dImg2')

    divLogin.classList.remove('d-block')
    divLogin.classList.add('d-none')
    logo.classList.remove('d-block')
    logo.classList.add('d-none')
    divLoad.classList.add('d-block')     
    divLoadImg.classList.add('d-block')     
         

    setTimeout(() => {
        divLoad.classList.remove('d-block')
        divLoadImg.classList.remove('d-block')
        divForm.classList.remove('d-none')
        logo.classList.remove('d-none')
        divForm.classList.add('d-block')
        logo.classList.add('d-block')   
    }, 2000);
} 

