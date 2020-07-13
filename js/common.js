//主要是练习js
window.addEventListener('load', function() {
    //nav部分
    var navs = document.querySelectorAll('.nav-con-list-item');
    var lists = document.querySelectorAll('.list');
    //因为不是所有的nav都有下拉菜单，所以给有下拉菜单的nav添加一个自定义属性data-index
    for(var i = 0; i < lists.length; i++) {
        // console.log(lists[i].previousElementSibling);
        lists[i].previousElementSibling.setAttribute('data-index', i);
    }
    //循环nav，根据是否有自定义属性来注册点击事件，改变样式属性
    for(var i = 0; i < navs.length; i++) {
        var index = navs[i].getAttribute('data-index');
        if(index != null) {
            navs[i].addEventListener('mouseover', function() {
                this.nextElementSibling.style.display = 'block';
            })
            navs[i].addEventListener('mouseout', function() {
                this.nextElementSibling.style.display = 'none';
            })
        }
    }
})