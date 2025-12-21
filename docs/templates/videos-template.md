---
title: {{ title }}
description: {{ description }}
date: {{ date }}
layout: video
---

<style>
/* 视频详情页样式 */
.video-detail {
    max-width: 800px;
    margin: 0 auto;
}

.video-player-container {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.custom-video {
    width: 100%;
    display: block;
}

.video-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    padding: 15px 10px 5px;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.video-player-container:hover .video-controls {
    opacity: 1;
}

.play-btn {
    background: var(--md-primary-fg-color);
    color: white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-bar {
    flex: 1;
    height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 2px;
    margin: 0 10px;
    position: relative;
    cursor: pointer;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--md-primary-fg-color);
    width: 0%;
}

.time-display {
    color: white;
    font-size: 12px;
    min-width: 90px;
}

.volume-control {
    display: flex;
    align-items: center;
    margin-left: 8px;
}

.volume-slider {
    width: 50px;
    margin-left: 5px;
}

.fullscreen-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-left: 8px;
}

/* 视频信息区域 */
.video-header {
    margin-bottom: 30px;
}

.video-title {
    font-size: 1.8em;
    font-weight: bold;
    margin: 0 0 10px 0;
    color: var(--md-primary-fg-color);
}

.video-meta-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--md-default-fg-color--lightest);
}

.video-stats {
    display: flex;
    gap: 15px;
    color: var(--md-default-fg-color--light);
    font-size: 0.9em;
}

.video-stats span {
    display: flex;
    align-items: center;
    gap: 5px;
}

.video-author {
    display: flex;
    align-items: center;
    gap: 8px;
}

.author-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--md-primary-fg-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
}

.author-name {
    font-weight: 500;
}

/* 视频描述 */
.video-description-content {
    background: var(--md-default-bg-color--light);
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    line-height: 1.6;
}

.video-tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0;
}

.video-tag {
    background: var(--md-accent-fg-color--transparent);
    color: var(--md-accent-fg-color);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.9em;
    text-decoration: none;
}

.video-tag:hover {
    background: var(--md-accent-fg-color);
    color: white;
}

/* 评论区域 */
.comments-section {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 2px solid var(--md-default-fg-color--lightest);
}

.comments-header {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--md-primary-fg-color);
}

.comments-count {
    color: var(--md-default-fg-color--light);
    font-size: 0.9em;
    font-weight: normal;
}

/* 评论表单 */
.comment-form {
    background: var(--md-default-bg-color--light);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
}

.comment-form h3 {
    margin: 0 0 15px 0;
    font-size: 1.1em;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9em;
    color: var(--md-default-fg-color--light);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 4px;
    background: var(--md-default-bg-color);
    color: var(--md-default-fg-color);
    font-size: 0.9em;
}

.form-group textarea {
    min-height: 100px;
    resize: vertical;
}

.submit-btn {
    background: var(--md-primary-fg-color);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    transition: opacity 0.3s;
}

.submit-btn:hover {
    opacity: 0.9;
}

/* 评论列表 */
.comments-list {
    margin-top: 30px;
}

