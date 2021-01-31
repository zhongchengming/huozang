//时间转换成时间戳(秒)
function timeToTimestamp(time) {
    if (time == null || time == "") {
        return "";
    }
    time = time.substring(0, 19);
    time = time.replace(/-/g, '/');
    var timestamp = new Date(time).getTime()/1000;
    return timestamp;
}
//时间戳转换成时间(秒)
function timestampToTime(timestamp) {
    if (timestamp == null || timestamp == "") {
        return "";
    }
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
}

//时间戳转换成日期(秒)
function timestampToDate(timestamp) {
    if (timestamp == null || timestamp == "") {
        return "";
    }
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '';
    return Y + M + D;
}

//消息时间戳转换成时间(秒)
function messagetTimestampToTime(timestamp) {
    if (timestamp == null || timestamp == "") {
        return "";
    }
    var date = new Date(timestamp*1); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    var today = new Date();
    var todayY = today.getFullYear();
    var todayM = (today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1);
    var todayD = (today.getDate() < 10 ? '0' + (today.getDate()) : today.getDate());

    if (todayY + todayM + todayD == Y + M + D) {
        return h + ":" + m;
    }
    return M + "-" + D;
}

//隐藏手机中间四位数
function hidePhoneNum(phone) {
    var result = "";
    if (phone != null && phone != "") {
        if (isPhoneAvailable(phone)) {
            result = phone.substring(0, 3) + "****" + phone.substring(7);
        }
    }
    return result;
}
//获取URL参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return ""; //返回参数值
}
//校验手机号码
function isPhoneAvailable(phonenumber) {
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/; 
    if (!myreg.test(phonenumber)) { 
        return false; 
    } else {
        return true; 
    }
}

//校验身份证
function isCardNo(card) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (reg.test(card) === false) {
        return false;
    } else {
        return true;
    }
}

function secondToDate(result) {
    var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
    var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
    return result = m + ":" + s;
}


function tradeNo() {
    var outTradeNo = ""; //订单号
    for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
    {
        outTradeNo += Math.floor(Math.random() * 10);
    }
    outTradeNo = new Date().getTime() + outTradeNo;
    return outTradeNo;
}
