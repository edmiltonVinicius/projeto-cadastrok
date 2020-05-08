function clearInput(id){
    const input = document.getElementById(id)
    input.value=''
    input.style.background='none'
    input.classList.add('border-light')
}

function createUser() {
    const f = document.getElementById('for')
    function stopPadrao2(event) {
        event.preventDefault()
    }
    f.addEventListener('submit', stopPadrao2)

    
    document.getElementById('letsIndex').style.display='none'
    document.getElementById('btnCloseModal').style.display='none'
    document.getElementById('modal-footer').style.display='none'
    document.getElementById('textModal').style.display='none'
    document.querySelector('.bodyModal').style.display='block'
    
    const userName = document.getElementById('entName').value
    const userPassword = document.getElementById('entPass').value
    const userEmail = document.getElementById('entEmail').value

    axios.post('/register', { userName, userPassword, userEmail })
        .then((res) => {
            if((res.status === 200) && (res.data.message === 'User created')){
                clearInput('entName')
                clearInput('entEmail')
                clearInput('entPass')
                hideLoading(res.data.message)
                returnLogin()

            } else if(res.data.message === 'Email already Registered') {
                hideLoading(res.data.message)
                closeModal()

            } else {
                hideLoading('Sorry, an error occurred try again')
                closeModal()
            }
        })
        .catch(err => {
            hideLoading('Sorry, an error occurred try again')
            closeModal()
        })
}
