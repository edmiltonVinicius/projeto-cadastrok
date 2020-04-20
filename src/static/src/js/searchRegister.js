const myLink = document.getElementById('btnRegister-js')
function stopPadrao(event) {
    event.preventDefault()
} 

const divLogin = document.querySelector('.cont')
const divLoad = document.querySelector('.loading')

function showLoading(){
    divLogin.style.display='none'
    divLoad.style.display='block'
}

function showAnswer(res){
    setTimeout(() => {
        divLoad.style.display='none'
        divLogin.innerHTML=res.data
        divLogin.style.display='block'        
    }, 2000);
} 

function funcRegister() {
    showLoading()
    axios.get('/register')
        .then((res) => {
            showAnswer(res)
     })
}

myLink.addEventListener('click', funcRegister)
myLink.addEventListener("click", stopPadrao) 