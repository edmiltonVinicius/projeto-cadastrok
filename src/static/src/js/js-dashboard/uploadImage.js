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
            authorization: itoken
        }})
        .then((res) => {
            document.getElementById('dropDrownNav').src=res.data
            document.getElementById('imgUser').src=res.data
            showHideDivUplad('.divUpload', '.divBtnsCrud')
        })
        .catch((error) => console.log('erro: ' + error))

}