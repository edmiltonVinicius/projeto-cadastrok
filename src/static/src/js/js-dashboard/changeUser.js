const showHideDivUplado = (hide, show) => {
    const divHide = document.querySelector(hide)
    const divShow = document.querySelector(show)

    divHide.classList.remove('d-block')
    divHide.classList.add('d-none')
    divShow.classList.remove('d-none')
    divShow.classList.add('d-block')

}