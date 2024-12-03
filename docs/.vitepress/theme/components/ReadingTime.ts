import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'ReadingTime',
  setup() {
    return () => h('div', { class: 'reading-time' }, '阅读时间：约 5 分钟')
  },
})

export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}
