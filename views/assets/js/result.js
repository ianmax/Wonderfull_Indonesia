$(document).ready(function(){
    if(localStorage.getItem("login_token") === null){
        localStorage.removeItem("login_token");
        window.location.replace("/views");
    }else{
        const loginToken={token:localStorage.getItem("login_token")};
        setTimeout(function(){
            $.ajax({
                url:"http://localhost:3000/login/user",
                method:"POST",
                dataType:"json",
                data:loginToken,
                success:function(fromServer){
                    if(!fromServer.status){
                        alert("Something went wrong!");
                        localStorage.removeItem("login_token");
                        window.location.replace("/views");
                    }else{
                        const userData=fromServer.user;
                        $(".welcome-msg").append(" "+userData.name).fadeIn(500,function(){
                            setTimeout(function(){
                                $(".welcome-msg").fadeOut(500);
                            },4000);
                        });
                    }
                },
                error:function(){
                    console.log("problem");
                    // localStorage.removeItem("login_token");
                    // window.location.replace("/views");
                }
            });
        },500);
    }

    // Onclick logout button
    $(this).on("click","#logout",function(event){
        event.preventDefault();
        localStorage.removeItem("login_token");
        window.location.reload();
    });
});
