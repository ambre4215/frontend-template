import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginPlaywright from 'eslint-plugin-playwright'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import oxlint from 'eslint-plugin-oxlint' // 统一使用这个名称

export default defineConfig([

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
    languageOptions: {
      globals: {
        ...pluginVitest.environments.env.globals, // 2026 版推荐显式注入全局变量
      },
    },
  },

  skipFormatting,

  oxlint.configs['flat/recommended'], 
])
