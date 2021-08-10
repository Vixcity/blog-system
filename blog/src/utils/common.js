import $ from 'jquery'

$.randomColor = function (){
    var col = "#";
    for (var i = 0; i < 6; i++) col+=parseInt(Math.random() * 16).toString(16);
    return col;
}

$.random = function (max, min) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

// 数组方法
$.arrayFun = function (array, option) { 
    if (Object.prototype.toString.call(array) !== '[object Array]'){
        return '你传过来的参数不对,应该为数组'
    }
    if(option === 'min') {
        // 数字数组求最小值
        return array.reduce((a,b) => a<b?a:b);
    } else if(option === 'max') {
        // 数字数组求最大值
        return array.reduce((a,b) => a>b?a:b);
    } else if (option === 'sum') {
        // 数字数组求和
        return array.reduce((a,b) => a+b);
    } else if (option === 'sort') {
        // 数字数组排序 正序
        return array.sort((a,b) => a-b);
    } else if (option === 'reverseSort') {
        // 数字数组排序 倒序
        return array.sort((a,b) => b-a);
    } else if (option === 'filter') {
        // 过滤像 0, undefined, null, false, "", ''这样的假值
        return array.filter(Boolean);
    } else if (option === 'unique') {
        // 数组去重
        return array.filter((item,idx,arr) => arr.indexOf(item) === idx);
    } else if (option === 'pinlv') {
        // 统计特殊词出现的频率
        const table={}; 
        for(let char of array) {
          table[char]=table[char]+1 || 1;
        }
        return table
    } else if (option === 'random') {
        // 打乱数组顺序
        array.sort(() => {
            return Math.random() - 0.5;
        });
        return array
    } else {
        return '你传过来的参数不对,没有找到此方法名'
    }
 }

// 对象方法
$.objectFun = function (obj,option) { 
    // 如果是数组对象，进这里
    if (Object.prototype.toString.call(obj) === '[object Array]'){
        if (option === 'assign') {
            // 合并对象(无重复属性)
            let res = {}
            for (let i = 0;i<=obj.length;i++) {
                Object.assign(res, obj[i])
            }
            return res
        } else {
            return '你传过来的参数不对,没有找到此方法名'
        }
    } else if (Object.prototype.toString.call(obj) === '[object Object]') {
        // 如果是普通对象，进这里
        if (option === 'entries') {
            // 取到值和属性的数组
            return Object.entries(obj);
        } else if (option === 'getKey') {
            // 取到属性的数组
            return Object.keys(obj);
        } else if (option === 'getValue') {
            // 取到值的数组
            return Object.values(obj);
        } else {
            return '你传过来的参数不对,没有找到此方法名'
        }
    } else {
        return '你传过来的参数不对'
    }
 }

// 字符串方法
$.stringFun = function (str,option) { 
    if (typeof(str)!=='string'){
        return '你传过来的参数不对,应该为字符串'
    }
    if (option === 'checkPalindrome') {
        // 检测是否为回文字符串
        return str == str.split('').reverse().join('');
    } else {
        return '你传过来的参数不对,没有找到此方法名'
    }
}

