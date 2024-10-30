const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS('--secundary-color'),
    size: 16,
    family: getCSS('--font')
}

export { getCSS, tickConfig }