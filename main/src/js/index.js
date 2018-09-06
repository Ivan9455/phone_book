window.onload = function () {
    check_session();
    document.getElementById("status_login").onclick = function () {
        document.getElementById("status_login").classList.add("status");
        document.getElementById("status_registration").classList.remove("status");
        document.getElementById("login_form").classList.remove("hidden");
        document.getElementById("registration_form").classList.add("hidden");
        document.getElementById("forgot_form").classList.add("hidden");
    };
    document.getElementById("status_registration").onclick = function () {
        document.getElementById("status_registration").classList.add("status");
        document.getElementById("status_login").classList.remove("status");
        document.getElementById("registration_form").classList.remove("hidden");
        document.getElementById("login_form").classList.add("hidden");
        document.getElementById("forgot_form").classList.add("hidden");
    };
    document.getElementById("forgot").onclick = function () {
        document.getElementById("status_registration").classList.remove("status");
        document.getElementById("status_login").classList.remove("status");
        document.getElementById("registration_form").classList.add("hidden");
        document.getElementById("login_form").classList.add("hidden");
        document.getElementById("forgot_form").classList.remove("hidden");
    };
    document.getElementById("go_login").onclick = function () {
        let data = {};
        let email = document.getElementById("email_login");
        let password = document.getElementById("password_login");
        data.email = email.value;
        data.password = password.value;
        if (email.value === "") {
            email.style.border = "2px solid red";
        }
        if (password.value === "") {
            password.style.border = "2px solid red";
        }
        console.log(data);
        $.ajax({
            type: "POST",
            url: "main/src/ajax/check/Login.php",
            data: {
                json: JSON.stringify(data)
            }
        }).done(function (result) {
            console.log(JSON.parse(result));
            if (JSON.parse(result).id) {
                check_session();
            }

        });

    };
    document.getElementById("go_registration").onclick = function () {
        let data = {};
        data.email = document.getElementById("email_registration").value;
        data.password = document.getElementById("password_registration").value;
        // let password2 = document.getElementById("password_registration2").value;
        // if (data.password !== password2) {
        //     alert("Пароли не совпадают!");
        //     return;
        // }
        //добавить проверку
        $.ajax({
            type: "POST",
            url: "main/src/ajax/check/Registration.php",
            data: {
                json: JSON.stringify(data)
            }
        }).done(function (result) {
            if (result) {
                alert("Пользователь успешно зарегистрирован!");
            }
            else {
                alert("Пользователь с таким email уже зарегистрирован!")
            }
            console.log(result);
        });
    };
    document.getElementById("go_forgot").onclick = function () {
        let email = document.getElementById("email_forgot").value;
        console.log(email);
        $.ajax({
            type: "POST",
            url: "main/src/ajax/forgot_password.php",
            data: {
                email: email
            }
        }).done(function (result) {
            console.log(result);
            if (result) {
                alert("Новый пароль был отправлен вам на почту!")
            }
        });
    }
};

const check_session = function () {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/check/session.php",
        data: {}
    }).done(function (result) {
        console.log(JSON.parse(result));
        if (JSON.parse(result).id) {
            location.href = "user.php";
        }
    });
}