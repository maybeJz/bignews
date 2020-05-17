$(function(){
    // 发起请求渲染页面
    $.ajax({
        type:'get',
        url:BigNew.user_detail,
        headers:{
            'Authorization':localStorage.getItem('token')
        },
        success:function(res){
            if(res.code==200){
                $('#form .username').val(res.data.username);
                $('#form .nickname').val(res.data.nickname);
                $('#form .email').val(res.data.email);
                $('#form .user_pic').attr('src',res.data.userPic);
                $('#form .password').val(res.data.password);
            }
        }
    })
})