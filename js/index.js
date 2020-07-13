window.addEventListener('load', function() {
    // main部分
    var title_lists = document.querySelectorAll('.title-lists');
    var newcons = document.querySelectorAll('.newcon');
    // var index;
    for(var i = 0; i < title_lists.length; i++) {
        //添加自定义属性data-index-title
        title_lists[i].setAttribute('data-index-title', i);
        //鼠标触碰，显示相应的内容
        title_lists[i].addEventListener('mouseover', function() {
            for(var i = 0; i < title_lists.length; i++) {
                title_lists[i].style.backgroundColor = '';
            }
            this.style.backgroundColor = '#e87b1c';
            var index = this.getAttribute('data-index-title');
            for(var i = 0; i < newcons.length; i++) {
                newcons[i].style.display = 'none';
            }
            newcons[index].style.display = 'block';
        })
    }
    // banner
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var focusWidth = focus.offsetWidth;
    //小圆圈事件
    for(var i = 0; i < ul.children.length; i++) {
        //添加小圆圈，加自定义属性
        var li = document.createElement('li');
        li.setAttribute('data-index-li', i);
        ol.appendChild(li);
        ol.children[i].addEventListener('click', function() {
            for(var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('data-index-li');
            // console.log(index);
            animate(ul, -index * focusWidth);
            // 还以为写错了，没效果，原来是ul忘记加定位
            //把当前索引给num和circle
            num = circle = index;
        })
    }
    ol.children[0].className = 'current';
    // 自动播放事件
    var btn = document.querySelector('.btn');
    //定义一个num和circle
    var num = 0;
    var circle = 0;
    //设置一个节流阀
    var flag = true;
    //克隆ul中第一个小Li放在ul的后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //设置一个点击事件
    btn.addEventListener('click', function() {
        if(flag) {
            flag = false;
            if(num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            circle = circle == ol.children.length ? 0 : circle;
            for(var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';
        }
        
    })
    // 自动播放事件，让它自动点击
    var timer = setInterval(function() {
        btn.click();
    }, 2000)
    //当鼠标放到focus，停止自动播放，离开恢复自动播放
    focus.addEventListener('mouseenter', function() {
        clearInterval(timer);
        //让timer清空
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            btn.click();
        }, 2000)
    })
})