$(function(){
    // 给form表单注册submit事件
    $('.login_form').on('submit',function(e){
        // 阻止默认行为
        e.preventDefault()
        // 发送Ajax请求
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: $(this).serialize(),
            beforeSend: function(){
                // 先验证用户名和密码是否为空
                var flag = false
                $('.login_form input[name]').each(function(index,ele){
                    if($.trim($(ele).val())==''){
                        flag=true
                    }
                }) 
                if(flag){
                    // alert('输入的用户名或密码不能为空')
                    $('.modal').modal('show');
                    $('.modal-body p').text('输入的用户名或密码不能为空')
                    return false;  //阻止请求的发送
                }
            },
            success:function(res){
                if(res.code==200){
                    // alert('登录成功')
                    $('.modal').modal('show');
                    $('.modal-body p').text('登录成功')
                    $('.modal').on('hidden.bs.modal', function (e) {
                        // do something...
                        window.location.href = './index.html'
                      })
                }else{
                    $('.modal').modal('show');
                    $('.modal-body p').text(res.msg)
                    // alert(res.msg)
                }
            }
        })
    })
})