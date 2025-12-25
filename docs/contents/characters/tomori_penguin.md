---
title: Tomori企鹅 详细资料
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
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin.png" 
                     alt="<角色名> 主图" 
                     id="mainCharacterImage"
                     loading="eager">
            </div>
        
            <!-- 缩略图图集 -->
            <div class="thumbnail-gallery">
                <div class="thumbnail active" data-image="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin.png">
                    <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin.png" alt="主图">
                </div>
                <div class="thumbnail" data-image="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/pic1.png">
                    <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/pic1.png" alt="子图1">
                </div>
                <div class="thumbnail" data-image="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/pic2.png">
                    <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/pic2.png" alt="子图2">
                </div>
            </div>
        </div>
    
        <!-- 固定图集卡片 -->
        <div class="gallery-card">
            <div class="gallery-nav" id="galleryPrev">
                <span>&lt;</span>
            </div>
            <div class="gallery-image-container" onclick="openImageModal('gallery', this)">
                <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_1.png" 
                     alt="图集图片" 
                     id="galleryImage"
                     class="gallery-image">
                <div class="gallery-signature" id="gallerySignature">其它形象1(待署名)</div>
            </div>
            <div class="gallery-nav" id="galleryNext">
                <span>&gt;</span>
            </div>
        </div>
    </div>

    <!-- 右侧信息区域 -->
    <div class="character-detail-info">
        <div class="character-header">
            <h1 class="character-title">Tomori企鹅</h1>
            <div class="character-tags">
                <span class="tag primary">Tomori系</span>
                <span class="tag secondary">企鹅科</span>
                <span class="tag accent">棉花生物</span>
                <span class="tag">安静型</span>
            </div>
        </div>
        
        <!-- 基本信息表 -->
        <div class="info-table">
            <table>
                <tr>
                    <th>物种类型</th>
                    <td>棉花企鹅型生物</td>
                </tr>
                <tr>
                    <th>毛色</th>
                    <td>黑白外毛皮，发色为灰？紫？难说</td>
                </tr>
                <tr>
                    <th>首次发现</th>
                    <td>2025年x月x日</td>
                </tr>
                <tr>
                    <th>常见出没地</th>
                    <td>路边的草丛中，街上，南极</td>
                </tr>
                <tr>
                    <th>主要关联角色</th>
                    <td>
                        <a href="../anon_dog" class="character-link-small">Anon犬</a>
                        <a href="../soyo_fox" class="character-link-small">Soyo狸</a>
                        <a href="../rana_cat" class="character-link-small">Saki猫</a>
                        <a href="../taki_wolf" class="character-link-small">Taki狼</a>
                        <a href="../mutsumi_rabbit" class="character-link-small">Mutsumi兔</a>
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
            <p>棉花小企鹅，是MyGO!!!!!乐队的主唱......吗？部分个体安静可爱内向温柔，但是也有部分个体疑似精神有问题(<del>不要抢它们的石头</del>)，会咕咕嘎嘎地叫。</p>
        </div>
        
        <!-- 特性指标 -->
        <div class="character-stats">
            <h3>能力指标</h3>
            <div class="stat-bars">
                <div class="stat-item">
                    <div class="stat-label">活泼度</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: 30%;"></div>
                    </div>
                    <div class="stat-value">3/10</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">情绪波动</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: 60%;"></div>
                    </div>
                    <div class="stat-value">6/10</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">破坏力</div>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: 70%;"></div>
                    </div>
                    <div class="stat-value">7/10</div>
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
                <li><strong>最爱食物：</strong>像花和星星的小糖果</li>
                <li><strong>常饮饮品：</strong>难说</li>
                <li><strong>特殊习惯：</strong>不像anon犬那样吃饭也不消停，通常还是正常进食的，少部分时候...看到熟食会宕机咕嘎大叫跑走。</li>
            </ul>
            
            <h3>行为模式</h3>
            <div class="behavior-patterns">
                <div class="pattern-card">
                    <div class="pattern-icon">🩹</div>
                    <div class="pattern-content">
                        <h4>收集癖</h4>
                        <p>哪怕变成企鹅也要收集石头和创口贴吗，哈基灯你这家伙...</p>
                    </div>
                </div>
                <div class="pattern-card">
                    <div class="pattern-icon">🐧</div>
                    <div class="pattern-content">
                        <h4>咕咕嘎嘎</h4>
                        <p>点击输入咕嘎</p>
                    </div>
                </div>
                <div class="pattern-card">
                    <div class="pattern-icon">🎤</div>
                    <div class="pattern-content">
                        <h4>音乐</h4>
                        <p>不同于精神失常时的咕咕嘎嘎叫，Tomori企鹅沉浸于演唱时，歌声动听，路过的人基本会为其驻留。不过也曾因咕咕嘎嘎叫后听到别人的大笑而感到怯懦，羞于演唱。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- 背景故事 -->
    <section class="detail-section">
        <h2>背景故事</h2>
        <div class="section-content">
            <p>Tomori企鹅首次被发现于南极，科考员最初看背影以为是普通的企鹅，直到它一手拿着绿色笔记本一手拿着石头好奇地转身。</p>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2025年3月</div>
                    <div class="timeline-content">
                        <h4>初次发现</h4>
                        <p>首次被发现于南极，但是后来也有部分个体不知为何出现在羽丘女子学园的周边，伪装成了石头被路人坐下歇脚...</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">请输入时间</div>
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
                <a href="../anon_dog" class="relationship-card">
                    <div class="rel-avatar">
                        <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/anon_dog.png" alt="Anon犬">
                    </div>
                    <div class="rel-info">
                        <h4>Anon犬</h4>
                        <p class="rel-type">重要朋友</p>
                        <p class="rel-desc">它们经常一起行动，但是Tomori企鹅的动作笨拙，常常显得Anon犬有多动症。</p>
                    </div>
                </a>
                
                <a href="../saki_cat" class="relationship-card">
                    <div class="rel-avatar">
                        <img src="https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/saki_cat.png" alt="Saki猫">
                    </div>
                    <div class="rel-info">
                        <h4>Saki猫</h4>
                        <p class="rel-type">重要朋友</p>
                        <p class="rel-desc">Tomori企鹅似乎总是在它的笔记本上写写画画，偶遇到Saki猫时总会想上前给它看。</p>
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
                    <h4>🪨 爆装备</h4>
                    <p>Tomori企鹅走路笨拙，被不怀好意的人类埋伏绊倒，结果爆了一地石头...</p>
                </div>
                <div class="anecdote">
                    <h4>请输入标题</h4>
                    <p>请输入文本</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 设定集板块 -->
    <section class="detail-section">
        <h2>设定集</h2>
        <div class="section-content">
            <div class="settings-collection">
                <!-- 轮播导航按钮 -->
                <div class="settings-nav prev" onclick="changeSettingCard(-1)">
                    <span>&lt;</span>
                </div>
                
                <!-- 设定卡片容器 -->
                <div class="settings-container">
                    <!-- 设定卡片将在这里动态生成 -->
                </div>
                
                <div class="settings-nav next" onclick="changeSettingCard(1)">
                    <span>&gt;</span>
                </div>
                
                <!-- 卡片指示器 -->
                <div class="settings-indicator">
                    <span class="current-card">1</span> / <span class="total-cards">3</span>
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

