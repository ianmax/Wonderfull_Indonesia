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
                    if(!fromServer.status){ // Jika error terjadi pada backend
                        alert("Something went wrong!");
                        localStorage.removeItem("login_token");
                        window.location.replace("/views");
                    }else{ // Jika tidak ditemukan error
                        const userData=fromServer.user;
                        $("span.text").append(" "+userData.name);
                        $("span.profile").css("backgroundImage",`url(${userData.profile})`);
                        $(".welcome-msg").fadeIn(500,function(){
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
        $.ajax({
            url:`http://localhost:3000/api`,
            method:"POST",
            dataType:"json",
            data:searchInput,
            success:function(fromServer){
                $("#empty").remove();
                $(".trigger").html("");
                $("#more-image").html("");
                $("#main-image").prop("src","");
                // Separator
                const arrImage=JSON.parse(fromServer.flickr).photos.photo;
                arrImage.forEach((image)=>{
                    $("#more-image").append(
                        `<li>
                        <div style="background-image:url(${image.url_m})" class="each-image" url="${image.url_m}"></div>
                        </li>`
                    );
                });
                $("#main-image").prop("src",arrImage["0"].url_m);
                $("#title").html(fromServer.wikipedia.title);
                $("#description").append(fromServer.wikipedia.extract);
            },
            error:function(){
                alert("Something went wrong!");
            }
        });
    });

    $(this).on("click",".each-image",function(event){
        event.preventDefault();
        $("#main-image").prop("src",$(this).attr("url"));
    });

    // Onclick logout button
    $(this).on("click","#logout",function(event){
        event.preventDefault();
        localStorage.removeItem("login_token");
        window.location.reload();
    });
});
