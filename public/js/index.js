
//图片淡入淡出
var box = $('#box');


setTimeout(show1,3000);
function show1(){
    $('#bg_img1').fadeOut(10000);
    $('#bg_img2').fadeIn(10000);

    setTime1();
}
        

function show2(){
    $('#bg_img2').fadeOut(10000);
    $('#bg_img3').fadeIn(10000);
    setTime2();
}
        
function show3(){
    $('#bg_img3').fadeOut(10000);
    $('#bg_img1').fadeIn(10000);
    setTime3();
}


function setTime3(){
    setTimeout(show1,10000);
}

function setTime2(){
    setTimeout(show3,10500);
}

function setTime1(){
    setTimeout(show2,10000);
}

//图片淡入淡出结束
//爱心点赞
 var get1= 0;
function get(){
	
	 if ( get1%2 == 0) {
	 $('#sp1').css("color","red");
	}
	 else{
	 $('#sp1').css("color","#FFF");
	 }
	 get1 = get1 +1;
}

//爱心点赞结束

//时间本事
function secondToDate(second) {
        if (!second) {
            return 0;
        }
        var time = new Array(0, 0, 0, 0, 0);
        if (second >= 365 * 24 * 3600) {
            time[0] = parseInt(second / (365 * 24 * 3600));
            second %= 365 * 24 * 3600;
        }
        if (second >= 24 * 3600) {
            time[1] = parseInt(second / (24 * 3600));
            second %= 24 * 3600;
        }
        if (second >= 3600) {
            time[2] = parseInt(second / 3600);
            second %= 3600;
        }
        if (second >= 60) {
            time[3] = parseInt(second / 60);
            second %= 60;
        }
        if (second > 0) {
            time[4] = second;
        }
        return time;
    }

     function setTime() {
        // 博客创建时间秒数，时间格式中，月比较特殊，是从0开始的，所以想要显示5月，得写4才行，如下
        var create_time = Math.round(new Date(Date.UTC(2019, 11, 24, 0, 0, 0))
                .getTime() / 1000);
        // 当前时间秒数,增加时区的差异
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        currentTime = secondToDate((timestamp - create_time));
        currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
                + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
                + '秒';
        document.getElementById("htmer_time").innerHTML = currentTimeHtml;
    }
    setInterval(setTime, 1000);