
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
            setTimeout(() => {
                if(res.data.message === 'valid data' && res.data.code === 200){
                    sessionStorage.setItem('token', res.data.token)
                    
                    axios.get('/dashboard', { headers: { authorization: sessionStorage.getItem('token')}})
                    .then((res) => {
                            imgLoading.classList.add('d-none')
                            document.title='CadastrOk - Dashboard'
                            document.querySelectorAll('link')[2].href='../../static/build/css/dashboard.min.css'
                            document.querySelector('body').innerHTML=res.data
                            refreshJsDashboard('https://unpkg.com/axios/dist/axios.min.js')
                            refreshJsDashboard('../../static/build/js/dashboard.min.js')
                            refreshJsDashboard('../../static/build/js/pace.min.js')
                            const divLoad = document.querySelector('.animation')
                            setTimeout(() => {
                                divLoad.classList.remove('d-flex')
                                divLoad.classList.add('d-none')
                                document.querySelector('.containner-fluid').classList.remove('d-none')
                            }, 4000)
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
