const submitImage = () => {
    const form = document.getElementById('uploadImage')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    
    const itoken = sessionStorage.getItem('token')

    hideElement('clearInputAndDiv')
    hideElement('.divErrorUpload')

    showElementInline('gifUpload')

    axios({
        method: 'post',
        url: '/upload', 
        data: new FormData(form),
        headers: { 
            authorization: itoken,
            'Content-Type': 'multipart/form-data'
        }})
        .then((res) => {
            hideElement('gifUpload')
            showElementInline('iconRightUpload')

            setTimeout(() => {
                document.getElementById('dropDrownNav').src=res.data
                document.getElementById('imgUser').src=res.data
                document.querySelector('.card-img-top').src=res.data
                showHideDivUplad(null, ['.divBtnsCrud', '.cardPanelContainer'], ['.divUpload'])
                
            }, 1100);
        })
        .catch((error) => {
            const textErrorUpload = document.querySelector('.textErrorUpload')

            textErrorUpload.innerHTML='Error, please try again.'
            showElement('.divErrorUpload')
            
        })

}