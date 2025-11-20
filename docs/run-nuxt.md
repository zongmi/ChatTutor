# Running with Nuxt

This guide covers how to run ChatTutor in development mode using Nuxt.

## Prerequisites

Make sure you have:
- Completed the [Getting Started](/getting-started) guide
- Configured your `.env` file
- A running PostgreSQL database

## Development Server

Start the Nuxt development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Database Setup

Before running the application for the first time, you need to set up the database schema.

### Generate Migration

```bash
pnpm db:generate
```

### Push Schema to Database

```bash
pnpm db:push
```

### Studio (Optional)

To view and manage your database with Drizzle Studio:

```bash
pnpm db:studio
```

## Development Workflow

### Hot Module Replacement

Nuxt provides hot module replacement (HMR) out of the box. Your changes will be reflected immediately in the browser without a full page reload.

### TypeScript Support

The project is fully typed with TypeScript. Your IDE should provide intelligent code completion and type checking.

### Project Structure

```
ChatTutor/
├── app/                    # Nuxt application
│   ├── components/        # Vue components
│   ├── composables/       # Composable functions
│   ├── pages/            # Route pages
│   └── utils/            # Utility functions
├── packages/             # Shared packages
│   ├── agent/           # AI agent implementation
│   ├── canvas/          # Canvas rendering
│   └── ...
├── packages-dsl/        # DSL implementation
│   ├── renderer-core/   # Core renderer
│   └── renderer-runtime/# Runtime renderer
├── server/              # API routes
└── shared/              # Shared types and utilities
```

## Building for Production

To create a production build:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 pnpm dev
```

### Database Connection Issues

Verify your `DATABASE_URL` is correct:

```bash
# Example PostgreSQL connection string
DATABASE_URL="postgresql://user:password@localhost:5432/chattutor"
```

### Module Not Found Errors

Clear the cache and reinstall dependencies:

```bash
rm -rf node_modules .nuxt
pnpm install
```

## Next Steps

- [Docker Deployment](/run-docker) - Deploy with Docker for production

