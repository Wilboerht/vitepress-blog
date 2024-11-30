---
title: Vue 3 组合式 API 入门指南
date: 2024-01-20
tags: ['Vue', 'JavaScript', '前端开发']
description: 深入了解 Vue 3 组合式 API 的基础概念和使用方法
---

# Vue 3 组合式 API 入门指南

## 介绍

Vue 3 的组合式 API（Composition API）是一种新的代码组织方式，它允许我们按照逻辑关注点来组织组件代码。本文将介绍其基本概念和使用方法。

## 基础概念

### setup 函数

```vue
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 方法
const increment = () => {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log('组件已挂载')
})
</script>

<template>
  <button @click="increment">点击次数：{{ count }}</button>
</template>
```

### 响应式引用

使用 `ref` 和 `reactive` 创建响应式状态：

```js
import { ref, reactive } from 'vue'

// 使用 ref
const message = ref('Hello')

// 使用 reactive
const state = reactive({
  count: 0,
  message: 'Hello'
})
```

## 实际应用示例

### 待办事项列表

```vue
<script setup>
import { ref } from 'vue'

const todos = ref([])
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }
}

const toggleTodo = (todo) => {
  todo.completed = !todo.completed
}
</script>

<template>
  <div class="todos">
    <input 
      v-model="newTodo" 
      @keyup.enter="addTodo"
      placeholder="添加新待办..."
    >
    <ul>
      <li 
        v-for="todo in todos" 
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @click="toggleTodo(todo)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
```

## 最佳实践

1. **按逻辑关注点组织代码**
```js
// 用户相关逻辑
function useUser() {
  const user = ref(null)
  const loading = ref(false)

  const fetchUser = async (id) => {
    loading.value = true
    try {
      user.value = await api.getUser(id)
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    fetchUser
  }
}
```

2. **使用组合式函数复用逻辑**
```js
// 鼠标位置跟踪
function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
```

## 总结

组合式 API 提供了更灵活的代码组织方式，特别适合处理复杂的组件逻辑。通过合理使用 `ref`、`reactive` 和各种组合式函数，我们可以写出更易维护和复用的代码。

## 相关资源

- [Vue 3 官方文档](https://v3.vuejs.org/)
- [组合式 API 手册](https://v3.vuejs.org/api/composition-api.html)
- [Vue 3 示例项目](https://github.com/vuejs/vue-next-examples)
