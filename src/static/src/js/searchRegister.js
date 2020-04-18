const myLink = document.getElementById('btnRegister')

function stopPadrao(event) {
    event.preventDefault()
} 

function funcRegister() {
    axios.get('/register')
    .then((res) => {
        document.querySelector('.cont').innerHTML=res.data
    })
}

myLink.addEventListener('click', funcRegister)
myLink.addEventListener("click", stopPadrao) 