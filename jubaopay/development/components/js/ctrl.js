'use strict';

angular.module('controllers', ['ui.bootstrap', 'ngAnimate'])
    .controller('controllers', function($scope, $http, $uibModal) {
        $scope.downloadRecord = [{
            "name": "JAVA包",
            "note": "WAP支付",
            "class": "icon-java",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/java-wap-demo.zip"
        }, {
            "name": "JAVA包",
            "note": "PC端",
            "class": "icon-java",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/java-demo.zip"
        }, {
            "name": ".NET包",
            "note": "WAP支付",
            "class": "icon-windows",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/aspx-wap-demo.zip"

        },  {
            "name": ".NET包",
            "note": "PC端",
            "class": "icon-windows",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/aspx-demo.zip"

        },{
            "name": "PHP包",
            "note": "WAP支付",
            "class": "icon-php",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/php-demo.zip"
        }, {
            "name": "PHP包",
            "note": "PC端",
            "class": "icon-php",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/php-demo.zip"
        }, {
            "name": "COCS2D",
            "note": "SDK开发包",
            "class": "icon-weibiaoti4zhuanhuan",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/cocos-demo.zip"
        }, {
            "name": "IOS包",
            "note": "SDK开发包",
            "class": "icon-ios",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/ios_sdk.zip"
        }, {
            "name": "Andorid",
            "note": "SDK开发包",
            "class": "icon-iconanzhuo",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/new-sdk-demo.zip"
        }, {
            "name": "商户文档",
            "note": "下载接入文档",
            "class": "icon-iconshtjrz",
            "url":"http://static.jubaobar.cn/project/jubaopay/res/sdk/jubaopay-guide.pdf"
        }];
        $scope.paymentRecord = [{
            "name": "支付宝",
            "note": "移动支付",
            "class": "icon-zhifubao1"
        }, {
            "name": "支付宝",
            "note": "扫码支付",
            "class": "icon-zhifubao1"
        },  {
            "name": "支付宝",
            "note": "WAP支付",
            "class": "icon-zhifubao1"
        },{
            "name": "支付宝",
            "note": "即时到帐",
            "class": "icon-zhifubao1"
        },{
            "name": "微信支付",
            "note": "App 支付",
            "class": "icon-weixinzhifu"
        },{
            "name": "微信支付",
            "note": "公众号支付",
            "class": "icon-weixinzhifu"
        },  {
            "name": "银联",
            "note": "银联支付",
            "class": "icon-yinlian"
        }, {
            "name": "银联",
            "note": "网银支付",
            "class": "icon-yinlian"
        }, {
            "name": "Apple",
            "note": "Apple Pay",
            "class": "icon-apple"
        }, {
            "name": "百度钱包",
            "note": "移动网页支付",
            "class": "icon-baiduqianbao"
        }, {
            "name": "京东支付",
            "note": "移动网页支付",
            "class": "icon-jingdong-1"
        },  {
            "name": "财付通",
            "note": "PC 支付",
            "class": "icon-caifutong"
        }, {
            "name": "快钱",
            "note": "PC 支付",
            "class": "icon-kuaiqian"
        },{
            "name": "易宝支付",
            "note": "移动网页支付",
            "class": "icon-yibao"
        }];
        $scope.costRecord = [{
            "channel": "支付宝",
            "type": "PC网站",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "支付宝",
            "type": "手机网站",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "支付宝",
            "type": "APP",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "支付宝",
            "type": "扫码支付",
            "cost": "/",
            "time": "实时到帐"
        }, {
            "channel": "微信",
            "type": "公共帐号",
            "cost": "300/年",
            "time": "T+1、T+7"
        }, {
            "channel": "微信",
            "type": "APP",
            "cost": "300/年",
            "time": "T+1、T+7"
        }, {
            "channel": "微信",
            "type": "扫码支付",
            "cost": "300/年",
            "time": "T+1、T+7"
        }, {
            "channel": "京东支付",
            "type": "0-50万",
            "cost": "",
            "time": "T+7"
        }, {
            "channel": "京东支付",
            "type": "50万-200万",
            "cost": "",
            "time": "T+7"
        }, {
            "channel": "京东支付",
            "type": "200以上",
            "cost": "",
            "time": "T+7"
        }, {
            "channel": "银联",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }, {
            "channel": "百度钱包",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }, {
            "channel": "快钱",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }, {
            "channel": "易宝",
            "type": "所有形式",
            "cost": "2000-3000",
            "time": "T+1"
        }];
        $scope.contactRecord = [{
            "name": "杜晓涵",
            "des": "4年产品顾问经验，曾服务过手游、页游、端游和工具类APP等200个多个项目。",
            "emaill": "chenlin.xu@jubaobar.com",
            "img":"http://static.jubaobar.cn/project/jubaopay/static/img/girl1.jpg"
        },{
            "name": "玲珑",
            "des": "4年产品顾问经验，曾服务过手游、页游、端游和工具类APP等200个多个项目。",
            "emaill": "rong.ling@jubaobar.com",
            "img":"http://static.jubaobar.cn/project/jubaopay/static/img/girl2.jpg"
        },{
            "name": "杨小佳",
            "des": "5年产品顾问经验，曾服务过手游、页游、端游和工具类APP等300个多个项目，经验丰富，服务到位。",
            "emaill": "yu.duan@jubaobar.com",
            "img":"http://static.jubaobar.cn/project/jubaopay/static/img/girl3.jpg"
        }]
    });