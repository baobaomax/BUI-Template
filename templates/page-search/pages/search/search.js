/**
 * 搜索模板
 * 默认模块名: pages/page-search/page-search
 * @return {[object]}  [ 返回一个对象 ]
 */
loader.define(function(require,exports,module) {

    var pageview = {};
    
    // 模块初始化定义    
    pageview.init = function () {

        var uiSearchbar = bui.searchbar({
            id:"#uiSearchbar",
            callback: function (ui,keyword) {
              // 点击搜索
              bui.hint("你点击了search");
            },
            onInput: function(ui,keyword) {
              // 输入实时搜索
            },
            onRemove: function(ui,keyword) {
              // 删除关键词需要做什么其它处理
            }
        });
        
    }
    

    // 初始化
    pageview.init();

    // 输出模块
    return pageview;
})