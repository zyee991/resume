let info = {
    name:"张一",
    mobile:"18088605992",
    address:"重庆",
    age:"30",
    email:"zy991@foxmail.com",
    desc:"3年java开发;javaweb;小程序/公众号/企业微信;",
    github:"https://github.com/zyee991",
    wordpress:"https://www.itcuc.com/"
};

jQuery(function () {
    $("#name").html(info.name);
    $("#mobile").html(info.mobile);
    $("#address").html(info.address);
    $("#age").html(info.age);
    $("#email").html(info.email);
    $("#email").attr("href","mailto:"+info.email);
    $("#desc").html(info.desc);
    $("#github").attr("href",info.github);
    $("#wordpress").attr("href",info.wordpress);
})