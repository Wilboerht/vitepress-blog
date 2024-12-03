<!-- Comments.vue -->
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

interface GiscusMessage {
  giscus: {
    setConfig: {
      theme?: string
      term?: string
    }
  }
}

const { frontmatter, isDark } = useData()
const route = useRoute()
const commentsRef = ref<HTMLElement>()

const updateGiscusTheme = (theme: string) => {
  const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
  if (!iframe) return
  const message: GiscusMessage = {
    giscus: {
      setConfig: { theme },
    },
  }
  iframe.contentWindow?.postMessage(message, 'https://giscus.app')
}

watch(
  () => isDark.value,
  (newValue) => {
    updateGiscusTheme(newValue ? 'dark' : 'light')
  }
)

onMounted(() => {
  // Only load comments on post pages
  if (frontmatter.value.layout !== 'post') return

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'wilboerht/vitepress-blog')
  script.setAttribute('data-repo-id', 'R_kgDOKuLqyg')
  script.setAttribute('data-category', 'Comments')
  script.setAttribute('data-category-id', 'DIC_kwDOKuLqys4CbwYH')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.crossOrigin = 'anonymous'
  script.async = true

  // Clean up previous comments if they exist
  if (commentsRef.value) {
    commentsRef.value.innerHTML = ''
    commentsRef.value.appendChild(script)
  }
})

// Reload comments when route changes
watch(
  () => route.path,
  () => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    if (!iframe) return
    const message: GiscusMessage = {
      giscus: {
        setConfig: { term: route.path },
      },
    }
    iframe.contentWindow?.postMessage(message, 'https://giscus.app')
  }
)
</script>

<template>
  <div ref="commentsRef" class="comments"></div>
</template>

<style scoped>
.comments {
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
