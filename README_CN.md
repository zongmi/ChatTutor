<div align="right">
  <span>[<a href="./README.md">English</a>]<span>
  </span>[<a href="./README_CN.md">简体中文</a>]</span>
</div>  

<div align="center">

  <img src="./public/logo.png" alt="ChatTutor" width="150" height="150" />

  <h1>ChatTutor</h1>

  <p>可视化与交互式 AI 教师</p>
  
  <div align="center">
    <img src="https://img.shields.io/github/package-json/v/sheepbox8646/ChatTutor" alt="Version" />
    <img src="https://img.shields.io/github/license/sheepbox8646/ChatTutor" alt="License" />
    <img src="https://img.shields.io/github/stars/sheepbox8646/ChatTutor?style=social" alt="Stars" />
    <img src="https://img.shields.io/github/forks/sheepbox8646/ChatTutor?style=social" alt="Forks" />
    <img src="https://img.shields.io/github/last-commit/sheepbox8646/ChatTutor" alt="Last Commit" />
    <img src="https://img.shields.io/github/issues/sheepbox8646/ChatTutor" alt="Issues" />
  </div>
  
</div>

---

> [!NOTE]
>
> 在线网站：ChatTutor 已上线 [https://chattutor.app](https://chattutor.app)，请在设置中配置你的 API 密钥和模型。([https://chattutor.app/settings](https://chattutor.app/settings))

ChatTutor 是一个配备了电子白板功能的 AI 教师。

传统的聊天机器人主要通过文字与用户交互，这在大多数场景下已经足够。然而，随着近年来大语言模型（LLM）的发展，越来越多的人开始使用 AI 来辅助学习。在真实课堂中，教师拥有许多教学工具——粉笔、电脑、黑板等——这些都能帮助学生更好地理解知识。但对于聊天机器人来说，仅靠文字传递信息是非常有限的，尤其是在 STEM 学科中。

ChatTutor 有效地解决了这一问题。它将现实教育场景中的各种教学工具数字化呈现，让用户能够通过电子设备与之交互。我们赋予了 AI 使用这些教学工具的能力，使其真正成为一个“能动手”的教师。

我们实现了一个响应式的DSL语法，模仿了现代前端框架的响应式系统，基于`@vue/reactivity`，让Agent通过响应式变量与用户进行交互，并通过修改响应式变量来控制元素的行为。同时，我们实现了一套数学组件库，并有精美的动画效果。

> [!NOTE]
>
> 关于DSL的实现，请参考`packages-dsl`目录；关于组件库的实现，请参考`libs`目录。

## Features

##### 数学画板
<table>
  <tr>
    <td>
      <img src="./public/demo1.png" alt="Math Canvas" width="100%" />
    </td>
    <td>
      <img src="./public/demo2.png" alt="Math Canvas" width="100%" />
    </td>
  </tr>
  <tr>
    <td>
      <img src="./public/demo3.png" alt="Math Canvas" width="100%" />
    </td>
  </tr>
</table>

##### 交互式表单
<table>
  <tr>
    <td>
      <img src="./public/demo6.png" alt="Interactive Forms" width="100%" />
    </td>
  </tr>
</table>

##### 代码页面 (🚧 WIP)

##### 思维导图
<table>
  <tr>
    <td>
      <img src="./public/demo4.png" alt="Mindmap" width="100%" />
    </td>
    <td>
      <img src="./public/demo5.png" alt="Mindmap" width="100%" />
    </td>
  </tr>
</table>

##### 物理画板 (🚧 WIP)

##### 数字逻辑画板 (🚧 WIP)

##### AI 为用户自动生成题目与解答 (🚧 WIP)


## Roadmap
请参考我们的 [v0.1 路线图](https://github.com/sheepbox8646/ChatTutor/issues/1) 以了解详细计划。

## 快速开始

### 环境要求

- Node.js >= 20
- Docker

### 环境变量配置

```bash
cp .env.example .env
```

在 `.env` 文件中填写你的配置信息：

> [!NOTE]
>
> ChatTutor 采用了 **多 Agent 架构**，其中 ***Agent*** 代表与用户交互的 Agent，而 ***Painter*** 则是一个专门用于绘制数学图形的专家 Agent。

- `API_KEY`: 所使用的 API 密钥。
- `BASE_URL`: 接口基础地址。
- `AGENT_MODEL`: 用于 Agent 的模型。
- `PAINTER_MODEL`: 用于 Painter 的模型。建议使用 `claude-sonnet-4.5` (可选，默认与 `AGENT_MODEL` 相同)
- `TITLE_MODEL`: 用于生成聊天标题的模型。(可选，默认与 `AGENT_MODEL` 相同)
- `DATABASE_URL`: Postgres 数据库连接地址。

> [!WARNING]
>
> 如果你没有设置这些环境变量，图像将不可用。
- `OSS_ENDPOINT`: 对象存储服务的端点。
- `OSS_ACCESS_KEY`: 对象存储服务的访问密钥。
- `OSS_SECRET_KEY`: 对象存储服务的秘密密钥。
- `OSS_BUCKET`: 对象存储服务的桶。
- `OSS_REGION`: 对象存储服务的区域。(可选)

### 运行

```bash
git clone https://github.com/sheepbox8646/ChatTutor.git
cd ChatTutor
docker compose up -d
```

## 核心功能所用项目

- [xsai](https://github.com/moeru-ai/xsai): 轻量级 AI SDK。
- [@vue/reactivity](https://github.com/vuejs/core/tree/main/packages/reactivity): Vue 的响应式系统。

## 赞助商
我们的赞助商列表如下（排名不分先后）：

- [AiHubMix](https://aihubmix.com/): 开放模型API平台。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sheepbox8646/ChatTutor&type=date&legend=top-left)](https://www.star-history.com/#sheepbox8646/ChatTutor&type=date&legend=top-left)

---
**AGPL v3 License**

*版权  (c) 2025 Acbox, 保留所有权利。*