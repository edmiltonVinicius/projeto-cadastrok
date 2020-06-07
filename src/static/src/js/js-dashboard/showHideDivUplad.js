const showHideDivUplad = (hide, show, efect) => {
    const divHide = document.querySelector(hide)
    const divShow = document.querySelector(show)
    const divEfect = document.querySelector(efect)
    
    const inputFile = document.getElementById('upladoImage')
    const divLoadingUpload = document.querySelector('.loadingUpload')
    const divPreviewImg = document.querySelector('.divPreviewImg')
    const previewImg = document.getElementById('previewImg')
    
    const iconRight = document.getElementById('iconRight')
    const gifUpload = document.getElementById('gifUpload')

    gifUpload.classList.remove('d-inline')
    gifUpload.classList.add('d-none')

    iconRight.classList.remove('d-inline')
    iconRight.classList.add('d-none')
    

    if(efect){
        divShow.classList.remove('d-block')
        divShow.classList.add('d-none')
        
        divHide.classList.remove('d-block')
        divHide.classList.add('d-none')

        inputFile.value=''
        divPreviewImg.classList.remove('d-block')
        divPreviewImg.classList.add('d-none')
        previewImg.classList.add('d-none')
        clearInputAndDiv.classList.add('d-none')
        
        divEfect.classList.remove('d-none')
        divEfect.classList.add('d-block')

        setTimeout(() => {
            divEfect.classList.remove('d-block')
            divEfect.classList.add('d-none')
            divShow.classList.remove('d-none')
            divShow.classList.add('d-block')
        }, 1500);
         
    } else {
        divLoadingUpload.classList.remove('d-block')
        divLoadingUpload.classList.add('d-none')

        divPreviewImg.classList.remove('d-block')
        divPreviewImg.classList.add('d-none')

        inputFile.value=''
        previewImg.classList.add('d-none')
        clearInputAndDiv.classList.add('d-none')

        if(divHide || divShow){
            divHide.classList.remove('d-block')
            divHide.classList.add('d-none')
    
            divShow.classList.remove('d-none')
            divShow.classList.add('d-block')
        }
    }
}