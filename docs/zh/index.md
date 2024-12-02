---
layout: home
title: 我的博客
date: 2024-01-25
hero:
  name: 我的博客
  text: 使用 VitePress 搭建的个人博客
  tagline: 分享技术，记录生活
  image:
    src: /images/common/hero-background.png
    alt: VitePress 博客
  actions:
    - theme: brand
      text: 开始阅读
      link: /zh/posts/
    - theme: alt
      text: 关于我
      link: /zh/about

features:
  - icon: 📝
    title: 技术博客
    details: 分享技术经验和学习心得
    link: /zh/posts/tech/
  - icon: 🌟
    title: 生活随笔
    details: 记录生活点滴，分享个人感悟
    link: /zh/posts/life/
  - icon: 🎯
    title: 项目展示
    details: 展示个人项目和作品集
    link: /zh/posts/tech/
---

<div class="custom-layout">
  <div class="theme-background"></div>
</div>

<style>
.custom-layout {
  position: relative;
  min-height: 100vh;
}

.theme-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
}
</style>
