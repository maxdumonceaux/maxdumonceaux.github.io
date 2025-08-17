window.addEventListener('load', () => {
    if (-1 !== window.location.search.indexOf('allow-access=1')) {
        const toggleUnderConstruction : Element|null = document.querySelector('[for="toggle-under-construction"]')
        if (null !== toggleUnderConstruction) {
            toggleUnderConstruction.classList.remove('d-none')
            toggleUnderConstruction.classList.add('d-flex')
        }
    }

    const navMenuItems : NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.menu a[href^="#"]')

    const intersectionObserver = new IntersectionObserver(entries => {
        navMenuItems.forEach(navMenuItem => navMenuItem.parentElement!.classList.remove('current'))
        const entitiesInViewport = entries.filter(entry => entry.isIntersecting)
        if (!entitiesInViewport.length) {
            return
        }

        const entityInViewport = entitiesInViewport[entitiesInViewport.length - 1]

        navMenuItems.forEach(navMenuItem => {
            if (-1 !== navMenuItem.href.indexOf((entityInViewport.target as HTMLAnchorElement).id)) {
                navMenuItem.parentElement!.classList.add('current')
            }
        })
    }, {
        threshold: 1.0
    })
    document.querySelectorAll("a[name]").forEach(sectionBoundary => intersectionObserver.observe(sectionBoundary))

    window.addEventListener('scroll', () => {
        if (10 < window.scrollY) {
            document.documentElement!.classList.add('scrolled')
        } else {
            document.documentElement!.classList.remove('scrolled')
        }
    })
})