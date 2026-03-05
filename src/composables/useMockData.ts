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

export const getProfitLossData = () => ({
  labels: ['', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'Profit/Loss',
      data: [-10, -20, -15,-15, 12, 10, 25, 30, 45, 40, 50, 60],
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#0b86df',
      pointBorderColor: '#0b86df',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      borderColor: '',
      borderWidth: 0,
      backgroundColor: '' as any
    }
  ]
})


export const getGoalCompletionData = (pinkColor: string, blueColor: string) => ({
  labels: [' Rev', ' OpEx'],
  datasets: [
    {
      label: 'Progress',
      data: [35, 15],
      backgroundColor: pinkColor,
      borderRadius: {
        topLeft: 10,
        bottomLeft: 10,
        topRight: 0,
        bottomRight: 0
      },
      barThickness: 35
    },
    {
      label: 'Target',
      data: [65, 45],
      backgroundColor: blueColor,
      borderRadius: {
        topLeft: 0,
        bottomLeft: 0,
        topRight: 10,
        bottomRight: 10
      },
      barThickness: 35
    }
  ]
})

