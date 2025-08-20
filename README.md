# Rspack Module Federation

Simple pnpm workspace using Rspack & Module Federation

## Development Scripts

### Install Dependencies

```bash
pnpm install
```

### Development Servers

```bash
# Start host application (http://localhost:8080)
pnpm dev:host

# Start remote application (http://localhost:8081)
pnpm dev:remote

# Start both (run in separate terminals)
pnpm dev:host & pnpm dev:remote
```

### Build

```bash
# Build host application
pnpm build:host

# Build remote application
pnpm build:remote

# Build both applications
pnpm build:all
```
