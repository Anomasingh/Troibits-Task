export interface Feature {
  id: number
  name: string
  title: string
  heading: string
  bullets: string[]
  image: string
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    name: "Smart Booking & Dashboard",
    title: "Feature 1",
    heading: "Smart Booking & Dashboard",
    bullets: [
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
    title: "Feature 2",
    heading: "AI-Powered App Suite",
    bullets: [
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
    title: "Feature 3",
    heading: "Insights & Reports",
    bullets: [
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
    title: "Feature 4",
    heading: "Payment Records & History",
    bullets: [
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
    title: "Feature 5",
    heading: "Billing & GST-Compliant Invoicing",
    bullets: [
      "Instant digital invoice generation",
      "GST-ready formats with automatic tax calculation",
      "Multiple payment modes supported",
      "Integrated daily/weekly revenue reporting",
    ],
    image: "/billing-gst-compliant-invoicing.jpg",
  },
]
