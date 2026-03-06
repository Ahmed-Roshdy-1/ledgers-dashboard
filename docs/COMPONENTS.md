# 🧩 Component Documentation

This document provides an overview of the key components used in the Ledgers Dashboard.

## 🏗️ Layout Components

### `App.vue`
The main entry point for the layout. It uses a flexible grid system to organize the dashboard into:
- Left Sidebar (Nav)
- Top Header (User/Search/Theme)
- Main Content Area (Charts/KPIs)
- Right Side Panel (Scenarios)

### `Sidebar/index.vue`
A collaspsible sidebar for mobile and a fixed sidebar for desktop. It handles navigation and application-wide links.

---

## 📊 Data Visualization

### `KpiCard.vue`
Located in `src/components/cards/`.
- **Props**: `kpi` object (label, value, change, positive).
- **Features**: Visual indicators for growth/decline and special handling for the "Runway" KPI.

### `BaseChart` (Conceptual)
All charts are built using `Chart.js` with Vue wrappers. Key charts include:
- `RevenueExpensesChart.vue`: Bar chart comparing income and spending.
- `ProfitLossChart.vue`: Area chart showing net profitability trends.
- `NetFlowChart.vue`: Line chart for liquid cash flow.

---

## 🎛️ Interactive Components

### `ScenarioPanel.vue`
Provides the "Forecast & Budget Tuner" and "Cash Flow Scenario Tuner".
- **Functionality**: Uses `v-model` with native input ranges to simulate financial shifts.
- **Styling**: Custom CSS for range inputs to match the premium theme.
- **AI Integration**: Displays generated insights based on user adjustments.

---

## 🎨 Design System

### Icons (`src/components/svg/`)
Instead of using an external icon library that can bloat the bundle, we use optimized SVG components.
- Scalable and color-controlled via CSS.
- Responsive sizing through props or class names.

### Theme Composable (`src/composables/useTheme.ts`)
A global state management for the application theme.
- Persists to `localStorage`.
- Syncs across multiple instances of the theme toggle.
- Automatically initializes based on user's system preference.
