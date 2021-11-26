(() => {
    window.addEventListener("load", () => {
        let data = document.querySelector("#form");
        data.addEventListener("submit", () => {
            let lessons = parseInt(data.querySelector('select[name="lessons"]').value)
            let days = parseInt(data.querySelector('select[name="days"]').value)
            console.log(lessons)


            const divElement = document.createElement('div');
            divElement.innerHTML = `<strong>${lessons} lessons ${days}</strong>`;
            data.appendChild(divElement);

        })
    })
})();