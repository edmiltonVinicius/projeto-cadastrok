const form = document.getElementById('for')
function stopPadrao2(event) {
    event.preventDefault()
} 

function login(){
    const userName = document.querySelector('name=[userName]').valeu
    const userPassword = document.querySelector('name=[userPassword]').valeu
    const userEmail = document.querySelector('name=[userEmail]').valeu

    axios.post('/register', { userName, userPassword, userEmail})
        .then((res) => {
            alert(res.data)
        })
}

form.addEventListener('click', stopPadrao2)
form.addEventListener('click', login)