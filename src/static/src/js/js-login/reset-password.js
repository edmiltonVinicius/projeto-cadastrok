const buttonSendEmail = document.getElementById('send-form-reset-password')
const divResponse = document.getElementById('div-response')

if(buttonSendEmail) {
    buttonSendEmail.addEventListener('click', (e) => {
        e.preventDefault()
        const mailuserResetPassword = document.getElementById('email-reset-password')

        if(mailuserResetPassword.value != undefined && mailuserResetPassword.value != '') {
            axios.post('/reset-password', {mailuserResetPassword: mailuserResetPassword.value})
                .then(res => {
                    if(!res.data.error) {
                        showResponse(res.data.message)
                        mailuserResetPassword.value=''
                        document.querySelector('#backHome > p').classList.add('d-none')
                        document.querySelector('#backHome > a').classList.remove('d-none')
                        document.querySelector('#backHome > a').classList.add('d-block')
                    }
                })
                .catch(error => {
                    showResponse(error.response.data.message)
                    mailuserResetPassword.focus()
                    hideResponseWithClickInput('email-reset-password')
                })      

        } else {
            showResponse('Please insert data valid')
            hideResponseWithClickInput('email-reset-password')
        }
    })
}

function showResponse(response) {
    divResponse.innerHTML=response
    divResponse.classList.add('alert', 'alert-danger', 'mt-3', 'position-absolute', 'w-100')
}

function hideResponse() {
    divResponse.classList.remove('position-absolute', 'w-100', 'alert', 'alert-danger', 'mt-3')
    divResponse.innerHTML=''
}

function hideResponseWithClickInput(element){
    document.getElementById(element).addEventListener('click', (e) => {
        hideResponse()
    })
}