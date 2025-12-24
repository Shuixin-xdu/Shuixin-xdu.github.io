---
title: 名字 详细资料
layout: default
hide:
  - navigation
  - toc
---

<!-- 返回按钮 -->
<div style="margin-bottom: 20px;">
    <a href="../../characters" style="display: inline-flex; align-items: center; text-decoration: none; color: var(--md-primary-fg-color);">
        <svg style="width: 20px; height: 20px; margin-right: 8px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回角色图鉴
    </a>
</div>

<div class="character-detail-container">
    <!-- 左侧图片区域 -->
    <div class="character-detail-image">
        <div class="fixed-image-section">
            <div class="main-image" onclick="openImageModal('main', this)">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径).png" 
                     alt="名字 主图" 
                     id="mainCharacterImage"
                     loading="eager">
            </div>

            <!-- 缩略图图集 -->
            <div class="thumbnail-gallery">
                <div class="thumbnail active" data-image="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径).png" data-signature="">
                    <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径).png" alt="主图">
                </div>
                <div class="thumbnail" data-image="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/pic1.png" data-signature="">
                    <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/pic1.png" alt="子图1">
                </div>
                <div class="thumbnail" data-image="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/pic2.png" data-signature="">
                    <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/pic2.png" alt="子图2">
                </div>
            </div>
        </div>

        <!-- 固定图集卡片 -->
        <div class="gallery-card">
            <div class="gallery-nav" id="galleryPrev">
                <span>&lt;</span>
            </div>
            <div class="gallery-image-container" onclick="openImageModal('gallery', this)">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/others_1.png" 
                     alt="图集图片" 
                     id="galleryImage"
                     class="gallery-image">
                <div class="gallery-signature" id="gallerySignature">其它形象1(待认领署名)</div>
            </div>
            <div class="gallery-nav" id="galleryNext">
                <span>&gt;</span>
            </div>
        </div>
    </div>

    
    <!-- 右侧信息区域 -->
    <div class="character-detail-info">
        <div class="character-header">
            <h1 class="character-title">名字</h1>
            <div class="character-tags">
                <span class="tag primary"><原型>系</span>
                <span class="tag secondary"><物种>科</span>
                <span class="tag accent">棉花生物</span>
                <span class="tag"><性格>型</span>
            </div>
        </div>
        
        <!-- 基本信息表 -->
        <div class="info-table">
            <table>
                <tr>
                    <th>物种类型</th>
                    <td>棉花<物种>型生物</td>
                </tr>
                <tr>
                    <th>毛色</th>
                    <td>请输入颜色</td>
                </tr>
                <tr>
                    <th>首次发现</th>
                    <td>2025年X月X日</td>
                </tr>
                <tr>
                    <th>常见出没地</th>
                    <td>请输入地点</td>
                </tr>
                <tr>
                    <th>主要关联角色</th>
                    <td>
                        <a href="../关联1(英文路径)" class="character-link-small">关联1</a>
                        <a href="../关联2(英文路径)" class="character-link-small">关联2</a>
                    </td>
                </tr>
                <tr>
                    <th>危险等级</th>
                    <td><span class="danger-level medium">★★★☆☆</span></td>
                </tr>
            </table>
        </div>
        
        <!-- 快速描述 -->
        <div class="quick-description">
            <h3>简介</h3>
            <p>请输入文本</p>
        </div>
        
        <!-- 特性指标 -->
        <div class="character-stats">
            <h3>能力指标</h3>
            <div class="stat-bars">
                <div class="stat-item">
                    <div class="stat-label">活泼度</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: 0%;"></div>
                    </div>
                    <div class="stat-value">?/10</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">情绪波动</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: 0%;"></div>
                    </div>
                    <div class="stat-value">?/10</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">破坏力</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: 0%;"></div>
                    </div>
                    <div class="stat-value">?/10</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 详细信息区域 -->
