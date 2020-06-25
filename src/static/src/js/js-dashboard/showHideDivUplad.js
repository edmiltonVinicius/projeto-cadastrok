const showHideDivUplad = (efect, show, hide) => {
    // Array de elementos para esconder
    const divsHide = hide
    //Array de elementos para mostrar
    const divsShow = show
    
    const inputFile = document.getElementById('upladoImage')
    const previewImg = document.getElementById('previewImg')
    
    hideElement('gifUpload')
    hideElement('iconRightUpload')

    if(efect){
        divsHide.forEach(e => hideElement(e))
        
        inputFile.value=''
        hideElement('.divPreviewImg')
        previewImg.classList.add('d-none')
        clearInputAndDiv.classList.add('d-none')
        
        showElement(efect)
        
        setTimeout(() => {
            hideElement(efect)
            divsShow.forEach(e => showElement(e))
        }, 1500);
         
    } else {
        hideElement('.loadingUpload')
        hideElement('.divPreviewImg')

        inputFile.value=''
        previewImg.classList.add('d-none')
        clearInputAndDiv.classList.add('d-none')

        divsHide.forEach(e => hideElement(e))
        divsShow.forEach(e => showElement(e))
        
    }
}