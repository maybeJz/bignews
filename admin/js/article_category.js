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
    })
})