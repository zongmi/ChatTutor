# 使用 Nuxt 运行

本指南介绍如何使用 Nuxt 在开发模式下运行 ChatTutor。

## 前提条件

确保你已经：
- 完成了[快速开始](/zh/getting-started)指南
- 配置好了 `.env` 文件
- 运行了 PostgreSQL 数据库

## 开发服务器

启动 Nuxt 开发服务器：

```bash
pnpm dev
```

应用程序将在 `http://localhost:3000` 上运行。

## 数据库设置

在第一次运行应用程序之前，你需要设置数据库架构。

### 生成迁移

```bash
pnpm db:generate
```

### 推送架构到数据库

```bash
pnpm db:push
```

### Studio（可选）

使用 Drizzle Studio 查看和管理你的数据库：

```bash
pnpm db:studio
```

## 开发工作流程

### 热模块替换

Nuxt 提供开箱即用的热模块替换（HMR）。你的更改将立即在浏览器中反映出来，无需完全重新加载页面。

### TypeScript 支持

该项目完全使用 TypeScript 类型化。你的 IDE 应该提供智能代码补全和类型检查。

### 项目结构

```
ChatTutor/
├── app/                    # Nuxt 应用程序
│   ├── components/        # Vue 组件
│   ├── composables/       # 可组合函数
│   ├── pages/            # 路由页面
│   └── utils/            # 工具函数
├── packages/             # 共享包
│   ├── agent/           # AI Agent 实现
│   ├── canvas/          # 画布渲染
│   └── ...
├── packages-dsl/        # DSL 实现
│   ├── renderer-core/   # 核心渲染器
│   └── renderer-runtime/# 运行时渲染器
├── server/              # API 路由
└── shared/              # 共享类型和工具
```

## 生产构建

创建生产构建：

```bash
pnpm build
```

本地预览生产构建：

```bash
pnpm preview
```

## 故障排除

### 端口已被占用

如果端口 3000 已被占用，你可以指定不同的端口：

```bash
PORT=3001 pnpm dev
```

### 数据库连接问题

验证你的 `DATABASE_URL` 是否正确：

```bash
# PostgreSQL 连接字符串示例
DATABASE_URL="postgresql://user:password@localhost:5432/chattutor"
```

### 找不到模块错误

清除缓存并重新安装依赖：

```bash
rm -rf node_modules .nuxt
pnpm install
```

## 下一步

- [Docker 部署](/zh/run-docker) - 使用 Docker 进行生产部署