<div class="detail-sections">
    <!-- 习性特征 -->
    <section class="detail-section">
        <h2>习性特征</h2>
        <div class="section-content">
            <h3>饮食偏好</h3>
            <ul>
                <li><strong>最爱食物：</strong>请输入文本</li>
                <li><strong>常饮饮品：</strong>请输入文本</li>
                <li><strong>特殊习惯：</strong>请输入文本</li>
            </ul>
            
            <h3>行为模式</h3>
            <div class="behavior-patterns">
                <div class="pattern-card">
                    <div class="pattern-icon">emoji</div>
                    <div class="pattern-content">
                        <h4>模式1</h4>
                        <p>请输入文本</p>
                    </div>
                </div>
                <div class="pattern-card">
                    <div class="pattern-icon">emoji</div>
                    <div class="pattern-content">
                        <h4>模式2</h4>
                        <p>请输入文本</p>
                    </div>
                </div>
                <div class="pattern-card">
                    <div class="pattern-icon">🎸</div>
                    <div class="pattern-content">
                        <h4>音乐</h4>
                        <p>请输入文本</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- 背景故事 -->
    <section class="detail-section">
        <h2>背景故事</h2>
        <div class="section-content">
            <p>名字最初被发现于...</p>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2025年春</div>
                    <div class="timeline-content">
                        <h4>初次发现</h4>
                        <p>请输入文本</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">时间</div>
                    <div class="timeline-content">
                        <h4>请输入标题</h4>
                        <p>请输入文本</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- 与其他角色的关系 -->
    <section class="detail-section">
        <h2>角色关系</h2>
        <div class="section-content">
            <div class="relationship-grid">
                <a href="../tomori_penguin" class="relationship-card">
                    <div class="rel-avatar">
                        <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/其他生物名1的英文路径.png" alt="其他生物1">
                    </div>
                    <div class="rel-info">
                        <h4>其他生物1</h4>
                        <p class="rel-type">关系</p>
                        <p class="rel-desc">请输入文本</p>
                    </div>
                </a>
                
                <a href="../soyo_fox" class="relationship-card">
                    <div class="rel-avatar">
                        <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/其他生物名2的英文路径.png" alt="其他生物2">
                    </div>
                    <div class="rel-info">
                        <h4>其他生物2</h4>
                        <p class="rel-type">关系</p>
                        <p class="rel-desc">请输入文本</p>
                    </div>
                </a>

                <a href="../角色名.md" class="relationship-card">
                    <div class="rel-avatar">
                        <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名.png" alt="角色名">
                    </div>
                    <div class="rel-info">
                        <h4>角色名</h4>
                        <p class="rel-type">关系</p>
                        <p class="rel-desc">请输入文本（描述）</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
    
    <!-- 趣闻轶事 -->
    <section class="detail-section">
        <h2>趣闻轶事</h2>
        <div class="section-content">
            <div class="anecdotes">
                <div class="anecdote">
                    <h4><emoji> 请输入标题</h4>
                    <p>请输入文本</p>
                </div>
                <div class="anecdote">
                    <h4><emoji> 请输入标题</h4>
                    <p>请输入文本</p>
                </div>
            </div>
        </div>
    </section>
</div>

<!-- 图片放大模态框 -->
<div id="imageModal" class="image-modal">
    <div class="modal-overlay" onclick="closeImageModal()"></div>
    <div class="modal-content">
        <button class="close-button" onclick="closeImageModal()">×</button>
        <div class="modal-nav" onclick="changeImage(-1)">&lt;</div>
        <div class="modal-image-container">
            <img id="modalImage" src="" alt="放大图片">
            <div class="modal-signature" id="modalSignature"></div>
        </div>
        <div class="modal-nav" onclick="changeImage(1)">&gt;</div>
    </div>
</div>

