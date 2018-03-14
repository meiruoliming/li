var t;
var num=60;
 $(document).ready(function(){
      $(".fast-login").click(function(){
        clearInterval(t);
        num=60;
        var Codebtn=$(".send-code").html("获取验证码")
        var active=$(this).parents(".login-main").hasClass("active");
        if(!active){
          $(this).parents(".login-main").addClass("active").siblings().removeClass("active");

        }
      });

      function Login(n){
          alert("1")
          var reg = /^1(3|4|5|7|8)\d{9}$/;
          var phone=$(".username").val();
          var psd=$(".passward").val();
          var number=$(".iphone").val();
          var code=$(".code-num").val();
           if(n==1){
            Normallogin();
           }else if(n==2){
            Fastlogin();
           };
          };
           function Normallogin(){
               if(phone===""){
                message("手机号不能为空!");
                return;
                }else if (!reg.test(phone)){
                message("手机号格式不正确!");
                $(".username").val("");
                return;
                }else if(psd===""){
                message("密码不能为空!");
                return;
              };
           };
        function Fastlogin(){
           if(phone===""){
                message("手机号不能为空!");
                return;
                }else if (!reg.test(phone)){
                message("手机号格式不正确!");
                $(".username").val("");
                return;
                }else if(code===""){
                message("验证码不能为空!");
                return;
              };
        }
           
//             $.ajax({
//                 type:"GET",
//                 url:"",
// //                 参数 "serivice.php?number="+$(".username").val()+$(".passward").val();
//                 dataType:"json",
//                 data:{
//                   telphone:phone,
//                   psd:pds,
//                 }
//                 success:function(data){
//                     messages("登录成功！")
//                 },
//                 error:function(){
// //                    messages("")
//                 }
//             })
        
    });
