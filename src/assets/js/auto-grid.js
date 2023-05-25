window.addEventListener('load', () => {
    let titles = document.querySelectorAll('#grid-cards .about__item-title')
    let glass = document.querySelectorAll('#grid-cards .about__item-glass')
    let text = document.querySelectorAll('#grid-cards .about__item-text')

    equalHeight(titles)
    equalHeight(glass)
    equalHeight(text)


})


function equalHeight(el) {
    let max = 0;
    el.forEach(item => {
        if (item.clientHeight >= max) {
            max = item.clientHeight
        }
    })

    el.forEach(item => {
        item.style.height = max + 'px'
    })

}