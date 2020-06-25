const upperText = (name) => {
    const arrayName = name.split(' ')
    
    const firstLetter = arrayName.map((e) => e.substring(0, 1).toUpperCase())
    const restName = arrayName.map((e) => e.substring(1, e.lenght).toLowerCase())

    const nameEdited = firstLetter.map((e, f) => `${e}${restName[f]}`)
    const readyName = nameEdited.reduce((nomeFinal, valor) => `${nomeFinal} ${valor}`)


    return readyName
}
