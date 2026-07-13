# Deployment Guide: GitHub Pages

This portfolio is configured to be deployed automatically to GitHub Pages using GitHub Actions.

## Prerequisites
1. Ensure your repository is named `itzabd.github.io` (or update base paths if using a project repository).
2. The portfolio code is located in the root of the repository or a specific folder. 
*(Note: If you built this in a subfolder like `portfolio/`, you should move its contents to the root of your GitHub repository before deploying)*

## Step 1: Configure `next.config.ts`
The project is already pre-configured for static export. Ensure `next.config.ts` has:
```typescript
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
```

## Step 2: Set up GitHub Actions
1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
3. Create a `.github/workflows/deploy.yml` file in your repository with the following content:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 3: Push to GitHub
Commit all files and push them to the `main` branch. GitHub Actions will automatically start the build and deployment process.

```bash
git add .
git commit -m "Deploy premium Next.js portfolio"
git push origin main
```

## Step 4: Verify Deployment
Navigate to the "Actions" tab in your GitHub repository to watch the deployment progress. Once completed, your site will be live at `https://itzabd.github.io`!
