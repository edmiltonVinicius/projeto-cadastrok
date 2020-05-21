const submitImage = () => {
    const form = document.getElementById('uploadImage')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    
    const itoken = sessionStorage.getItem('token')
    const file = document.getElementById('upladoImage').value

    axios.post('/upload', {data:file}, {headers: { authorization: itoken}})
        .then((res) => {
            console.log('resposta: ' + res)
            console.log(res.data)
        })
        .catch((error) => console.log('erro: ' + error))

}