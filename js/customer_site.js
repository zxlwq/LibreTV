const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
     },
    api_29: { 
         name: `TV-电影天堂资源`, 
         api: `http://caiji.dyttzyapi.com/api.php/provide/vod`, 
         detail: `http://caiji.dyttzyapi.com`, 
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
