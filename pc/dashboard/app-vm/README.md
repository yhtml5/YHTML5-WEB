## 简介
   * 本版本使用jquery替代Angular指令, 使用VM java模板替换angular model, $scope, server
   * VM + JQuery 实现web系统
    * 优点: 开发人员多,任务分摊
    * 缺点:
          - [x] 每一次需求更改,前端开发好,后台需要做对应模板更新,容易遇到前端开发的效果与层实际效果不一致
          - [x] 后端写的js没法做统一优化(格式化, 压缩, 合并, 代码冗余)
          - [x] 需要经常沟通

### vm版本说明
   - [-] 去除factory.js,
   - [-] 去除angular相关指令: ng-model, ng-bind, ng-init, ng-click
   - [-] 去除上传组件, 搜索组件, 省市地址组件, 银行组件, 经营范围等angular支持
   - [-] 去除无用的$scope, model,
   - [-] 去除UI-Router中已用vm写的部分
   - [-] 去除多余的http请求

### 新增内容
   - [x] 引入jquey.js, bootstrap.js
   - [x] 用jquery重写下拉组件,
   - [-] 用jquery重写文件上传组件,
   - [x] 用jquery重写日期组件,列出组件功能
       - [x] 时间格式用"2016-11-11 11:11",  //format: "yyyy-mm-dd hh:ii",
   - [-] 用jquery重写弹窗事件, 账户详情, 成功窗口
   - [x] 弹窗,只有当点击关闭才能关闭,其它空白区设置为无反应状态
       - [x] 在class为modal 的标签中,加上 data-backdrop="static"
   - [x] 增加支付查询显示更多功能
   - [-] 用jQuery重写倒计时
   - [x] 抽离smsConfirm,realNameModal
   - [x] 用户设置tab标签重写
   - [x] 账户详情示例图片,点击放大效果,悬浮显示上传条件 @琪超
   - [x] 实名认证与我的账户同样的示例 @琪超
   - [x] 增加网络图片上传功能
   - [x] 修复在IE浏览器下系统异常

### 文件改动
   - [x] 20160612 payment  --增加日期控件, 视图优化
   - [x] 20160612 account.record  --增加日期控件, 视图优化, 展开详情
   - [x] 20160612 account. --detail 增加日期控件, 排列优化
   - [x] 20160613 account  --去除angular属性,
   - [x] 20160613 account.detail  --增加日期控件; 优化排列; 重写详情弹窗
   - [x] 20160613 account.record  --增加日期控件, 展开详情; 优化视图UI,表格显示; 重写删除弹窗
   - [x] 20160613 account.topay  --重写批量代付弹窗,批量复合弹窗
   - [x] 20160613 account.withdraw  --用jquery重写弹窗
   - [x] 20160613 payment  --增加日期控件; 优化视图UI,表格显示; 重写补发通知弹窗
   - [x] 20160613 account.topay  --重写单笔复核弹窗, 优化radio选项
   - [x] 20160615 user.data  --重写tab标签切换,优化试图UI
   - [x] 20160622 user, appsetting  --更新默认图片
   - [x] 20160623 user, appsetting  --更新为高清图片
   - [x] 20160623 nav  --优化显示方式及显示位置
   - [x] 20160623 nav  --优化导航栏导航位置，样式
   - [x] 20160623 user.account  --信息结算模块和隐私数据模块优化试图UI
   - [x] 20160624 appsetting.info  --表格样式修改; 应用信息增加显示; 内容为空时字体图片修改显示
   - [x] 20160630 serviceAgreement  --协议内容修改
   - [x] 20160630 authentication.person  --表单控件添加联系电话和邮箱的验证信息
   - [x] 20160704 商户后台所有时间控件默认进入都显示当天00:00--23:59
   - [x] 20160705 appsetting.api  --应用设置-技术对接页面优化
   - [x] 20160705 nav.main  --首页帮助点击关闭后会有一个蓝色的框
   - [x] 20160705 account.topay  --收款方姓名处增加下拉框
   - [x] 20160706 account.topay  --收款方姓名处修改下拉菜单样式
   - [x] 20160707 user.person, appsetting  --删除内联样式
   - [x] 20160708 appList-add --用jquery重写弹框和下拉框
   - [x] 20160708 appsetting.api --添加通知地址和重新支付地址的文字说明
   - [x] 20160708 404.html --404html页面增加
   - [x] 20160711 user.person、authentication.person --实名认证填写基本信息添加图片时排版优化
   - [x] 20160713 helpCenter --帮助调整
   - [x] 20160714 appsetting.api --商户私钥排版优化
   - [x] 20160715 empty --内容为空的图标已更换
   - [x] 20160802 user.person 增加alert警告 




### jQuery命名规范
   动词代表触发事件对象, 名词代表响应事件的实体, 用属性选择器获取内容
   (尽量避免使用class属性选择器当做操作dom的节点, id选择器仅当元素唯一时使用)
   - [x] Event object: y-open="demoFormBtn"
   - [x] contant: y-modal="demoForm", y-tab="demo"
   - [x] get attribute: $('[y-open="demoFormBtn"], [y-modal="demoForm"], .y-open, #y-open')

### 注意事项
   * 输出前注释angular-ui
   * datetimepicker 获取时区在ie firefox下显示异常,已修改源码包
   * 时区默认为86
   
