# 王凯 · Personal Homepage

遵循 PRD v3.0 的 Next.js 个人主页系统。前台围绕 HR 的 3 秒/30 秒浏览场景设计，包含个人简介、职业经历、项目详情、打印样式、主题切换与 SEO；仓库同时提供 Prisma 数据模型及后台入口。

## 快速开始

```bash
npm install
cp .env.example .env
npm run dev
```

访问 `http://localhost:3000`。尚未提供的邮箱、CV、学校及社交链接在配置前不会显示或使用虚构值。

仓库根目录提供 `index.html` 静态预览入口，供不执行 Next.js 构建、仅识别根目录静态文件的部署预览器使用。

## 部署入口

- 静态预览入口：`/index.html`
- Next.js 入口：`src/app/page.tsx`
- 部署分支：`workspace1`

根目录不放置 `README.md`，避免工作区预览器优先渲染 Markdown 项目说明。开发说明统一存放在本文件。

## 常用命令

```bash
npm run typecheck
npm run lint
npm run build
npm run db:generate
```
