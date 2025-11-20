# ChatTutor

<p align="center">
  <img src="/logo.png" alt="ChatTutor" width="150" height="150" />
</p>

**Visual and Interactive AI Tutor**

ChatTutor is an AI teacher equipped with the ability to use an electronic whiteboard.

Traditional chatbots interact with users primarily through text, which is sufficient in most scenarios. However, with the development of LLM in recent years, more and more people are using AI to assist their learning. In a real-world classroom, teachers have many teaching tools—chalk, computers, blackboards, and other teaching aids—that help students better understand knowledge. But for a chatbot, text can convey very limited information, especially in STEM subjects.

ChatTutor effectively solves this problem by bringing all the teaching tools used in real-world educational scenarios to the forefront, allowing users to interact with them through electronic devices. We've empowered AI with the ability to use these tools, enabling AI to become a truly hands-on teacher.

We've implemented a reactive DSL syntax that mimics the reactive system of modern frontend frameworks, based on `@vue/reactivity`, allowing Agents to interact with users through reactive variables and control element behavior by modifying reactive variables. Additionally, we've built a math component library with beautiful animation effects.

:::tip Online Demo
ChatTutor is available at [https://chattutor.app](https://chattutor.app). Please set your own API key and models in the settings ([https://chattutor.app/settings](https://chattutor.app/settings)).
:::

## Demo Screenshots

### Math Canvas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
  <img src="/demo1.png" alt="Math Canvas Demo 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="/demo2.png" alt="Math Canvas Demo 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="/demo3.png" alt="Math Canvas Demo 3" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

### Interactive Forms

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
  <img src="/demo6.png" alt="Interactive Forms Demo" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

### Mindmap

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">
  <img src="/demo4.png" alt="Mindmap Demo 1" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
  <img src="/demo5.png" alt="Mindmap Demo 2" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
</div>

## Features

- **Math Canvas** - Beautiful interactive mathematical visualizations with smooth animations and reactive components
- **Interactive Forms** - Dynamic forms that allow AI to collect and process user input in an intuitive way
- **Mindmap Support** - Generate and interact with mind maps to visualize knowledge structures
- **Multi-Agent Architecture** - Specialized agents for different tasks: Agent for chat, Painter for mathematical graphs
- **Reactive DSL** - Built on Vue's reactivity system for smooth, real-time interactions
- **Code Page** (🚧 WIP)
- **Physics Canvas** (🚧 WIP)
- **Digital Logic Canvas** (🚧 WIP)

## Quick Start

- [Getting Started](/getting-started) - Installation and configuration guide
- [Running with Nuxt](/run-nuxt) - Run the development server with Nuxt
- [Running with Docker](/run-docker) - Deploy with Docker in production

## Projects Used on Core Features

- [xsai](https://github.com/moeru-ai/xsai) - Extra-small AI SDK
- [@vue/reactivity](https://github.com/vuejs/core/tree/main/packages/reactivity) - Vue's reactive system

## License

MIT License - Copyright (c) 2025 Acbox, All rights reserved.
