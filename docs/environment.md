# Environment Configuration

This guide covers all environment variables used in ChatTutor.

## Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Edit the `.env` file and configure the following variables.

## Required Variables

### API Configuration

#### `API_KEY`
- **Type**: String
- **Required**: Yes
- **Description**: The API key for your LLM service provider

```bash
API_KEY="your-api-key-here"
```

#### `BASE_URL`
- **Type**: String (URL)
- **Required**: Yes
- **Description**: The base URL for the LLM API endpoint

```bash
BASE_URL="https://api.anthropic.com"
```

#### `AGENT_MODEL`
- **Type**: String
- **Required**: Yes
- **Description**: The model to use for the conversational agent
- **Recommended**: `claude-sonnet-4.5` or similar powerful models

```bash
AGENT_MODEL="claude-sonnet-4.5"
```

### Database Configuration

#### `DATABASE_URL`
- **Type**: String (Connection URL)
- **Required**: Yes
- **Description**: PostgreSQL database connection string
- **Format**: `postgresql://username:password@host:port/database`

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/chattutor"
```

## Optional Variables

### Specialized Models

#### `PAINTER_MODEL`
- **Type**: String
- **Required**: No
- **Default**: Value of `AGENT_MODEL`
- **Description**: The model to use for the Painter agent (specialized in drawing mathematical graphs)
- **Recommended**: `claude-sonnet-4.5` for best mathematical visualization results

```bash
PAINTER_MODEL="claude-sonnet-4.5"
```

:::tip
The Painter agent specializes in creating mathematical visualizations. Using a more capable model like `claude-sonnet-4.5` significantly improves the quality of generated graphs and animations.
:::

#### `TITLE_MODEL`
- **Type**: String
- **Required**: No
- **Default**: Value of `AGENT_MODEL`
- **Description**: The model to use for generating chat conversation titles

```bash
TITLE_MODEL="claude-sonnet-4.5"
```

### Image Upload Configuration

:::warning
If these variables are not configured, image upload functionality will be unavailable. The application will continue to work, but users won't be able to upload images in their conversations.
:::

#### `OSS_ENDPOINT`
- **Type**: String (URL)
- **Required**: No
- **Description**: Object Storage Service (S3-compatible) endpoint URL

```bash
OSS_ENDPOINT="https://s3.amazonaws.com"
```

#### `OSS_ACCESS_KEY`
- **Type**: String
- **Required**: No
- **Description**: Access key for your object storage service

```bash
OSS_ACCESS_KEY="your-access-key"
```

#### `OSS_SECRET_KEY`
- **Type**: String
- **Required**: No
- **Description**: Secret key for your object storage service

```bash
OSS_SECRET_KEY="your-secret-key"
```

#### `OSS_BUCKET`
- **Type**: String
- **Required**: No
- **Description**: The bucket name where images will be stored

```bash
OSS_BUCKET="chattutor-images"
```

#### `OSS_REGION`
- **Type**: String
- **Required**: No
- **Description**: The region of your object storage service (provider-dependent)

```bash
OSS_REGION="us-east-1"
```

## Multi-Agent Architecture

ChatTutor uses a **multi-agent architecture** to provide specialized capabilities:

- **Agent**: The primary conversational agent that interacts with users, understands context, and coordinates tasks
- **Painter**: An expert agent specialized in drawing mathematical graphs, creating visualizations, and generating interactive canvas content
- **Title Generator**: Generates concise, relevant titles for chat conversations

This architecture allows different models to be used for different tasks, optimizing both performance and cost.

## Example Configuration

Here's a complete example `.env` file:

```bash
# Required - LLM API Configuration
API_KEY="sk-ant-your-api-key-here"
BASE_URL="https://api.anthropic.com"
AGENT_MODEL="claude-sonnet-4.5"

# Required - Database
DATABASE_URL="postgresql://chattutor:password@localhost:5432/chattutor"

# Optional - Specialized Models
PAINTER_MODEL="claude-sonnet-4.5"
TITLE_MODEL="claude-sonnet-4.5"

# Optional - Image Upload (S3-compatible storage)
OSS_ENDPOINT="https://s3.amazonaws.com"
OSS_ACCESS_KEY="your-access-key"
OSS_SECRET_KEY="your-secret-key"
OSS_BUCKET="chattutor-images"
OSS_REGION="us-east-1"
```

## Security Best Practices

1. **Never commit `.env` files to version control**
   - The `.env` file is already in `.gitignore`
   - Use `.env.example` as a template without sensitive data

2. **Use strong credentials**
   - Generate strong passwords for database access
   - Rotate API keys regularly

3. **Restrict access**
   - Limit database user permissions to only what's needed
   - Use separate credentials for development and production

4. **Environment-specific configurations**
   - Use different API keys for development and production
   - Consider using different database instances

## Troubleshooting

### API Connection Issues

If you encounter API connection errors:
- Verify `API_KEY` is correct and active
- Ensure `BASE_URL` matches your provider's endpoint
- Check if your API key has sufficient credits/quota

### Database Connection Issues

If the application can't connect to the database:
- Verify PostgreSQL is running
- Check the `DATABASE_URL` format is correct
- Ensure the database exists and user has proper permissions
- Test the connection manually:
  ```bash
  psql $DATABASE_URL
  ```

### Image Upload Not Working

If image uploads fail:
- Verify all OSS variables are configured
- Check bucket permissions allow write access
- Ensure the bucket exists in the specified region
- Test credentials with your storage provider's CLI tools

## Next Steps

- [Running with Nuxt](/run-nuxt) - Start the development server
- [Running with Docker](/run-docker) - Deploy with Docker
- [Getting Started](/getting-started) - Back to setup guide

