This repository contains the working files for my portfolio website. It is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Local Development (Without Docker)

First, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker Development

Run the development server in a Docker container with hot-reload:

```bash
# Using Docker Compose (Recommended)
docker-compose up dev

# Or using Docker directly
docker build --target dev -t portfolio-dev .
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules portfolio-dev
```

Open [http://localhost:3000](http://localhost:3000) on the browser of your choice.

### Docker Production Build

Build and run the production-optimized container:

```bash
# Using Docker Compose
docker-compose up prod --build

# Or using Docker directly
docker build --target prod -t portfolio-prod .
docker run -p 3000:3000 portfolio-prod
```

### Local Production Build

To test the production build locally without Docker:

```bash
pnpm build
pnpm start
```

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/app/globals.css` - Global styles with Tailwind CSS v4
- `public/` - Static assets

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit?query=outfit) & [Sulphur Point](https://fonts.google.com/specimen/Sulphur+Point?query=sulphur) (via next/font)
- **React**: React 19 with React Compiler enabled
- **MDX**: @mdx-js/loader for Markdown content

## Features

- 🎨 Tailwind CSS v4 with typography plugin
- 🔥 Hot Module Replacement in development
- ⚡ React Compiler for optimized builds
- 📝 MDX support for content
- 🌗 Dark mode support
- 🐳 Docker support for dev and prod

```bash
# Build development image
docker-compose build dev

# Build production image
docker-compose build prod

# Run development with logs
docker-compose up dev

# Run production in detached mode
docker-compose up -d prod

# Stop all containers
docker-compose down

# Remove volumes and rebuild
docker-compose down -v && docker-compose build
```
