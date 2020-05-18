$(function(){
    render()
    function render(){
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
    }
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

    // 新增或更新数据，通过是否有ID判断
    $('.addModal .btn-sure').on('click',function(){
        // 获取隐藏域中的id
        var id =$('#myForm input[name=id]').val()
        $.ajax({
            type:'post',
            // 点击确定按钮判断有没有id，如果有就是更新没有就是添加
            url:id?BigNew.category_edit:BigNew.category_add,
            data:$('#myForm').serialize(),
            success:function(res){
                // console.log(res);
                if(res.code==200||res.code==201){
                    $('.addModal').modal('hide');
                    // 刷新当前页面
                    render()
                }
            }
        })
    })

})