<style>
/* 详情页面样式 */
.character-detail-container {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

@media (max-width: 900px) {
    .character-detail-container {
        grid-template-columns: 1fr;
    }
}

/* 图片区域 */
.character-detail-image {
    top: 20px;
    align-self: start;
    display: flex;
    flex-direction: column;
}

.fixed-image-section {
    top: 20px;
}

.main-image {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    margin-bottom: 15px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.main-image:hover {
    transform: scale(1.02);
}

.main-image img {
    width: 100%;
    height: auto;
    display: block;
}

.thumbnail-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.thumbnail {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.thumbnail:hover {
    opacity: 0.8;
    transform: translateY(-2px);
}

.thumbnail.active {
    opacity: 1;
    border-color: var(--md-primary-fg-color);
}

.thumbnail img {
    width: 100%;
    height: 80px;
    object-fit: cover;
}

/* 固定图集卡片 */
.gallery-card {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--md-default-bg-color);
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border: 1px solid var(--md-default-fg-color--lightest);
}

.gallery-nav {
    width: 30px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(64, 158, 255, 0.2);
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    flex-shrink: 0;
    user-select: none;
}

.gallery-nav:hover {
    background: rgba(64, 158, 255, 0.4);
    transform: scale(1.05);
}

.gallery-image-container {
    flex: 1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-image-container:hover {
    transform: scale(1.02);
}

.gallery-image {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
}

/* 署名样式 */
.gallery-signature {
    text-align: center;
    margin-top: 10px;
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
}

/* 信息区域 */
.character-header {
    margin-bottom: 25px;
}

.character-title {
    font-size: 2.2em;
    margin: 0 0 10px 0;
    color: var(--md-primary-fg-color);
}

.character-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 500;
}

.tag.primary {
    background: var(--md-primary-fg-color--light);
    color: white;
}

.tag.secondary {
    background: var(--md-accent-fg-color--transparent);
    color: var(--md-accent-fg-color);
}

.tag.accent {
    background: rgba(100, 200, 255, 0.1);
    color: #64c8ff;
}

/* 信息表格 */
.info-table {
    background: var(--md-default-bg-color--light);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 25px;
    border: 1px solid var(--md-default-fg-color--lightest);
}

.info-table table {
    width: 100%;
    border-collapse: collapse;
}

.info-table th {
    text-align: left;
    padding: 8px 0;
    width: 120px;
    color: var(--md-default-fg-color--light);
    font-weight: 500;
    font-size: 0.9em;
}

.info-table td {
    padding: 8px 0;
    border-bottom: 1px solid var(--md-default-fg-color--lightest);
}

.info-table tr:last-child td {
    border-bottom: none;
}

.character-link-small {
    display: inline-flex;
    align-items: center;
    padding: 3px 8px;
    background: var(--md-default-bg-color);
    border-radius: 6px;
    text-decoration: none;
    color: var(--md-primary-fg-color);
    font-size: 0.85em;
    margin-right: 5px;
    transition: all 0.2s ease;
}

.character-link-small:hover {
    background: var(--md-primary-fg-color--light);
    color: white;
    transform: translateY(-1px);
}

.danger-level {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-weight: bold;
}

.danger-level.safe {
    background: rgba(100, 255, 100, 0.15);
    color: #00cc44;
    border: 1px solid rgba(0, 204, 68, 0.3);
}

.danger-level.low {
    background: rgba(100, 255, 100, 0.1);
    color: #64ff64;
}

.danger-level.medium {
    background: rgba(255, 204, 0, 0.15);
    color: #ffcc00;
    border: 1px solid rgba(255, 204, 0, 0.3);
}

.danger-level.high {
    background: rgba(255, 102, 102, 0.15);
    color: #ff6666;
    border: 1px solid rgba(255, 102, 102, 0.3);
}

.danger-level.extreme {
    background: rgba(204, 0, 0, 0.15);
    color: #cc0000;
    border: 1px solid rgba(204, 0, 0, 0.3);
}

/* 能力指标 */
.character-stats {
    margin: 25px 0;
}

.stat-bars {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.stat-item {
    display: grid;
    grid-template-columns: 100px 1fr 50px;
    align-items: center;
    gap: 15px;
}

.stat-label {
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
}

.stat-bar {
    height: 8px;
    background: var(--md-default-fg-color--lightest);
    border-radius: 4px;
    overflow: hidden;
}

.stat-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--md-primary-fg-color), var(--md-accent-fg-color));
    border-radius: 4px;
    transition: width 1s ease;
}

.stat-value {
    text-align: right;
    font-family: monospace;
    font-weight: bold;
    color: var(--md-primary-fg-color);
}

/* 详细信息区域 */
.detail-sections {
    margin-top: 40px;
}

.detail-section {
    margin-bottom: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--md-default-fg-color--lightest);
}

.detail-section:last-child {
    border-bottom: none;
}

.detail-section h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: var(--md-primary-fg-color);
    display: flex;
    align-items: center;
}

.detail-section h2::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background: var(--md-primary-fg-color);
    margin-right: 10px;
    border-radius: 2px;
}

.section-content h3 {
    font-size: 1.1em;
    margin: 20px 0 10px 0;
    color: var(--md-default-fg-color);
}

