$(function(){
    // 发送ajax请求渲染文章设置
    $.ajax({
        type:'get',
        url: BigNew.category_list,
        success:function(res){
            console.log(res)
            $('#selCategory').html(template('categoryList',res))
        }
    })

    // 显示当前页面中的所有文章数据
    getDatas({
        key:$('#key').val(),
        type:$('#selCategory').val(),
        state:$('#selStatus').val(),
        page:1,
        perpage:7
    })
    // 封装起来，然后data用参数传入，因为这个数据一直都在变化
    function getDatas(obj){
        $.ajax({
            type:'get',
            url:BigNew.article_query,
            data:obj,
            success:function(res){
                if(res.code==200){
                    console.log(res)
                    $('tbody').html(template('articleList',res.data))
                    // 服务器端的数据响应回来后启用分页功能
                    pagination(res.data.totalPage)
                }
            }
        })
    }

    // 给筛选按钮注册事件，根据所选条件查询数据渲染出来
    $('#btnSearch').on('click',function(e){
        //  阻止默认行为
        e.preventDefault()
        // 调用函数渲染数据
        getDatas({
            key:$('#key').val(),
            type:$('#selCategory').val(),
            state:$('#selStatus').val(),
            page:1,
            perpage:7
        })
    })
    
    // 完成分页功能
    function pagination(totalPages, visiblePages){
        // 分页插件所提供的
        $('#pagination-demo').twbsPagination({
            totalPages: totalPages, //总页数
            visiblePages : visiblePages||7, //可见最大上限页码值，如果没传参就默认是7
            // 把首页下一页等这些英文改为中文
            first: '首页',
            last: '最后一页',
            next: '下一页',
            prev: '上一页',
            initiateStartPageClick: false, // 不要默认点击 
            // 在设置点击事件
            onPageClick: function (event, page) {
                //  console.log(event,page);
                // page是当前页码
                // 每次点击都获取当前的页码所对应的数据渲染到页面上
                getDatas({
                  key: $('#key').val(),
                  type: $('#selCategory').val(),
                  state: $('#selStatus').val(),
                  page: page,
                  perpage: 7
                })
              }
        })
    }
})