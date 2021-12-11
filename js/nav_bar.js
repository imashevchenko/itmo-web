window.addEventListener("load", () => {
    let reference = document.location.href.split('/');

    document.querySelectorAll('div nav').forEach(nav_element => {
        if (reference[reference.length - 1].includes(nav_element.firstElementChild.getAttribute("href")))
            nav_element.classList.add('active');
    })
});