// Mock data for the Dashboard

export const kpis = [
  { label: 'Revenue',      value: '1,400,000', change: '+4%',  positive: true },
  { label: 'Gross Profit', value: '1,250,000', change: '+14%', positive: true },
  { label: 'Op. Expenses', value: '600,000',   change: '+34%', positive: false },
  { label: 'Net Income',   value: '650,000',   change: '-25%', positive: false },
  { label: 'Cash in Bank', value: '1,700,000', change: '-25%', positive: false },
  { label: 'Burn Rate',    value: '750,000',   change: '-25%', positive: false },
  {
    label: 'Runway',
    isRunway: true,
    valueGross: '4.1',
    valueNet: '6.5',
  },
]