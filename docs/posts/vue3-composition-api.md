---
title: Getting Started with Vue 3 Composition API
date: 2024-01-20
tags: ['Vue', 'JavaScript', 'Frontend Development']
description: A comprehensive guide to understanding and using Vue 3's Composition API
---

# Getting Started with Vue 3 Composition API

## Introduction

Vue 3's Composition API offers a new way to organize component code by logical concerns. This article will introduce its basic concepts and usage patterns.

## Basic Concepts

### The setup Function

```vue
<script setup>
import { ref, onMounted } from 'vue'

// Reactive state
const count = ref(0)

// Methods
const increment = () => {
  count.value++
}

// Lifecycle hooks
onMounted(() => {
  console.log('Component mounted')
})
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

### Reactive References

Creating reactive state using `ref` and `reactive`:

```js
import { ref, reactive } from 'vue'

// Using ref
const message = ref('Hello')

// Using reactive
const state = reactive({
  count: 0,
  message: 'Hello'
})
```

## Practical Example

### Todo List

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
      placeholder="Add new todo..."
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

## Best Practices

1. **Organize Code by Logical Concerns**
```js
// User-related logic
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

2. **Reuse Logic with Composables**
```js
// Mouse position tracking
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

## Summary

The Composition API provides a more flexible way to organize code, particularly suitable for complex component logic. By effectively using `ref`, `reactive`, and various composables, we can write more maintainable and reusable code.

## Resources

- [Vue 3 Official Documentation](https://v3.vuejs.org/)
- [Composition API Reference](https://v3.vuejs.org/api/composition-api.html)
- [Vue 3 Example Projects](https://github.com/vuejs/vue-next-examples)
