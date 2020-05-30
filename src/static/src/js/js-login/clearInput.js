const clearInput = (...id) => {
    id.forEach((e) => {
        let elem = document.getElementById(e)
        elem.value=''
        elem.style.background='none'
        elem.classList.add('border-light')
    })
}