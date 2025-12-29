// 英语模板模块
/**
 * 初始化英语模板模块
 * 负责处理英语作文模板的展示和切换功能
 */
function initEnglishTemplatesModule() {
    const templateButtonsContainer = document.querySelector('.template-buttons');
    const templateTitle = document.getElementById('template-title');
    const templateStructure = document.getElementById('template-structure');
    const templateExample = document.getElementById('template-example');
    
    /**
     * 生成模板类型按钮
     */
    function generateTemplateButtons() {
        Object.keys(englishTemplates).forEach(templateType => {
            const button = document.createElement('button');
            button.className = 'template-btn';
            button.textContent = englishTemplates[templateType].title;
            button.addEventListener('click', () => displayTemplate(templateType));
            templateButtonsContainer.appendChild(button);
        });
    }
    
    /**
     * 显示模板详细信息
     * @param {string} templateType - 模板类型
     */
    function displayTemplate(templateType) {
        const template = englishTemplates[templateType];
        if (!template) return;
        
        templateTitle.textContent = template.title;
        templateStructure.textContent = template.structure;
        templateExample.innerHTML = template.example;
    }
    
    // 初始生成模板按钮
    generateTemplateButtons();
    
    // 初始显示第一个模板
    const firstTemplate = Object.keys(englishTemplates)[0];
    if (firstTemplate) {
        displayTemplate(firstTemplate);
    }
    
    console.log("English templates module initialized");
}
