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
                    alert("Something went wrong!");
                }
            });
        },500);
    }
    $(this).on("click","#cari",function(event){
        event.preventDefault();
        const searchInput={
            pencarian:$("#pencarian").val(),
            type:$("#search-type").val()
        }
        console.log(searchInput);
        $.ajax({
            url:`http://localhost:3000/api/${$("#pencarian").val()}`,
            method:"GET",
            dataType:"json",
            data:searchInput,
            success:function(fromServer){
                $("#empty").remove();
                $("#title").html(fromServer.title);
                $("#description").append(fromServer.extract);
                console.log(fromServer);
            },
            error:function(){
                alert("Something went wrong!");
            }
        });
    });
    // Onclick logout button
    $(this).on("click","#logout",function(event){
        event.preventDefault();
        localStorage.removeItem("login_token");
        window.location.reload();
    });
});
