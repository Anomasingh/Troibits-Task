"use client"

import { motion } from "framer-motion"
import type { Feature } from "@/lib/features"

interface AppScreenProps {
  feature: Feature
  featureNumber: number
}

export default function AppScreen({ feature, featureNumber }: AppScreenProps) {
  const renderFeatureScreen = () => {
    switch (featureNumber) {
      case 1: // Smart Booking & Dashboard
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex flex-col">
            {/* Premium Status Bar */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-4 py-2 flex justify-between items-center text-xs font-semibold shadow-sm">
              <span className="font-bold">9:41</span>
              <div className="flex gap-1.5">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Premium Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-4 shadow-md">
              <h1 className="text-lg font-black">Dashboard</h1>
              <p className="text-xs text-blue-100 mt-0.5">Live Bookings & Analytics</p>
            </div>

            {/* Premium Content */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Active Booking Card */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Active</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">Meeting Room A</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <p className="text-xs text-gray-600">Today • 2:00 PM - 3:00 PM</p>
                <div className="mt-2 w-full bg-blue-100 rounded-full h-1">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: "65%" }} />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 text-white shadow-md">
                  <p className="text-xs opacity-90">Bookings</p>
                  <p className="text-2xl font-black mt-1">12</p>
                  <p className="text-xs opacity-75 mt-1">Today</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 text-white shadow-md">
                  <p className="text-xs opacity-90">Available</p>
                  <p className="text-2xl font-black mt-1">8</p>
                  <p className="text-xs opacity-75 mt-1">Rooms</p>
                </div>
              </div>

              {/* Upcoming */}
              <div className="bg-white rounded-2xl p-3 shadow-md">
                <p className="text-xs text-gray-500 font-bold mb-2">NEXT BOOKING</p>
                <p className="text-xs font-semibold text-gray-900">Meeting Room B • 4:00 PM</p>
              </div>
            </div>
          </div>
        )

      case 2: // AI-Powered App Suite
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 flex flex-col">
            <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-4 py-2 flex justify-between items-center text-xs font-semibold shadow-sm">
              <span className="font-bold">9:41</span>
              <div className="flex gap-1.5">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-4 shadow-md">
              <h1 className="text-lg font-black">AI Suite</h1>
              <p className="text-xs text-purple-100 mt-0.5">Intelligent Automation</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* AI Assistant Card */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-t-4 border-purple-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl flex items-center justify-center text-lg font-bold">🤖</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Smart Assistant</p>
                    <p className="text-xs text-purple-600">Active</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">AI-powered recommendations & insights</p>
              </div>

              {/* Auto Optimize Card */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-t-4 border-purple-400">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center text-lg">✨</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Auto Optimize</p>
                    <p className="text-xs text-purple-600">Processing</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Real-time workflow optimization</p>
              </div>

              {/* Learning Card */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-t-4 border-purple-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-xl flex items-center justify-center text-lg">📚</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Continuous Learning</p>
                    <p className="text-xs text-purple-600">Always improving</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">Machine learning-driven insights</p>
              </div>
            </div>
          </div>
        )

      case 3: // Insights & Reports
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-50 flex flex-col">
            <div className="bg-gradient-to-r from-emerald-700 to-green-600 text-white px-4 py-2 flex justify-between items-center text-xs font-semibold shadow-sm">
              <span className="font-bold">9:41</span>
              <div className="flex gap-1.5">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-4 shadow-md">
              <h1 className="text-lg font-black">Analytics</h1>
              <p className="text-xs text-green-100 mt-0.5">Real-time Performance Metrics</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Monthly Overview */}
              <div className="bg-white rounded-2xl p-4 shadow-md">
                <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-3">October Performance</p>
                
                {/* Revenue */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900">Revenue</span>
                    <span className="text-sm font-bold text-emerald-600">$12,450</span>
                  </div>
                  <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                {/* Growth */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900">Growth</span>
                    <span className="text-sm font-bold text-green-600">+24%</span>
                  </div>
                  <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* Conversion */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900">Conversion</span>
                    <span className="text-sm font-bold text-teal-600">3.2%</span>
                  </div>
                  <div className="w-full h-2 bg-teal-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "58%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-4 text-white shadow-md">
                <p className="text-xs opacity-90 font-semibold mb-2">This Month</p>
                <p className="text-2xl font-black">+$8,230</p>
                <p className="text-xs opacity-75 mt-2">↑ 18% from last month</p>
              </div>
            </div>
          </div>
        )

      case 4: // Payment Records & History
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-100 to-orange-50 flex flex-col">
            <div className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-4 py-2 flex justify-between items-center text-xs font-semibold shadow-sm">
              <span className="font-bold">9:41</span>
              <div className="flex gap-1.5">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-4 shadow-md">
              <h1 className="text-lg font-black">Payments</h1>
              <p className="text-xs text-orange-100 mt-0.5">Transaction History</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Received Transaction */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 flex-1">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-lg">💚</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Payment Received</p>
                      <p className="text-xs text-gray-600">Today • 10:30 AM</p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-green-600">+$500</p>
                </div>
              </div>

              {/* Sent Transaction */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-orange-500">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 flex-1">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-lg">📤</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Payment Sent</p>
                      <p className="text-xs text-gray-600">Yesterday • 3:45 PM</p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-orange-600">-$250</p>
                </div>
              </div>

              {/* Pending Transaction */}
              <div className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-yellow-500">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 flex-1">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-lg">⏳</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Pending</p>
                      <p className="text-xs text-gray-600">Oct 28 • 2:15 PM</p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-yellow-600">$180</p>
                </div>
              </div>

              {/* Total Balance */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 text-white shadow-md mt-2">
                <p className="text-xs opacity-90">Available Balance</p>
                <p className="text-3xl font-black mt-1">$4,250</p>
              </div>
            </div>
          </div>
        )

      case 5: // Billing & GST-Compliant Invoicing
        return (
          <div className="w-full h-full bg-gradient-to-br from-pink-50 via-rose-100 to-pink-50 flex flex-col">
            <div className="bg-gradient-to-r from-rose-700 to-pink-600 text-white px-4 py-2 flex justify-between items-center text-xs font-semibold shadow-sm">
              <span className="font-bold">9:41</span>
              <div className="flex gap-1.5">
                <span>📶</span>
                <span>📡</span>
                <span>🔋</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-600 to-pink-700 text-white px-4 py-4 shadow-md">
              <h1 className="text-lg font-black">Invoices</h1>
              <p className="text-xs text-pink-100 mt-0.5">GST-Compliant Billing</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Paid Invoice */}
              <div className="bg-white rounded-2xl p-4 shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs text-rose-600 font-bold uppercase tracking-wider">Invoice</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">#INV-001</p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-lg font-semibold">Paid</span>
                </div>
                <div className="space-y-1 mb-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Amount</span>
                    <span className="font-semibold">$1,200.00</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>GST (18%)</span>
                    <span className="font-semibold">$216.00</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200 flex justify-between">
                  <span className="text-sm font-bold text-gray-900">Total</span>
                  <span className="text-sm font-black text-rose-600">$1,416.00</span>
                </div>
              </div>

              {/* Pending Invoice */}
              <div className="bg-white rounded-2xl p-4 shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-xs text-rose-600 font-bold uppercase tracking-wider">Invoice</p>
                    <p className="text-sm font-bold text-gray-900 mt-0.5">#INV-002</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-lg font-semibold">Pending</span>
                </div>
                <div className="space-y-1 mb-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Amount</span>
                    <span className="font-semibold">$850.00</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>GST (18%)</span>
                    <span className="font-semibold">$153.00</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200 flex justify-between">
                  <span className="text-sm font-bold text-gray-900">Total</span>
                  <span className="text-sm font-black text-rose-600">$1,003.00</span>
                </div>
              </div>

              {/* Monthly Summary */}
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl p-4 text-white shadow-md mt-2">
                <p className="text-xs opacity-90 font-semibold">October Summary</p>
                <p className="text-2xl font-black mt-1">$2,419.00</p>
                <p className="text-xs opacity-75 mt-1">5 invoices • 2 pending</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return <div className="w-full h-full">{renderFeatureScreen()}</div>
}
