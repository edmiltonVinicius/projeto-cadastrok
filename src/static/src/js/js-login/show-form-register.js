
function showAnswer(){
    const myLink = document.getElementById('btnRegister-js')
    function stopPadrao(event) {
        event.preventDefault()
    } 
    myLink.addEventListener("click", stopPadrao) 
    
    const divLogin = document.querySelector('.cont')
    const divLoad = document.querySelector('.loading')
    const divForm = document.querySelector('.containerForm')
    divLogin.style.display='none'
    divLoad.style.display='block'       
    setTimeout(() => {
        divLoad.style.display='none' 
        divForm.style.display='block'   
    }, 2000);
} 

