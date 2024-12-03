/// <reference types="vite/client" />
/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vitepress' {
  import type { Component, App } from 'vue'

  export function useData(): {
    frontmatter: { value: Record<string, any> }
    isDark: { value: boolean }
  }

  export function useRoute(): {
    path: string
  }

  export interface Theme {
    Layout: Component
    enhanceApp?: (ctx: { app: App }) => void
  }

  export interface UserConfig {
    base?: string
    title?: string
    description?: string
  }
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '@vue/test-utils' {
  interface DOMWrapper<ElementType> {
    toBeInTheDocument(): void
    toBeVisible(): void
  }
}
