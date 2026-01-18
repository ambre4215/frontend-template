# frontend-template

Vue 3 + Vite + TailwindCSS 前端项目模板

## 推荐的 IDE 配置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (请禁用 Vetur 插件)

## 推荐的浏览器配置

- 基于 Chromium 的浏览器 (Chrome, Edge, Brave 等):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [在 Chrome DevTools 中开启自定义对象格式化](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [在 Firefox DevTools 中开启自定义对象格式化](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 自定义配置

参考 [Vite 配置文档](https://cn.vite.dev/config/)

## 项目设置

```sh
pnpm install
```

### 开发环境编译和热重载

```sh
pnpm dev
```

### 生产环境编译和压缩

```sh
pnpm build
```

### 使用 [Vitest](https://cn.vitest.dev/) 运行单元测试

```sh
pnpm test:unit
```

### 使用 [Playwright](https://playwright.dev) 运行端到端测试

```sh
# 首次运行需要安装浏览器
npx playwright install

# 在 CI 环境测试时,必须先构建项目
pnpm build

# 运行端到端测试
pnpm test:e2e
# 仅在 Chromium 上运行测试
pnpm test:e2e --project=chromium
# 运行指定文件的测试
pnpm test:e2e tests/example.spec.ts
# 在调试模式下运行测试
pnpm test:e2e --debug
```

### 使用 [ESLint](https://eslint.org/) 进行代码检查

```sh
pnpm lint
```

## 技术栈

- **框架**: Vue 3.5
- **构建工具**: Vite 7.3
- **CSS 框架**: TailwindCSS 4.1
- **状态管理**: Pinia 3.0
- **路由**: Vue Router 4.6
- **包管理器**: pnpm
- **单元测试**: Vitest
- **E2E 测试**: Playwright
- **代码质量**: ESLint + Prettier + Oxlint
