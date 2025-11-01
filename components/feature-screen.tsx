"use client"

interface FeatureScreenProps {
  featureId: number
}

export default function FeatureScreen({ featureId }: FeatureScreenProps) {
  // Feature 1: Smart Booking & Dashboard
  if (featureId === 1) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500">Welcome back</p>
            <h3 className="text-sm font-bold text-gray-900">Booking Dashboard</h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">👤</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Today's Bookings</p>
            <p className="text-xl font-bold text-blue-600">24</p>
            <p className="text-xs text-green-600">↑ 12%</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">Completed</p>
            <p className="text-xl font-bold text-green-600">18</p>
            <p className="text-xs text-gray-500">75% done</p>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
          <h4 className="text-xs font-semibold text-gray-700 mb-2">Upcoming</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
              <div className="w-1 h-12 bg-blue-500 rounded"></div>
              <div className="flex-1">
                <p className="text-xs font-medium">John Doe</p>
                <p className="text-xs text-gray-500">10:00 AM - Consultation</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
              <div className="w-1 h-12 bg-purple-500 rounded"></div>
              <div className="flex-1">
                <p className="text-xs font-medium">Jane Smith</p>
                <p className="text-xs text-gray-500">2:30 PM - Follow-up</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-blue-600 text-white text-xs font-medium py-2 rounded-lg">
            + New Booking
          </button>
          <button className="bg-gray-100 text-gray-700 text-xs font-medium py-2 rounded-lg">
            View Calendar
          </button>
        </div>
      </div>
    )
  }

  // Feature 2: AI-Powered App Suite
  if (featureId === 2) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-purple-50 to-white p-4">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-900 mb-1">AI Insights</h3>
          <p className="text-xs text-purple-600">Powered by Machine Learning</p>
        </div>

        {/* AI Metrics */}
        <div className="bg-white rounded-lg p-3 mb-3 shadow-sm border border-purple-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-700">Prediction Accuracy</span>
            <span className="text-xs font-bold text-purple-600">94.5%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-[94.5%] h-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
        </div>

        {/* AI Cards */}
        <div className="space-y-2 mb-3">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100">
            <div className="flex items-start gap-2">
              <div className="text-2xl">🧠</div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-900">Smart Recommendations</p>
                <p className="text-xs text-gray-600 mt-1">AI suggests optimal scheduling for 15% efficiency boost</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-purple-100">
            <div className="flex items-start gap-2">
              <div className="text-2xl">📊</div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-900">Predictive Analytics</p>
                <p className="text-xs text-gray-600 mt-1">Next week: 30% higher demand expected</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm border border-green-100">
            <div className="flex items-start gap-2">
              <div className="text-2xl">⚡</div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-900">Workflow Automation</p>
                <p className="text-xs text-gray-600 mt-1">12 tasks automated this week</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Status */}
        <div className="bg-green-50 rounded-lg p-2 flex items-center gap-2 border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-700 font-medium">AI Engine Active</span>
        </div>
      </div>
    )
  }

  // Feature 3: Insights & Reports
  if (featureId === 3) {
    return (
      <div className="w-full h-full bg-white p-4">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-900">Analytics Dashboard</h3>
          <p className="text-xs text-gray-500">Last 30 days performance</p>
        </div>

        {/* Line Chart Area */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 mb-3 relative">
          <div className="flex justify-between items-end h-40 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="border-b border-gray-200/50"></div>
              <div className="border-b border-gray-200/50"></div>
              <div className="border-b border-gray-200/50"></div>
              <div className="border-b border-gray-200/50"></div>
            </div>
            
            {/* Line graph path */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05"/>
                </linearGradient>
              </defs>
              {/* Area fill */}
              <path
                d="M 0 100 L 0 40 Q 10 35, 20 38 T 40 42 T 60 35 T 80 38 T 100 30 Q 110 28, 120 25 T 140 22 T 160 18 T 180 15 T 200 10 L 200 100 Z"
                fill="url(#gradient)"
                vectorEffect="non-scaling-stroke"
              />
              {/* Line */}
              <path
                d="M 0 40 Q 10 35, 20 38 T 40 42 T 60 35 T 80 38 T 100 30 Q 110 28, 120 25 T 140 22 T 160 18 T 180 15 T 200 10"
                fill="none"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              {/* Data points */}
              <circle cx="0" cy="40" r="3" fill="rgb(59, 130, 246)" />
              <circle cx="40" cy="42" r="3" fill="rgb(59, 130, 246)" />
              <circle cx="80" cy="38" r="3" fill="rgb(59, 130, 246)" />
              <circle cx="120" cy="25" r="3" fill="rgb(59, 130, 246)" />
              <circle cx="160" cy="18" r="3" fill="rgb(59, 130, 246)" />
              <circle cx="200" cy="10" r="3" fill="rgb(147, 51, 234)" />
            </svg>
            
            {/* X-axis labels */}
            <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-xs text-gray-500 px-1">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Revenue</span>
            </div>
            <span className="text-xs font-bold text-gray-900">$12,450</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Customers</span>
            </div>
            <span className="text-xs font-bold text-gray-900">1,234</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-700">Conversion</span>
            </div>
            <span className="text-xs font-bold text-gray-900">68.5%</span>
          </div>
        </div>

        {/* Export Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium py-2 rounded-lg">
          📥 Export Report
        </button>
      </div>
    )
  }

  // Feature 4: Payment Records & History
  if (featureId === 4) {
    return (
      <div className="w-full h-full bg-gray-50 p-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-3 mb-4 text-white">
          <p className="text-xs mb-1">Total Balance</p>
          <h3 className="text-2xl font-bold">$24,567.89</h3>
          <p className="text-xs text-green-100 mt-1">↑ $1,234 this month</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white rounded-lg p-2 text-center shadow-sm">
            <p className="text-xs text-gray-500">Pending</p>
            <p className="text-sm font-bold text-orange-600">$450</p>
          </div>
          <div className="bg-white rounded-lg p-2 text-center shadow-sm">
            <p className="text-xs text-gray-500">Received</p>
            <p className="text-sm font-bold text-green-600">$3.2K</p>
          </div>
          <div className="bg-white rounded-lg p-2 text-center shadow-sm">
            <p className="text-xs text-gray-500">Failed</p>
            <p className="text-sm font-bold text-red-600">$120</p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="mb-2">
          <h4 className="text-xs font-semibold text-gray-700 mb-2">Recent Transactions</h4>
        </div>

        <div className="space-y-2">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-900">Payment Received</span>
              <span className="text-xs font-bold text-green-600">+$850.00</span>
            </div>
            <p className="text-xs text-gray-500">John Doe • Visa ****4532</p>
            <p className="text-xs text-gray-400 mt-1">Today, 10:24 AM</p>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-900">Payment Received</span>
              <span className="text-xs font-bold text-green-600">+$1,200.00</span>
            </div>
            <p className="text-xs text-gray-500">Sarah Wilson • MasterCard ****8976</p>
            <p className="text-xs text-gray-400 mt-1">Yesterday, 3:45 PM</p>
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-900">Payment Pending</span>
              <span className="text-xs font-bold text-orange-600">$450.00</span>
            </div>
            <p className="text-xs text-gray-500">Mike Johnson • Bank Transfer</p>
            <p className="text-xs text-gray-400 mt-1">2 days ago, 11:20 AM</p>
          </div>
        </div>
      </div>
    )
  }

  // Feature 5: Billing & GST-Compliant Invoicing
  if (featureId === 5) {
    return (
      <div className="w-full h-full bg-white p-4">
        {/* Invoice Header */}
        <div className="border-b-2 border-blue-600 pb-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-gray-900">INVOICE</h3>
            <span className="text-xs font-mono text-gray-600">#INV-2024-0542</span>
          </div>
          <p className="text-xs text-gray-500">Date: Nov 01, 2025</p>
        </div>

        {/* Billing Details */}
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-xs font-semibold text-gray-700 mb-1">Bill To:</p>
          <p className="text-xs text-gray-900 font-medium">ABC Corporation Ltd.</p>
          <p className="text-xs text-gray-600">GSTIN: 29ABCDE1234F1Z5</p>
        </div>

        {/* Invoice Items */}
        <div className="mb-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-700">Item</span>
            <span className="text-xs font-semibold text-gray-700">Amount</span>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs text-gray-900">Professional Services</p>
                <p className="text-xs text-gray-500">Qty: 1</p>
              </div>
              <span className="text-xs font-medium">₹5,000.00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs text-gray-900">Consultation Fee</p>
                <p className="text-xs text-gray-500">Qty: 2</p>
              </div>
              <span className="text-xs font-medium">₹3,000.00</span>
            </div>
          </div>
        </div>

        {/* Tax Breakdown */}
        <div className="bg-blue-50 rounded-lg p-3 mb-3 space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">₹8,000.00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">CGST (9%)</span>
            <span className="font-medium">₹720.00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">SGST (9%)</span>
            <span className="font-medium">₹720.00</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-blue-600 pt-2 border-t border-blue-200">
            <span>Total Amount</span>
            <span>₹9,440.00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-blue-600 text-white text-xs font-medium py-2 rounded-lg">
            📧 Send
          </button>
          <button className="bg-gray-100 text-gray-700 text-xs font-medium py-2 rounded-lg">
            📥 Download
          </button>
        </div>
      </div>
    )
  }

  return null
}
