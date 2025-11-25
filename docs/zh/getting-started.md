# 快速开始

本指南将帮助你在系统上运行 ChatTutor。

## 环境要求

- Node.js >= 20
- Docker（用于 Docker 部署）
- PostgreSQL 数据库

## 安装

克隆仓库：

```bash
git clone https://github.com/HugeCatLab/ChatTutor.git
cd ChatTutor
```

安装依赖：

```bash
pnpm install
```

## 环境变量配置

复制示例环境变量文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件并配置你的环境变量。关于所有可用变量的详细信息，请参阅[环境变量配置](/zh/environment)指南。

### 快速配置

至少需要配置以下变量：
- **`API_KEY`** - 你的 LLM 服务 API 密钥
- **`BASE_URL`** - LLM API 端点
- **`AGENT_MODEL`** - 对话 Agent 使用的模型
- **`DATABASE_URL`** - PostgreSQL 连接字符串

关于完整的配置选项（包括专业化模型和图片上传设置），请访问[环境变量配置](/zh/environment)页面。

## 下一步

配置好环境后，你可以：

- [使用 Nuxt 运行](/zh/run-nuxt) - 启动开发服务器
- [使用 Docker 运行](/zh/run-docker) - 使用 Docker 部署

