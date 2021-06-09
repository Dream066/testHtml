document.addEventListener('DOMContentLoaded', () => {
    let selector = document.querySelector('.js-input')
    let im = new Inputmask('+7-999-999-99-99')
    im.mask(selector)
})