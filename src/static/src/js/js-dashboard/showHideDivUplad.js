const showHideDivUplad = (hide, show, efect) => {
    const divHide = document.querySelector(hide)
    const divShow = document.querySelector(show)
    const divEfect = document.querySelector(efect)

    if(efect){
        divHide.classList.remove('d-block')
        divHide.classList.add('d-none')
        document.getElementById('upladoImage').value=''
        divEfect.classList.remove('d-none')
        divEfect.classList.add('d-block')
        setTimeout(() => {
            divEfect.classList.remove('d-block')
            divEfect.classList.add('d-none')
            divShow.classList.remove('d-none')
            divShow.classList.add('d-block')
        }, 1500);
    }else {
        const divLoadingUpload = document.querySelector('.loadingUpload')
        divLoadingUpload.classList.remove('d-block')
        divLoadingUpload.classList.add('d-none')

        const divPreviewImg = document.querySelector('.divPreviewImg')
        divPreviewImg.classList.remove('d-block')
        divPreviewImg.classList.add('d-none')

        document.getElementById('previewImg').classList.add('d-none')
        document.getElementById('upladoImage').value=''

        divHide.classList.remove('d-block')
        divHide.classList.add('d-none')
        divShow.classList.remove('d-none')
        divShow.classList.add('d-block')
    }
}