/* 设定集样式 */
.settings-collection {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
    padding: 20px 0;
}

.settings-nav {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--md-primary-fg-color--light);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
    flex-shrink: 0;
    user-select: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.settings-nav:hover {
    background: var(--md-primary-fg-color);
    transform: scale(1.1);
}

.settings-container {
    width: 600px;
    min-height: 300px;
    position: relative;
}

.settings-card {
    background: var(--md-default-bg-color);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    overflow: hidden;
    transition: all 0.4s ease;
    border: 1px solid var(--md-default-fg-color--lightest);
}

/* 折叠状态样式 */
.settings-card.collapsed {
    padding: 25px;
}

.settings-content.collapsed {
    display: flex;
    gap: 25px;
    align-items: center;
}

.settings-image {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;
    border: 4px solid rgba(100, 200, 255, 0.2);
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.settings-image:hover {
    transform: scale(1.02);
    border-color: var(--md-primary-fg-color--light);
}

.settings-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.settings-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.setting-name {
    font-size: 1.3em;
    font-weight: 600;
    color: var(--md-primary-fg-color);
    margin: 0;
}

.setting-author {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95em;
    color: var(--md-default-fg-color--light);
}

.author-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--md-primary-fg-color);
    text-decoration: none;
    padding: 4px 10px;
    background: rgba(64, 158, 255, 0.1);
    border-radius: 20px;
    transition: all 0.2s ease;
}

