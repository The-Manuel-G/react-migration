# react-migration

A Power Apps code app built with React, TypeScript, and Vite. This project was created following the [Power Apps SDK npm CLI quickstart](https://learn.microsoft.com/power-apps/developer/get-started-npm-cli).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- A Power Platform environment with code apps enabled

### Install Dependencies

```bash
npm install
```

### Development

Start a local development server:

```bash
npm run dev
```

### Build

Build the app for production:

```bash
npm run build
```

### Lint

Run the linter:

```bash
npm run lint
```

### Power Apps CLI Commands

After installing `@microsoft/power-apps`, the following commands are available:

| Command | Description |
|---------|-------------|
| `init`  | Initialize your code app |
| `run`   | Starts a local development server |
| `push`  | Publishes a new version of the code app to your environment |

#### Initialize the code app

```bash
npx power-apps init
```

#### Run with Power Apps integration

```bash
npx power-apps run
```

#### Publish to your environment

```bash
npx power-apps push
```

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [@microsoft/power-apps](https://www.npmjs.com/package/@microsoft/power-apps) SDK