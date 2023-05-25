
let overflow = document.getElementById('overflow')
let overflowEvent = document.getElementById('overflow-event')
let closeBtn = document.getElementById('modal-city-close')
let anchor = document.getElementById('modal-city-anchor')
let output = document.getElementById('modal-city-output')
let cities = document.querySelectorAll('#modal-city-body .modal-city__body-item');

anchor.addEventListener('click', () => {
    openModal()
});

[overflowEvent, closeBtn].forEach(el => {
    el.addEventListener('click', () => {
        closeModal()
    })
})

cities.forEach((el) => {
    el.addEventListener('click', () => {
        let city = el.textContent
        output.textContent = city

        closeModal()
    })
})

function openModal() {
    const fadeIn = (element) => {
        let opacity = 0.1;
        element.style.display = 'block';
        let timer = setInterval(function () {
    
            if (opacity >= 1) {
                clearInterval(timer);
            }
    
            element.style.opacity = opacity;
            element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
            opacity += opacity * 0.1;
    
        }, 10);
    }

    overflow.style.display = 'block'
    fadeIn(overflowEvent)
}

function closeModal() {
    const fadeOut = (element) => {
    
        let opacity = 1;
        let timer = setInterval(function () {
    
            if (opacity <= 0.1) {
                clearInterval(timer);
                overflow.style.display = 'none';
            }
    
            element.style.opacity = opacity;
            element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
            opacity -= opacity * 0.1;
    
        }, 10);
    }
    fadeOut(overflowEvent);
}