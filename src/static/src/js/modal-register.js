function hideLoading(text){
    const bodyModal = document.querySelector('.bodyModal')
    const textModal = document.getElementById('textModal')
    const footerModal = document.getElementById('modal-footer')
    const btnletsIndex = document.getElementById('letsIndex')

    setTimeout(() => {
        bodyModal.style.display='none'
        textModal.innerHTML=text
        textModal.style.display='block'
        // btnletsIndex.style.display='block'
        footerModal.style.display='block'
    }, 1100);
}

function actionfooterModal() {
    const btnletsIndex = document.getElementById('letsIndex')
    btnletsIndex.style.display='block'
    btnletsIndex.addEventListener('click', () => {
        document.getElementById('cont').style.display='block'
        document.getElementById('containerForm').style.display='none'
    })
}

function closeModal() {
    document.getElementById('letsIndex').style.display='none'
    document.getElementById('btnCloseModal').style.display='block'
    const btnCloseModal = document.getElementById('btnCloseModal')
    btnCloseModal.addEventListener('click', () => {
        document.getElementById('modalRegister').style.display='none'
    })
}

