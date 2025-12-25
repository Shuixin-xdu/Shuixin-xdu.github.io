/**
 * MkDocs 圣诞装饰 + 礼物弹窗整合版（完美图片展示版）
 * 保存为: docs/js/christmas.js
 */

(function() {
    'use strict';
    
    // 图片路径配置 - 请替换为你的实际图片路径
    const IMAGE_PATHS = {
        gift: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/decoration/2025-12-25-1.webp',      // 初始礼物图片
        closed: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/decoration/2025-12-25-2.webp',    // 关闭时的图片
        opened: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/decoration/2025-12-25-3.webp'     // 接收后的图片
    };
    
    // 全局变量：记录弹窗是否已经完成滑入动画
    let hasSlidIn = false;
    // 全局变量：记录弹窗是否已经被拖动过
    let hasBeenDragged = false;
    
    // 等待页面完全加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('🎄 正在加载圣诞装饰...');
        
        // 1. 添加所有必要的样式
        addAllStyles();
        
        // 2. 初始化原有的圣诞装饰特效
        initOriginalDecorations();
        
        // 3. 创建右上角弹窗控制开关
        createPopupControlSwitch();
        
        // 4. 根据用户设置决定是否显示弹窗
        const isPopupEnabled = localStorage.getItem('christmasPopupEnabled');
        
        // 默认显示弹窗（除非用户之前关闭了）
        if (isPopupEnabled !== 'false') {
            // 延迟显示，让页面先加载
            setTimeout(createGiftPopup, 1500);
        }
        
        console.log('🎅 圣诞装饰加载完成！节日快乐！');
    }
    
    // ==================== 样式部分 ====================
    function addAllStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* ========== 原有的圣诞装饰样式 ========== */
            /* 雪花样式 */
            .snowflake {
                position: fixed;
                top: -10px;
                color: white;
                font-size: 1em;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
                user-select: none;
                pointer-events: none;
                z-index: 9998;
            }
            
            /* 圣诞帽样式 */
            .christmas-hat {
                position: fixed;
                width: 40px;
                height: 40px;
                background: linear-gradient(to bottom, #d00 0%, #a00 100%);
                clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
                z-index: 9999;
                pointer-events: none;
                opacity: 0.8;
            }
            
            .hat-ball {
                position: absolute;
                top: -5px;
                left: 50%;
                transform: translateX(-50%);
                width: 15px;
                height: 15px;
                background: white;
                border-radius: 50%;
            }
            
            /* 闪烁彩灯 */
            .christmas-light {
                position: fixed;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                z-index: 9997;
                pointer-events: none;
                animation: twinkle 2s infinite;
                box-shadow: 0 0 8px currentColor;
            }
            
            @keyframes twinkle {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 1; }
            }
            
            /* 点击特效 */
            .click-effect {
                position: fixed;
                pointer-events: none;
                z-index: 10000;
                font-size: 1.5em;
                animation: floatUp 1.5s ease-out forwards;
            }
            
            @keyframes floatUp {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) scale(0.5);
                    opacity: 0;
                }
            }
            
            /* 节日消息（原有的右下角消息） */
            .christmas-message {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(200, 0, 0, 0.9);
                color: white;
                padding: 10px 15px;
                border-radius: 20px;
                font-family: Arial, sans-serif;
                font-size: 14px;
                z-index: 10001;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                animation: pulse 2s infinite;
                cursor: pointer;
                border: 2px solid white;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            /* 标题装饰 */
            h1, h2, h3 {
                position: relative;
            }
            
            h1::after, h2::after {
                content: '🎄';
                margin-left: 10px;
                opacity: 0.7;
                animation: swing 3s infinite ease-in-out;
            }
            
            @keyframes swing {
                0%, 100% { transform: rotate(-5deg); }
                50% { transform: rotate(5deg); }
            }
            
            /* ========== 弹窗相关样式（完美图片展示版） ========== */
            /* 弹窗控制开关样式 */
            .christmas-control {
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 10002;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 20px;
                padding: 8px 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                gap: 8px;
                font-family: Arial, sans-serif;
                font-size: 12px;
                border: 2px solid #d00;
                backdrop-filter: blur(5px);
            }
            
            .control-label {
                color: #a00;
                font-weight: bold;
                white-space: nowrap;
            }
            
            .control-switch {
                position: relative;
                width: 40px;
                height: 20px;
            }
            
            .switch-checkbox {
                display: none;
            }
            
            .switch-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                border-radius: 20px;
                transition: .4s;
            }
            
            .switch-slider:before {
                position: absolute;
                content: "🎁";
                display: flex;
                align-items: center;
                justify-content: center;
                height: 16px;
                width: 16px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                border-radius: 50%;
                transition: .4s;
                font-size: 10px;
            }
            
            .switch-checkbox:checked + .switch-slider {
                background-color: #4CAF50;
            }
            
            .switch-checkbox:checked + .switch-slider:before {
                transform: translateX(20px);
                content: "✓";
                color: #4CAF50;
            }
            
            /* 礼物弹窗样式 - 新布局 */
            .gift-popup {
                position: fixed;
                bottom: 100px;
                left: -350px; /* 初始在左侧外 */
                width: 320px; /* 增大弹窗宽度 */
                z-index: 10003;
                background: white;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
                transition: opacity 2s ease;
                display: flex;
                flex-direction: column;
            }
            
            /* 弹窗摇晃动画 - 明显的左右抖动，像小狗摇头 */
            @keyframes dogShake {
                0%, 100% { transform: translateX(0) rotate(0deg); }
                15% { transform: translateX(-8px) rotate(-3deg); }
                30% { transform: translateX(8px) rotate(3deg); }
                45% { transform: translateX(-6px) rotate(-2deg); }
                60% { transform: translateX(6px) rotate(2deg); }
                75% { transform: translateX(-4px) rotate(-1deg); }
                90% { transform: translateX(4px) rotate(1deg); }
            }
            
            /* 摇晃动画应用类 */
            .dog-shake {
                animation: dogShake 1.2s infinite ease-in-out;
            }
            
            /* 弹窗滑入动画 */
            @keyframes slideInFromLeft {
                0% {
                    left: -350px;
                    transform: translateX(0);
                }
                100% {
                    left: 20px;
                    transform: translateX(0);
                }
            }
            
            /* 滑入动画完成后移除动画，防止拖动时再次触发 */
            .slide-animation-done {
                animation: none !important;
                left: 20px;
            }
            
            /* 图片展示区 - 完全展示图片，不留白 */
            .popup-image-container {
                width: 100%;
                height: 220px; /* 专门的图片区域高度 */
                position: relative;
                overflow: hidden;
                background: linear-gradient(135deg, #ffe6e6, #ffcccc); /* 图片加载前的背景 */
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .gift-image {
                width: 100%;
                height: 100%;
                object-fit: contain; /* 完整显示图片，不裁剪，居中 */
                display: block;
                background: transparent;
            }
            
            /* 文字标题区 - 悬浮在图片上方，但固定在顶部边缘 */
            .popup-title-container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                padding: 12px 20px;
                background: linear-gradient(to bottom, 
                    rgba(220, 0, 0, 0.85) 0%, 
                    rgba(180, 0, 0, 0.7) 100%);
                backdrop-filter: blur(3px);
                text-align: center;
                z-index: 2;
                border-bottom: 3px solid rgba(255, 255, 255, 0.3);
            }
            
            .gift-text {
                color: white;
                font-family: 'Arial Rounded MT Bold', 'Arial', sans-serif;
                font-size: 22px;
                font-weight: bold;
                text-shadow: 
                    2px 2px 0 #600,
                    3px 3px 0 rgba(0, 0, 0, 0.3);
                letter-spacing: 1.5px;
                margin: 0;
                line-height: 1.3;
            }
            
            /* 控制区域 - 在图片下方，完全分离 */
            .popup-controls {
                background: linear-gradient(to bottom, #fff5f5, #ffe6e6);
                padding: 15px; /* 减少内边距 */
                display: flex;
                flex-direction: column;
                gap: 12px; /* 减少间距 */
                border-top: 3px solid #ffcccc;
                flex-shrink: 0; /* 防止被压缩 */
            }
            
            .receive-btn {
                background: linear-gradient(to bottom, #4CAF50, #2E7D32);
                color: white;
                border: none;
                padding: 12px 24px; /* 减小按钮尺寸 */
                border-radius: 25px; /* 减小圆角 */
                font-size: 16px; /* 减小字体 */
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
                box-shadow: 0 3px 8px rgba(46, 125, 50, 0.4);
                letter-spacing: 1px;
            }
            
            .receive-btn:hover {
                background: linear-gradient(to bottom, #66BB6A, #388E3C);
                transform: translateY(-2px);
                box-shadow: 0 5px 12px rgba(46, 125, 50, 0.5);
            }
            
            .receive-btn:active {
                transform: translateY(0);
            }
            
            .receive-btn:disabled {
                background: linear-gradient(to bottom, #757575, #424242);
                cursor: default;
                transform: none;
                box-shadow: none;
            }
            
            /* 关闭按钮 - 在图片区域右上角，但不遮挡图片内容 */
            .popup-close-btn {
                position: absolute;
                top: 15px;
                right: 15px;
                width: 36px;
                height: 36px;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 50%;
                border: 2px solid #d00;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                font-weight: bold;
                color: #d00;
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
                transition: all 0.3s ease;
                z-index: 10; /* 高于文字标题 */
            }
            
            .popup-close-btn:hover {
                background: white;
                transform: rotate(90deg) scale(1.1);
                color: #f00;
                border-color: #f00;
            }
            
            .popup-draggable {
                cursor: move;
            }
            
            /* 弹窗淡出动画 */
            .fade-out {
                animation: fadeOut 2s forwards;
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                    visibility: hidden;
                }
            }
            
            /* 禁用拖动时的文字选择 */
            .gift-popup.dragging {
                user-select: none;
                animation: none !important;
            }
            
            /* 雪花下落动画 */
            @keyframes fall {
                0% {
                    transform: translateY(-10px) rotate(0deg);
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
            
            /* 响应式调整 */
            @media (max-width: 768px) {
                .gift-popup {
                    width: 300px;
                    left: -300px;
                }
                
                .popup-image-container {
                    height: 200px;
                }
                
                .popup-title-container {
                    padding: 10px 15px;
                }
                
                .gift-text {
                    font-size: 20px;
                }
                
                .receive-btn {
                    padding: 10px 20px;
                    font-size: 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ==================== 原有的圣诞装饰功能 ====================
    function initOriginalDecorations() {
        // 飘雪效果
        initSnowflakes();
        
        // 圣诞帽装饰
        initChristmasHats();
        
        // 闪烁彩灯
        initTwinklingLights();
        
        // 点击特效
        initClickEffects();
        
        // 节日消息
        addChristmasMessage();
    }
    
    // 1. 飘雪效果
    function initSnowflakes() {
        const snowflakes = ['❄', '❅', '❆', '•'];
        const snowflakeCount = 50;
        
        for (let i = 0; i < snowflakeCount; i++) {
            createSnowflake(i);
        }
        
        function createSnowflake(index) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
            snowflake.style.opacity = Math.random() * 0.6 + 0.4;
            
            // 添加自定义下落动画
            const fallAnimation = document.createElement('style');
            fallAnimation.textContent = `
                @keyframes fall-${index} {
                    0% {
                        transform: translate(0, -10px) rotate(0deg);
                    }
                    100% {
                        transform: translate(${Math.random() * 100 - 50}px, 100vh) rotate(${Math.random() * 360}deg);
                    }
                }
            `;
            document.head.appendChild(fallAnimation);
            
            snowflake.style.animation = `fall-${index} ${Math.random() * 15 + 10}s linear infinite`;
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            
            document.body.appendChild(snowflake);
        }
    }
    
    // 2. 圣诞帽装饰
    function initChristmasHats() {
        // 在页面四个角落添加圣诞帽
        const positions = [
            { top: '10px', left: '10px' },
            { top: '10px', right: '10px' },
            { bottom: '10px', left: '10px' },
            { bottom: '10px', right: '10px' }
        ];
        
        positions.forEach(pos => {
            const hat = document.createElement('div');
            hat.className = 'christmas-hat';
            
            // 设置位置
            Object.keys(pos).forEach(key => {
                hat.style[key] = pos[key];
            });
            
            // 添加白色小球
            const ball = document.createElement('div');
            ball.className = 'hat-ball';
            hat.appendChild(ball);
            
            // 随机旋转
            hat.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
            
            document.body.appendChild(hat);
        });
    }
    
    // 3. 闪烁彩灯
    function initTwinklingLights() {
        const colors = ['#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#00ffff'];
        const lightCount = 30;
        
        for (let i = 0; i < lightCount; i++) {
            setTimeout(() => {
                const light = document.createElement('div');
                light.className = 'christmas-light';
                light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // 随机位置（主要分布在页面边缘）
                if (Math.random() > 0.5) {
                    // 顶部或底部
                    light.style.top = Math.random() > 0.5 ? '0' : 'calc(100vh - 12px)';
                    light.style.left = Math.random() * 100 + 'vw';
                } else {
                    // 左侧或右侧
                    light.style.left = Math.random() > 0.5 ? '0' : 'calc(100vw - 12px)';
                    light.style.top = Math.random() * 100 + 'vh';
                }
                
                // 随机闪烁延迟
                light.style.animationDelay = Math.random() * 2 + 's';
                
                document.body.appendChild(light);
            }, i * 100);
        }
    }
    
    // 4. 点击特效
    function initClickEffects() {
        const effects = ['🎄', '🎁', '🌟', '❄', '🔔', '⭐', '🦌'];
        
        document.addEventListener('click', function(e) {
            // 避免在输入框、按钮等元素上触发
            if (e.target.tagName === 'INPUT' || 
                e.target.tagName === 'TEXTAREA' || 
                e.target.tagName === 'SELECT' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('.gift-popup')) {
                return;
            }
            
            const effect = document.createElement('div');
            effect.className = 'click-effect';
            effect.textContent = effects[Math.floor(Math.random() * effects.length)];
            effect.style.left = e.clientX + 'px';
            effect.style.top = e.clientY + 'px';
            
            document.body.appendChild(effect);
            
            // 1.5秒后移除元素
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 1500);
        });
    }
    
    // 5. 节日消息（原有的右下角消息）
    function addChristmasMessage() {
        const messages = [
            '圣诞快乐！🎅',
            '节日愉快！🎄',
            '新年好运！✨',
            '温暖冬日！❄️'
        ];
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'christmas-message';
        messageDiv.textContent = messages[Math.floor(Math.random() * messages.length)];
        messageDiv.title = '点击关闭';
        
        // 点击关闭
        messageDiv.addEventListener('click', function() {
            this.style.animation = 'floatUp 1s ease-out forwards';
            setTimeout(() => {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }, 1000);
        });
        
        // 10秒后自动隐藏
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0.5';
                setTimeout(() => {
                    if (messageDiv.parentNode && messageDiv.style.opacity === '0.5') {
                        messageDiv.style.animation = 'floatUp 1s ease-out forwards';
                        setTimeout(() => {
                            if (messageDiv.parentNode) {
                                messageDiv.parentNode.removeChild(messageDiv);
                            }
                        }, 1000);
                    }
                }, 5000);
            }
        }, 10000);
        
        document.body.appendChild(messageDiv);
    }
    
    // ==================== 弹窗相关功能 ====================
    // 1. 创建右上角控制开关
    function createPopupControlSwitch() {
        const controlDiv = document.createElement('div');
        controlDiv.className = 'christmas-control';
        
        const label = document.createElement('span');
        label.className = 'control-label';
        label.textContent = '礼物弹窗';
        
        const switchContainer = document.createElement('label');
        switchContainer.className = 'control-switch';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'switch-checkbox';
        checkbox.checked = localStorage.getItem('christmasPopupEnabled') !== 'false';
        
        const slider = document.createElement('span');
        slider.className = 'switch-slider';
        
        // 切换弹窗显示/隐藏
        checkbox.addEventListener('change', function() {
            localStorage.setItem('christmasPopupEnabled', this.checked);
            
            const popup = document.querySelector('.gift-popup');
            
            if (this.checked) {
                // 如果弹窗不存在，创建新的
                if (!popup) {
                    hasSlidIn = false; // 重置滑入状态
                    hasBeenDragged = false; // 重置拖动状态
                    createGiftPopup();
                } else {
                    // 如果存在但隐藏了，重新显示
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.classList.remove('fade-out');
                    // 重新开始摇晃动画
                    if (!popup.classList.contains('dog-shake')) {
                        popup.classList.add('dog-shake');
                    }
                }
            } else {
                // 关闭弹窗
                if (popup) {
                    popup.classList.add('fade-out');
                    setTimeout(() => {
                        if (popup.parentNode) {
                            popup.parentNode.removeChild(popup);
                        }
                    }, 2000);
                }
            }
        });
        
        switchContainer.appendChild(checkbox);
        switchContainer.appendChild(slider);
        controlDiv.appendChild(label);
        controlDiv.appendChild(switchContainer);
        
        document.body.appendChild(controlDiv);
    }
    
    // 2. 创建礼物弹窗（完美图片展示版）
    function createGiftPopup() {
        // 如果弹窗已存在，先移除
        const existingPopup = document.querySelector('.gift-popup');
        if (existingPopup) {
            existingPopup.parentNode.removeChild(existingPopup);
        }
        
        // 创建弹窗容器
        const popup = document.createElement('div');
        popup.className = 'gift-popup popup-draggable';
        
        // 创建图片展示区（完全展示图片，不留白）
        const imageContainer = document.createElement('div');
        imageContainer.className = 'popup-image-container';
        
        // 创建图片
        const image = document.createElement('img');
        image.className = 'gift-image';
        image.src = IMAGE_PATHS.gift;
        image.alt = '圣诞礼物';
        image.onerror = function() {
            // 如果图片加载失败，使用替代方案
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.style.width = '100%';
            fallback.style.height = '100%';
            fallback.style.background = 'linear-gradient(135deg, #ffcccc, #ff9999)';
            fallback.style.display = 'flex';
            fallback.style.alignItems = 'center';
            fallback.style.justifyContent = 'center';
            fallback.style.color = '#a00';
            fallback.style.fontSize = '32px';
            fallback.textContent = '🎁';
            this.parentNode.insertBefore(fallback, this);
        };
        
        // 创建文字标题区（悬浮在图片上方顶部）
        const titleContainer = document.createElement('div');
        titleContainer.className = 'popup-title-container';
        
        const text = document.createElement('div');
        text.className = 'gift-text';
        text.textContent = '您的圣诞礼物汪';
        
        // 创建关闭按钮（在图片区域右上角）
        const closeBtn = document.createElement('button');
        closeBtn.className = 'popup-close-btn';
        closeBtn.innerHTML = '×';
        
        // 创建控制区域（在图片下方，完全分离）
        const controls = document.createElement('div');
        controls.className = 'popup-controls';
        
        // 创建接收按钮
        const receiveBtn = document.createElement('button');
        receiveBtn.className = 'receive-btn';
        receiveBtn.textContent = '接收礼物';
        
        // 组装弹窗
        imageContainer.appendChild(image);
        titleContainer.appendChild(text);
        imageContainer.appendChild(titleContainer);
        imageContainer.appendChild(closeBtn);
        
        popup.appendChild(imageContainer);
        popup.appendChild(controls);
        controls.appendChild(receiveBtn);
        
        document.body.appendChild(popup);
        
        // 滑入动画逻辑：只有第一次出现时才执行滑入动画
        if (!hasSlidIn) {
            // 添加滑入动画
            popup.style.animation = 'slideInFromLeft 1.5s ease-out forwards';
            
            // 动画结束后，移除动画属性，固定位置，并开始摇晃动画
            setTimeout(() => {
                popup.classList.add('slide-animation-done');
                hasSlidIn = true;
                
                // 开始小狗摇晃动画
                popup.classList.add('dog-shake');
            }, 1500);
        } else {
            // 如果已经滑入过，直接设置位置，不执行动画
            popup.classList.add('slide-animation-done');
            
            // 开始小狗摇晃动画
            popup.classList.add('dog-shake');
        }
        
        // 添加拖动功能（拖动整个弹窗，包括图片区域）
        makeDraggable(popup, popup);
        
        // 添加事件监听器
        let isReceived = false;
        
        // 关闭按钮点击事件
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (!isReceived) {
                // 未接收时：切换图片并淡出
                image.src = IMAGE_PATHS.closed;
                
                // 更新文字
                text.textContent = '把礼物扔出去';
                titleContainer.style.background = 'linear-gradient(to bottom, rgba(100, 100, 100, 0.85), rgba(70, 70, 70, 0.7))';
                
                // 移除摇晃动画
                popup.classList.remove('dog-shake');
                
                popup.classList.add('fade-out');
                
                setTimeout(() => {
                    if (popup.parentNode) {
                        popup.parentNode.removeChild(popup);
                    }
                }, 2000);
            } else {
                // 接收后：直接移除
                if (popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }
        });
        
        // 接收按钮点击事件
        receiveBtn.addEventListener('click', function() {
            if (!isReceived) {
                isReceived = true;
                
                // 切换图片和文字
                image.src = IMAGE_PATHS.opened;
                text.textContent = 'Anon犬想抱抱你';
                
                // 更新接收按钮
                receiveBtn.textContent = '已接收 ✓';
                receiveBtn.disabled = true;
                
                // 停止摇晃动画
                popup.classList.remove('dog-shake');
            }
        });
    }
    
    // 3. 使弹窗可拖动（支持图片区域拖动）
    function makeDraggable(container, handle) {
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;
        
        handle.addEventListener('mousedown', dragStart);
        handle.addEventListener('touchstart', dragStart, { passive: false });
        
        function dragStart(e) {
            // 防止点击按钮时触发拖动（只在非按钮区域触发）
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            if (e.type === 'touchstart') {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            
            if (e.target === handle || handle.contains(e.target)) {
                isDragging = true;
                container.classList.add('dragging');
                
                // 标记为已被拖动
                hasBeenDragged = true;
                
                // 停止摇晃动画，拖动时暂停
                container.classList.remove('dog-shake');
                
                document.addEventListener('mousemove', drag);
                document.addEventListener('touchmove', drag, { passive: false });
                document.addEventListener('mouseup', dragEnd);
                document.addEventListener('touchend', dragEnd);
            }
        }
        
        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                
                if (e.type === 'touchmove') {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                } else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }
                
                xOffset = currentX;
                yOffset = currentY;
                
                // 使用transform进行拖动，不影响原有的left定位
                container.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
            }
        }
        
        function dragEnd() {
            isDragging = false;
            container.classList.remove('dragging');
            
            // 拖动结束后，如果还没有接收礼物，重新开始摇晃动画
            const receiveBtn = container.querySelector('.receive-btn');
            if (receiveBtn && !receiveBtn.disabled) {
                container.classList.add('dog-shake');
            }
            
            // 移除事件监听器
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('mouseup', dragEnd);
            document.removeEventListener('touchend', dragEnd);
        }
    }
})();