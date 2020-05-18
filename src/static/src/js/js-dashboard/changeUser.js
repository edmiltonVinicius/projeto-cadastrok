const uploadImage = () => {
    const divBtnsCrud = document.querySelector('.divBtnsCrud')
    const divEdit = document.querySelector('.divEdit')

    divBtnsCrud.classList.add('d-none')
    divEdit.classList.remove('d-none')
    divEdit.classList.add('d-block')

}