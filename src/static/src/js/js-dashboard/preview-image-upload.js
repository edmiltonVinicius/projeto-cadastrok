const previewImage = (event) => {
    const divPreviewImg = document.querySelector('.divPreviewImg')
    const clearInputAndDiv = document.getElementById('clearInputAndDiv')
    const gifUpload = document.getElementById('gifUpload')
    const reader = new FileReader()
    
    gifUpload.classList.remove('d-inline')
    gifUpload.classList.add('d-none')

    reader.onload = () => {
        divPreviewImg.classList.remove('d-none')
        setTimeout(() => {
            const imgPreview = document.getElementById('previewImg')
            imgPreview.src = reader.result
            imgPreview.classList.remove('d-none')
            clearInputAndDiv.classList.remove('d-none')

        }, 900);
    }
    
    reader.readAsDataURL(event.target.files[0])
}