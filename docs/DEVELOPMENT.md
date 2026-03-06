# 🛠️ Development Guide

Information for developers looking to extend or modify the Ledgers Dashboard.

## 🛠️ Setup

1. **Node Version**: Ensure you are using Node.js 18+.
2. **Extensions**: Recommended VS Code extensions:
   - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vue Language Features)
   - [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
   - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## 🎨 Styling with Tailwind 4

This project uses **Tailwind CSS 4**. Note the following differences:
- Configuration is done via CSS variables in `src/style.css` using the `@theme` directive.
- No `tailwind.config.js` is needed.
- You can use standard Tailwind classes in your templates.

## 📈 Adding New Charts

To add a new chart:
1. Define the data structure in `src/composables/useMockData.ts`.
2. Create a new `.vue` file in `src/components/charts/`.
3. Import `Chart` from `chart.js/auto`.
4. Use the `onMounted` hook to initialize the canvas element.

## 🧬 Code Standards

- **TypeScript**: Use strict type checking where possible.
- **Composition API**: Use `<script setup>` for all Vue components.
- **Naming**: Use PascalCase for component filenames and `kebab-case` for component usage in templates.
- **Styles**: Prefer Tailwind utility classes. Use `<style scoped>` only when necessary for complex custom animations or browser-specific overrides (like sliders).

## 🚀 Deployment

The project is configured for easy deployment on platforms like Vercel or Netlify.
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
