// 词根背单词模块
/**
 * 初始化词根背单词模块
 * 负责处理词根展示、搜索和音频播放等功能
 */
function initWordRootModule() {
    const rootButtonsContainer = document.querySelector('.root-buttons');
    const rootSearch = document.getElementById('root-search');
    const searchBtn = document.getElementById('search-btn');
    const rootTitle = document.getElementById('root-title');
    const rootPronunciation = document.getElementById('root-pronunciation');
    const playAudioBtn = document.getElementById('play-audio');
    const rootMeaning = document.getElementById('root-meaning');
    const imageContainer = document.getElementById('image-container');
    const wordsList = document.getElementById('words');
    const examplesList = document.getElementById('examples-list');
    
    /**
     * 随机选择指定数量的词根
     * @param {Object} roots - 词根数据对象
     * @param {number} count - 要选择的词根数量
     * @returns {Object} - 包含随机选择的词根的对象
     */
    function getRandomRoots(roots, count) {
        const allRoots = Object.keys(roots);
        const shuffled = [...allRoots].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);
        const result = {};
        selected.forEach(root => {
            result[root] = roots[root];
        });
        return result;
    }
    
    /**
     * 生成词根按钮
     * @param {Object} roots - 词根数据对象
     */
    function generateRootButtons(roots) {
        // 每次只显示3个随机词根
        const randomRoots = getRandomRoots(roots, 3);
        rootButtonsContainer.innerHTML = '';
        Object.keys(randomRoots).forEach(root => {
            const button = document.createElement('button');
            button.className = 'root-btn';
            button.textContent = root;
            button.addEventListener('click', () => displayRootInfo(root));
            rootButtonsContainer.appendChild(button);
        });
    }
    
    /**
     * 显示词根详细信息
     * @param {string} root - 词根名称
     */
    function displayRootInfo(root) {
        const rootInfo = rootData[root];
        if (!rootInfo) return;
        
        // 更新词根基本信息
        rootTitle.textContent = root;
        rootPronunciation.textContent = rootInfo.pronunciation;
        rootMeaning.textContent = rootInfo.meaning;
        imageContainer.innerHTML = `<div class="emoji-image">${rootInfo.image}</div>`;
        
        // 显示相关单词
        displayWords(rootInfo.words);
        
        // 显示例句
        displayExamples(rootInfo.examples);
    }
    
    /**
     * 显示相关单词列表（每次只显示前三个）
     * @param {Array} words - 单词数组
     */
    function displayWords(words) {
        wordsList.innerHTML = '';
        // 只显示前三个单词
        const displayWords = words.slice(0, 3);
        displayWords.forEach(word => {
            const li = document.createElement('li');
            li.className = 'word-item';
            li.innerHTML = `<strong>${word.word}</strong>: ${word.chinese}`;
            wordsList.appendChild(li);
        });
    }
    
    /**
     * 显示例句列表
     * @param {Array} examples - 例句数组
     */
    function displayExamples(examples) {
        examplesList.innerHTML = '';
        examples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'example-item';
            exampleDiv.innerHTML = `<p class="english">${example.english}</p><p class="chinese">${example.chinese}</p>`;
            examplesList.appendChild(exampleDiv);
        });
    }
    
    /**
     * 搜索词根功能
     * @param {string} query - 搜索关键词
     */
    function searchRoots(query) {
        const filteredRoots = {};
        Object.keys(rootData).forEach(root => {
            if (root.toLowerCase().includes(query.toLowerCase()) || 
                rootData[root].meaning.toLowerCase().includes(query.toLowerCase())) {
                filteredRoots[root] = rootData[root];
            }
        });
        generateRootButtons(filteredRoots);
    }
    
    /**
     * 播放词根音频
     */
    function playRootAudio() {
        const currentRoot = rootTitle.textContent;
        if (currentRoot && rootData[currentRoot]?.audio) {
            const audio = new Audio(rootData[currentRoot].audio);
            audio.play().catch(error => console.error('播放音频失败:', error));
        }
    }
    
    // 绑定事件监听器
    playAudioBtn.addEventListener('click', playRootAudio);
    searchBtn.addEventListener('click', () => searchRoots(rootSearch.value));
    
    rootSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchRoots(rootSearch.value);
        }
    });
    
    // 初始化模块
    generateRootButtons(rootData);
    
    // 初始显示第一个词根的信息
    const firstRoot = Object.keys(rootData)[0];
    if (firstRoot) {
        displayRootInfo(firstRoot);
    }
    
    console.log("Word root module initialized");
}
