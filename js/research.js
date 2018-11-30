var $a=$(".buttons a");
var $s=$(".buttons span");
var cArr=["p7","p6","p5","p4","p3","p2","p1"];
var index=0;
$(".next").click(
    function(){
    nextimg();
    }
);
$(".prev").click(
    function(){
    previmg();
    }
);
//上一张
function previmg(){
    cArr.unshift(cArr[6]);
    cArr.pop();
    $("div.box2 ul li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
    });
    index--;
    if (index<0) {
        index=6;
    }
}

//下一张
function nextimg(){
    cArr.push(cArr[0]);
    cArr.shift();
    $("div.box2 ul li").each(function(i,e){
        $(e).removeClass().addClass(cArr[i]);
        console.log(cArr[i]);
    });
    index++;
     if (index>6) {
        index=0;
    }
}
//点击class为p2的元素触发上一张照片的函数
$(document).on("click",".p2",function(){
    previmg();
    return false;//返回一个false值，让a标签不跳转
});

//点击class为p4的元素触发下一张照片的函数
$(document).on("click",".p4",function(){
    nextimg();
    return false;
});

//鼠标移入box时清除定时器
$(".box2").mouseover(function(){
    clearInterval(timer);
})

//鼠标移出box时开始定时器
$(".box2").mouseleave(function(){
    timer=setInterval(nextimg,4000);
})

//进入页面自动开始定时器
timer=setInterval(nextimg,4000);




/***********************内容轮播**********************/
function emm(){
	$('.one').css('left', '-500px');
	$('.two').css('left', '0px');
}

function rrr(){
	$('.one').css('left', '0px');
	$('.two').css('left', '500px');
}