.author-link:hover {
    background: rgba(64, 158, 255, 0.2);
    transform: translateY(-1px);
}

.platform-icon-img {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 4px;
}

.setting-intro {
    font-size: 0.9em;
    color: var(--md-default-fg-color);
    line-height: 1.5;
    margin: 5px 0 0 0;
}

/* 展开按钮 */
.expand-button {
    display: block;
    margin: 25px auto 0;
    padding: 8px 24px;
    background: linear-gradient(135deg, var(--md-primary-fg-color), var(--md-accent-fg-color));
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
}

.expand-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(64, 158, 255, 0.4);
}

/* 展开状态样式 */
.settings-card.expanded {
    padding: 0;
}

.settings-content.expanded {
    padding: 25px;
}

.expanded-top {
    display: flex;
    gap: 25px;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--md-default-fg-color--lightest);
    margin-bottom: 20px;
}

.expanded-detail {
    padding: 20px 0;
}

.detail-content {
    font-size: 0.95em;
    line-height: 1.6;
    color: var(--md-default-fg-color);
}

.detail-content h4 {
    color: var(--md-primary-fg-color);
    margin: 20px 0 10px 0;
    font-size: 1.1em;
}

.detail-content p {
    margin: 10px 0;
}

.detail-content ul {
    margin: 10px 0;
    padding-left: 20px;
}

.detail-content li {
    margin: 5px 0;
}

/* 收起按钮 */
.collapse-button {
    display: block;
    margin: 20px auto 0;
    padding: 8px 24px;
    background: var(--md-default-bg-color--light);
    color: var(--md-default-fg-color);
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 25px;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.collapse-button:hover {
    background: var(--md-default-fg-color--lightest);
    transform: translateY(-2px);
}

/* 卡片指示器 */
.settings-indicator {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
    background: var(--md-default-bg-color);
    padding: 4px 12px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.current-card {
    color: var(--md-primary-fg-color);
    font-weight: bold;
}

/* 设定集图片点击效果 */
.settings-image {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;
    border: 4px solid rgba(100, 200, 255, 0.2);
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer; /* 添加指针样式 */
}

.settings-image:hover {
    transform: scale(1.02);
    border-color: var(--md-primary-fg-color--light);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15); /* 增强悬停效果 */
}

/* 点击态反馈 */
.settings-image:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
}

/* 展开状态下的图片样式 */
.expanded-top .settings-image {
    width: 180px;
    height: 180px;
}

@media (max-width: 768px) {
    .settings-image {
        width: 120px;
        height: 120px;
    }
    .expanded-top .settings-image {
        width: 150px;
        height: 150px;
    }
}

/* 响应式设计 */
@media (max-width: 768px) {
    .settings-collection {
        flex-direction: column;
        gap: 15px;
    }
    
    .settings-container {
        width: 100%;
    }
    
    .settings-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }
    
    .settings-nav.prev {
        left: 10px;
    }
    
    .settings-nav.next {
        right: 10px;
    }
    
    .settings-content.collapsed,
    .expanded-top {
        flex-direction: column;
        text-align: center;
    }
    
    .settings-image {
        width: 120px;
        height: 120px;
    }
    
    .setting-author {
        justify-content: center;
    }
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
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_1.png", signature: "其它形象1(待署名)"},
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_2.png", signature: "其它形象2(待署名)"},
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_3.png", signature: "其它形象3(待署名)"}
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
    const modalNavs = document.querySelectorAll('.modal-nav'); // 获取所有左右切换按钮
    
    if (type === 'main') {
        // 主图模式：获取所有缩略图数据
        const thumbnails = document.querySelectorAll('.thumbnail');
        modalImageSources = Array.from(thumbnails).map(thumb => thumb.getAttribute('data-image'));
        modalSignatures = Array.from(thumbnails).map(thumb => thumb.getAttribute('data-signature'));
        // 找到当前缩略图的索引
        const currentSrc = document.getElementById('mainCharacterImage').src;
        currentModalIndex = modalImageSources.findIndex(src => src === currentSrc);
        if (currentModalIndex === -1) currentModalIndex = 0;
        
        // 显示左右切换按钮
        modalNavs.forEach(nav => nav.style.display = 'flex');
        
    } else if (type === 'gallery') {
        // 图集模式：使用图集数据
        modalImageSources = galleryImages.map(img => img.src);
        modalSignatures = galleryImages.map(img => img.signature);
        // 找到当前图集图片的索引
        const currentSrc = document.getElementById('galleryImage').src;
        currentModalIndex = modalImageSources.findIndex(src => src === currentSrc);
        if (currentModalIndex === -1) currentModalIndex = 0;
        
        // 显示左右切换按钮
        modalNavs.forEach(nav => nav.style.display = 'flex');
        
    } else if (type === 'setting') {
        // 设定集图片模式
        const imgElement = element.querySelector('img') || element;
        const settingName = element.closest('.settings-card').querySelector('.setting-name')?.textContent || '设定图';
        
        modalImageSources = [imgElement.src];
        modalSignatures = [settingName];
        currentModalIndex = 0;
        
        // 隐藏左右切换按钮
        modalNavs.forEach(nav => nav.style.display = 'none');
        
        // 添加淡入动画
        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.style.opacity = '1';
            modalImage.style.transition = 'opacity 0.3s ease';
        }, 10);
    }
    
    currentModalType = type;
    modalImage.src = modalImageSources[currentModalIndex];
    modalSignature.textContent = modalSignatures[currentModalIndex];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    const modalNavs = document.querySelectorAll('.modal-nav');
    
    // 重置所有按钮为显示状态
    modalNavs.forEach(nav => nav.style.display = 'flex');
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 恢复背景滚动
    currentModalType = null; // 重置当前模态框类型
}

