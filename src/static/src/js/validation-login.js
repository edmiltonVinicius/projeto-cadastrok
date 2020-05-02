
const LoginUser = () => {
    const formLogin = document.getElementById('formLogin')
    
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
    })

    const loginUser = document.getElementById('user').value
    const passUser = document.getElementById('pass').value

    axios.post('/', { loginUser, passUser })
        .then(res => {
            alert(res.data.message)
        })
        .catch(err => {
            alert('Sorry, there was an error, please try again.')

            console.log(err.status)
        })

}

