# Callum Watkins Website

Made with [Nuxt 4](https://nuxt.com/docs/4.x/).

## Prerequisites

- Node.js v24 (LTS)
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000:

```bash
npm run dev
```

### Deployment to Cloudflare Pages

Deployment to [Cloudflare Pages](https://pages.cloudflare.com) is handled by GitHub Actions. All routes are pre-rendered using [Nuxt static site generation (SSG)](https://nuxt.com/docs/4.x/getting-started/deployment#static-hosting).

Changes to the master branch are published automatically. Pull requests to the master branch will automatically generate a preview deployment after passing CI checks.
