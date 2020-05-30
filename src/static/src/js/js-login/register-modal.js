const hideLoadingShowResponse = (text) => {
    const bodyModal = document.querySelector('.bodyModal')
    const textModal = document.getElementById('textModal')
    const footerModal = document.getElementById('modal-footer')   

    setTimeout(() => {
        bodyModal.classList.remove('d-block')
        bodyModal.classList.add('d-none')

        textModal.innerHTML=text
        textModal.classList.remove('d-none')
        textModal.classList.add('d-block')

        footerModal.classList.remove('d-none')
        footerModal.classList.add('d-block')
    }, 1100);
}

const btnletsIndex = document.getElementById('letsIndex')
const btnCloseModal = document.getElementById('btnCloseModal')

const returnLogin = () => {
    const containerForm = document.getElementById('containerFormRegister')

    btnletsIndex.classList.remove('d-none')
    btnletsIndex.classList.add('d-block')

    btnletsIndex.addEventListener('click', () => {
        containerForm.classList.remove('d-block')
        containerForm.classList.add('d-none')
    })
}

const closeModal = () => {
    const modalRegister = document.getElementById('modalRegister')

    btnCloseModal.classList.remove('d-none')
    btnCloseModal.classList.add('d-block')

    btnCloseModal.addEventListener('click', () => {
        modalRegister.style.display='none'
    })
}

const hideElements = () => {
    const letsIndex = document.getElementById('letsIndex')
    letsIndex.classList.remove('d-block')
    letsIndex.classList.add('d-none')

    const btnCloseModal = document.getElementById('btnCloseModal')
    btnCloseModal.classList.remove('d-block')
    btnCloseModal.classList.add('d-none')

    const bodyModal = document.querySelector('.bodyModal')
    bodyModal.classList.remove('d-none')
    bodyModal.classList.add('d-block')

    const textModal = document.getElementById('textModal')
    textModal.classList.remove('d-block')
    textModal.classList.add('d-none')

    const modalFooter = document.getElementById('modal-footer')
    modalFooter.classList.remove('d-block')
    modalFooter.classList.add('d-none')
}