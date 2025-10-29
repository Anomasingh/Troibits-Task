export interface Feature {
  id: number
  name: string
  title: string
  points: string[]
  image: string
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    name: "Smart Booking & Dashboard",
    title: "Smart Booking & Dashboard",
    points: [
      "Real-time booking management system",
      "Intuitive dashboard with analytics",
      "Automated scheduling and reminders",
      "Multi-channel booking integration",
    ],
    image: "/smart-booking-dashboard-interface.jpg",
  },
  {
    id: 2,
    name: "AI-Powered App Suite",
    title: "AI-Powered App Suite",
    points: [
      "Machine learning-driven insights",
      "Predictive analytics for business decisions",
      "Automated workflow optimization",
      "Intelligent recommendation engine",
    ],
    image: "/ai-powered-app-suite-technology.jpg",
  },
  {
    id: 3,
    name: "Insights & Reports",
    title: "Insights & Reports",
    points: [
      "Comprehensive data visualization",
      "Custom report generation",
      "Real-time performance metrics",
      "Exportable analytics in multiple formats",
    ],
    image: "/insights-reports-analytics-dashboard.jpg",
  },
  {
    id: 4,
    name: "Payment Records & History",
    title: "Payment Records & History",
    points: [
      "Secure transaction tracking",
      "Detailed payment history logs",
      "Multiple payment method support",
      "Automated reconciliation reports",
    ],
    image: "/payment-records-history-transactions.jpg",
  },
  {
    id: 5,
    name: "Billing & GST-Compliant Invoicing",
    title: "Billing & GST-Compliant Invoicing",
    points: [
      "Instant digital invoice generation",
      "GST-ready formats with automatic tax calculation",
      "Multiple payment modes supported",
      "Integrated daily/weekly revenue reporting",
    ],
    image: "/billing-gst-compliant-invoicing.jpg",
  },
]
