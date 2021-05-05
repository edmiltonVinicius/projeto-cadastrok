
const registerUser = () => {
    const formCreateUser = document.getElementById('formCreateUser')
    formCreateUser.addEventListener('submit', (e) => e.preventDefault())
    
    let name = document.getElementById('entName').value

    const userName = upperText(name)
    const userPassword = document.getElementById('entPass').value
    const userEmail = document.getElementById('entEmail').value

    hideElements()

    axios.post('/register', { userName, userPassword, userEmail })
        .then((res) => {
            if((res.status === 201) && (res.data === 'user created')){
                clearInput('entName', 'entEmail', 'entPass')
                hideLoadingShowResponse(res.data)
                returnLogin()
            } 
        })
        .catch(error => {
            hideLoadingShowResponse(error.response.data)
            closeModal()
        })
}
