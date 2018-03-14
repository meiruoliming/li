// 提示框
function message(msg){
    var content = '<div class="messagebox" style="display:block;z-index:99999">' +
        '<h4>提示' +
        '</h4><p class="">'+msg+'</p>' +
        '</div>';
    $("body").after(content);
    $(".messagebox").fadeOut(2500);
};

// 获取验证码
var t;
var num=60;
function Sendcode(obj){
    clearInterval(t);
    t = setInterval(function () {
        $(obj).html(num + "秒后重新发送");
        num--;
        if (num == 0) {
           $(obj).html("重新获取验证码");
            clearInterval(t);
            num=60;
        }
    },1000);
};
  