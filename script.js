// ============================
// 簡約古風 — 個人頁面腳本
// ============================

(function () {
    'use strict';

    // --- 時鐘更新 ---
    const timeEl = document.getElementById('timeDisplay');
    const dateEl = document.getElementById('dateDisplay');

    const chineseNumbers = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    function toChineseYear(year) {
        return String(year).split('').map(d => chineseNumbers[parseInt(d)]).join('');
    }

    function toChineseMonth(month) {
        const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        return months[month];
    }

    function toChineseDay(day) {
        if (day <= 10) return chineseNumbers[day];
        if (day < 20) return '十' + (day % 10 === 0 ? '' : chineseNumbers[day % 10]);
        if (day === 20) return '二十';
        if (day < 30) return '二十' + chineseNumbers[day % 10];
        if (day === 30) return '三十';
        return '三十' + chineseNumbers[day % 10];
    }

    function padZero(n) {
        return String(n).padStart(2, '0');
    }

    function updateClock() {
        const now = new Date();

        // 時間
        const hours = padZero(now.getHours());
        const minutes = padZero(now.getMinutes());
        const seconds = padZero(now.getSeconds());
        timeEl.textContent = `${hours}:${minutes}:${seconds}`;

        // 日期（中文格式）
        const year = toChineseYear(now.getFullYear());
        const month = toChineseMonth(now.getMonth());
        const day = toChineseDay(now.getDate());
        const weekDay = weekDays[now.getDay()];
        dateEl.textContent = `${year}年 ${month}月 ${day}日 ${weekDay}`;
    }

    updateClock();
    setInterval(updateClock, 1000);

    // --- 飄落花瓣 ---
    const petalsContainer = document.getElementById('petalsContainer');
    const maxPetals = 15;
    let petalCount = 0;

    function createPetal() {
        if (petalCount >= maxPetals) return;

        const petal = document.createElement('div');
        petal.className = 'petal';

        // 隨機位置與大小
        const startX = Math.random() * 100;
        const size = 8 + Math.random() * 10;
        const duration = 8 + Math.random() * 8;
        const delay = Math.random() * 2;

        petal.style.left = `${startX}%`;
        petal.style.top = `-20px`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;

        petalsContainer.appendChild(petal);
        petalCount++;

        // 動畫結束後移除
        petal.addEventListener('animationend', () => {
            petal.remove();
            petalCount--;
        });
    }

    // 定期產生花瓣
    function startPetals() {
        createPetal();
        createPetal();
        setInterval(() => {
            if (Math.random() > 0.3) {
                createPetal();
            }
        }, 2000);
    }

    // 延遲啟動花瓣效果
    setTimeout(startPetals, 1500);

    // --- 詩句輪播 ---
    const poems = [
        '「 山不在高，有仙則名 」',
        '「 採菊東籬下，悠然見南山 」',
        '「 行到水窮處，坐看雲起時 」',
        '「 人生若只如初見 」',
        '「 明月松間照，清泉石上流 」',
        '「 落花人獨立，微雨燕雙飛 」',
        '「 時光如水，歲月如歌 」',
    ];

    const poemEl = document.querySelector('.poem-quote');
    let currentPoemIndex = 0;

    function cyclePoemQuote() {
        // 淡出
        poemEl.style.transition = 'opacity 0.8s ease';
        poemEl.style.opacity = '0';

        setTimeout(() => {
            currentPoemIndex = (currentPoemIndex + 1) % poems.length;
            poemEl.textContent = poems[currentPoemIndex];
            // 淡入
            poemEl.style.opacity = '0.7';
        }, 800);
    }

    setInterval(cyclePoemQuote, 8000);

})();
