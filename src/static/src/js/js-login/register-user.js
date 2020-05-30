
const registerUser = () => {
    const formCreateUser = document.getElementById('formCreateUser')
    formCreateUser.addEventListener('submit', (e) => e.preventDefault())
    
    const userName = document.getElementById('entName').value
    const userPassword = document.getElementById('entPass').value
    const userEmail = document.getElementById('entEmail').value

    hideElements()

    axios.post('/register', { userName, userPassword, userEmail })
        .then((res) => {
            if((res.status === 200) && (res.data.message === 'User created')){
                clearInput('entName', 'entEmail', 'entPass')
                hideLoadingShowResponse(res.data.message)
                returnLogin()

            } else if(res.data.message === 'Email already Registered') {
                hideLoadingShowResponse(res.data.message)
                closeModal()

            } else {
                hideLoadingShowResponse('Sorry, an error occurred try again')
                closeModal()
            }
        })
        .catch(err => {
            hideLoadingShowResponse('Sorry, an error occurred try again')
            closeModal()
        })
}
