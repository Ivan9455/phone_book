let contact_json = {};//json данных о контактах
let user_data = {};//данных пользователя
let data_user = {};//данные контактов пользователя
let windowWidth;

window.onload = function () {
    document.getElementById("content").classList.add("hidden");
    check_session();
    windowWidth = document.documentElement.clientWidth;
    // console.log(user_data);
    // load_user_settings();
    // console.log(user_data);
    document.getElementById("add_contact").onclick = function () {
        if (windowWidth < 768) {
            document.getElementById("user_and_phone").classList.add("hidden");
            document.getElementById("user_info").classList.remove("hidden");
            console.log(windowWidth);
        }
        document.getElementById("user_info").innerHTML = "" +
            "            <div class=\"user_add\" id=\"user_add\">\n" +
            "                <div class='col-12 hidden-768 block_back-768'>" +
            "                    <div class='back' onclick='back()'>" +
            "                       <img class='back_img' src='main/src/img/back.png'/>" +
            "                    </div>" +
            "                </div>" +
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
            "                            <textarea class=\"text_info\" id=\"info\" maxlength='1024'></textarea>\n" +
            "                        </td>\n" +
            "                    </tr>\n" +
            "                    <tr>\n" +
            "                        <td colspan=\"2\">\n" +
            "                            <div class=\"add_user\" onclick='add_user()' >Добавить</div>\n" +
            "                        </td>\n" +
            "                   </tr>" +
            "                </table>" +
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

let contact = function () {
    $.ajax({
        type: "POST",
        data: {
            id: user_data.id
        },
        url: "main/src/ajax/contact_update.php",
    }).done(function (result) {
        contact_json = JSON.parse(result);
        let phone = "";
        for (let i = 0; i < contact_json.length; i++) {
            //console.log(res[i]['phone']);
            phone += "<div class='phone' >";
            if (contact_json[i]['phone'] == "") {
                phone +=
                    "<a href='" + contact_json[i]['vk'] + "' target='_blank'>" +
                    "<img class='vk_img' src='main/src/img/vk.png'></a>" +
                    "<div class='phone_name text-center'>" + contact_json[i]['vk'];
            }
            else {
                phone +=
                    "<a href='tel:" + contact_json[i]['phone'] + "'>" +
                    "<img src='main/src/img/telefon.png'></a>" +
                    "<div class='phone_name text-center'>" + contact_json[i]['phone'];
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
let get_contact = function (id) {
    data_user = get_json_contact(id);
    if (windowWidth < 768) {
        document.getElementById("user_and_phone").classList.add("hidden");
        document.getElementById("user_info").classList.remove("hidden");
        console.log(windowWidth);
    }
    document.getElementById("user_info").innerHTML = "" +
        "            <div class=\"user_add\" >\n" +
        "                <div class='col-12 block_back'>" +
        "                    <div class='contact_del float-left col-4' onclick='contact_del(data_user.id)'>Удалить</div>" +
        "                    <div class='contact_hidden float-left col-4' onclick='contact_hidden(data_user.id)'>Скрыть</div>" +
        "                    <div class='back hidden-768' onclick='back()'>" +
        "                       <img class='back_img' src='main/src/img/back.png'/>" +
        "                    </div>" +
        "                </div>" +
        "                <table>\n" +
        "                    <tr>\n" +
        "                        <td>Номер телефона:</td>\n" +
        "                        <td>\n" +
        "                            <input type=\"text\" id=\"phone\" value='" + get_json_contact(id)['phone'] + "'>" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td>Имя:</td>\n" +
        "                        <td>\n" +
        "                            <input type=\"text\" id=\"name\" value='" + get_json_contact(id)['name'] + "'>" +
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
        "                            <textarea class=\"text_info\" id=\"info\" maxlength='1024'>" + get_json_contact(id)['info'] + "</textarea>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                    <tr>\n" +
        "                        <td colspan=\"2\">\n" +
        "                            <div class=\"add_user\" onclick='contact_refresh_info(data_user.id)' >Сохранить изменения</div>\n" +
        "                        </td>\n" +
        "                    </tr>\n" +
        "                </table>\n" +
        "<div>" +
        "<textarea class='text_info h_comment' id='comment' maxlength='1024'></textarea>" +
        "<div class=\"add_user\" onclick=\"addComment(data_user.id)\">Добавтить коментарий</div> " +
        "<div id='comments'></div>" +
        "</div> " +
        "            </div>";
    load_comment(data_user.id);

};
let get_json_contact = function (id) {
    for (let i = 0; i < contact_json.length; i++) {
        if (contact_json[i]['id'] == id) {
            return contact_json[i];
        }
    }
};
let add_user = function () {
    let data = get_pole_contact();
    data.id_user = user_data.id;
    console.log(data);
    $.ajax({
        type: "POST",
        url: "main/src/ajax/add_contact.php",
        data: {
            json: JSON.stringify(data)
        },
    }).done(function (result) {
        console.log(result);
        if (result) {
            contact();
        }
    });
    back();
};
let contact_refresh_info = function (id) {
    let data = get_pole_contact();
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
        if (result) {
            contact();
        }
    });
};
let get_pole_contact = function () {
    let data = {};
    data.phone = document.getElementById("phone").value;
    data.name = document.getElementById("name").value;
    data.gps = document.getElementById("gps").value;
    data.vk = document.getElementById("vk").value;
    data.info = document.getElementById("info").value;
    return data;
};
let addComment = function (id) {
    let data = {};
    data.id = id;
    data.comment = document.getElementById("comment").value;
    data.date = new Date().valueOf();
    console.log(data);
    $.ajax({
        type: "POST",
        url: "main/src/ajax/add_comment.php",
        data: {
            json: JSON.stringify(data)
        },
    }).done(function (result) {
        if (result) {
            load_comment(id);
        }
    });
    document.getElementById("comment").value = "";
}
let load_comment = function (id) {
    let commmnet_json = {};
    let comment_html = "";
    $.ajax({
        type: "POST",
        url: "main/src/ajax/load_comment.php",
        data: {
            id: id
        },
    }).done(function (result) {
        commmnet_json = JSON.parse(result).reverse();
        console.log(commmnet_json);
        for (let i = 0; i < commmnet_json.length; i++) {
            comment_html += comment(commmnet_json[i]);
        }
        document.getElementById('comments').innerHTML = comment_html;
    });
}
let comment = function (json) {
    return "" +
        "<div class='comment'>" +
        "<div class='comment_time'>" + new Date(Number.parseInt(json.date)).toLocaleString() + "</div>" +
        "<div class='comment_text'>" + json.comment + "</div>" +
        "</div>"
};
//повторяющийся код покачто не знаю как вынести в отдельный файл
const check_session = function () {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/check/session.php",
        data: {}
    }).done(function (result) {
        console.log(result);
        if (!JSON.parse(result).id) {
            location.href = "index.php";
        }
        else {
            document.getElementById("content").classList.remove("hidden");
            user_data = JSON.parse(result);
            load_user_settings();
            contact();
        }
    });
};
let back = function () {
    document.getElementById("user_info").classList.add("hidden");
    document.getElementById("add_contact").classList.remove("hidden");
    document.getElementById("user_and_phone").classList.remove("hidden");
};
let contact_del = function (id) {
    console.log("Скрыть контакт с id" + id);

};
let contact_hidden = function (id) {
    console.log("Удалить контакт с id" + id);

};

let settings_update = function () {
    let options = document.getElementsByName("options");
    console.log(document.getElementsByName("options"));
    for (let i = 0; i < options.length; i++) {
        if (document.getElementsByName("options").item(i).checked) {
            let json = {
                id: user_data.id,
                settingsContactVisible: i
            };
            $.ajax({
                type: "POST",
                url: "main/src/ajax/check/update_setting.php",
                data: {json}
            }).done(function (result) {
                document.getElementById(document.getElementsByName("options").item(i).id).checked = true;
                user_data.settingsContactVisible = i;
                return;
            })
        }
    }
    // //load_user_settings();
    console.log(user_data.settingsContactVisible);
    check_session();
};
let load_user_settings = function () {
    console.log(user_data);
    switch (user_data.settingsContactVisible) {
        case "0":
            document.getElementById("option1").checked = true;
            break;
        case "1":
            document.getElementById("option2").checked = true;
            break;
        case "2":
            document.getElementById("option3").checked = true;
            break;
    }
};
let settings_open = function () {
    document.getElementById("settings_block").classList.remove("hidden");
    document.getElementById("settings_block").style.height = document.getElementById("content").offsetHeight + 20 + 'px';
};
let settings_close = function () {
    document.getElementById("settings_block").classList.add("hidden");
};
// let load_style = function () {
//     windowHeight = document.documentElement.clientHeight;
// }
