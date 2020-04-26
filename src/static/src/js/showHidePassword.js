
function showHide() {
    const inputPass = document.getElementById('entPass')

    if(inputPass.type == 'password'){
        inputPass.type = 'text'
    }else {
        inputPass.type = 'password'
    }
}