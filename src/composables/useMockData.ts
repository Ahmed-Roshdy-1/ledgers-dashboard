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

export const getRevenueExpensesData = (primaryColor: string, secondaryColor: string) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [180, 620, 700, 520, 240, 190, 300, 260, 380, 650, 900, 820],
      backgroundColor: primaryColor,
      borderRadius: 10,
      barThickness: 18
    },
    {
      label: 'Expenses',
      data: [580, 640, 780, 700, 690, 420, 540, 600, 700, 780, 880, 740],
      backgroundColor: secondaryColor,
      borderRadius: 10,
      barThickness: 18
    }
  ]
})
