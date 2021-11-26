window.addEventListener("load", () => {
    let reference = document.location.href.split('/');

    switch(reference[reference.length - 1]){
        case '':
        case 'index.html':
            document.querySelectorAll('div nav')[0].classList.add('active');
            break;
        case 'galery.html':
            document.querySelectorAll('div nav')[1].classList.add('active');
            break;
        case 'table.html':
            document.querySelectorAll('div nav')[2].classList.add('active');
            break;
        case 'constructor.html':
            document.querySelectorAll('div nav')[3].classList.add('active');
            break;
    }
});