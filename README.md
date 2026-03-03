# 劉禹彤 — 個人頁面

一個以 **簡約古風** 為設計理念的單頁個人網站，融合了水墨山水、朱紅印章、飄落花瓣等中國傳統美學元素，呈現典雅的視覺體驗。

---

## 🌐 Live Preview

👉 **[點此查看線上 Demo](https://liouyutong.github.io/0303_hw1/)**

或用任意現代瀏覽器開啟 `index.html` 在本地預覽。

---

## ✨ Features

- **即時動態時鐘** — 每秒更新的時間顯示，搭配中文日期格式（如「二〇二六年 三月 三日 星期二」）
- **水墨暈染背景** — 三層水墨暈染動畫緩慢浮動，營造宣紙上的水墨效果
- **飄落花瓣動畫** — 隨機生成的粉色花瓣從畫面頂端緩緩飄落
- **古風印章設計** — 朱紅色方印搭配微傾斜角度，還原傳統篆刻風格
- **詩句自動輪播** — 頁面底部每 8 秒切換一句經典古詩名句，淡入淡出過渡
- **遠山水墨剪影** — SVG 繪製的山巒輪廓作為背景裝飾層
- **響應式設計** — 自適應手機與桌面裝置的不同螢幕尺寸
- **玻璃擬態卡片** — 半透明毛玻璃效果卡片，搭配懸停浮起互動

---

## 🎨 Design System

| Element | Value |
|---------|-------|
| Background | `#f5f0e8` (宣紙米白) |
| Primary Text | `#2c2c2c` (墨色) |
| Accent Color | `#c45c4a` (朱紅) |
| Gold Accent | `#b8963e` (古銅金) |
| Status Green | `#6b7f5e` (竹綠) |
| Display Font | Ma Shan Zheng (馬善政書法體) |
| Serif Font | Noto Serif TC (思源宋體) |

---

## 🛠️ Tech Stack

- **HTML5** — 語意化頁面結構，SEO 友善
- **Vanilla CSS3** — 自訂屬性、關鍵幀動畫、backdrop-filter 毛玻璃效果
- **Vanilla JavaScript** — 無框架或外部依賴，純原生實現
- **Google Fonts** — Ma Shan Zheng、Noto Serif TC 字型載入
- **SVG** — 內嵌 SVG 繪製山水裝飾與波浪分隔線

---

## 🚀 Getting Started

不需要任何建置步驟，直接在瀏覽器中開啟即可：

```bash
# 方法一：直接用瀏覽器開啟
open index.html

# 方法二：使用 VS Code Live Server
# 安裝 Live Server 擴充套件後，右鍵 index.html → Open with Live Server
```

---

## 📁 File Structure

```
L1/
├── index.html   # 頁面結構與語意化 HTML
├── style.css    # 所有樣式：佈局、字型、動畫、毛玻璃效果
├── script.js    # 即時時鐘邏輯 + 花瓣動畫 + 詩句輪播
└── README.md    # 本文件
```

---

## 📝 Development Notes

本專案使用 **Gemini** AI 輔助開發，主要步驟如下：

1. 根據參考圖片的佈局（中央卡片 + 名字 + 時鐘 + 狀態指示器），重新以「簡約古風」風格詮釋
2. 建立 `index.html` 頁面結構，包含水墨背景、印章、時鐘、詩句等區塊
3. 編寫 `style.css`，設計古風配色與動畫系統（水墨暈染、花瓣飄落、印章彈入）
4. 實作 `script.js`，完成即時時鐘（中文日期格式）、花瓣生成器、詩句輪播功能
5. 瀏覽器預覽確認效果後，推送至 GitHub 倉庫
