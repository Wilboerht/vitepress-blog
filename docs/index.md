---
layout: home
title: My Blog
hero:
  name: My Blog
  text: A Personal Blog Built with VitePress
  tagline: Share Technology, Record Life
  image:
    src: /images/common/hero-background.png
    alt: VitePress Blog
  actions:
    - theme: brand
      text: Get Started
      link: /posts/
    - theme: alt
      text: About Me
      link: /about

features:
  - icon: 📝
    title: Tech Blog
    details: Share technical experience and learning insights
    link: /posts/tech/
  - icon: 🌟
    title: Life Notes
    details: Record life moments and personal thoughts
    link: /posts/life/
  - icon: 🎯
    title: Projects
    details: Showcase personal projects and portfolio
    link: /posts/tech/
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
