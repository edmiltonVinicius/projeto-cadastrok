const previewImage = (event) => {
    const divPreviewImg = document.querySelector('.divPreviewImg')
    const reader = new FileReader()
    
    reader.onload = () => {
        divPreviewImg.classList.remove('d-none')
        setTimeout(() => {
            const imgPreview = document.getElementById('previewImg')
            imgPreview.src = reader.result

        }, 1100);
    }
    
    reader.readAsDataURL(event.target.files[0])
}