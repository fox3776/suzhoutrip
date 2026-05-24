# 苏州周末旅行手册

纯静态 HTML mock 版，适合后续上传到对象存储或静态托管。

## 文件

- `index.html`：页面结构
- `styles.css`：日系手账风视觉和响应式布局
- `app.js`：人物、事件节点、地图联动数据
- `preview-server.mjs`：本地预览服务

## 预览

可以直接双击 `index.html` 打开。更推荐用静态服务预览：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:4173/index.html`。

## 后续补数据

主要改 `app.js` 里的 `travelers`：

- `events[].time`：具体时间
- `events[].title`：关键事件标题
- `events[].detail`：补充说明
- `events[].place`：地点名
- `events[].x` / `events[].y`：头像在 mock 地图上的位置
- `events[].art`：插画占位文案，后续可替换成真实图片路径

## bobo 图片

bobo 的 8 张图已经接入页面，图片路径预留为：

- `assets/bobo-1.png`
- `assets/bobo-2.png`
- `assets/bobo-3.png`
- `assets/bobo-4.png`
- `assets/bobo-5.png`
- `assets/bobo-6.png`
- `assets/bobo-7.png`
- `assets/bobo-8.png`

把切好的图片放到这些路径后，页面会自动显示；文件不存在时会回退到 mock 文案。
