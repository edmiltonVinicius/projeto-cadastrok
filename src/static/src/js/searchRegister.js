const myLink = document.getElementById('btnRegister-js')

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