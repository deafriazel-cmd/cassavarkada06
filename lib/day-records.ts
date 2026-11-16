export type DayStat = {
  label: string
  value: string
  note?: string
  sales?: boolean
}

export type DayProduct = {
  slug: string
  name: string
  image: string
  stats: DayStat[]
  sales: number
  expenses: number
}

export type DayRecord = {
  day: number
  sectionId: string
  titleId: string
  chartTitleId: string
  idPrefix: string
  lead: string
  products: DayProduct[]
}

export const CHART_MAX = 800
export const CHART_TICKS = [800, 600, 400, 200, 0]

export const DAY_RECORDS: DayRecord[] = [
  {
    day: 1,
    sectionId: 'day-one',
    titleId: 'dayone-title',
    chartTitleId: 'chart-title',
    idPrefix: 'dayone',
    lead: 'Actual numbers from our first selling day: what we spent, what we made and sold, and what came in.',
    products: [
      {
        slug: 'dynamite',
        name: 'Dynamite',
        image: '/img/dynamite.jpg',
        sales: 330,
        expenses: 150,
        stats: [
          { label: 'Total Expenses', value: '₱150' },
          { label: 'Total Pieces Made', value: '50 pcs' },
          { label: 'Total Pieces Sold', value: '50 pcs' },
          { label: 'Total Sales', value: '₱330', sales: true },
        ],
      },
      {
        slug: 'nachos',
        name: 'Nachos Salad',
        image: '/img/nachos-salad.jpg',
        sales: 640,
        expenses: 400,
        stats: [
          { label: 'Total Expenses', value: '₱400' },
          { label: 'Total Orders Made', value: '22 orders' },
          { label: 'Total Orders Sold', value: '22 orders' },
          { label: 'Total Sales', value: '₱640', sales: true },
        ],
      },
    ],
  },
  {
    day: 2,
    sectionId: 'day-two',
    titleId: 'daytwo-title',
    chartTitleId: 'chart-title-day-two',
    idPrefix: 'daytwo',
    lead: 'Our second selling day: Dynamite and Nachos Salad, with every peso spent and earned.',
    products: [
      {
        slug: 'dynamite',
        name: 'Dynamite',
        image: '/img/dynamite.jpg',
        sales: 400,
        expenses: 300,
        stats: [
          { label: 'Total Expenses', value: '₱300' },
          { label: 'Total Pieces Made', value: '100 pcs' },
          {
            label: 'Total Pieces Sold',
            value: '60 pcs',
            note: '40 pcs left for Day 3',
          },
          { label: 'Total Sales', value: '₱400', sales: true },
        ],
      },
      {
        slug: 'nachos',
        name: 'Nachos Salad',
        image: '/img/nachos-salad.jpg',
        sales: 600,
        expenses: 335,
        stats: [
          { label: 'Total Expenses', value: '₱335' },
          { label: 'Total Orders Made', value: '20 orders' },
          { label: 'Total Orders Sold', value: '20 orders' },
          { label: 'Total Sales', value: '₱600', sales: true },
        ],
      },
    ],
  },
  {
    day: 3,
    sectionId: 'day-three',
    titleId: 'daythree-title',
    chartTitleId: 'chart-title-day-three',
    idPrefix: 'daythree',
    lead: 'Our third selling day: we sold out the Dynamite left over from Day 2 and served another round of Nachos Salad.',
    products: [
      {
        slug: 'dynamite',
        name: 'Dynamite',
        image: '/img/dynamite.jpg',
        sales: 260,
        expenses: 0,
        stats: [
          { label: 'Additional Expenses', value: '₱0' },
          {
            label: 'Total Dynamite Used',
            value: '40 pcs',
            note: 'Remaining from Day 2',
          },
          { label: 'Total Amount Sold', value: '40 pcs' },
          { label: 'Total Sales', value: '₱260', sales: true },
        ],
      },
      {
        slug: 'nachos',
        name: 'Nachos Salad',
        image: '/img/nachos-salad.jpg',
        sales: 570,
        expenses: 370,
        stats: [
          { label: 'Total Expenses', value: '₱370' },
          { label: 'Total Orders Made', value: '21 orders' },
          { label: 'Total Orders Sold', value: '19 orders' },
          { label: 'Total Sales', value: '₱570', sales: true },
        ],
      },
    ],
  },
  {
    day: 4,
    sectionId: 'day-four',
    titleId: 'dayfour-title',
    chartTitleId: 'chart-title-day-four',
    idPrefix: 'dayfour',
    lead: 'Our fourth selling day: a fresh batch of Dynamite sold out, and another full round of Nachos Salad, with every peso spent and earned.',
    products: [
      {
        slug: 'dynamite',
        name: 'Dynamite',
        image: '/img/dynamite.jpg',
        sales: 330,
        expenses: 150,
        stats: [
          { label: 'Total Expenses', value: '₱150' },
          { label: 'Total Pieces Made', value: '50 pcs' },
          { label: 'Total Pieces Sold', value: '50 pcs' },
          { label: 'Total Sales', value: '₱330', sales: true },
        ],
      },
      {
        slug: 'nachos',
        name: 'Nachos Salad',
        image: '/img/nachos-salad.jpg',
        sales: 600,
        expenses: 335,
        stats: [
          { label: 'Total Expenses', value: '₱335' },
          { label: 'Total Orders Made', value: '20 orders' },
          { label: 'Total Orders Sold', value: '20 orders' },
          { label: 'Total Sales', value: '₱600', sales: true },
        ],
      },
    ],
  },
]
