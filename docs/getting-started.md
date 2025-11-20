# Getting Started

This guide will help you get ChatTutor up and running on your system.

## Prerequisites

- Node.js >= 20
- Docker (for Docker deployment)
- PostgreSQL database

## Installation

Clone the repository:

```bash
git clone https://github.com/sheepbox8646/ChatTutor.git
cd ChatTutor
```

Install dependencies:

```bash
pnpm install
```

## Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file and configure your environment variables. For detailed information about all available variables, see the [Environment Configuration](/environment) guide.

### Quick Configuration

At minimum, you need to configure:
- **`API_KEY`** - Your LLM service API key
- **`BASE_URL`** - LLM API endpoint
- **`AGENT_MODEL`** - Model for the conversational agent
- **`DATABASE_URL`** - PostgreSQL connection string

For complete configuration options including specialized models and image upload settings, visit the [Environment Configuration](/environment) page.

## Next Steps

Once you've configured your environment, you can:

- [Run with Nuxt](/run-nuxt) - Start the development server
- [Run with Docker](/run-docker) - Deploy with Docker
