const CUSTOMER_SITES = {
        api_1: {
            name: "TV-1080资源",
            api: "https://api.1080zyku.com/inc/api_mac10.php",
            detail: "https://api.1080zyku.com",
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
