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
export default check_session;