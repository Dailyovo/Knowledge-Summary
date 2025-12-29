# Knowledge-Summary

学习助手 - 一个基于纯HTML/CSS/JavaScript的在线学习平台，用于总结初中、高中各科目知识点。

## 项目简介

本项目是一个轻量级的在线学习助手，旨在帮助学生系统地学习和复习初中、高中阶段的各学科知识点。网站采用模块化设计，无需后端支持，可直接在浏览器中运行。

## 功能特性

### 学习阶段分类
- **初中知识**：涵盖语文、数学、英语、生物等学科
- **高中知识**：涵盖数学、物理、化学、生物等学科

### 核心学习模块

#### 1. 词根学习
- 提供常见英语词根及其派生单词
- 包含单词发音、中文翻译和例句
- 支持音频播放功能
- 随机展示词根，增加学习趣味性

#### 2. 英语作文模板
- 提供常用英语作文写作模板
- 包含模板结构和示例
- 帮助学生掌握英语写作技巧

#### 3. 知识点总结
- 各学科重点知识点系统梳理
- 数学公式支持MathJax渲染
- 物理实验交互式演示（如凸透镜成像实验）

#### 4. 交互式学习
- 物理实验模拟（凸透镜成像、力学等）
- 可视化学习体验
- 响应式设计，支持多设备访问

## 项目结构

```
Knowledge Summary/
├── index.html                 # 主页
├── style.css                  # 全局样式
├── README.md                  # 项目说明
├── web.config                 # Web配置
├── data/                      # 数据文件
│   ├── rootData.js           # 词根数据
│   └── templateData.js       # 模板数据
├── js/                        # JavaScript文件
│   ├── main.js               # 主入口文件
│   └── modules/              # 模块目录
│       ├── navigation.js     # 导航模块
│       ├── wordRootModule.js # 词根学习模块
│       ├── englishTemplatesModule.js # 英语模板模块
│       └── physicsModule.js  # 物理模块
├── junior/                    # 初中知识目录
│   ├── index.html            # 初中首页
│   ├── word-root.html        # 词根学习
│   ├── english-templates.html # 英语作文
│   ├── junior-summary.html   # 知识总结
│   ├── junior-math.html      # 初中数学
│   ├── junior-chinese.html   # 初中语文
│   ├── junior-english.html   # 初中英语
│   ├── junior-biology.html   # 初中生物
│   ├── math/                 # 数学知识点页面
│   ├── chinese/              # 语文知识点页面
│   ├── english/              # 英语知识点页面
│   ├── biology/              # 生物知识点页面
│   ├── physics-study.html    # 物理学习
│   ├── mechanics.html        # 力学
│   ├── acoustics.html        # 声学
│   └── convex-lens.html      # 凸透镜
└── senior/                    # 高中知识目录
    ├── index.html            # 高中首页
    ├── math.html             # 数学
    ├── physics.html          # 物理
    ├── biology.html          # 生物
    ├── chemistry.html        # 化学
    ├── math/                 # 数学知识点页面
    ├── physics/              # 物理知识点页面
    ├── biology/              # 生物知识点页面
    └── chemistry/            # 化学知识点页面
```

## 技术栈

- **HTML5**：页面结构
- **CSS3**：样式设计，采用Microsoft Word标题样式规范
- **JavaScript (ES6+)**：交互逻辑
- **MathJax**：数学公式渲染
- **模块化设计**：代码结构清晰，易于维护和扩展

## 主要特性

### 响应式设计
- 支持桌面端、平板和移动端
- 自适应布局，优化不同设备显示效果

### 模块化架构
- 导航模块：处理页面导航和路由
- 词根模块：词根学习和单词展示
- 英语模板模块：作文模板展示
- 物理模块：物理实验和知识点展示

### 数据驱动
- 词根数据和模板数据独立存储
- 便于更新和维护学习内容

### 用户体验优化
- 渐变色设计，视觉效果美观
- 平滑过渡动画
- 交互反馈清晰

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 选择学习阶段（初中或高中）
3. 选择相应科目进入学习页面
4. 浏览知识点或使用交互式学习功能

## 浏览器兼容性

- Chrome/Edge (推荐)
- Firefox
- Safari
- 其他现代浏览器

## 开发说明

### 添加新知识点
1. 在对应的学科目录下创建新的HTML文件
2. 参考现有页面的结构和样式
3. 如需数学公式，使用MathJax语法

### 添加新词根
1. 编辑 `data/rootData.js` 文件
2. 按照现有格式添加词根数据
3. 包含词根含义、发音、单词列表和例句

### 添加新模板
1. 编辑 `data/templateData.js` 文件
2. 按照现有格式添加模板数据
3. 包含模板结构和示例

## 许可证

本项目仅供学习和参考使用。
