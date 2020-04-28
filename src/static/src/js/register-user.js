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

    let userName = document.getElementById('entName').value
    let userPassword = document.getElementById('entPass').value
    let userEmail = document.getElementById('entEmail').value

    axios.post('/register', { userName, userPassword, userEmail })
        .then((res) => {
            if((res.status === 200) && (res.data.message === 'User created')){
                clearInput('entName')
                clearInput('entEmail')
                clearInput('entPass')
                alert(res.data.message)
            }else if(res.data.message === 'Email already Registered') {
                alert(res.data.message)
            }
        })
        .catch(err => {
            alert(err)
            console.log('erro: ' + err)
        })
}
