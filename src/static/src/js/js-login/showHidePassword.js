
function showHidePassword(id) {
    const inputPass = document.getElementById(id)

    if(inputPass.type == 'password'){
        inputPass.type = 'text'
    }else {
        inputPass.type = 'password'
    }
}