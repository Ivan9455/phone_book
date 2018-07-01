window.onload = function () {
    check_session();
    document.getElementById("status_login").onclick = function () {
        document.getElementById("status_login").classList.add("status");
        document.getElementById("status_registration").classList.remove("status");
        document.getElementById("login_form").classList.remove("hidden");
        document.getElementById("registration_form").classList.add("hidden");

    };
    document.getElementById("status_registration").onclick = function () {
        document.getElementById("status_registration").classList.add("status");
        document.getElementById("status_login").classList.remove("status");
        document.getElementById("registration_form").classList.remove("hidden");
        document.getElementById("login_form").classList.add("hidden");
    };
    document.getElementById("go_login").onclick = function () {
        var email = document.getElementById("email_login").value;
        var password = document.getElementById("password_login").value;
        /*
        if(!email.value){
            email.style.border = "2px solid red";
        }
        if(!password.value){
            password.style.border = "2px solid red";
        }
        */
        $.ajax({
            type: "POST",
            url: "main/src/ajax/check/Login.php",
            data: {email: email, password: password}
        }).done(function (result) {
            console.log(result);
            check_session();
        });

    };
    document.getElementById("go_registration").onclick = function () {

    };
};
var check_session = function () {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/check/session.php",
        data: {}
    }).done(function (result) {
        console.log(result);
        if (result) {
            location.href = "user.php";
        }
    });
}