function clearInput(id){
    const input = document.getElementById(id)
    input.value=''
    input.style.background='none'
    input.style.borderColor='#fff'
}

function createUser() {
    const f = document.getElementById('for')
    function stopPadrao2(event) {
        event.preventDefault()
    }
    f.addEventListener('submit', stopPadrao2)

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
                actionBtnModal()

            } else if(res.data.message === 'Email already Registered') {
                hideLoading(res.data.message)

            } else {
                hideLoading('Sorry, an error occurred try again')
            }
        })
        .catch(err => {
            alert(err)
            console.log('erro: ' + err)
        })
}