function changeImage(direction) {
    // 如果是设定集类型，不执行切换
    if (currentModalType === 'setting') {
        return;
    }
    
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
    
    // 如果是设定集类型，不响应左右箭头切换
    if (currentModalType === 'setting') {
        return;
    }
    
    // 左右箭头切换图片（仅限非设定集类型）
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
        event.preventDefault(); // 防止滚动
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
        event.preventDefault(); // 防止滚动
    }
});

// 图集数据（在全局作用域定义，供模态框使用）
const galleryImages = [
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_1.png", signature: "其它形象1(待署名)"},
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_2.png", signature: "其它形象2(待署名)"},
        {src: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/others_3.png", signature: "其它形象3(待署名)"}
];

// 设定集数据
const settingsData = 
[
    {
        id: 1,
        image: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/settings_1.png",
        name: "设定名（例）",
        author: "作者",
        authorLink: "此处放入社媒链接",
        platform: "bilibili",
        intro: "一句话简介",
        detail: 
            `
            <h4>角色背景</h4>
            <p>请输入背景</p>
            
            <h4>日常行为</h4>
            <ul>
                <li>行为1</li>
                <li>行为2</li>
            </ul>
            
            <h4>特殊习惯</h4>
            <p>请输入文本</p>

            <h4>更多内容</h4>
            <p>......</p>
            `
    },
    {
        id: 2,
        image: "https://aidoll-1392936919.cos.ap-guangzhou.myqcloud.com/images/characters/tomori_penguin/settings_2.png",
        name: "设定名（例）",
        author: "作者名",
        authorLink: "此处放入社媒链接",
        platform: "bilibili",
        intro: "一句话简介",
        detail: 
            `
            <h4>习性</h4>
            <p>请输入文本</p>
            
            <h4>捕食行为</h4>
            <p>请输入文本</p>
            
            <h4>请输入标题</h4>
            <p>请输入文本</p>

            <h4>更多内容</h4>
            <p>......</p>
            `
    },
];

// 平台图标映射 - 使用外部链接
const platformIcons = {
    bilibili: '<img src="https://img.icons8.com/ios-filled/16/000000/bilibili.png" class="platform-icon-img" alt="Bilibili">',
    twitter: '<img src="https://img.icons8.com/ios-filled/16/000000/twitter.png" class="platform-icon-img" alt="Twitter">',
    pixiv: '<img src="https://img.icons8.com/ios-filled/16/000000/picture.png" class="platform-icon-img" alt="Pixiv">'
};

let currentSettingIndex = 0;
let settingsContainer = null;

// 新增：跟踪每个卡片的展开状态
let cardStates = {};

// 初始化设定集
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有卡片的展开状态为false（折叠）
    settingsData.forEach(setting => {
        cardStates[setting.id] = false;
    });
    
    renderSettingCard();
});

