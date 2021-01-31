var CONFIG = {
    // ADDRURL: "http://192.168.0.119:8082/", //本地
    // ADDRURL: "http://192.168.0.101:10000/", //本地
    ADDRURL: "http://192.168.1.33:8081/", //测试服务器
    // ADDRURL: "http://39.108.177.193:8082/", //测试服务器
    QINIUADDR: "http://yimingk11.cn/",
    SHAREADDR: "http://39.108.177.193:10000/share/",
    //支持的银行
    BANKS: [{
        value: "中国银行",
        text: "中国银行"
    }, {
        value: "交通银行",
        text: "交通银行"
    }, {
        value: "建设银行",
        text: "建设银行"
    }, {
        value: "招商银行",
        text: "招商银行"
    }, {
        value: "农业银行",
        text: "农业银行"
    }, {
        value: "工商银行",
        text: "工商银行"
    }, {
        value: "民生银行",
        text: "民生银行"
    }, {
        value: "光大银行",
        text: "光大银行"
    }],

    WXPAYCODE: {
        "-2": "用户取消",
        "-1": "未知错误",
        "1": "apiKey 值非法",
        "2": "mchId 值非法",
        "3": "partnerKey 值非法",
        "4": "notifyUrl 值非法",
        "NOAUTH": "商户无此接口权限",
        "NOTENOUGH": "余额不足",
        "ORDERPAID": "商户订单已支付",
        "ORDERCLOSED": "订单已关闭",
        "SYSTEMERROR": "系统错误",
        "APPID_NOT_EXIST": "APPID不存在",
        "MCHID_NOT_EXIST": "MCHID不存在",
        "APPID_MCHID_NOT_MATCH": "appid和mch_id不匹配",
        "LACK_PARAMS": "缺少参数",
        "OUT_TRADE_NO_USED": "商户订单号重复",
        "SIGNERROR": "签名错误",
        "XML_FORMAT_ERROR": "XML格式错误",
        "REQUIRE_POST_METHOD": "请使用post方法",
        "POST_DATA_EMPTY": "post数据为空",
        "NOT_UTF8": "编码格式错误"
    },
    SERVICETYPE: {
        "1": "约会",
        "2": "伴游"
    },
    ORDERTYPE: {
        "1": "邀请",
        "2": "约会"
    },
    SEX: {
        "0": "男",
        "1": "女"
    },
    ORDERTYPE: {
        "0": "待确认",
        "1": "已取消",
        "2": "待接受",
        "3": "进行中",
        "4": "已完成"
    },
    ALIPAYCODE: {
        "9000": "支付成功",
        "4000": "系统异常",
        "4001": "数据格式不正确",
        "4003": "该用户绑定的支付宝账户被冻结或不允许支付",
        "4004": "该用户已解除绑定",
        "4005": "绑定失败或没有绑定",
        "4006": "订单支付失败",
        "4010": "重新绑定账户",
        "6000": "支付服务正在进行升级操作",
        "6001": "用户中途取消支付操作",
        "0001": "缺少商户配置信息（ 商户id， 支付公钥， 支付密钥）",
        "0002": "缺少参数（ subject、 body、 amount、 tradeNO）",
        "0003": "签名错误（ 公钥私钥错误）"
    },
    WITHDRAWSTATUS: {
        "0": "审核中",
        "1": "打款成功",
        "2": "打款失败"
    },
    /**
     *接口
     *
     **/
    // 1.认证接口
    CHECKPHONE: "authApi/checkphone", //校验手机号码是否注册
    SENDCHECKNUM: "authApi/sendchecknum", //发送手机验证码
    REGISTER: "authApi/register", //注册
    LOGIN: "authApi/login", //登录
    LOGOUT: "authApi/logout", //登出
    RONGYUN: "authApi/rongyun", //融云
    SENDMAIL: "mailApi/sendmail", //邮件


    // 2.查询接口
    BANNER: "queryApi/headimg", //获取轮播图
    GETMEMBERS: "queryApi/getmembers", //总人数、男女数
    GETSERVICESPEOPLE: "queryApi/getservicespeople", //发现活动列表
    GETINVITATIONPEOPLE: "queryApi/getinvitationspeople", //发现邀请列表
    GETINVITATIONS: "queryApi/getinvitations", //邀请列表
    GETMINE: "queryApi/getmine", //关注数，粉丝，余额
    GETUSERINFO: "queryApi/getuserinfo", //用户信息
    GETUSERBILLS: "queryApi/getuserbills", //收支明细
    GETPHTOGRAPHS: "queryApi/getphotographs", //个人写真
    GETMOMENTS: "queryApi/getmoments", //动态
    GETVIDEOS: "queryApi/getvideos", //视频
    GETVIDEOSDETAIL: "queryApi/getvideosdetail", //视频详情
    GETSERVICES: "queryApi/getservices", //活动
    GETOWNERAPPOINTMENT: "queryApi/getownerappointment", //我的约会
    GETOWNERFOLLOW: "queryApi/getownerfollow", //关注，粉丝
    ISFANS: "queryApi/isfans", //是不是粉丝
    GETRECEIVERS: "queryApi/getreceivers", //应邀列表
    GETVIDEOCOMMENTS: "queryApi/getvideocomments", //视频评论列表
    FACEVERIFY: "queryApi/faceVerify", //认脸识别
    IDENTITYCHECK: "queryApi/personVerify", //身份证验证
    SEARCHEXTEND: "queryApi/searchextend", //我的推广
    GETUERNEWS: "queryApi/searchcommunity", //获取所有用户的动态
    SEARCHTAGS: "queryApi/searchtags", //获取标签
    OFFICIAL: "queryApi/official", // 首页头条展示
    GETEXPRESSLIST: "queryApi/getExpressList", // 首页头条列表展示
    GETEXPRESSINFO: "queryApi/getExpressInfo", // 首页头条详情展示
    HEADIMG: "queryApi/headimg", // 获取首页图片
    GETVISITOR: "queryApi/getvisitor", //访客列表
    GETPEOPLECOMMENT: "queryApi/getPeoplecomemnt", //获取人的评论
    PEOPLEDZCOUNT: "queryApi/getPeopleDianzancount", //获取人的点赞数
    GETSERVICETAGS: "queryApi/selectTagsByUserid", //获取提供的servicetags
    GETMOMENTCOMMENTS: "queryApi/getmomentcomments", //动态评论
    ISDIANZANMOMENT: "queryApi/isdianzanmoment", //是否点赞动态
    GETBALANCE: "queryApi/ownermoneypackage", //获取余额
    GETDIC: "queryApi/getDictByType", //基础配置
    GETSOULSERVICES: "queryApi/getSoulServices", //主页活动
    GETUSERVAGUE: "queryApi/getuservague", //搜索获取用户列表
    GETSCROLLVIDEOS: "queryApi/getScrollVideos", //单个视频播放
    GETOWNERCOMMENTS: "queryApi/getOwnerComments", //评论点赞我的
    GETSOULBANKCARDS: "queryApi/getSoulBankcards", //获取银行卡
    WITHDRAWRECORD: "queryApi/withdrawrecord", //提现进度
    SIBYUSERID: "queryApi/selectSoulInvitationByUserIdAndCommitted", //我发布的
    SIBYUSERIDR: "queryApi/selectSoulInvitationByUserIdAndReceived", //我参与的
    RADER: "queryApi/getUserByLocation", //一键匹配
    GFHDLB: "queryApi/getActivityLsit", //官方活动列表
    GFHDPL: "queryApi/getActivityComments", //官方活动评论
    GIFT: "queryApi/getGifts", //礼物列表
    VIPLIST: "queryApi/getRechargeType", //充值VIP列表
    FINDGROUNP: "queryApi/selectGroupById", //查询群组
    ADDGROUNP: "operateApi/joinSoulGroup", //加入群组
    MYGIFT: "queryApi/getUserGiftList", //收到礼物列表
    GFHDXQ: "queryApi/getActivityCommentDetail", //官方活动详情
    ISMEMBER: "queryApi/getUserVipType", //判断是否是会员
    APPOINTMENTCOUNT: "queryApi/getownerappointmentcount", //查询我参与的 我发布的进行中的数量
    GETSERVERPRICE:"queryApi/getserviceprice",


    // 3.操作类接口
    UPDATEUSERINFO: "operateApi/updateuserinfo", //更新用户信息
    UPLOADPHOTOAVATAR: "operateApi/uploadphotographs", //更新头像或者写真
    COMMENT: "operateApi/comment", //动态点赞/评论
    DELETECOMMENT: "operateApi/deletecomoment", //删除动态点赞/评论
    DELETEMOMMENT: "operateApi/deletemoment", //删除动态
    VIDEOCOMMENT: "operateApi/addVideoComment", //视频点赞/评论
    DELETEVIDEO: "operateApi/deletevideo", //删除视频点赞/评论
    FANS: "operateApi/fans", //关注,取消关注
    UPLOADVD: "operateApi/addVideo", //上传视频
    APPOINTMENT: "operateApi/appointment", //邀约活动
    UPDATEAPPOINTMENT: "operateApi/updateappointment", //接受，取消邀约活动
    ENDAPPOINTMENT: "operateApi/endappointment", //确认活动完成
    RELEASEMOMENT: "operateApi/releasemoment", //发布动态
    RELEASESERVICE: "operateApi/releaseservice", //发布活动
    RELEASEINVITATION: "operateApi/releaseinvitation", //发布邀请
    INVITATIONRECEIVER: "operateApi/invatationreceiver", //应请
    UPDATERECEIVER: "operateApi/updatereceiver", //接收,拒绝应邀
    ENDINVITATION: "operateApi/endinvatation", //邀请完成
    UPDATEMOBILE: "operateApi/updateOwnerMobile", //修改手机号码
    PEOPLECOMMENT: "operateApi/addPeopleComment", //添加人的评论
    ADDCOLLECT: "operateApi/addCollect", //添加收藏
    COLLECT: "queryApi/collect", //查询收藏
    WITHDRAW: "operateApi/addSoulAmount", //提现
    VISITOR: "operateApi/visitor", //增加访客
    CANCELINVITATION: "operateApi/cancelinvitation", //取消邀请
    UPDATEPWD: "authApi/updatepwd", //修改密码
    WXPREPAYMENT: "operateApi/wxprepayment", //微信预支付
    STATISTICSORDERINGCOUNT: "queryApi/statisticsOrderingCount", //未完成的单数
    DELETESERVICE: "operateApi/deleteservice", //删除活动
    ADDSOULBANKCARD: "operateApi/addSoulBankcard", //添加银行卡
    DELSOULBANKCARD: "operateApi/modifySoulBankcard", //删除银行卡
    UPDATEREFERENCE: "operateApi/updatereference", //修改推荐码
    CONTACTSINFOADD: "operateApi/userContactsAdd", //添加通讯录
    CYHD: "operateApi/participateActivity", //参与活动
    WXPAYCALLBACK: "wxPayApi/wxPayCallback", //微信支付回调接口
    POSTGIFTS: "operateApi/postGifts", //赠送礼物
    RECHARGEVIP: "operateApi/rechargeByGold", //充值会员
    COMPLAINT: "operateApi/complaint", //投诉举报,
    // GFHF:"operateApi/addReplyComment",//官方回复
    // GFPLHQ:"queryApi/getReplycomemnt"//获取官方评论
    GETQR: "operateApi/createQR", //分享二维码
};
