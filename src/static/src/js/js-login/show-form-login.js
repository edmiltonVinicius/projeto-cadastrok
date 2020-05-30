const showFormLogin = (b=undefined) => {
    const logo = document.querySelector('.logo')
    const divLogin = document.querySelector('.cont')
    const divLoad = document.querySelector('.loadingLogin')
    const btn = document.querySelector(b)
    
    clearInput('user')
    clearInput('pass')
    document.querySelector('.divErro').classList.add('d-none')

    if(b !== undefined){
        btn.addEventListener("click", (e) => {
            e.preventDefault()
        })
        
        btn.classList.remove('d-block')
        btn.classList.add('d-none')
    }

    logo.classList.remove('d-block')
    logo.classList.add('d-none')
    divLoad.classList.remove('d-none')

    setTimeout(() => {
        divLoad.classList.add('d-none')
        divLogin.classList.remove('d-none')
        logo.classList.remove('d-none')
        divLogin.classList.add('d-block')
        logo.classList.add('d-block')
    }, 2000);
}