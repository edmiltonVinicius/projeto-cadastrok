

function createUser() {
    const f = document.getElementById('for')
    function stopPadrao2(event) {
        event.preventDefault()
    }
    f.addEventListener('submit', stopPadrao2)

    const userName = document.querySelector('[name=userName]').value
    const userPassword = document.querySelector('[name=userPassword]').value
    const userEmail = document.querySelector('[name=userEmail]').value

    axios.post('/register', { userName, userPassword, userEmail })
        .then((res) => {
            alert(res.data.message)
            console.log(res.data)
        })
        .catch(err => alert(err.data.message))
}