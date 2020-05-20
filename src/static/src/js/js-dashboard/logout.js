const logout = () => {
    sessionStorage.removeItem('token')
    window.location.replace('/')
}

const modal = document.getElementById('modalDeLogout')

const cancel = () => {
    modal.style.display='none'
    document.querySelector('.modal-backdrop').classList.add('d-none')
}

const reappear = () => {
    modal.style.display='block'
}