// 主入口文件
// 页面加载完成后执行

/**
 * 检查翻译完整性
 * 遍历所有词根和单词，检查是否有缺少中文翻译的情况
 */
function checkTranslations() {
    if (typeof rootData === 'undefined') return;
    
    let missingCount = 0;
    const missingTranslations = [];
    
    // 遍历所有词根
    Object.keys(rootData).forEach(root => {
        const rootInfo = rootData[root];
        
        // 检查每个单词
        rootInfo.words.forEach(word => {
            if (!word.chinese || word.chinese === '' || word.chinese === '中文含义') {
                missingCount++;
                missingTranslations.push({ root: root, word: word.word });
            }
        });
    });
    
    // 在控制台输出结果
    if (missingCount === 0) {
        console.log('✅ 所有单词都有翻译！');
    } else {
        console.log(`⚠️  发现 ${missingCount} 个缺少翻译的单词：`);
        missingTranslations.forEach(item => {
            console.log(`   词根 "${item.root}" 下的单词 "${item.word}"`);
        });
    }
}

// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航功能
    initNavigation();
    
    // 初始化词根背单词模块
    if (document.getElementById('word-root')) {
        initWordRootModule();
    }
    
    // 初始化英语模板模块
    if (document.getElementById('english-templates')) {
        initEnglishTemplatesModule();
    }
    
    // 初始化物理模块
    if (document.getElementById('physics') || document.getElementById('convex-lens')) {
        initPhysicsModule();
    }
    
    // 检查翻译完整性
    checkTranslations();
});
