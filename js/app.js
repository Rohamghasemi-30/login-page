let btn = document.querySelector(".btn");
let emailUser = document.querySelector(".email");
let pas = document.querySelector(".pas");

function addUser() {
    let user = {
        "email": emailUser.value,
        "password": pas.value,
    };

    fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            alert("sorry, something went wrong");
            throw new Error("sorry, something went wrong");
        }
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
}

btn.addEventListener("click", addUser);
