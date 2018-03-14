// 获取验证码
var t;
var num=60;
$(".nav ul li").click(function(){
    clearInterval(t);
    num=60;
    button=document.getElementsByClassName("get-btn");
    for(var i=0;i<button.length;i++){
        button[i].innerHTML="获取验证码";
        // button[i].removerAttribute("disabled");
    };
    $(".get-btn").text("获取验证码");
    $(".get-btn").attr("disabled",false);
    $(this).addClass("active").siblings().removeClass("active");
    var showId=$(this).attr("data-toggle");
    $(".registItlem").hide();
    $(".zc").hide();
    $("."+showId).show();
    $(".prompt").addClass("hidden");
});