# 使用 Docker 运行

使用 Docker 在生产环境中部署 ChatTutor。

## 前提条件

- 安装 Docker 和 Docker Compose
- 配置好 `.env` 文件（参见[环境变量配置](/zh/environment)）

## 快速开始

```bash
git clone https://github.com/HugeCatLab/ChatTutor.git
cd ChatTutor
docker compose up -d
```

应用程序将在 `http://localhost:3000` 上运行。

## 基本命令

启动服务：
```bash
docker compose up -d
```

查看日志：
```bash
docker compose logs -f
```

停止服务：
```bash
docker compose down
```

重建并重启：
```bash
docker compose up -d --build
```

## 下一步

- [环境变量配置](/zh/environment) - 配置环境变量

