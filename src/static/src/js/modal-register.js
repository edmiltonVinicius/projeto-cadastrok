function hideLoading(text){
    const bodyModal = document.querySelector('.bodyModal')
    const textModal = document.getElementById('textModal')
    const btnModal = document.getElementById('modal-footer')

    bodyModal.style.display='none'
    textModal.innerHTML=text
    btnModal.style.display='block'
}

