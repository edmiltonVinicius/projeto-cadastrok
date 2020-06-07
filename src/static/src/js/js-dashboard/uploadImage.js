const submitImage = () => {
    const form = document.getElementById('uploadImage')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    
    const itoken = sessionStorage.getItem('token')
    const clearInputAndDiv = document.getElementById('clearInputAndDiv')
    const gifUpload = document.getElementById('gifUpload')
    const iconRight = document.getElementById('iconRight')

    clearInputAndDiv.classList.remove('d-block')
    clearInputAndDiv.classList.add('d-none')

    gifUpload.classList.remove('d-none')
    gifUpload.classList.add('d-inline')
    axios({
        method: 'post',
        url: '/upload', 
        data: new FormData(form),
        headers: { 
            authorization: itoken,
            'Content-Type': 'multipart/form-data'
        }})
        .then((res) => {
            gifUpload.classList.remove('d-inline')
            gifUpload.classList.add('d-none')

            iconRight.classList.remove('d-none')
            iconRight.classList.add('d-inline')

            setTimeout(() => {
                document.getElementById('dropDrownNav').src=res.data
                document.getElementById('imgUser').src=res.data
                showHideDivUplad('.divUpload', '.divBtnsCrud')
                
            }, 1100);
        })
        .catch((error) => console.log('erro: ' + error))

}