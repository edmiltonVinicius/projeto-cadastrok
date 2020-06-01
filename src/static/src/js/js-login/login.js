
const LoginUser = () => {
    const formLogin = document.getElementById('formLogin')
    
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault()
    })

    const loginUser = document.getElementById('user').value
    const passUser = document.getElementById('pass').value

    const divErro = document.querySelector('.divErro')
    const textDivErro = document.querySelector('.textDivErro')
    
    const imgLoadingLogin = document.getElementById('imgLoadingLogin')

    textDivErro.classList.add('d-none')
    divErro.classList.remove('d-none')
    imgLoadingLogin.classList.remove('d-none')

    axios.post('/', { loginUser, passUser })
        .then((res) => {
            setTimeout(() => {
                if(res.data.message === 'valid data' && res.status === 200){
                    sessionStorage.setItem('token', res.data.token)
                    
                    axios.get('/dashboard', { headers: { authorization: sessionStorage.getItem('token')}})
                    .then((res) => {
                        clearTime(verification)
                        window.console.clear()
                        imgLoadingLogin.classList.add('d-none')
                        document.title='Dashboard'
                        document.querySelectorAll('link')[2].href='../../static/build/css/dashboard.min.css'
                        document.querySelector('body').innerHTML=res.data

                        updatePageDashboard('https://unpkg.com/axios/dist/axios.min.js',
                                            '../../static/build/js/dashboard.min.js',
                                            '../../static/build/js/pace.min.js' )

                        const divLoad = document.querySelector('.animation')
                        setTimeout(() => {
                            divLoad.classList.remove('d-flex')
                            divLoad.classList.add('d-none')
                            document.querySelector('.containner-fluid').classList.remove('d-none')
                        }, 4000)
                    })
                    .catch((err) => {
                        imgLoadingLogin.classList.add('d-none')
                        textDivErro.innerHTML=res.data.message
                        textDivErro.classList.remove('d-none')
                    })
                } 
                
            }, 2000);
        })
        .catch((error) => {
            setTimeout(() => {
                imgLoadingLogin.classList.add('d-none')
                textDivErro.innerHTML=error.response.data
                textDivErro.classList.remove('d-none')
                                
            }, 1000);            
        })

}
