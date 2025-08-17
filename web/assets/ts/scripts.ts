window.addEventListener('load', () => {
    if (-1 !== window.location.search.indexOf('allow-access=1')) {
        const toggleUnderConstruction : Element|null = document.querySelector('[for="toggle-under-construction"]')
        if (null !== toggleUnderConstruction) {
            toggleUnderConstruction.classList.remove('d-none')
            toggleUnderConstruction.classList.add('d-flex')
        }
    }
})