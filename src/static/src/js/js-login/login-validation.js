
const LoginUser = () => {
    const formLogin = document.getElementById('formLogin')
    
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
    })

    const loginUser = document.getElementById('user').value
    const passUser = document.getElementById('pass').value

    const divErro = document.querySelector('.errorLogin')
    const textErro = document.querySelector('.textErro')
    const imgLoading = document.getElementById('imgLoading')

    textErro.classList.add('d-none')
    divErro.classList.remove('d-none')
    imgLoading.classList.remove('d-none')

    axios.post('/', { loginUser, passUser })
        .then(res => {
            setTimeout(() => {
                if(res.data.message === 'valid data' && res.data.code === 200){
                    sessionStorage.setItem('token', res.data.token)
                    imgLoading.classList.add('d-none')
                    window.location.replace('/dashboard')
    
                } 
                if(res.data.code === 401){
                    imgLoading.classList.add('d-none')
                    textErro.innerHTML=res.data.message
                    textErro.classList.remove('d-none')
                    
                }
            }, 2000);
        })
        .catch(err => {
            textErro.innerHTML=res.data.message
            textErro.classList.remove('d-none')
        })

}

