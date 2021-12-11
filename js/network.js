function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
            res.slice(0,4).forEach(user => {
                let userName = document.createElement('div');
                userName.className ='box';

                let userUsername = document.createElement('div');
                userUsername.className ='box';

                let userPhone = document.createElement('div');
                userPhone.className ='box';

                let userCompany = document.createElement('div');
                userCompany.className ='box';

                userName.innerText=user.name;
                userUsername.innerText=user.username;
                userPhone.innerText=user.phone;
                userCompany.innerText=user.company.name;

                document.querySelector("section.loaded_table div.grid").append(userName);
                document.querySelector("section.loaded_table div.grid").append(userUsername);
                document.querySelector("section.loaded_table div.grid").append(userPhone);
                document.querySelector("section.loaded_table div.grid").append(userCompany);
            })
        })
}

window.addEventListener("load", () => {
    setTimeout(users, 2000);
});
