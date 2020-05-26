const previewImage = (event) => {
    const divPreviewImg = document.querySelector('.divPreviewImg')
    const clearInputAndDiv = document.getElementById('clearInputAndDiv')
    const reader = new FileReader()
    
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