/* 行为模式卡片 */
.behavior-patterns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
}

.pattern-card {
    background: var(--md-default-bg-color);
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: transform 0.3s ease;
}

.pattern-card:hover {
    transform: translateY(-3px);
    border-color: var(--md-primary-fg-color--light);
}

.pattern-icon {
    font-size: 1.5em;
    flex-shrink: 0;
}

.pattern-content h4 {
    margin: 0 0 5px 0;
    font-size: 1em;
}

.pattern-content p {
    margin: 0;
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
    line-height: 1.4;
}

/* 时间线 */
.timeline {
    position: relative;
    margin: 20px 0;
    padding-left: 20px;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--md-primary-fg-color--light);
}

.timeline-item {
    position: relative;
    margin-bottom: 25px;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-item::before {
    content: "";
    position: absolute;
    left: -22px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--md-primary-fg-color);
    border: 2px solid white;
    box-shadow: 0 0 0 2px var(--md-primary-fg-color);
}

.timeline-date {
    font-weight: bold;
    color: var(--md-primary-fg-color);
    margin-bottom: 5px;
}

.timeline-content h4 {
    margin: 0 0 5px 0;
    font-size: 1em;
}

.timeline-content p {
    margin: 0;
    font-size: 0.95em;
    color: var(--md-default-fg-color--light);
}

/* 角色关系网格 */
.relationship-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 15px;
}

.relationship-card {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: var(--md-default-bg-color);
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--md-default-fg-color--lightest);
    transition: all 0.3s ease;
}

.relationship-card:hover {
    border-color: var(--md-primary-fg-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.rel-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
}

.rel-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.rel-info h4 {
    margin: 0 0 4px 0;
    color: var(--md-primary-fg-color);
    font-size: 1em;
}

.rel-type {
    font-size: 0.8em;
    color: var(--md-default-fg-color--light);
    margin-bottom: 5px;
}

.rel-desc {
    font-size: 0.85em;
    color: var(--md-default-fg-color--light);
    line-height: 1.4;
    margin: 0;
}

/* 趣闻轶事 */
.anecdotes {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.anecdote {
    background: var(--md-default-bg-color);
    border-left: 4px solid var(--md-accent-fg-color);
    padding: 15px;
    border-radius: 0 8px 8px 0;
}

.anecdote h4 {
    margin: 0 0 8px 0;
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
}

.anecdote p {
    margin: 0;
    font-size: 0.95em;
    color: var(--md-default-fg-color--light);
    line-height: 1.5;
}

/* 页脚导航 */
.character-footer-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid var(--md-default-fg-color--lightest);
}

.prev-character,
.next-character {
    flex: 1;
}

.next-character {
    text-align: right;
}

.prev-character a,
.next-character a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: var(--md-default-fg-color);
    padding: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.prev-character a:hover,
.next-character a:hover {
    background: var(--md-default-bg-color--light);
    color: var(--md-primary-fg-color);
}

.nav-label {
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
}

.nav-name {
    font-weight: 500;
    margin-left: 10px;
}

.next-character .nav-name {
    margin-left: 0;
    margin-right: 10px;
}

/* 关闭按钮样式 */
.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001; /* 确保在模态框内容之上 */
    transition: all 0.3s ease;
}

.close-button:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
}

/* 响应式调整 */
@media (max-width: 768px) {
    .character-title {
        font-size: 1.8em;
    }
    
    .stat-item {
        grid-template-columns: 80px 1fr 50px;
        gap: 10px;
    }
    
    .thumbnail img {
        height: 60px;
    }
    
    .behavior-patterns {
        grid-template-columns: 1fr;
    }
    
    .character-footer-nav {
        flex-direction: column;
        gap: 15px;
    }
    
    .next-character {
        text-align: left;
    }
    
    .gallery-card {
        flex-direction: column;
        gap: 10px;
    }
    
    .gallery-nav {
        width: 180px;
        height: 30px;
        align-self: center;
    }
}

/* 图片放大模态框样式 */
.image-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
}

.modal-nav {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    font-weight: bold;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
}

.modal-nav:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
}

.modal-image-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    padding: 0 20px;
}

.modal-image-container img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 8px;
}

.modal-signature {
    margin-top: 15px;
    text-align: center;
    font-size: 1.1em;
    color: white;
    max-width: 100%;
}
</style>