.comment {
    background: var(--md-default-bg-color);
    border: 1px solid var(--md-default-fg-color--lightest);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.comment-author {
    display: flex;
    align-items: center;
    gap: 10px;
}

.comment-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: var(--md-primary-fg-color--transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.comment-name {
    font-weight: bold;
}

.comment-date {
    color: var(--md-default-fg-color--light);
    font-size: 0.8em;
}

.comment-content {
    line-height: 1.6;
    margin: 0;
}

.comment-actions {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.comment-action {
    background: none;
    border: none;
    color: var(--md-default-fg-color--light);
    cursor: pointer;
    font-size: 0.9em;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
}

.comment-action:hover {
    color: var(--md-primary-fg-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .video-title {
        font-size: 1.5em;
    }
    
    .video-meta-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .video-controls {
        padding: 10px 5px 3px;
    }
}
</style>

<div class="video-detail">
    <!-- 视频播放器 -->
    <div class="video-player-container">
        <video class="custom-video" id="customVideo" poster="{{ thumbnail }}" preload="metadata">
            <source src="{{ video_url }}" type="video/mp4">
            <track label="中文字幕" kind="subtitles" srclang="zh" src="{{ video_url | replace('.mp4', '.vtt') }}" default>
            您的浏览器不支持 video 标签。
        </video>
        
        <div class="video-controls">
            <button class="play-btn" id="playBtn">▶</button>
            <div class="progress-bar" id="progressBar">
                <div class="progress" id="progress"></div>
            </div>
            <div class="time-display" id="timeDisplay">00:00 / 00:00</div>
            <div class="volume-control">
                <span>🔊</span>
                <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.1" value="1">
            </div>
            <button class="fullscreen-btn" id="fullscreenBtn">⛶</button>
        </div>
    </div>

    <!-- 视频信息 -->
    <div class="video-header">
        <h1 class="video-title">{{ title }}</h1>
        
        <div class="video-meta-info">
            <div class="video-stats">
                <span><span>👁️</span> <span id="viewCount">{{ views }}</span> 次观看</span>
                <span><span>📅</span> {{ date }}</span>
                <span><span>⏱️</span> {{ duration }}</span>
            </div>
            
            <div class="video-author">
                <div class="author-avatar">{{ author | first }}</div>
                <span class="author-name">{{ author }}</span>
            </div>
        </div>
    </div>

    <!-- 视频描述 -->
    <div class="video-description-content">
        <h3>视频描述</h3>
        <p>{{ description }}</p>
    </div>

    <!-- 标签 -->
    <div class="video-tags-container">
        {% for tag in tags %}
        <a href="../#filter={{ tag }}" class="video-tag">{{ tag }}</a>
        {% endfor %}
    </div>

    <!-- 评论区 -->
    <div class="comments-section">
        <h2 class="comments-header">
            评论
            <span class="comments-count" id="commentCount">({{ comments | length }})</span>
        </h2>
        
        <!-- 评论表单 -->
        <div class="comment-form">
            <h3>发表评论</h3>
            <form id="commentForm">
                <div class="form-group">
                    <label for="commentName">昵称</label>
                    <input type="text" id="commentName" placeholder="请输入昵称" required>
                </div>
                <div class="form-group">
                    <label for="commentEmail">邮箱（不会公开）</label>
                    <input type="email" id="commentEmail" placeholder="请输入邮箱">
                </div>
                <div class="form-group">
                    <label for="commentContent">评论内容</label>
                    <textarea id="commentContent" placeholder="请输入评论内容..." required></textarea>
                </div>
                <button type="submit" class="submit-btn">提交评论</button>
            </form>
        </div>
        
        <!-- 评论列表 -->
        <div class="comments-list" id="commentsList">
            <!-- 评论会通过JavaScript动态加载 -->
            <div id="commentsPlaceholder">
                <p>暂无评论，快来抢沙发吧！</p>
            </div>
        </div>
        
        <!-- Giscus评论区（可选，需要配置GitHub Discussions） -->
        <div id="giscus-container" style="margin-top: 40px;"></div>
    </div>
</div>

<script>
// 视频播放器控制
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('customVideo');
    const playBtn = document.getElementById('playBtn');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const timeDisplay = document.getElementById('timeDisplay');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const container = document.querySelector('.video-player-container');
    
    // 播放/暂停
    playBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playBtn.textContent = '❚❚';
        } else {
            video.pause();
            playBtn.textContent = '▶';
        }
    });
    
    // 更新进度条
    video.addEventListener('timeupdate', function() {
        if (video.duration) {
            const percent = (video.currentTime / video.duration) * 100;
            progress.style.width = `${percent}%`;
            
            // 更新时间显示
            const currentTime = formatTime(video.currentTime);
            const duration = formatTime(video.duration);
            timeDisplay.textContent = `${currentTime} / ${duration}`;
        }
    });
    
    // 点击进度条跳转
    progressBar.addEventListener('click', function(e) {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        video.currentTime = percent * video.duration;
    });
    
    // 音量控制
    volumeSlider.addEventListener('input', function() {
        video.volume = this.value;
    });
    
    // 全屏
    fullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                console.log(`全屏请求失败: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
    
    // 视频结束
    video.addEventListener('ended', function() {
        playBtn.textContent = '▶';
    });
    
    // 格式化时间显示
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // 播放次数统计
    video.addEventListener('play', function() {
        updateViewCount();
    });
    
    // 评论功能
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');
    const commentsPlaceholder = document.getElementById('commentsPlaceholder');
    const commentCount = document.getElementById('commentCount');
    
    // 加载现有评论
    loadComments();
    
    // 提交评论
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value.trim();
        const email = document.getElementById('commentEmail').value.trim();
        const content = document.getElementById('commentContent').value.trim();
        
        if (!name || !content) {
            alert('请填写昵称和评论内容');
            return;
        }
        
        const comment = {
            id: Date.now(),
            name: name,
            email: email,
            content: content,
            date: new Date().toLocaleDateString('zh-CN'),
            likes: 0,
            replies: []
        };
        
        // 保存评论
        saveComment(comment);
        
        // 添加到页面
        addCommentToPage(comment);
        
        // 清空表单
        commentForm.reset();
        
        // 更新评论计数
        updateCommentCount();
        
        alert('评论提交成功！');
    });
    
    function loadComments() {
        const videoId = window.location.pathname.split('/').pop().replace('.html', '');
        const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || '[]');
        
        if (comments.length > 0) {
            commentsPlaceholder.style.display = 'none';
            comments.forEach(comment => {
                addCommentToPage(comment);
            });
            updateCommentCount();
        }
    }
    
    function saveComment(comment) {
        const videoId = window.location.pathname.split('/').pop().replace('.html', '');
        const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || '[]');
        comments.push(comment);
        localStorage.setItem(`comments_${videoId}`, JSON.stringify(comments));
    }
    
    function addCommentToPage(comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <div class="comment-avatar">${comment.name.charAt(0)}</div>
                    <div>
                        <div class="comment-name">${comment.name}</div>
                        <div class="comment-date">${comment.date}</div>
                    </div>
                </div>
            </div>
            <p class="comment-content">${comment.content}</p>
            <div class="comment-actions">
                <button class="comment-action like-btn" data-id="${comment.id}">
                    <span>👍</span> <span class="like-count">${comment.likes}</span>
                </button>
                <button class="comment-action reply-btn">回复</button>
            </div>
        `;
        
        commentsList.appendChild(commentDiv);
        
        // 点赞功能
        const likeBtn = commentDiv.querySelector('.like-btn');
        likeBtn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            likeComment(id);
        });
    }
    
    function likeComment(commentId) {
        const videoId = window.location.pathname.split('/').pop().replace('.html', '');
        const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || '[]');
        const comment = comments.find(c => c.id === commentId);
        
        if (comment) {
            comment.likes++;
            localStorage.setItem(`comments_${videoId}`, JSON.stringify(comments));
            
            // 更新页面上的点赞数
            document.querySelectorAll('.like-btn').forEach(btn => {
                if (parseInt(btn.dataset.id) === commentId) {
                    btn.querySelector('.like-count').textContent = comment.likes;
                }
            });
        }
    }
    
    function updateCommentCount() {
        const videoId = window.location.pathname.split('/').pop().replace('.html', '');
        const comments = JSON.parse(localStorage.getItem(`comments_${videoId}`) || '[]');
        commentCount.textContent = `(${comments.length})`;
    }
    
    // 更新观看次数
    function updateViewCount() {
        const videoId = window.location.pathname.split('/').pop().replace('.html', '');
        const viewKey = `views_${videoId}`;
        let viewCount = parseInt(localStorage.getItem(viewKey) || '0');
        viewCount++;
        localStorage.setItem(viewKey, viewCount.toString());
        
        // 更新页面显示
        const viewCountElement = document.getElementById('viewCount');
        if (viewCountElement) {
            const baseViews = parseInt('{{ views }}');
            viewCountElement.textContent = baseViews + viewCount;
        }
    }
    
    // 初始化Giscus（如果需要）
    function initGiscus() {
        const giscusConfig = {
            repo: 'Shuixin-xdu/Shuixin-xdu.github.io',
            repoId: '', // 需要在GitHub设置中获取
            category: 'Comments',
            categoryId: '', // 需要在GitHub设置中获取
            mapping: 'pathname',
            reactionsEnabled: '1',
            emitMetadata: '0',
            theme: 'preferred_color_scheme',
            lang: 'zh-CN'
        };
        
        // 如果配置了Giscus，则初始化
        if (giscusConfig.repoId && giscusConfig.categoryId) {
            const script = document.createElement('script');
            script.src = 'https://giscus.app/client.js';
            script.setAttribute('data-repo', giscusConfig.repo);
            script.setAttribute('data-repo-id', giscusConfig.repoId);
            script.setAttribute('data-category', giscusConfig.category);
            script.setAttribute('data-category-id', giscusConfig.categoryId);
            script.setAttribute('data-mapping', giscusConfig.mapping);
            script.setAttribute('data-reactions-enabled', giscusConfig.reactionsEnabled);
            script.setAttribute('data-emit-metadata', giscusConfig.emitMetadata);
            script.setAttribute('data-theme', giscusConfig.theme);
            script.setAttribute('data-lang', giscusConfig.lang);
            script.crossOrigin = 'anonymous';
            script.async = true;
            
            document.getElementById('giscus-container').appendChild(script);
        }
    }
    
    // 可以在这里调用initGiscus()，如果需要Giscus评论系统
    // initGiscus();
});
</script>