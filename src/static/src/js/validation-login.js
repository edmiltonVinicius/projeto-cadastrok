
const LoginUser = () => {
    const formLogin = document.getElementById('formLogin')
    
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
    })

    const loginUser = document.getElementById('user').value
    const passUser = document.getElementById('pass').value

    const divErro = document.querySelector('.errorLogin')

    axios.post('/', { loginUser, passUser })
        .then(res => {
            if(res.data.message === 'valid data' && res.data.code === 200){
                sessionStorage.setItem('token', res.data.token)
                window.location.replace('/dashboard')

            } 
            if(res.data.code === 401){
                divErro.innerHTML=res.data.message
                divErro.classList.remove('d-none')
                
            }
        })
        .catch(err => {
            divErro.innerHTML=res.data.message
            divErro.classList.remove('d-none')
        })

}

