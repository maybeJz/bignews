$(function(){
    // 1、给登录按钮注册事件
    $('.input_sub').on("click",function(e){
        // 阻止默认行为
        e.preventDefault();
        // 2、获取登录的数据 username password
        var username = $('.input_txt').val()
        var password = $('.input_pass').val()
        // 3、判断用户名和密码是否为空
        if($.trim(username)==''||$.trim(password)==''){
            alert('用户名或密码不能为空，请重新输入');
            return;
        }
        $.ajax({
            type:'post',
            url:'http://localhost:8080/api/v1/admin/user/login',
            data:{
                username:username,
                password:password
            },
            success:function(res){
                if(res.code==200){
                    alert('登录成功')
                    // 跳转到主页面
                    window.location.href= './index.html'
                }
                else{
                    alert(res.msg)  //提示错误信息
                }
            }
        })
    })
})