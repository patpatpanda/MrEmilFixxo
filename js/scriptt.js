const arrow = document.querySelector('#totop-arrow')
arrow.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: "smooth"})
})