# 📊 Ledgers Dashboard

A premium, high-performance financial dashboard built with **Vue 3**, **TypeScript**, and **Vite**. This application provides a comprehensive overview of financial health, including revenue tracking, cash flow analysis, and interactive scenario planning.

---

## ✨ Features

- 📈 **Dynamic Financial Charts**: Interactive visualizations using Chart.js for Revenue vs. Expenses, Profit/Loss, Cash Inflow/Outflow, and more.
- 🎚️ **Interactive Scenario Tuner**: Live assumptions testing for Revenue Growth, OpEx changes, and Cash Flow sensitivity.
- 🌓 **Dark/Light Mode**: Seamless theme switching with system preference detection.
- 📱 **Fully Responsive**: Optimized for all screen sizes, from mobile phones to high-resolution desktops.
- 🤖 **AI-Driven Insights**: Contextual financial advice powered by "Ledgers AI" (simulated).
- 🎨 **Modern Aesthetics**: Built with Tailwind CSS 4 for a premium, glassmorphism-inspired design.

---

## 🛠️ Tech Stack

- **Framework**: [Vue.js 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [PrimeVue 4](https://primevue.org/)
- **Charts**: [Chart.js](https://www.chartjs.org/)
- **Icons**: Custom SVG Icons & PrimeIcons

---

## 📂 Project Structure

```text
src/
├── assets/             # Static assets like fonts and global styles
├── components/         # Reusable Vue components
│   ├── cards/          # KPI and Stat cards
│   ├── charts/         # Chart.js wrapper components
│   ├── header/         # Application header and theme toggle
│   ├── scenarios/      # Forecast and Budget tuner panels
│   ├── sidebar/        # Navigation sidebar
│   └── svg/            # Optimized SVG icons as Vue components
├── composables/        # Shared logic and state (Theme, Mock Data)
├── App.vue             # Main Application layout
└── main.ts             # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ahmed-Roshdy-1/ledgers-dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ledgers-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The dashboard will be available at `http://localhost:5173`.

### Production Build

Build the application for production:
```bash
npm run build
```
The optimized output will be in the `dist/` directory.

---

## 🏗️ Architecture & Design

### Theme Management
The application uses a custom `useTheme` composable that manages the `dark` class on the root element. It persists the user's choice in `localStorage` and respects the system-wide color scheme preference by default.

### Data Flow
Currently, the application uses mock data defined in `src/composables/useMockData.ts`. This is structured to mimic real API responses, making it easy to swap with actual backend services.

### Styling System
The project leverages the power of **Tailwind CSS 4**, utilizing the new `@theme` block for centralized design tokens (colors, fonts, breakpoints) directly in `src/style.css`.

---

## 📄 License

This project is part of a frontend developer technical assignment. All rights reserved.
