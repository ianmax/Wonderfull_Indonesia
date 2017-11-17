$(document).ready(function(){
    if(localStorage.getItem("login_token") !== null){
        window.location.replace("/views/result.html");
    }
});
