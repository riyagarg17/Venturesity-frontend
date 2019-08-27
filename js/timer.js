function flipTo(digit, n){
    var current = digit.attr('data-num');
    digit.attr('data-num', n);
    digit.find('.front').attr('data-content', current);
    digit.find('.back, .under').attr('data-content', n);
    digit.find('.flap').css('display', 'block');
    setTimeout(function(){
        digit.find('.base').text(n);
        digit.find('.flap').css('display', 'none');
    }, 350);
}

function jumpTo(digit, n){
    digit.attr('data-num', n);
    digit.find('.base').text(n);
}

function updateGroup1(group, n, flip){
    var digit1 = $('.ten'+group);
    var digit2 = $('.'+group);
    //console.log("digit1:",digit1,"digit2:",digit2);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.attr('data-num') != num1){
        if(flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if(digit2.attr('data-num') != num2){
        if(flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function updateGroup2(group, n, flip){
    var digit1 = $('.ten2'+group);
    var digit2 = $('.2'+group);
    //console.log("digit1:",digit1,"digit2:",digit2);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.attr('data-num') != num1){
        if(flip) flipTo(digit1, num1);
        else jumpTo(digit1, num1);
    }
    if(digit2.attr('data-num') != num2){
        if(flip) flipTo(digit2, num2);
        else jumpTo(digit2, num2);
    }
}

function setTime(flip){
    var now = new Date();
    var countDown1 = new Date("Oct 12, 2019 00:00:00");
    var countDown2 = new Date("Sep 8, 2019 00:00:00");
    var distance1 = countDown1 - now; 
    var distance2 = countDown2 - now;  
    var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);
    updateGroup1('days', days1, flip);
    updateGroup1('hour', hours, flip);
    updateGroup1('min', minutes, flip);
    updateGroup1('sec', seconds, flip);
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    updateGroup2('days', days2, flip);
    updateGroup2('hour', hours, flip);
    updateGroup2('min', minutes, flip);
    updateGroup2('sec', seconds, flip);
}

$(document).ready(function(){
    
    setTime(false);
    setInterval(function(){
        setTime(true);
    }, 1000);
    
});