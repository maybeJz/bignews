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
        $('.modal').modal('show')
    })
})