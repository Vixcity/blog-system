import $ from 'jquery'

$.randomColor = function (){
    var col = "#";
    for (var i = 0; i < 6; i++) col+=parseInt(Math.random() * 16).toString(16);
    return col;
}

$.random = function (max, min) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

$.console = function() {
    console.log(111111)
}