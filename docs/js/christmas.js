/**
 * MkDocs 圣诞装饰脚本
 * 保存为: docs/js/christmas.js
 * 配置: 在 mkdocs.yml 中添加:
 *   extra_javascript:
 *     - js/christmas.js
 */

(function() {
    'use strict';
    
    // 等待页面完全加载
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChristmasDecorations);
    } else {
        initChristmasDecorations();
    }
    
    function initChristmasDecorations() {
        console.log('🎄 正在加载圣诞装饰...');
        
        // 添加全局样式
        addChristmasStyles();
        
        // 初始化各种特效
        initSnowflakes();
        initChristmasHats();
        initTwinklingLights();
        initClickEffects();
        addChristmasMessage();
        
        console.log('🎅 圣诞装饰加载完成！节日快乐！');
    }
    
    // 1. 添加必要的CSS样式
    function addChristmasStyles() {
        const style = document.createElement('style');
        style.textContent = `
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
            
            /* 节日消息 */
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
        `;
        document.head.appendChild(style);
    }
    
    // 2. 飘雪效果
    function initSnowflakes() {
        const snowflakes = ['❄', '❅', '❆', '•'];
        const snowflakeCount = 50; // 雪花数量，可根据性能调整
        
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
            snowflake.style.animation = `fall ${Math.random() * 10 + 10}s linear infinite`;
            
            // 每个雪花有不同的动画延迟
            snowflake.style.animationDelay = Math.random() * 10 + 's';
            
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
    
    // 3. 圣诞帽装饰
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
    
    // 4. 闪烁彩灯
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
    
    // 5. 点击特效
    function initClickEffects() {
        const effects = ['🎄', '🎁', '🌟', '❄', '🔔', '⭐', '🦌'];
        
        document.addEventListener('click', function(e) {
            // 避免在输入框等元素上触发
            if (e.target.tagName === 'INPUT' || 
                e.target.tagName === 'TEXTAREA' || 
                e.target.tagName === 'SELECT') {
                return;
            }
            
            const effect = document.createElement('div');
            effect.className = 'click-effect';
            effect.textContent = effects[Math.floor(Math.random() * effects.length)];
            effect.style.left = e.clientX + 'px';
            effect.style.top = e.clientY + 'px';
            
            document.body.appendChild(effect);
            
            // 3秒后移除元素
            setTimeout(() => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }, 1500);
        });
    }
    
    // 6. 添加节日消息
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
        
        // 5秒后自动隐藏
        setTimeout(() => {
            messageDiv.style.opacity = '0.5';
        }, 5000);
        
        document.body.appendChild(messageDiv);
    }
})();