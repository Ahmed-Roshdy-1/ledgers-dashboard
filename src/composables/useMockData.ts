// Mock data for the Dashboard

export const kpis = [
  { label: 'Revenue', value: '1,400,000', change: '+4%', positive: true },
  { label: 'Gross Profit', value: '1,250,000', change: '+14%', positive: true },
  { label: 'Op. Expenses', value: '600,000', change: '+34%', positive: false },
  { label: 'Net Income', value: '650,000', change: '-25%', positive: false },
  { label: 'Cash in Bank', value: '1,700,000', change: '-25%', positive: false },
  { label: 'Burn Rate', value: '750,000', change: '-25%', positive: false },
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
      data: [-10, -20, -15, -15, 12, 10, 25, 30, 45, 40, 50, 60],
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

export const getCashInflowOutflowData = (blueColor: string, pinkColor: string) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Cash Inflow',
      data: [42, 28, 55, 45, 52, 68, 55, 62, 72, 60, 65, 80],
      borderColor: blueColor,
      backgroundColor: 'transparent',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: blueColor,
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    {
      label: 'Cash Outflow',
      data: [35, 22, 40, 30, 32, 58, 38, 48, 52, 44, 50, 60],
      borderColor: pinkColor,
      backgroundColor: 'transparent',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: pinkColor,
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    }
  ]
})

export const getCashInBankData = (blueColor: string) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Cash In Bank',
      data: [30, 25, 48, 40, 55, 62, 50, 42, 58, 35, 35, 60],
      borderColor: blueColor,
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: blueColor,
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    }
  ]
})

export const getNetFlowData = (blueColor: string) => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'NetFlow',
      data: [35, 45, 35, 55, 65, 75, 65, 45, 25, -15, 10, 25],
      borderColor: blueColor,
      backgroundColor: 'transparent',
      fill: false,
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: blueColor,
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    }
  ]
})

export const forecastSlidersData = [
  { label: 'Revenue Growth', value: 40 },
  { label: 'COS % of Revenue', value: 30 },
  { label: 'OpEx Change', value: 85 },
  { label: 'Seasonality', value: 65 },
  { label: 'Pipeline Confidence', value: 75 },
];

export const cashFlowSlidersData = [
  { label: 'Inflow Sensitivity', value: 20 },
  { label: 'OpEx Tightening', value: 45 },
  { label: 'Payment Terms', value: 80 },
];

export const forecastOutputData = [
  { label: 'Gross Profit', current: '1,250,000', adjusted: '1,250,000', changes: '- /' },
  { label: 'Net Profit', current: '650,000', adjusted: '650,000', changes: '- /' },
  { label: 'OpEx', current: '600,000', adjusted: '600,000', changes: '- /' },
  { label: 'Gross Margin', current: '52%', adjusted: '52%', changes: '- /' },
];

export const cashFlowOutputData = [
  { label: 'Inflow', current: '1,420,000', adjusted: '1,420,000', changes: '- /' },
  { label: 'Outflow', current: '540,000', adjusted: '540,000', changes: '- /' },
  { label: 'Net Cash Flow', current: '880,000', adjusted: '880,000', changes: '- /' },
  { label: 'Cash Balance', current: '58%', adjusted: '58%', changes: '- /' },
];
