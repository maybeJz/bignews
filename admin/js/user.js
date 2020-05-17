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

    // 个人中心图片预览
    $('#exampleInputFile').on('change',function(){
        var file = this.files[0]  //获取待上传的文件
        // URL.createObjectURL会将待上传的文件生成一个可浏览的地址
        var url=URL.createObjectURL(file)
        // 在图片上渲染出来
        $('#form .user_pic').attr('src',url);
    })

    // 提交修改信息
    $('#form').on('submit',function(e){
        e.preventDefault()
        var data = new FormData(this)
        $.ajax({
            type:'post',
            url:BigNew.user_edit,
            headers:{
                'Authorization':localStorage.getItem('token')
            },
            data:data,
            contentType:false,
            processData:false,
            success:function(res){
                if(res.code==200){
                    // 让父级页面进行页面刷新
                    // window.parent.window.location.reload()
                    $.ajax({
                        type: 'get',
                        url: BigNew.user_info,
                        headers: {
                            'Authorization':localStorage.getItem('token')
                        }, 
                        success:function(res){
                        // 2.请求回来的数据立即渲染到页面上
                            if(res.code==200){
                                // 显示登录的用户名
                                parent.$('.user_info span i').text(res.data.nickname);
                                // 显示登录的头像
                                parent.$('.user_info img').attr('src',res.data.userPic);
                                // 个人中心
                                parent.$('.user_center_link img').attr('src',res.data.userPic);
                            }
                        }
                    })
                }
            }
        })
    })
})