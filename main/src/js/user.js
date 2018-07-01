var contact_json;
window.onload = function () {
    contact();
    document.getElementById("user_exit").onclick = function () {
        $.ajax({
            type: "POST",
            url: "main/src/ajax/check/session_exit.php",
        }).done(function (result) {
            location.href = "index.php";
        });
    };
    document.getElementById("add_user").onclick = function () {
        var phone = document.getElementById("phone").value;
        var name = document.getElementById("name").value;
        var gps = document.getElementById("gps").value;
        var vk = document.getElementById("vk").value;
        var info = document.getElementById("info").value;
        console.log(phone, name, gps, vk, info);
        $.ajax({
            type: "POST",
            url: "main/src/ajax/add_contact.php",
            data: {phone: phone, name: name, gps: gps, vk: vk, info: info},
        }).done(function (result) {
            console.log(result);
        });
    }

};

var contact = function () {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/contact_update.php",
    }).done(function (result) {
        contact_json = JSON.parse(result);
        var phone = "";
        for (let i = 0; i < res.length; i++) {
            //console.log(res[i]['phone']);
            phone +=
                "<div class='phone' >" +
                "<a href='tel:" + res[i]['phone'] + "'><img src='main/src/img/telefon.png'></a>" +
                "<div class='phone_name'>" + res[i]['phone'] + "<br>" + res[i]['name'] + "</div>" +
                "<img class='dot' src='main/src/img/dot_3.png' onclick='get_contact(" + res[i]['id'] + ")'>" +
                "</div>";
        }
        //console.log(result[0]);
        document.getElementById("user_and_phone").innerHTML = phone;
    });
};
var get_contact = function (id) {
    console.log(id);
};