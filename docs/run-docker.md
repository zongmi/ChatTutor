# Running with Docker

Deploy ChatTutor using Docker for production environments.

## Prerequisites

- Docker and Docker Compose installed
- Configured `.env` file (see [Environment Configuration](/environment))

## Quick Start

```bash
git clone https://github.com/sheepbox8646/ChatTutor.git
cd ChatTutor
docker compose up -d
```

The application will be available at `http://localhost:3000`.

## Basic Commands

Start services:
```bash
docker compose up -d
```

View logs:
```bash
docker compose logs -f
```

Stop services:
```bash
docker compose down
```

Rebuild and restart:
```bash
docker compose up -d --build
```

## Next Steps

- [Environment Configuration](/environment) - Configure your environment variables

