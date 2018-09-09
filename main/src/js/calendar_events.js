let json_events = {};

let calendar = {
    date: new Date(),
    year: function () {
        return this.date.getFullYear()
    },
    months: ['Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    month: function () {
        return this.date.getMonth()
    },
    load_calendar: function (y, m, id) {
        let str = "<h3>" + this.months[m] + "</h3>";
        str += "<table><tr>";
        for (let j = 1; j < new Date(y, m).getDay() && new Date(y, m).getDay() !== 0; j++) {
            str += "<td></td>";
            //console.log(j)
        }
        for (let i = 1; m === new Date(y, m, i).getMonth(); i++) {
            if (new Date(y, m, i).getDay() === 1) {
                str += "</tr><tr>";
                //console.log(new Date(y, m, i).getDay());
            }
            str += "<td>" + i + "</td>";
        }
        str += "</tr></table>";
        document.getElementById(id).innerHTML = "" + str;
    }
};
const load_events = function () {
    /*
    добавить ajax запрос и бакенд для загрузки данных
    из базы данных и сохранить в переменную json_events
     */
    // $.ajax({
    //     type: "POST",
    //     //url: "main/src/ajax/",
    //     data: {}
    // }).done(function (result) {
    //
    // });
    //load_calendar();
    //calendar.load_calendar(calendar.year(), calendar.month(), "user_info");
    let str = "";
    for (let i = 0; i < contact_json.length; i++) {
        if (contact_json[i].visible === "1") {
            str += "<option>" + contact_json[i].name +
            "<div class='hidden'>" + contact_json[i].id + "</div>" +
            "<div>" + contact_json[i].name + "</div>" +
            "<div>" + contact_json[i].phone || contact_json[i].vk + "</div>" +
            "</option>";
            //str += "<option>" + contact_json[i].name + "</option>"
        }
        //str += "<option></option>"

    }
    document.getElementById("user_info").innerHTML = "<select multiple id='contact_event'>" + str + "</select>";
    console.log(contact_json);
};


const load_calendar = function () {
    // document.getElementById("user_info").innerHTML = "" +
    //     "<div class='events' id='events'>" +
    //     "<div class='load_calendar'></div>" +
    //     "</div>";
    //

};