<script>
// 缩略图切换
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainCharacterImage');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // 移除所有激活状态
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // 激活当前缩略图
            this.classList.add('active');
            
            // 更新主图
            const newImage = this.getAttribute('data-image');
            const newSignature = this.getAttribute('data-signature');
            if (newImage && newImage !== mainImage.src) {
                // 添加淡出效果
                mainImage.style.opacity = '0.5';
                mainImage.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    mainImage.src = newImage;
                    mainImage.style.opacity = '1';
                }, 150);
            }
        });
    });
    
    // 悬停预览（可选功能）
    thumbnails.forEach(thumb => {
        thumb.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
            }
        });
        
        thumb.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
            }
        });
    });
    
    // 图集切换功能
    const galleryImage = document.getElementById('galleryImage');
    const gallerySignature = document.getElementById('gallerySignature');
    const galleryPrev = document.getElementById('galleryPrev');
    const galleryNext = document.getElementById('galleryNext');
    
    // 图集图片数组（这里使用示例图片，实际应用中可以动态加载）
    const galleryImages = [
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/others_1.png", signature: "其它形象1(待署名)"},
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/others_2.png", signature: "其它形象2(待署名)"}
    ];
    
    let currentGalleryIndex = 0;
    
    function updateGalleryImage() {
    galleryImage.style.opacity = '0.5'; // 淡出效果
    galleryImage.onload = () => {
        galleryImage.style.opacity = '1'; // 加载完成后再淡入
    };
    galleryImage.onerror = () => {
        galleryImage.src = 'https://via.placeholder.com/300x300.png'; // 加载失败时的占位图
        galleryImage.style.opacity = '1';
    };
    galleryImage.src = galleryImages[currentGalleryIndex].src; // 更新图片
    gallerySignature.textContent = galleryImages[currentGalleryIndex].signature; // 更新署名
    }
    
    galleryPrev.addEventListener('click', function() {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGalleryImage();
    });
    
    galleryNext.addEventListener('click', function() {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        updateGalleryImage();
    });
});

// 图片放大模态框功能
let currentModalType = null;
let currentModalIndex = 0;
let modalImageSources = [];
let modalSignatures = [];

function openImageModal(type, element) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalSignature = document.getElementById('modalSignature');
    
    if (type === 'main') {
        // 主图模式：获取所有缩略图数据
        const thumbnails = document.querySelectorAll('.thumbnail');
        modalImageSources = Array.from(thumbnails).map(thumb => thumb.getAttribute('data-image'));
        modalSignatures = Array.from(thumbnails).map(thumb => thumb.getAttribute('data-signature'));
        // 找到当前缩略图的索引
        const currentSrc = document.getElementById('mainCharacterImage').src;
        currentModalIndex = modalImageSources.findIndex(src => src === currentSrc);
        if (currentModalIndex === -1) currentModalIndex = 0;
    } else if (type === 'gallery') {
        // 图集模式：使用图集数据
        modalImageSources = galleryImages.map(img => img.src);
        modalSignatures = galleryImages.map(img => img.signature);
        // 找到当前图集图片的索引
        const currentSrc = document.getElementById('galleryImage').src;
        currentModalIndex = modalImageSources.findIndex(src => src === currentSrc);
        if (currentModalIndex === -1) currentModalIndex = 0;
    }
    
    currentModalType = type;
    modalImage.src = modalImageSources[currentModalIndex];
    modalSignature.textContent = modalSignatures[currentModalIndex];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
}

function changeImage(direction) {
    if (currentModalType === null) return;
    
    currentModalIndex += direction;
    
    // 循环切换
    if (currentModalIndex >= modalImageSources.length) {
        currentModalIndex = 0;
    } else if (currentModalIndex < 0) {
        currentModalIndex = modalImageSources.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    const modalSignature = document.getElementById('modalSignature');
    modalImage.src = modalImageSources[currentModalIndex];
    modalSignature.textContent = modalSignatures[currentModalIndex];
}

// 点击ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// 图集数据（在全局作用域定义，供模态框使用）
const galleryImages = [
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/others_1.png", signature: "其它形象1(待署名)"},
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/角色名(英文路径)/others_2.png", signature: "其它形象2(待署名)"}
];
</script>