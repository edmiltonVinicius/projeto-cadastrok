function hideLoading(text){
    const bodyModal = document.querySelector('.bodyModal')
    const textModal = document.getElementById('textModal')
    const footerModal = document.getElementById('modal-footer')

   

    setTimeout(() => {
        bodyModal.style.display='none'
        textModal.innerHTML=text
        textModal.style.display='block'
        footerModal.style.display='block'
    }, 1100);
}

const btnletsIndex = document.getElementById('letsIndex')
const btnCloseModal = document.getElementById('btnCloseModal')

function returnLogin() {
    const containerForm = document.getElementById('containerForm')

    btnletsIndex.style.display='block'
    btnletsIndex.addEventListener('click', () => {
        containerForm.classList.add('d-none')
    })
}

function closeModal() {
    btnCloseModal.style.display='block'
    btnCloseModal.addEventListener('click', () => {
        document.getElementById('modalRegister').style.display='none'
    })
}

