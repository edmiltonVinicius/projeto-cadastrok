
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
        .then((res) => {
            const itoken = res.data.token
            setTimeout(() => {
                if(res.data.message === 'valid data' && res.data.code === 200){
                    sessionStorage.setItem('token', res.data.token)
                    
                    axios.get('/dashboard', { headers: { authorization: itoken}})
                    .then((res) => {
                            imgLoading.classList.add('d-none')
                            history.replaceState('', 'CadastrOk - Dashboard', '/dashboard')
                            document.title='CadastrOk - Dashboard'
                            document.querySelector('body').innerHTML=res.data
                        })
                        .catch((err) => {
                            imgLoading.classList.add('d-none')
                            textErro.innerHTML=res.data.message
                            textErro.classList.remove('d-none')
                        })
    
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