// 标签球
// 用法：
// 在HTML里面加入标签
// 在js里面使用this.$.windstagball
// $("#div1").windstagball({
// tagList:[{href:'',tag:''}]
//   radius:120,
//   speed:10
// });
$.fn.windstagball = function(options) {
    var defaults = {
        radius: 120,
        size: 300,
        speed: 10,
        depth: 300,
        howElliptical: 1,
        fontsize: 12
    },
    param = $.extend({}, defaults, options || {}),
    selector = '#'+$(this)[0].id,
    warp = $(this),
    items = $(selector + ' a'),
    dtr = Math.PI / 180,
    itemPosList = [],
    active = false,
    lasta = 1,
    lastb = 1,
    distr = true,
    mouseX = 0,
    mouseY = 0,
    sb, sa, sc, ca, cb, cc, oItem, oEvent,per; 
    items.each(function() {
        oItem = {};
        oItem.width = $(this).width();
        oItem.height = $(this).height();
        itemPosList.push(oItem);
    });


    init();

    warp.mouseover(function() {
        active = true;
    });

    warp.mouseout(function() {
        active = false;
    });

    warp.mousemove(function(ev) {
        oEvent = window.event || ev;
        mouseX = oEvent.clientX - (warp.offset().left + warp.width() / 2);
        mouseY = oEvent.clientY - (warp.offset().top + warp.height() / 2);
        mouseX /= 5;
        mouseY /= 5;
    });

    setInterval(setPosition, 30);

    //初始化位置
    function init() {
        var phi = 0,
        theta = 0,
        max = itemPosList.length;
        sineCosine(0, 0, 0);
        //初始随机排序
        items.sort(function() {
            return Math.random() < 0.5 ? 1 : -1;
        });

        items.each(function(i) {
            if (distr) {
                phi = Math.acos(-1 + (2 * i) / max);
                theta = Math.sqrt(max * Math.PI) * phi;
            }
            else {
                phi = Math.random() * (Math.PI);
                theta = Math.random() * (2 * Math.PI);
            }
            itemPosList[i].cx = param.radius * Math.cos(theta) * Math.sin(phi);
            itemPosList[i].cy = param.radius * Math.sin(theta) * Math.sin(phi);
            itemPosList[i].cz = param.radius * Math.cos(phi);
            $(this).css('left', itemPosList[i].cx + warp.width() / 2 - itemPosList[i].width / 2 + 'px');
            $(this).css('top', itemPosList[i].cy + warp.height() / 2 - itemPosList[i].height / 2 + 'px');
        });
    }

    function sineCosine(a, b, c) {
        sa = Math.sin(a * dtr);
        ca = Math.cos(a * dtr);
        sb = Math.sin(b * dtr);
        cb = Math.cos(b * dtr);
        sc = Math.sin(c * dtr);
        cc = Math.cos(c * dtr);
    }

    function setPosition() {
        var a, b, c = 0, j, rx1, ry1, rz1, rx2, ry2, rz2, rx3, ry3, rz3, l = warp.width() / 2, t = warp.height() / 2;

        if (active) {
            a = (-Math.min(Math.max(-mouseY, -param.size), param.size) / param.radius) * param.speed;
            b = (Math.min(Math.max(-mouseX, -param.size), param.size) / param.radius) * param.speed;
        }
        else {
            a = lasta * 0.98;
            b = lastb * 0.98;
        }
        lasta = a;
        lastb = b;

        if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
            return;
        }
        sineCosine(a, b, c);
        for (j = 0; j < itemPosList.length; j++) {
            rx1 = itemPosList[j].cx;
            ry1 = itemPosList[j].cy * ca + itemPosList[j].cz * (-sa);
            rz1 = itemPosList[j].cy * sa + itemPosList[j].cz * ca;

            rx2 = rx1 * cb + rz1 * sb;
            ry2 = ry1;
            rz2 = rx1 * (-sb) + rz1 * cb;

            rx3 = rx2 * cc + ry2 * (-sc);
            ry3 = rx2 * sc + ry2 * cc;
            rz3 = rz2;

            itemPosList[j].cx = rx3;
            itemPosList[j].cy = ry3;
            itemPosList[j].cz = rz3;

            per = param.depth / (param.depth + rz3);

            itemPosList[j].x = (param.howElliptical * rx3 * per) - (param.howElliptical * 2);
            itemPosList[j].y = ry3 * per;
            itemPosList[j].scale = per;
            itemPosList[j].alpha = per;

            itemPosList[j].alpha = (itemPosList[j].alpha - 0.6) * (10 / 6);
        }

        items.each(function(i) {
            $(this).css('left', itemPosList[i].cx + l - itemPosList[i].width / 1.5 + 'px');
            $(this).css('top', itemPosList[i].cy + t - itemPosList[i].height / 2 + 'px');

            $(this).css('font-size', Math.ceil(param.fontsize * itemPosList[i].scale / 2) + 8 + 'px');

            $(this).css('filter', "alpha(opacity=" + 100 * itemPosList[i].alpha + ")");
            $(this).css('opacity', itemPosList[i].alpha);
            $(this).css("z-index", i);
        });
    }
}

