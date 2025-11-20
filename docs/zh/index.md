# ChatTutor

<p align="center">
  <img src="/logo.png" alt="ChatTutor" width="150" height="150" />
</p>

**可视化与交互式 AI 教师**

ChatTutor 是一个配备了电子白板功能的 AI 教师。

传统的聊天机器人主要通过文字与用户交互，这在大多数场景下已经足够。然而，随着近年来大语言模型（LLM）的发展，越来越多的人开始使用 AI 来辅助学习。在真实课堂中，教师拥有许多教学工具——粉笔、电脑、黑板等——这些都能帮助学生更好地理解知识。但对于聊天机器人来说，仅靠文字传递信息是非常有限的，尤其是在 STEM 学科中。

ChatTutor 有效地解决了这一问题。它将现实教育场景中的各种教学工具数字化呈现，让用户能够通过电子设备与之交互。我们赋予了 AI 使用这些教学工具的能力，使其真正成为一个"能动手"的教师。

我们实现了一个响应式的 DSL 语法，模仿了现代前端框架的响应式系统，基于 `@vue/reactivity`，让 Agent 通过响应式变量与用户进行交互，并通过修改响应式变量来控制元素的行为。同时，我们实现了一套数学组件库，并有精美的动画效果。

:::tip 在线体验
ChatTutor 已上线 [https://chattutor.app](https://chattutor.app)，请在设置中配置你的 API 密钥和模型。([https://chattutor.app/settings](https://chattutor.app/settings))
:::

## 演示截图

### 数学画板

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
  <img src="/demo1.png" alt="数学画板演示 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="/demo2.png" alt="数学画板演示 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="/demo3.png" alt="数学画板演示 3" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

### 交互式表单

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
  <img src="/demo6.png" alt="交互式表单演示" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

### 思维导图

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
  <img src="/demo4.png" alt="思维导图演示 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="/demo5.png" alt="思维导图演示 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

## 功能特性

- **数学画板** - 精美的交互式数学可视化，具有流畅的动画和响应式组件
- **交互式表单** - 动态表单，让 AI 能够以直观的方式收集和处理用户输入
- **思维导图支持** - 生成并交互式地展示知识结构的思维导图
- **多 Agent 架构** - 针对不同任务的专业化 Agent：Agent 负责聊天，Painter 负责数学图形
- **响应式 DSL** - 基于 Vue 的响应式系统，实现流畅的实时交互
- **代码页面** (🚧 开发中)
- **物理画板** (🚧 开发中)
- **数字逻辑画板** (🚧 开发中)

## 快速开始

- [快速开始](/zh/getting-started) - 安装和配置指南
- [使用 Nuxt 运行](/zh/run-nuxt) - 使用 Nuxt 运行开发服务器
- [使用 Docker 运行](/zh/run-docker) - 使用 Docker 进行生产部署

## 核心功能所用项目

- [xsai](https://github.com/moeru-ai/xsai) - 轻量级 AI SDK
- [@vue/reactivity](https://github.com/vuejs/core/tree/main/packages/reactivity) - Vue 的响应式系统

## 许可证

MIT 许可证 - 版权 (c) 2025 Acbox，保留所有权利。

