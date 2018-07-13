var contact_json;
var data_user = {};
window.onload = function () {
    contact();
    document.getElementById("add_contact").onclick = function () {
        document.getElementById("user_info").innerHTML = "" +
            "            <div class=\"user_add\" id=\"user_add\">\n" +
            "                <table>\n" +
            "                    <tr>\n" +
            "                        <td>Номер телефона:</td>\n" +
            "                        <td>\n" +
            "                            <input type=\"text\" id=\"phone\">\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Имя:</td>\n" +
            "                        <td>\n" +
            "                            <input type=\"text\" id=\"name\">\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Место:</td>\n" +
            "                        <td>\n" +
            "                            <input type=\"text\" id=\"gps\">\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td>Вк:</td>\n" +
            "                        <td>\n" +
            "                            <input type=\"text\" id=\"vk\">\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">Что знаю:</td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">\n" +
            "                            <textarea class=\"text_info\" id=\"info\"></textarea>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">\n" +
            "                            <div class=\"add_user\" onclick='add_user()' >Добавить</div>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                </table>\n" +
            "            </div>";
    };
    document.getElementById("user_exit").onclick = function () {
        $.ajax({
            type: "POST",
            url: "main/src/ajax/check/session_exit.php",
        }).done(function (result) {
            location.href = "index.php";
        });
    };

};

var contact = function () {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/contact_update.php",
    }).done(function (result) {
        contact_json = JSON.parse(result);
        var phone = "";
        for (let i = 0; i < contact_json.length; i++) {
            //console.log(res[i]['phone']);
            phone += "<div class='phone' >";
            if (contact_json[i]['phone'] == "") {
                phone +=
                    "<a href='" + contact_json[i]['vk'] + "' target='_blank'>" +
                    "<img class='vk_img' src='main/src/img/vk.png'></a>" +
                    "<div class='phone_name'>" + contact_json[i]['vk'];
            }
            else {
                phone +=
                    "<a href='tel:" + contact_json[i]['phone'] + "'>" +
                    "<img src='main/src/img/telefon.png'></a>" +
                    "<div class='phone_name'>" + contact_json[i]['phone'];
            }
            phone +=
                "<br>" + contact_json[i]['name'] + "</div>" +
                "<img class='dot' src='main/src/img/dot_3.png' onclick='get_contact(" + contact_json[i]['id'] + ")'>" +
                "</div>";
        }
        //console.log(result[0]);
        document.getElementById("user_and_phone").innerHTML = phone;
    });
};
var get_contact = function (id) {
    data_user = get_json_contact(id);
    document.getElementById("user_info").innerHTML = "" +
        "            <div class=\"user_add\" >\n" +
        "                <table>\n" +
        "                    <tr>\n" +
        "                        <td>Номер телефона:</td>\n" +
        "                        <td>\n" +
        "                            <input type=\"text\" id=\"phone\" value='" + get_json_contact(id)['phone'] + "'>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td>Имя:</td>\n" +
        "                        <td>\n" +
        "                            <input type=\"text\" id=\"name\" value='" + get_json_contact(id)['name'] + "'>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td>Место:</td>\n" +
        "                        <td>\n" +
        "                            <input type=\"text\" id=\"gps\" value='" + get_json_contact(id)['phone'] + "'>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td>Вк:</td>\n" +
        "                        <td>\n" +
        "                            <input type=\"text\" id=\"vk\" value='" + get_json_contact(id)['vk'] + "'>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td colspan=\"2\">Что знаю:</td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td colspan=\"2\">\n" +
        "                            <textarea class=\"text_info\" id=\"info\">" + get_json_contact(id)['info'] + "</textarea>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td colspan=\"2\">\n" +
        "                            <div class=\"add_user\" onclick='contact_refresh_info(data_user.id)' >Сохранить изменения</div>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                </table>\n" +
        "            </div>";
};
var get_json_contact = function (id) {
    for (let i = 0; i < contact_json.length; i++) {
        if (contact_json[i]['id'] == id) {
            return contact_json[i];
        }
    }
};
var add_user = function () {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/add_contact.php",
        data: {
            phone: document.getElementById("phone"),
            name: document.getElementById("name"),
            gps: document.getElementById("gps"),
            vk: document.getElementById("vk"),
            info: document.getElementById("info")
        },
    }).done(function (result) {

    });
    setTimeout(contact(), 2000);
};
var contact_refresh_info = function (id) {
    // let data = {};
    // data.phone = document.getElementById("phone").value;
    // data.pname = document.getElementById("name").value;
    // data.gps = document.getElementById("gps").value;
    // data.vk = document.getElementById("vk").value;
    // data.info = document.getElementById("info").value;
    let data = get_pole_contact();
    //console.log(contact_info);
    data.id = id;
    console.log(data);
    $.ajax({
        type: "POST",
        url: "main/src/ajax/contact_refresh_info.php",
        data: {
            json: JSON.stringify(data)
        },
    }).done(function (result) {
        console.log(result);
    });
    setTimeout(contact(),2000)
};
var get_pole_contact = function () {
    let data = {};
    data.phone = document.getElementById("phone").value;
    data.name = document.getElementById("name").value;
    data.gps = document.getElementById("gps").value;
    data.vk = document.getElementById("vk").value;
    data.info = document.getElementById("info").value;
    return data;
};
