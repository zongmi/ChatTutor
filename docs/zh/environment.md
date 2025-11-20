# 环境变量配置

本指南介绍 ChatTutor 中使用的所有环境变量。

## 设置

复制示例环境变量文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件并配置以下变量。

## 必需变量

### API 配置

#### `API_KEY`
- **类型**: 字符串
- **必需**: 是
- **描述**: LLM 服务提供商的 API 密钥

```bash
API_KEY="your-api-key-here"
```

#### `BASE_URL`
- **类型**: 字符串（URL）
- **必需**: 是
- **描述**: LLM API 端点的基础 URL

```bash
BASE_URL="https://api.anthropic.com"
```

#### `AGENT_MODEL`
- **类型**: 字符串
- **必需**: 是
- **描述**: 用于对话 Agent 的模型
- **推荐**: `claude-sonnet-4.5` 或类似的强大模型

```bash
AGENT_MODEL="claude-sonnet-4.5"
```

### 数据库配置

#### `DATABASE_URL`
- **类型**: 字符串（连接 URL）
- **必需**: 是
- **描述**: PostgreSQL 数据库连接字符串
- **格式**: `postgresql://username:password@host:port/database`

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/chattutor"
```

## 可选变量

### 专业化模型

#### `PAINTER_MODEL`
- **类型**: 字符串
- **必需**: 否
- **默认值**: `AGENT_MODEL` 的值
- **描述**: 用于 Painter Agent 的模型（专门用于绘制数学图形）
- **推荐**: `claude-sonnet-4.5` 以获得最佳数学可视化效果

```bash
PAINTER_MODEL="claude-sonnet-4.5"
```

:::tip
Painter Agent 专门用于创建数学可视化。使用更强大的模型如 `claude-sonnet-4.5` 可以显著提高生成的图形和动画的质量。
:::

#### `TITLE_MODEL`
- **类型**: 字符串
- **必需**: 否
- **默认值**: `AGENT_MODEL` 的值
- **描述**: 用于生成聊天会话标题的模型

```bash
TITLE_MODEL="claude-sonnet-4.5"
```

### 图片上传配置

:::warning
如果未配置这些变量，图片上传功能将不可用。应用程序将继续运行，但用户无法在对话中上传图片。
:::

#### `OSS_ENDPOINT`
- **类型**: 字符串（URL）
- **必需**: 否
- **描述**: 对象存储服务（S3 兼容）端点 URL

```bash
OSS_ENDPOINT="https://s3.amazonaws.com"
```

#### `OSS_ACCESS_KEY`
- **类型**: 字符串
- **必需**: 否
- **描述**: 对象存储服务的访问密钥

```bash
OSS_ACCESS_KEY="your-access-key"
```

#### `OSS_SECRET_KEY`
- **类型**: 字符串
- **必需**: 否
- **描述**: 对象存储服务的秘密密钥

```bash
OSS_SECRET_KEY="your-secret-key"
```

#### `OSS_BUCKET`
- **类型**: 字符串
- **必需**: 否
- **描述**: 存储图片的存储桶名称

```bash
OSS_BUCKET="chattutor-images"
```

#### `OSS_REGION`
- **类型**: 字符串
- **必需**: 否
- **描述**: 对象存储服务的区域（取决于提供商）

```bash
OSS_REGION="us-east-1"
```

## 多 Agent 架构

ChatTutor 使用 **多 Agent 架构** 提供专业化能力：

- **Agent**：主要的对话 Agent，与用户交互，理解上下文并协调任务
- **Painter**：专门用于绘制数学图形、创建可视化和生成交互式画布内容的专家 Agent
- **标题生成器**：为聊天会话生成简洁、相关的标题

这种架构允许不同的模型用于不同的任务，优化性能和成本。

## 配置示例

以下是完整的 `.env` 文件示例：

```bash
# 必需 - LLM API 配置
API_KEY="sk-ant-your-api-key-here"
BASE_URL="https://api.anthropic.com"
AGENT_MODEL="claude-sonnet-4.5"

# 必需 - 数据库
DATABASE_URL="postgresql://chattutor:password@localhost:5432/chattutor"

# 可选 - 专业化模型
PAINTER_MODEL="claude-sonnet-4.5"
TITLE_MODEL="claude-sonnet-4.5"

# 可选 - 图片上传（S3 兼容存储）
OSS_ENDPOINT="https://s3.amazonaws.com"
OSS_ACCESS_KEY="your-access-key"
OSS_SECRET_KEY="your-secret-key"
OSS_BUCKET="chattutor-images"
OSS_REGION="us-east-1"
```

## 安全最佳实践

1. **永远不要将 `.env` 文件提交到版本控制**
   - `.env` 文件已在 `.gitignore` 中
   - 使用 `.env.example` 作为模板，不包含敏感数据

2. **使用强凭证**
   - 为数据库访问生成强密码
   - 定期轮换 API 密钥

3. **限制访问**
   - 将数据库用户权限限制为仅所需的权限
   - 开发和生产使用不同的凭证

4. **环境特定配置**
   - 开发和生产使用不同的 API 密钥
   - 考虑使用不同的数据库实例

## 故障排除

### API 连接问题

如果遇到 API 连接错误：
- 验证 `API_KEY` 正确且有效
- 确保 `BASE_URL` 与提供商的端点匹配
- 检查 API 密钥是否有足够的额度/配额

### 数据库连接问题

如果应用程序无法连接到数据库：
- 验证 PostgreSQL 是否正在运行
- 检查 `DATABASE_URL` 格式是否正确
- 确保数据库存在且用户具有适当的权限
- 手动测试连接：
  ```bash
  psql $DATABASE_URL
  ```

### 图片上传无法工作

如果图片上传失败：
- 验证所有 OSS 变量是否已配置
- 检查存储桶权限是否允许写入访问
- 确保存储桶在指定区域存在
- 使用存储提供商的 CLI 工具测试凭证

## 下一步

- [使用 Nuxt 运行](/zh/run-nuxt) - 启动开发服务器
- [使用 Docker 运行](/zh/run-docker) - 使用 Docker 部署
- [快速开始](/zh/getting-started) - 返回设置指南