// 渲染当前设定卡片
// 渲染当前设定卡片
function renderSettingCard() {
    const setting = settingsData[currentSettingIndex];
    const isExpanded = cardStates[setting.id] || false;
    
    // 确保settingsContainer存在
    if (!settingsContainer) {
        settingsContainer = document.querySelector('.settings-container');
        if (!settingsContainer) return;
    }
    
    const cardHTML = `
        <div class="settings-card ${isExpanded ? 'expanded' : 'collapsed'}" data-id="${setting.id}">
            <div class="settings-content ${isExpanded ? 'expanded' : 'collapsed'}">
                ${isExpanded ? `
                    <div class="expanded-top">
                        <div class="settings-image" onclick="openImageModal('setting', this)">
                            <img src="${setting.image}" alt="${setting.name}" loading="lazy">
                        </div>
                        <div class="settings-info">
                            <h3 class="setting-name">${setting.name}</h3>
                            <div class="setting-author">
                                作者：
                                <a href="${setting.authorLink}" target="_blank" class="author-link">
                                    ${platformIcons[setting.platform] || platformIcons.bilibili}
                                    ${setting.author}
                                </a>
                            </div>
                            <p class="setting-intro">${setting.intro}</p>
                        </div>
                    </div>
                    <div class="expanded-detail">
                        <div class="detail-content">${setting.detail}</div>
                        <button class="collapse-button" onclick="toggleCard(${setting.id})">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 5px;">
                                <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            收起详情
                        </button>
                    </div>
                ` : `
                    <div class="settings-image" onclick="openImageModal('setting', this)">
                        <img src="${setting.image}" alt="${setting.name}" loading="lazy">
                    </div>
                    <div class="settings-info">
                        <h3 class="setting-name">${setting.name}</h3>
                        <div class="setting-author">
                            作者：
                            <a href="${setting.authorLink}" target="_blank" class="author-link">
                                ${platformIcons[setting.platform] || platformIcons.bilibili}
                                ${setting.author}
                            </a>
                        </div>
                        <p class="setting-intro">${setting.intro}</p>
                    </div>
                    <button class="expand-button" onclick="toggleCard(${setting.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="margin-right: 5px;">
                            <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        展开详情
                    </button>
                `}
            </div>
        </div>
    `;
    
    settingsContainer.innerHTML = cardHTML;
    updateIndicator();
}

// 切换卡片展开/收起状态 - 修复版
function toggleCard(cardId) {
    // 如果没有传入cardId，使用当前卡片的id
    if (!cardId) {
        cardId = settingsData[currentSettingIndex].id;
    }
    
    // 切换该卡片的展开状态
    cardStates[cardId] = !cardStates[cardId];
    
    // 重新渲染当前卡片
    renderSettingCard();
}

// 切换设定卡片 - 修复版
function changeSettingCard(direction) {
    currentSettingIndex = (currentSettingIndex + direction + settingsData.length) % settingsData.length;
    renderSettingCard();
}

// 更新指示器
function updateIndicator() {
    const currentSpan = document.querySelector('.current-card');
    const totalSpan = document.querySelector('.total-cards');
    
    if (currentSpan) currentSpan.textContent = currentSettingIndex + 1;
    if (totalSpan) totalSpan.textContent = settingsData.length;
}

// 添加图片加载错误处理
document.addEventListener('DOMContentLoaded', function() {
    // 监听图片加载错误
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG' && e.target.parentElement.classList.contains('settings-image')) {
            e.target.src = 'https://via.placeholder.com/300x300/4a90e2/ffffff?text=设定图';
            console.log('设定图片加载失败，已替换为占位图');
        }
    }, true);
});

// 添加图片加载状态处理
document.addEventListener('DOMContentLoaded', function() {
    // 监听设定集图片的点击事件（事件委托）
    document.addEventListener('click', function(e) {
        // 如果点击的是设定集图片
        if (e.target.closest('.settings-image')) {
            const imgContainer = e.target.closest('.settings-image');
            const img = imgContainer.querySelector('img');
            
            // 添加点击反馈
            imgContainer.style.transform = 'scale(0.95)';
            setTimeout(() => {
                imgContainer.style.transform = 'scale(1)';
            }, 150);
            
            // 检查图片是否已加载
            if (!img.complete || img.naturalHeight === 0) {
                console.log('设定图片正在加载...');
                // 可以在这里添加加载指示器
            }
        }
    });
    
    // 预加载设定集图片，提高用户体验
    function preloadSettingsImages() {
        settingsData.forEach(setting => {
            const img = new Image();
            img.src = setting.image;
        });
    }
    
    // 页面加载后预加载图片
    setTimeout(preloadSettingsImages, 1000);
});
</script>