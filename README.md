# react-migration

## Power Apps Code Apps: npm CLI Quickstart Summary

### Overview
Starting with Power Apps SDK version 1.0.4, a new npm-based CLI is available for building code apps. This CLI simplifies prerequisites and will replace the deprecated `pac code` commands from the Power Platform CLI.

### Prerequisites
- Power Platform environment with code apps enabled
- Node.js (LTS version)
- Git

### Available CLI Commands

| Command | Description |
|---------|-------------|
| `init`  | Initialize your code app |
| `run`   | Starts a local development server |
| `push`  | Publishes a new version of the code app to your environment |

### Quick Setup Steps

**Step 1: Initialize the project**
```bash
npx degit github:microsoft/PowerAppsCodeApps/templates/vite my-app
cd my-app
```

**Step 2: Install dependencies and initialize the code app**
```bash
npm install
npm install @microsoft/power-apps
```

This workflow allows you to quickly set up a blank Vite app and convert it into a Power Apps code app using the new npm-based CLI commands.