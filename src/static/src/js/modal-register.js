function hideLoading(text){
    const bodyModal = document.querySelector('.bodyModal')
    const textModal = document.getElementById('textModal')
    const btnModal = document.getElementById('modal-footer')

    setTimeout(() => {
        bodyModal.style.display='none'
        textModal.innerHTML=text
        textModal.style.display='block'
        btnModal.style.display='block'
    }, 1100);
}

function actionBtnModal() {
    const btnCloseModal = document.getElementById('btnCloseModal')
    btnCloseModal.addEventListener('click', () => {
        document.getElementById('cont').style.display='block'
        document.getElementById('containerForm').style.display='none'
    })
}

