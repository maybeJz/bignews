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

    // 
    $('#exampleInputFile').on('change',function(){
        var file = this.files[0]  //获取待上传的文件
        // URL.createObjectURL会将待上传的文件生成一个可浏览的地址
        var url=URL.createObjectURL(file)
        // 在图片上渲染出来
        $('#form .user_pic').attr('src',url);
    })
})