window.onload = function () {
    var app = new Vue({
        el: '#qiaqia-wrapper',
        data: {
            imgSrc: '../image/',
            api:{
                signUpUrl:'http://www.renyuxian.com/active/qiaqia/baoming'
            },
            user: {
                name: '获取失败',
                passWord: '获取失败'
            },
            winInfo: {
                _width: ' ',
                _height: ' '
            },
            eventState: {
                loading: true,
                isShow: false,
                ruleShow: false,
                userInfoShow: false,
                maskShow: false
            },
            mobileNum: ''
        },
        methods: {
            screenSizeSetting: function () {
                /**
                 * rem适配以设计图640为标准，字号125%
                 */
                var _html = document.querySelector('html');
                var winWidth = window.innerWidth;

                if (winWidth <= 640) {
                    document.querySelector('html').style.fontSize = winWidth * 125 / 320 + "%";
                } else {
                    document.querySelector('html').style.fontSize = 640 * 125 / 320 + "%";
                }
            },
            showMainPage: function () {
                //页面显示
                var _this = this;
                var winHeight = window.innerHeight;
                setTimeout(function () {
                    _this.eventState.isShow = true;
                    _this.eventState.loading = false;
                }, 1500);
                _this.winInfo._height = winHeight;
            },
            validatemobile: function (event) {
                /**
                 * 手机号码验证规则，目前覆盖号码如下
                 * 电信
                 * 中国电信手机号码开头数字
                 * 2G/3G号段（CDMA2000网络）133、153、180、181、189
                 * 4G号段 177
                 * 
                 * 联通
                 * 中国联通手机号码开头数字
                 * 2G号段（GSM网络）130、131、132、155、156
                 * 3G上网卡145
                 * 3G号段（WCDMA网络）185、186
                 * 4G号段 176、185[1]
                 * 
                 * 移动
                 * 中国移动手机号码开头数字
                 * 2G号段（GSM网络）有134x（0-8）、135、136、137、138、139、150、151、152、158、159、182、183、184。
                 * 3G号段（TD-SCDMA网络）有157、187、188
                 * 3G上网卡 147
                 * 4G号段 178
                 */
                var _this = this;
                var mobile = _this.mobileNum;
                var reg = /^1[3|4|5|7|8][0-9]{9}$/;
                var api = {
                    postApiFunction: function () {
                        _this.eventState.maskShow = true;
                        _this.eventState.userInfoShow = true;
                    }
                }

                if (mobile.length == 0) {
                    alert('请输入手机号码');
                    event.target.focus();
                    return false;
                } else if (mobile.length != 11) {
                    alert('您输入的手机号码格式有误');
                    return false;
                } else if (!reg.test(mobile)) {
                    alert('请输入有效的手机号码！');
                    return false;
                } else {
                    api.postApiFunction();
                }
            },
            ruleContentEvent: function (event) {
                var _this = this;

                _this.eventState.ruleShow = true;
                _this.eventState.maskShow = true;
            },
            maskClickEvent: function (event) {
                var _this = this;

                _this.eventState.ruleShow = false;
                _this.eventState.userInfoShow = false;
                _this.eventState.maskShow = false;
            }
        },
        created: function () {
            // 实例已经创建,msg变量还未渲染到模板
        },
        mounted: function () {
            // 已经挂载到模板上:msg变量渲染到模板
            var _this = this;
            // rem适配
            _this.screenSizeSetting();
            window.addEventListener('resize', function () {
                _this.screenSizeSetting();
            });
            _this.showMainPage();
        },
        updated: function () {
            // 实例更新

        },
        destroyed: function () {
            // 销毁
        }
    });


}