class Burger {
    constructor(obj) {
        this.createAnchor(obj.anchor)
        this.createOverflow()
        this.replaceNavbar(obj.node)

        console.log('burger menu registered')

    }

    createAnchor(anchor) {
        this.anchor = new Object()
        this.anchor.wrapper = anchor

        this.anchor.button = document.createElement('button')
        this.anchor.button.classList.add('burger-anchor')

        for (let i = 0; i < 3; i++) {
            let span = document.createElement('span')
            span.classList.add('burger-anchor__span')
            this.anchor.button.append(span)
        }

        this.anchor.wrapper.append(this.anchor.button)

        let listener
        this.anchor.button.addEventListener('click', listener = () => {
            console.log(this)
            this.open();
        })


        this.anchor.toTop = () => {
            let c = this.anchor.button.getBoundingClientRect()
            let top = c.top + document.body.scrollTop
            let left = c.left
            this.anchor.button.style.top = top + 'px'
            this.anchor.button.style.left = left + 'px'

            document.querySelector('.header').style.position = 'static'
            document.querySelector('.header .container').style.position = 'static'
            this.anchor.wrapper.style.position = 'static'
            this.anchor.button.classList.add('burger-anchor-active')


            this.anchor.button.removeEventListener('click', listener)
            this.anchor.button.addEventListener('click', listener = () => {
                this.close();
            })
        }

        this.anchor.toDefault = () => {
            document.querySelector('.header').style.position = 'relative'
            document.querySelector('.header .container').style.position = 'relative'
            this.anchor.wrapper.style.position = 'relative'
            this.anchor.button.classList.remove('burger-anchor-active')

            this.anchor.button.removeAttribute('style')

            this.anchor.button.removeEventListener('click', listener)
            this.anchor.button.addEventListener('click', listener = () => {
                this.open();
            })
        }
    }

    createOverflow() {
        this.overflow = document.createElement('div')
        this.overflow.classList.add('overflow')
        this.overflow.event = document.createElement('div')
        this.overflow.event.classList.add('overflowEvent')

        this.overflow.append(this.overflow.event)
        document.body.append(this.overflow)
    }

    replaceNavbar(node) {
        this.navbar = node
        this.navbar.classList.display = 'block'
        this.navbar.container = this.navbar.children[0]

        this.navbar.classList.display

        this.overflow.append(this.navbar)
    }

    open() {
        function fadeIn(el) {
            let opacity = 0.1;
            el.overflow.event.style.display = 'block';
            let timer = setInterval(function () {

                if (opacity >= 1) {
                    if (!el.navbar.classList.contains('burger-active')) {
                        el.navbar.classList.add('burger-active')
                        el.anchor.toTop()
                    }
                    clearInterval(timer)
                }

                el.overflow.event.style.opacity = opacity
                el.overflow.event.style.filter = 'alpha(opacity=' + opacity * 100 + ")"
                opacity += opacity * 0.1

            }, 10)
        }

        this.overflow.style.display = 'block'
        fadeIn(this)
    }
    close() {
        const fadeOut = (el) => {

            let opacity = 1;
            let timer = setInterval(function () {

                if (opacity <= 0.1) {
                    clearInterval(timer)
                    el.style.display = 'none'
                }

                el.event.style.opacity = opacity;
                el.event.style.filter = 'alpha(opacity=' + opacity * 100 + ")"
                opacity -= opacity * 0.1

            }, 10)
        }

        if (this.navbar.classList.contains('burger-active')) {
            this.navbar.classList.remove('burger-active')
            this.anchor.toDefault()
        }
        fadeOut(this.overflow)
    }
}

let media = window.matchMedia('(max-width: calc(768px - 1px))')

if (media.matches) {

    let burger = new Burger({
        node: document.querySelector('.navbar'),
        anchor: document.querySelector('#header .header__column:nth-child(1)')
    })

}