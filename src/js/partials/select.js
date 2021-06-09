document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('.js-select')
    const selectList = document.querySelector('.js-select-list')
    console.log('work')

    select.addEventListener('click', function (e) {
        e.preventDefault()
        select.classList.toggle('active')
        selectList.classList.toggle('active')
    })
})