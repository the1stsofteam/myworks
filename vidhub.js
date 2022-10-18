var rule={
    title:'vidhub',
    host:'https://vidhub.cc',
    // homeUrl:'/',
    url:'/vodshow/fyclass--time------fypage---2022.html',
    searchUrl:'/vodsearch/-------------.html?wd=**',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_parse:'.nav-menu-items&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.module-list;&&.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.module&&.module-item;a&&title;.lazyloaded&&data-src;.module-item-text&&Text;a&&href',
    二级:{"title":"h1&&Text;.tag-link&&span&&Text","img":".lazyload&&data-src","desc":".video-info-items:eq(0)&&Text;.video-info-items:eq(1)&&Text;.video-info-items:eq(2)&&Text;.video-info-items:eq(3)&&Text;.video-info-items:eq(4)&&Text;.video-info-items:eq(5)&&Text;.video-info-items:eq(6)&&Text","content":".vod_content&&Text","tabs":".module-tab-content&&div","lists":".sort-item:eq(#id) a"},
    搜索:'.module&&.module-search-item;h3&&Text;.lazyload&&data-src;.video-serial&&Text;a&&href',
}