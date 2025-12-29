// 导航模块
/**
 * 初始化导航功能
 * 处理导航链接的active状态
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 导航链接点击事件 - 只处理页面内导航
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 移除所有导航链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加当前导航链接的active类
            this.classList.add('active');
        });
    });
}