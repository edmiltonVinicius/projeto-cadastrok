const updateFirstAccess = () => {
    const itoken = sessionStorage.getItem('token')
    const divWelcome = document.querySelector('.divContainerWelcome')

    divWelcome.classList.remove('d-block')
    divWelcome.classList.add('d-none')

    axios({
        method: 'patch',
        url: 'dashboard/firstAccess',
        headers: {
            authorization: itoken
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    
}