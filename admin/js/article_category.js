$(function(){
    $.ajax({
        type:'get',
        url:BigNew.category_list,
        success:function(res){
            // 要将数据渲染在页面上
            if(res.code==200){
                $('tbody').html(template('category',res))
            }
        }
    })
    // 设置模态框显示
    $('#xinzengfenlei').on("click",function(){
        $('.addModal').modal('show')
        // 修改提示标题
        $('.addModal h4').text('新增文章分类')
    })

    // 给编辑按钮设置事件
    // 模板生成的得用委托的方式注册
    $('tbody').on('click','.btn-edit',function(){
        // 显示模态框
        $('.addModal').modal('show')
        // 修改提示标题
        $('.addModal h4').text('编辑文章分类')

        // 发送请求，通过id获取数据
        $.ajax({
            type:'get',
            url:BigNew.category_search,
            data:{
                id : $(this).data('id')
            },
            success:function(res){
                if(res.code==200){
                    $('#myForm input[name=id]').val(res.data[0].id)
                    $('#myForm input[name=name]').val(res.data[0].name)
                    $('#myForm input[name=slug]').val(res.data[0].slug)
                }
            }
        })
    })
})