//去除连续的字符串 
$.strUniq = function (str) {
    return str.replace(/(\w)\1+/g, '$1')
}

// 返回去完重复之后的字符串
String.prototype.unique = function () {
    var obj = {},
        str = '',
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            str += this[i];
            obj[this[i]] = true;
        }
    }
    return str;
}

// 找出字符串中第一次只出现一次的字母
String.prototype.firstAppear = function () {
    var obj = {},
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (obj[this[i]]) {
            obj[this[i]]++;
        } else {
            obj[this[i]] = 1;
        }
    }
    for (var prop in obj) {
       if (obj[prop] == 1) {
         return prop;
       }
    }
}

// 找元素的第n级父元素
$.parents = function (ele, n) {
    while (ele && n) {
        ele = ele.parentElement ? ele.parentElement : ele.parentNode;
        n--;
    }
    return ele;
}

// 返回元素的第n个兄弟节点
$.retSibling = function (e, n) {
    while (e && n) {
        if (n > 0) {
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
            }
            n--;
        } else {
            if (e.previousElementSibling) {
                e = e.previousElementSibling;
            } else {
                for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling);
            }
            n++;
        }
    }
    return e;
}

// 封装mychildren，解决浏览器的兼容问题
$.myChildren = function (e) {
    var children = e.childNodes,
        arr = [],
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            arr.push(children[i])
        }
    }
    return arr;
}

// 判断元素有没有子元素
$.hasChildren = function (e) {
    var children = e.childNodes,
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            return true;
        }
    }
    return false;
}

// 返回当前的时间（年月日时分秒）
$.getDateTime = function () {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() + 1,
        minute = date.getMinutes(),
        second = date.getSeconds();
        month = checkTime(month);
        day = checkTime(day);
        hour = checkTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);
     function checkTime(i) {
        if (i < 10) {
                i = "0" + i;
       }
      return i;
    }
    return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}

// 获得滚动条的滚动距离
$.getScrollOffset = function () {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

$.getViewportOffset = function () {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

// 获取任一元素的任意属性
$.getStyle = function (elem, prop) {
    return window.getComputedStyle ? window.getComputedStyle(elem, null)[prop] : elem.currentStyle[prop]
}

// 防抖
$.debounce = function (handle, delay) {
    var timer = null;
    return function () {
        var _self = this,
            _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
}

// 获取url上的参数
$.getUrlParam = function (sUrl, sKey) {
    var result = {};
    sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
        if (!result[key]) {
            result[key] = val;
        } else {
            var temp = result[key];
            result[key] = [].concat(temp, val);
        }
    })
    if (!sKey) {
        return result;
    } else {
        return result[sKey] || '';
    }
}

// 格式化时间
// 用法 $.formatDate(new Date,'yy-MM-dd HH:mm:ss')
$.formatDate = function (t, str) {
    var obj = {
        yyyy: t.getFullYear(),
        yy: ("" + t.getFullYear()).slice(-2),
        M: t.getMonth() + 1,
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        d: t.getDate(),
        dd: ("0" + t.getDate()).slice(-2),
        H: t.getHours(),
        HH: ("0" + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ("0" + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        mm: ("0" + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        ss: ("0" + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig, function ($1) {
        return obj[$1]
    });
}

// 邮箱验证
$.isAvailableEmail = function (sEmail) {
    var reg = /^([\w+.])+@\w+([.]\w+)+$/
    return reg.test(sEmail)
}

// 函数柯里化
// 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术
$.curryIt = function (fn) {
    var length = fn.length,
        args = [];
    var result = function (arg) {
        args.push(arg);
        length--;
        if (length <= 0) {
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
    return result;
}

// 单例模式
$.getSingle = function (func) {
    var result;
    return function () {
        if (!result) {
            result = new func(arguments);
        }
        return result;
    }
}

// 数据类型判断
$.typeof = function (obj) {
    return Object.prototype.toString.call(obj).replace(/\[object (\w+)\]/, '$1').toLowerCase()
}

// 数组扁平化
$.flatten = function (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}