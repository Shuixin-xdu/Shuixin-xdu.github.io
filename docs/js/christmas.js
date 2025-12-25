/**
 * MkDocs 圣诞装饰 + 礼物弹窗整合版（完美图片展示版 - 修复移动端）
 * 保存为: docs/js/christmas.js
 */

(function() {
    'use strict';
    
    // 图片路径配置
    const IMAGE_PATHS = {
        gift: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/decoration/2025-12-25-1.webp',
        closed: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/decoration/2025-12-25-2.webp',
        opened: 'https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/decoration/2025-12-25-3.webp'
    };
    
    // 全局变量
    let hasSlidIn = false;
    let hasBeenDragged = false;
    let shakeInterval = null;
    let shouldShake = true;
    let isShaking = false;
    
    // 检测是否为移动设备
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
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
        
        // 3. 创建左上角弹窗控制开关
        createPopupControlSwitch();
        
        // 4. 根据用户设置决定是否显示弹窗
        const isPopupEnabled = localStorage.getItem('christmasPopupEnabled');
        
        // 默认显示弹窗（除非用户之前关闭了）
        if (isPopupEnabled !== 'false') {
            // 移动设备延迟更久一些，确保页面完全加载
            const delay = isMobileDevice() ? 2500 : 1500;
            setTimeout(createGiftPopup, delay);
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
            /* 弹窗控制开关样式 - 移动到左上角 */
            .christmas-control {
                position: fixed;
                top: 80px;
                left: 20px; /* 从right改为left */
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
                transform-origin: center center; /* 旋转中心设为弹窗中心 */
            }
            
            /* 强力摇晃动画 - 逆时针/顺时针快速交替 */
            @keyframes strongShake {
                0%, 100% { transform: rotate(0deg); }
                10% { transform: rotate(-8deg); } /* 逆时针 */
                20% { transform: rotate(8deg); }  /* 顺时针 */
                30% { transform: rotate(-6deg); } /* 逆时针 */
                40% { transform: rotate(6deg); }  /* 顺时针 */
                50% { transform: rotate(-4deg); } /* 逆时针 */
                60% { transform: rotate(4deg); }  /* 顺时针 */
                70% { transform: rotate(-2deg); } /* 逆时针 */
                80% { transform: rotate(2deg); }  /* 顺时针 */
                90% { transform: rotate(0deg); }  /* 回到中心 */
                100% { transform: rotate(0deg); }
            }
            
            /* 摇晃动画应用类 */
            .shake-active {
                animation: strongShake 0.8s ease-in-out;
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
            
            /* 滑入动画完成后移除动画 */
            .slide-animation-done {
                animation: none !important;
                left: 20px;
            }
            
            /* 图片展示区 - 完全展示图片，不留白 */
            .popup-image-container {
                width: 100%;
                height: 220px;
                position: relative;
                overflow: hidden;
                background: linear-gradient(135deg, #ffe6e6, #ffcccc);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .gift-image {
                width: 100%;
                height: 100%;
                object-fit: contain;
                display: block;
                background: transparent;
            }
            
            /* 文字标题区 */
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
            
            /* 控制区域 */
            .popup-controls {
                background: linear-gradient(to bottom, #fff5f5, #ffe6e6);
                padding: 15px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                border-top: 3px solid #ffcccc;
                flex-shrink: 0;
            }
            
            .receive-btn {
                background: linear-gradient(to bottom, #4CAF50, #2E7D32);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                font-size: 16px;
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
            
            /* 关闭按钮 */
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
                z-index: 10;
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
            
            /* ========== 移动端专门样式 ========== */
            @media (max-width: 768px) {
                .gift-popup {
                    width: 280px;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -300px;
                    animation: slideInFromBottom 1.5s ease-out forwards;
                }
                
                @keyframes slideInFromBottom {
                    0% {
                        bottom: -300px;
                        transform: translateX(-50%) translateY(0);
                    }
                    100% {
                        bottom: 80px;
                        transform: translateX(-50%) translateY(0);
                    }
                }
                
                .slide-animation-done {
                    animation: none !important;
                    left: 50%;
                    transform: translateX(-50%) translateY(0);
                    bottom: 80px;
                }
                
                .popup-image-container {
                    height: 180px;
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
                
                .popup-close-btn {
                    width: 32px;
                    height: 32px;
                    font-size: 18px;
                }
                
                /* 移动端控制开关调整 */
                .christmas-control {
                    top: 60px;
                    left: 10px;
                    padding: 6px 10px;
                    font-size: 11px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ==================== 原有的圣诞装饰功能 ====================
    function initOriginalDecorations() {
        initSnowflakes();
        initChristmasHats();
        initTwinklingLights();
        initClickEffects();
        addChristmasMessage();
    }
    
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
    
    function initChristmasHats() {
        const positions = [
            { top: '10px', left: '10px' },
            { top: '10px', right: '10px' },
            { bottom: '10px', left: '10px' },
            { bottom: '10px', right: '10px' }
        ];
        
        positions.forEach(pos => {
            const hat = document.createElement('div');
            hat.className = 'christmas-hat';
            
            Object.keys(pos).forEach(key => {
                hat.style[key] = pos[key];
            });
            
            const ball = document.createElement('div');
            ball.className = 'hat-ball';
            hat.appendChild(ball);
            
            hat.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
            document.body.appendChild(hat);
        });
    }
    
    function initTwinklingLights() {
        const colors = ['#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#00ffff'];
        const lightCount = 30;
        
        for (let i = 0; i < lightCount; i++) {
            setTimeout(() => {
                const light = document.createElement('div');
                light.className = 'christmas-light';
                light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                if (Math.random() > 0.5) {
                    light.style.top = Math.random() > 0.5 ? '0' : 'calc(100vh - 12px)';
                    light.style.left = Math.random() * 100 + 'vw';
                } else {
                    light.style.left = Math.random() > 0.5 ? '0' : 'calc(100vw - 12px)';
                    light.style.top = Math.random() * 100 + 'vh';
                }
                
                light.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(light);
            }, i * 100);
        }
    }
    
    function initClickEffects() {
        const effects = ['🎄', '🎁', '🌟', '❄', '🔔', '⭐', '🦌'];
        
        document.addEventListener('click', function(e) {
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
            
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 1500);
        });
    }
    
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
        
        messageDiv.addEventListener('click', function() {
            this.style.animation = 'floatUp 1s ease-out forwards';
            setTimeout(() => {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }, 1000);
        });
        
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
        
        checkbox.addEventListener('change', function() {
            localStorage.setItem('christmasPopupEnabled', this.checked);
            
            const popup = document.querySelector('.gift-popup');
            
            if (this.checked) {
                if (!popup) {
                    hasSlidIn = false;
                    hasBeenDragged = false;
                    shouldShake = true;
                    createGiftPopup();
                } else {
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.classList.remove('fade-out');
                    shouldShake = true;
                    if (!isShaking) {
                        startShaking(popup);
                    }
                }
            } else {
                if (popup) {
                    shouldShake = false;
                    stopShaking();
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
    
    function createGiftPopup() {
        const existingPopup = document.querySelector('.gift-popup');
        if (existingPopup) {
            existingPopup.parentNode.removeChild(existingPopup);
        }
        
        stopShaking();
        
        const popup = document.createElement('div');
        popup.className = 'gift-popup popup-draggable';
        
        const imageContainer = document.createElement('div');
        imageContainer.className = 'popup-image-container';
        
        const image = document.createElement('img');
        image.className = 'gift-image';
        image.src = IMAGE_PATHS.gift;
        image.alt = '圣诞礼物';
        image.onerror = function() {
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
        
        const titleContainer = document.createElement('div');
        titleContainer.className = 'popup-title-container';
        
        const text = document.createElement('div');
        text.className = 'gift-text';
        text.textContent = '您的圣诞礼物汪';
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'popup-close-btn';
        closeBtn.innerHTML = '×';
        
        const controls = document.createElement('div');
        controls.className = 'popup-controls';
        
        const receiveBtn = document.createElement('button');
        receiveBtn.className = 'receive-btn';
        receiveBtn.textContent = '接收礼物';
        
        imageContainer.appendChild(image);
        titleContainer.appendChild(text);
        imageContainer.appendChild(titleContainer);
        imageContainer.appendChild(closeBtn);
        
        popup.appendChild(imageContainer);
        popup.appendChild(controls);
        controls.appendChild(receiveBtn);
        
        document.body.appendChild(popup);
        
        // 修复移动端bug：确保弹窗在DOM中稳定后再添加事件监听
        setTimeout(() => {
            if (popup.parentNode) {
                setupPopupEvents(popup, image, text, titleContainer, closeBtn, receiveBtn);
            }
        }, 100);
        
        if (!hasSlidIn) {
            popup.style.animation = isMobileDevice() ? 
                'slideInFromBottom 1.5s ease-out forwards' : 
                'slideInFromLeft 1.5s ease-out forwards';
            
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.classList.add('slide-animation-done');
                    hasSlidIn = true;
                    
                    if (shouldShake) {
                        startShaking(popup);
                    }
                }
            }, 1500);
        } else {
            popup.classList.add('slide-animation-done');
            
            if (isMobileDevice()) {
                popup.style.left = '50%';
                popup.style.transform = 'translateX(-50%)';
                popup.style.bottom = '80px';
            }
            
            if (shouldShake) {
                startShaking(popup);
            }
        }
        
        makeDraggable(popup, popup);
    }
    
    function setupPopupEvents(popup, image, text, titleContainer, closeBtn, receiveBtn) {
        let isReceived = false;
        
        // 修复移动端：阻止触摸事件的默认行为，防止意外关闭
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!isReceived) {
                stopShaking();
                shouldShake = false;
                
                image.src = IMAGE_PATHS.closed;
                text.textContent = '把这盒东西扔出去！';
                titleContainer.style.background = 'linear-gradient(to bottom, rgba(100, 100, 100, 0.85), rgba(70, 70, 70, 0.7))';
                
                popup.classList.add('fade-out');
                
                setTimeout(() => {
                    if (popup.parentNode) {
                        popup.parentNode.removeChild(popup);
                    }
                }, 2000);
            } else {
                stopShaking();
                shouldShake = false;
                if (popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }
        });
        
        // 修复移动端：阻止触摸事件的默认行为
        receiveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!isReceived) {
                isReceived = true;
                
                stopShaking();
                shouldShake = false;
                
                image.src = IMAGE_PATHS.opened;
                text.textContent = 'Anon犬想抱抱你';
                
                receiveBtn.textContent = '已接收 ✓';
                receiveBtn.disabled = true;
            }
        });
        
        // 移动端专门处理：防止意外点击关闭
        if (isMobileDevice()) {
            let touchStartTime = 0;
            let touchStartX = 0;
            let touchStartY = 0;
            
            closeBtn.addEventListener('touchstart', function(e) {
                touchStartTime = Date.now();
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            });
            
            closeBtn.addEventListener('touchend', function(e) {
                const touchDuration = Date.now() - touchStartTime;
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const distance = Math.sqrt(
                    Math.pow(touchEndX - touchStartX, 2) + 
                    Math.pow(touchEndY - touchStartY, 2)
                );
                
                // 只有长按或短距离点击才触发关闭，防止滑动误触
                if (touchDuration > 100 && touchDuration < 1000 && distance < 10) {
                    closeBtn.click();
                }
            });
        }
    }
    
    function startShaking(popup) {
        if (!popup || !shouldShake) return;
        
        isShaking = true;
        
        if (shakeInterval) {
            clearInterval(shakeInterval);
        }
        
        function performShake() {
            if (!popup || !shouldShake || !popup.parentNode) return;
            
            popup.classList.add('shake-active');
            
            setTimeout(() => {
                popup.classList.remove('shake-active');
                
                if (shouldShake && popup.parentNode) {
                    setTimeout(() => {
                        if (shouldShake && popup.parentNode) {
                            performShake();
                        }
                    }, 1000);
                }
            }, 800);
        }
        
        performShake();
        
        shakeInterval = setInterval(() => {
            if (!popup.parentNode || !shouldShake) {
                stopShaking();
            }
        }, 1000);
    }
    
    function stopShaking() {
        isShaking = false;
        if (shakeInterval) {
            clearInterval(shakeInterval);
            shakeInterval = null;
        }
        
        const popup = document.querySelector('.gift-popup');
        if (popup) {
            popup.classList.remove('shake-active');
        }
    }
    
    function makeDraggable(container, handle) {
        let isDragging = false;
        let currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0;
        let originalTransform = '';
        
        // 移动端和桌面端使用不同的事件
        const events = {
            start: isMobileDevice() ? 'touchstart' : 'mousedown',
            move: isMobileDevice() ? 'touchmove' : 'mousemove',
            end: isMobileDevice() ? 'touchend' : 'mouseup'
        };
        
        handle.addEventListener(events.start, dragStart);
        
        function dragStart(e) {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                return;
            }
            
            const clientX = isMobileDevice() ? e.touches[0].clientX : e.clientX;
            const clientY = isMobileDevice() ? e.touches[0].clientY : e.clientY;
            
            initialX = clientX - xOffset;
            initialY = clientY - yOffset;
            
            if (e.target === handle || handle.contains(e.target)) {
                isDragging = true;
                container.classList.add('dragging');
                
                hasBeenDragged = true;
                originalTransform = container.style.transform;
                
                document.addEventListener(events.move, drag);
                document.addEventListener(events.end, dragEnd);
                
                // 防止移动端页面滚动
                if (isMobileDevice()) {
                    e.preventDefault();
                }
            }
        }
        
        function drag(e) {
            if (isDragging) {
                if (isMobileDevice()) {
                    e.preventDefault();
                }
                
                const clientX = isMobileDevice() ? e.touches[0].clientX : e.clientX;
                const clientY = isMobileDevice() ? e.touches[0].clientY : e.clientY;
                
                currentX = clientX - initialX;
                currentY = clientY - initialY;
                
                xOffset = currentX;
                yOffset = currentY;
                
                // 移动端使用不同的transform计算方式
                if (isMobileDevice()) {
                    const rect = container.getBoundingClientRect();
                    container.style.left = `${rect.left + currentX}px`;
                    container.style.transform = `translateX(-50%) translateY(${currentY}px)`;
                } else {
                    container.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
                }
            }
        }
        
        function dragEnd() {
            isDragging = false;
            container.classList.remove('dragging');
            
            document.removeEventListener(events.move, drag);
            document.removeEventListener(events.end, dragEnd);
            
            // 拖动结束后恢复摇晃（如果还没有接收）
            const receiveBtn = container.querySelector('.receive-btn');
            if (receiveBtn && !receiveBtn.disabled && shouldShake) {
                startShaking(container);
            }
        }
    }
})();