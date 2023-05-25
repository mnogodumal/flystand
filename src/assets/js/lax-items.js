import lax from 'lax.js'

window.addEventListener('load', () => {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.lax-item', {
        scrollY: {
            rotate: [
                ["0", "pageHeight/2", "pageHeight"],
                [0, '90', '180'],
            ]
        }
    })
})