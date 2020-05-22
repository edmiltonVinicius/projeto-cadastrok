const submitImage = () => {
    const form = document.getElementById('uploadImage')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    
    const itoken = sessionStorage.getItem('token')

    axios({
        method: 'post',
        url: '/upload', 
        data: new FormData(form),
        headers: { 
            authorization: itoken,
            'Content-Type': 'multipart/form-data'
        }})
        .then((res) => {
            console.log('resposta: ' + res)
            console.log(res.data)
        })
        .catch((error) => console.log('erro: ' + error))

}