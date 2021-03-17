        var tekan = false;
        var push = true;
        var id_span;

        $(document).ready(function(){

            $("#cari").focus(function(){
                $(this).css("border","1px solid rgb(250, 27, 27)");
            })

            $("#cari").focusout(function(){
                $(this).css("border","none");
            })

            $(".most-watch").mousedown(function(){
                $(this).css("background","white");
                $(this).css("color","#244e4d")
                $(".play").css("color","#244e4d");
            })

            $(".most-watch").mouseup(function(){
                $(this).css("background","none");
                $(this).css("color","white")
                $(".play").css("color","white")
            })

            function home(){
                $(".home").css("color","#244e4d");
                $(".download").css("color","rgb(168, 168, 168)");
                $(".menu").css("color","rgb(168, 168, 168)");
                $(".user").css("color","rgb(168, 168, 168)");
                $(".setting").css("color","rgb(168, 168, 168)");
                $(".out").css("color","rgb(168, 168, 168)");
            }

            function download(){
                $(".download").css("color","#244e4d");
                $(".home").css("color","rgb(168, 168, 168)");
                $(".menu").css("color","rgb(168, 168, 168)");
                $(".user").css("color","rgb(168, 168, 168)");
                $(".setting").css("color","rgb(168, 168, 168)");
                $(".out").css("color","rgb(168, 168, 168)");
            }

            function menu(){
                $(".menu").css("color","#244e4d");
                $(".download").css("color","rgb(168, 168, 168)");
                $(".home").css("color","rgb(168, 168, 168)");
                $(".user").css("color","rgb(168, 168, 168)");
                $(".setting").css("color","rgb(168, 168, 168)");
                $(".out").css("color","rgb(168, 168, 168)");
            }

            function user(){
                $(".user").css("color","#244e4d");
                $(".download").css("color","rgb(168, 168, 168)");
                $(".menu").css("color","rgb(168, 168, 168)");
                $(".home").css("color","rgb(168, 168, 168)");
                $(".setting").css("color","rgb(168, 168, 168)");
                $(".out").css("color","rgb(168, 168, 168)");
            }

            function setting(){
                $(".setting").css("color","#244e4d");
                $(".download").css("color","rgb(168, 168, 168)");
                $(".menu").css("color","rgb(168, 168, 168)");
                $(".user").css("color","rgb(168, 168, 168)");
                $(".home").css("color","rgb(168, 168, 168)");
                $(".out").css("color","rgb(168, 168, 168)");
            }

            function out(){
                $(".out").css("color","#244e4d");
                $(".download").css("color","rgb(168, 168, 168)");
                $(".menu").css("color","rgb(168, 168, 168)");
                $(".user").css("color","rgb(168, 168, 168)");
                $(".home").css("color","rgb(168, 168, 168)");
                $(".setting").css("color","rgb(168, 168, 168)");
            }


            $("span").click(function(){
                var id = $(this).attr("id");
                $(".isi-web").load("sub/"+id+".html");
                if(id == "home"){
                    home();
                }else if(id == "download"){
                    download();
                }else if(id == "menu"){
                    menu();
                }else if(id == "user"){
                    window.location.href = "sub/profil.html"
                    user();
                }else if(id == "setting"){
                    setting();
                }else if(id == "out"){
                    out();
                }
            })

        })