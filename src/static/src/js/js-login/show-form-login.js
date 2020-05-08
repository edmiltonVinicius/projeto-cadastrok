const showFormLogin = (b) => {
    const divLogin = document.querySelector('.cont')
    const divLoad = document.querySelector('.loadingLogin')
    const btn = document.querySelector(b)

    btn.addEventListener("click", (e) => {
        e.preventDefault()
    })

    clearInput('user')
    clearInput('pass')

    btn.classList.remove('d-block')
    btn.classList.add('d-none')
    divLogin.classList.add('d-none')
    divLoad.classList.remove('d-none')

    setTimeout(() => {
        divLoad.classList.add('d-none')
        divLogin.classList.remove('d-none')
        divLogin.classList.add('d-block')
    }, 2000);
}