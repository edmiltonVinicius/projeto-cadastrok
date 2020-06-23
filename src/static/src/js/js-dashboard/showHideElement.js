const showElement = (element) => {
    const elemento = document.getElementById(element) || document.querySelector(element)
    elemento.classList.remove('d-none')
    elemento.classList.add('d-block')
}

const showElementInline = (element) => {
    const elemento = document.getElementById(element) || document.querySelector(element)
    elemento.classList.remove('d-none')
    elemento.classList.add('d-inline')
}

const hideElement = (element) => {
    const elemento = document.getElementById(element) || document.querySelector(element)
    elemento.classList.remove('d-block')
    elemento.classList.remove('d-inline')
    elemento.classList.add('d-none')
}

