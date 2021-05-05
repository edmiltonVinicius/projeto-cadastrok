
function showHidePassword(id) {
    const inputPass = document.getElementById(id)

    if(inputPass.type == 'password'){
        inputPass.type = 'text'
        inputPass.focus()
    }else {
        inputPass.type = 'password'
        inputPass.focus()
    }
}