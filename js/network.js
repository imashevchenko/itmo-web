function users() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
            shuffleArray(res);
            res.slice(0,4).forEach(user => {

                document.querySelector("section.loaded_table div.grid").append(boxBuilder(user.username));
                document.querySelector("section.loaded_table div.grid").append(boxBuilder(user.phone));
                document.querySelector("section.loaded_table div.grid").append(boxBuilder(user.company.name));
                document.querySelector("section.loaded_table div.grid").append(boxBuilder(user.username));
            })
        })
        .catch(() => {
            document.querySelector('.error').style.display = 'block';
        })
        .finally(() => {
            document.querySelector('.load').style.display = 'none';
        })

}

window.addEventListener("load", () => {
    setTimeout(users, 2000);
});

function boxBuilder(innerText) {
    let tmp = document.createElement('div');
    tmp.className = 'box';
    tmp.innerText = innerText;
    return tmp;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}