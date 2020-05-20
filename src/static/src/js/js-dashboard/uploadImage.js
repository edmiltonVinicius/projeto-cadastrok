const submitImage = () => {
    const form = document.getElementById('uploadImage')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    
    const itoken = localStorage.getItem('token')
    const file = document.getElementById('upladoImage').value

    axios.post('/upload', { file: file, headers: { authorization: itoken}})
        .then((res) => {
            console.log(res)
            console.log(res.data)
        })
        .catch((error) => console.log('erro: ' + error))

}