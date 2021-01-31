function add0(m) {
    return m < 10 ? '0' + m : m
}

function format(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate() + 1;
    var h = time.getHours() + 1;
    var mm = time.getMinutes() + 1;
    var s = time.getSeconds() + 1;
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
}

function format01(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth();
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d);
}

function DateDiff(sDate1, sDate2) { //sDate1和sDate2是2002-12-18格式
    var aDate, oDate1, oDate2, iDays
    aDate = sDate1.split("-")
    oDate1 = new Date(aDate[1] + aDate[2] + '-' + aDate[0]) //转换为12-18-2002格式
    aDate = sDate2.split("-")
    oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
    return iDays
}

function formatDuring(mss) {
    // console.log(mss)
    var days = parseInt(mss / (60 * 60 * 24));
    var hours = parseInt((mss % (60 * 60 * 24)) / (60 * 60));
    var minutes = parseInt((mss % (60 * 60)) / (60));
    var seconds = (mss % (60));
    if (hours != 0) {
        return days + "天"
    } else {
        return minutes + "分钟"
    }
}
//倒计时
function getCountDown(timestamp) {
    var nowTime = new Date();
    var t = timestamp - nowTime.getTime() / 1000;
    // console.log(t);
    if (t <= 0) {
        return '当前活动已结束';
    }
    var d = Math.floor(t / 60 / 60 / 24);
    var hour = Math.floor(t / 60 / 60 % 24);
    var min = Math.floor(t / 60 % 60);
    var sec = Math.floor(t % 60);
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    var countDownTime = d + "天" + hour + ":" + min + ":" + sec;
    return countDownTime;
}



function countDown(time, id) { //time的格式yyyy/MM/dd hh:mm:ss
    var day_elem = $(id).find('.day');
    var hour_elem = $(id).find('.hour');
    var minute_elem = $(id).find('.minute');
    var second_elem = $(id).find('.second');
    var end_time = new Date(time).getTime(), //月份是实际月份-1
        sys_second = (end_time - new Date().getTime()) / 1000;
    var timer = setInterval(function () {
        if (sys_second > 1) {
            sys_second -= 1;
            var day = Math.floor((sys_second / 3600) / 24);
            var hour = Math.floor((sys_second / 3600) % 24);
            var minute = Math.floor((sys_second / 60) % 60);
            var second = Math.floor(sys_second % 60);
            day_elem && $(day_elem).text(day); //计算天
            $(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时
            $(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分钟
            $(second_elem).text(second < 10 ? "0" + second : second); //计算秒杀
        } else {
            clearInterval(timer);
        }
    }, 1000);
}
