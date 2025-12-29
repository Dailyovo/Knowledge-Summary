// 物理模块

/**
 * 初始化物理模块
 * 负责处理物理相关功能的初始化
 */
function initPhysicsModule() {
    console.log("Physics module initialized");
    
    // 初始化凸透镜实验
    initConvexLensExperiment();
}

/**
 * 初始化凸透镜成像实验
 * 实现凸透镜成像规律的交互式演示
 */
function initConvexLensExperiment() {
    // 检查是否存在凸透镜实验元素
    const opticalBench = document.getElementById('optical-bench');
    if (!opticalBench) return;
    
    // 获取DOM元素
    const movableLens = document.getElementById('movable-lens');
    const candle = document.getElementById('candle');
    const screen = document.getElementById('screen');
    const screenBody = document.getElementById('screen-body');
    const lensSlider = document.getElementById('lens-slider');
    const candleSlider = document.getElementById('candle-slider');
    const lensPosition = document.getElementById('lens-position');
    const candlePosition = document.getElementById('candle-position');
    const imageType = document.getElementById('image-type');
    const imageDistance = document.getElementById('image-distance');
    
    // 焦距（cm）
    const focalLength = 15;
    
    // 创建Canvas元素用于绘制图像
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    canvas.style.border = '1px solid rgba(255, 255, 255, 0.3)';
    canvas.style.background = 'transparent';
    screenBody.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    /**
     * 更新实验状态
     * 计算物距、像距、像的性质，并更新UI显示
     */
    function updateExperiment() {
        // 获取当前位置
        const lensPos = parseFloat(lensSlider.value);
        const candlePos = parseFloat(candleSlider.value);
        
        // 更新元素位置
        movableLens.style.left = `${lensPos}%`;
        candle.style.left = `${candlePos}%`;
        
        // 更新位置显示
        lensPosition.textContent = lensPos;
        candlePosition.textContent = candlePos;
        
        // 计算物距（cm）
        // 光学平台总长度为100个单位，假设每个单位代表1cm
        const objectDistance = Math.abs(lensPos - candlePos);
        
        // 使用凸透镜成像公式计算像距：1/f = 1/u + 1/v
        let imageDistanceValue;
        if (objectDistance === focalLength) {
            // 物距等于焦距，不成像
            imageDistanceValue = Infinity;
        } else {
            imageDistanceValue = (focalLength * objectDistance) / (objectDistance - focalLength);
        }
        
        // 计算像的位置（相对于凸透镜）
        let screenPos;
        if (isFinite(imageDistanceValue)) {
            screenPos = lensPos + imageDistanceValue;
            // 确保屏幕在光学平台范围内
            if (screenPos > 95) screenPos = 95;
            if (screenPos < 5) screenPos = 5;
        } else {
            screenPos = 95;
        }
        
        // 更新屏幕位置
        screen.style.left = `${screenPos}%`;
        
        // 计算像的高度（假设蜡烛高度为20px）
        const candleHeight = 20;
        let imageHeight;
        let imageTypeText;
        
        if (objectDistance > focalLength) {
            // 实像
            imageHeight = (imageDistanceValue / objectDistance) * candleHeight;
            imageTypeText = '倒立';
        } else {
            // 虚像
            imageHeight = (-imageDistanceValue / objectDistance) * candleHeight;
            imageTypeText = '正立';
        }
        
        // 确定像的大小
        if (Math.abs(imageHeight) > candleHeight * 1.1) {
            imageTypeText += '、放大';
        } else if (Math.abs(imageHeight) < candleHeight * 0.9) {
            imageTypeText += '、缩小';
        } else {
            imageTypeText += '、等大';
        }
        
        // 确定像的性质
        imageTypeText += objectDistance > focalLength ? '、实像' : '、虚像';
        
        // 更新成像性质显示
        imageType.textContent = imageTypeText;
        
        // 更新像距显示
        imageDistance.textContent = isFinite(imageDistanceValue) ? Math.round(imageDistanceValue) : '∞';
        
        // 绘制动态图像
        drawImage(imageHeight, objectDistance > focalLength);
    }
    
    /**
     * 在Canvas上绘制蜡烛的像
     * @param {number} height - 像的高度
     * @param {boolean} isInverted - 是否倒立
     */
    function drawImage(height, isInverted) {
        // 清空Canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 设置蜡烛颜色
        const flameColor = '#ff6b35';
        const candleColor = '#f0e68c';
        
        // 计算绘制位置
        const centerX = canvas.width / 2;
        const bottomY = canvas.height - 10;
        
        // 计算蜡烛和火焰的高度
        const scaledHeight = Math.abs(height) * 2;
        const flameHeight = scaledHeight * 0.3;
        const candleBodyHeight = scaledHeight * 0.7;
        
        // 计算绘制起点
        let startY;
        if (isInverted) {
            // 倒立像，从顶部开始绘制
            startY = 10;
        } else {
            // 正立像，从底部开始绘制
            startY = bottomY - scaledHeight;
        }
        
        // 绘制蜡烛图像
        if (isInverted) {
            // 倒立像：先绘制火焰，再绘制蜡烛主体
            ctx.fillStyle = flameColor;
            ctx.beginPath();
            ctx.moveTo(centerX, startY);
            ctx.lineTo(centerX - flameHeight / 3, startY + flameHeight);
            ctx.lineTo(centerX + flameHeight / 3, startY + flameHeight);
            ctx.closePath();
            ctx.fill();
            
            ctx.fillStyle = candleColor;
            ctx.fillRect(centerX - 5, startY + flameHeight, 10, candleBodyHeight);
        } else {
            // 正立像：先绘制蜡烛主体，再绘制火焰
            ctx.fillStyle = candleColor;
            ctx.fillRect(centerX - 5, startY, 10, candleBodyHeight);
            
            ctx.fillStyle = flameColor;
            ctx.beginPath();
            ctx.moveTo(centerX, startY + candleBodyHeight);
            ctx.lineTo(centerX - flameHeight / 3, startY + candleBodyHeight - flameHeight);
            ctx.lineTo(centerX + flameHeight / 3, startY + candleBodyHeight - flameHeight);
            ctx.closePath();
            ctx.fill();
        }
    }
    
    // 添加事件监听器
    lensSlider.addEventListener('input', updateExperiment);
    candleSlider.addEventListener('input', updateExperiment);
    
    // 初始化实验
    updateExperiment();
}