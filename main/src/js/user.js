let contact_json = {};//json данных о контактах
let user_data = {};//данных пользователя
let data_user = {};//данные контактов пользователя
let windowWidth;


let loading_all_function = function () {
    document.getElementById("content").classList.add("hidden");
    windowWidth = document.documentElement.clientWidth;
    check_session();
    let interval = setInterval(function () {
        if (user_data.id&&contact_json.length!=null) {
            load_user_settings();
            //load_events();
            clearInterval(interval);
        }
    }, 200);


};

window.onload = function () {
    loading_all_function();
    document.getElementById("add_contact").onclick = function () {
        document.getElementById("user_info").classList.remove("hidden");
        if (windowWidth < 768) {
            document.getElementById("user_and_phone").classList.add("hidden");
            //document.getElementById("user_info").classList.remove("hidden");
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
        }).done(function () {
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
        console.log(contact_json);
        let phone = "";
        for (let i = 0; i < contact_json.length; i++) {
            //console.log(res[i]['phone']);
            phone += "<div class='phone v" + contact_json[i]['visible'] + "' >";
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
        contact_style_setting();
    });
};

let get_contact = function (id) {
    data_user = get_json_contact(id);
    console.log(data_user);
    if (windowWidth < 768) {
        document.getElementById("user_and_phone").classList.add("hidden");
        document.getElementById("user_info").classList.remove("hidden");
        console.log(windowWidth);
    }
    let str = (data_user.visible == 1) ? "Скрыть" : "Открыть";
    document.getElementById("user_info").innerHTML = "" +
        "            <div class=\"user_add\" >\n" +
        "                <div class='col-12 block_back'>" +
        "                    <div class='contact_del float-left col-4' onclick='contact_del(" + JSON.stringify(data_user) + ")'>Удалить</div>" +
        "                    <div class='contact_hidden float-left col-4' onclick='contact_visible_radio(" + JSON.stringify(data_user) + ")'>" + str + "</div>" +
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
    document.getElementById("user_info").classList.remove("hidden");
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
};
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
};
let comment = function (json) {
    console.log(json);
    return "" +
        "<div class='comment'>" +
        "<div class='comment_time'>" + new Date(Number.parseInt(json.date)).toLocaleString() +
        "<div class='comment_del float-right' onclick='comment_del(" + JSON.stringify(json) + ")'>" +
        "<img class='comment_del_img float-right' src='main/src/img/del_comment.png'> " +
        "</div>" +
        "</div>" +
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
        if (!JSON.parse(result).id) {
            location.href = "index.php";
        }
        else {
            document.getElementById("content").classList.remove("hidden");
            user_data = JSON.parse(result);
            contact();
        }
    });
};
let back = function () {
    document.getElementById("user_info").classList.add("hidden");
    document.getElementById("add_contact").classList.remove("hidden");
    document.getElementById("user_and_phone").classList.remove("hidden");
};
let comment_del = function (json) {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/comment_delit.php",
        data: {json: json}
    }).done(function (result) {
        console.log(json);
        load_comment(json.id_contact);
    });
};
let contact_del = function (json) {
    console.log(json);
    $.ajax({
        type: "POST",
        url: "main/src/ajax/contact_delite.php",
        data: {json: json}
    }).done(function (result) {
        back();
        check_session();
    })
};
let contact_visible_radio = function (json) {
    console.log(json.visible);
    json.visible = (json.visible == 0) ? 1 : 0;
    console.log(json.visible);
    $.ajax({
        type: "POST",
        url: "main/src/ajax/contact_visible.php",
        data: {json: json}
    }).done(function (result) {
        settings_update();
        back()
        //console.log(result);
    })
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
                url: "main/src/ajax/check/settings_update.php",
                data: {json}
            }).done(function (result) {
                session_update(i);
                contact_style_setting();
                document.getElementById("user_info").classList.add("hidden");
                return;
            })
        }
    }
    //console.log(user_data.settingsContactVisible);
    //check_session();
};
let load_user_settings = function () {
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
    document.getElementById("settings_block").style.height = document.documentElement.clientHeight + 20 + 'px';
};
let settings_close = function () {
    document.getElementById("settings_block").classList.add("hidden");
};
let session_update = function (setting_visible) {
    $.ajax({
        type: "POST",
        url: "main/src/ajax/check/session_update.php",
        data: {settingsContactVisible: setting_visible}
    }).done(function () {
        check_session();
        settings_close();
    });
};
let contact_style_setting = function () {
    if (user_data.id) {
        let v0 = document.getElementsByClassName('v0');
        let v1 = document.getElementsByClassName('v1');
        for (let i = 0; i < v0.length; i++) {
            v0.item(i).style.background = '#FFB496';
        }
        switch (user_data.settingsContactVisible) {
            case "0":
                style_phone_hidden(v0);
                style_phone_visible(v1);
                break;
            case "1":
                style_phone_hidden(v1);
                style_phone_visible(v0);
                break;
            case "2":
                style_phone_visible(v0);
                style_phone_visible(v1);
                break;
        }

    }
};
const style_phone_visible = function (v) {
    for (let i = 0; i < v.length; i++) {
        v.item(i).style.display = 'block';
    }
};
const style_phone_hidden = function (v) {
    for (let i = 0; i < v.length; i++) {
        v.item(i).style.display = 'none';
    }
};


