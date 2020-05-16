$(function(){
    // 1.立即向服务器发送请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/user/info',
        headers: {
            'Authorization':localStorage.getItem('token')
        }, 
        success:function(res){
        // 2.请求回来的数据立即渲染到页面上
            if(res.code==200){
                // 显示登录的用户名
                $('.user_info span i').text(res.data.nickname);
                // 显示登录的头像
                $('.user_info img').attr('src',res.data.userPic);
                // 个人中心
                $('.user_center_link img').attr('src',res.data.userPic);
            }
        }
    })
    

})