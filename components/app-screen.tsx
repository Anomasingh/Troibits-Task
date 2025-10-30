"use client"

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
          <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
            {/* Status Bar */}
            <div className="bg-blue-600 text-white px-3 py-1.5 flex justify-between items-center text-xs font-semibold">
              <span>9:41</span>
              <div className="flex gap-1 text-xs">📶 📡 🔋</div>
            </div>

            {/* Header */}
            <div className="bg-blue-600 text-white px-3 py-3">
              <h1 className="text-base font-bold">Dashboard</h1>
              <p className="text-xs text-blue-100">Welcome back</p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
              {/* Booking Card */}
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-xs text-gray-500 font-semibold mb-2">UPCOMING BOOKING</p>
                <p className="text-sm font-bold text-gray-900">Meeting Room A</p>
                <p className="text-xs text-gray-600 mt-1">Today at 2:00 PM</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <p className="text-xs text-gray-500">Bookings</p>
                  <p className="text-lg font-bold text-blue-600">12</p>
                </div>
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <p className="text-xs text-gray-500">Available</p>
                  <p className="text-lg font-bold text-green-600">8</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 2: // AI-Powered App Suite
        return (
          <div className="w-full h-full bg-gradient-to-b from-purple-50 to-purple-100 flex flex-col">
            <div className="bg-purple-600 text-white px-3 py-1.5 flex justify-between items-center text-xs font-semibold">
              <span>9:41</span>
              <div className="flex gap-1 text-xs">📶 📡 🔋</div>
            </div>

            <div className="bg-purple-600 text-white px-3 py-3">
              <h1 className="text-base font-bold">AI Suite</h1>
              <p className="text-xs text-purple-100">Powered by AI</p>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-purple-200 rounded-lg flex items-center justify-center text-sm">🤖</div>
                  <p className="text-sm font-bold text-gray-900">Smart Assistant</p>
                </div>
                <p className="text-xs text-gray-600">AI-powered recommendations</p>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 bg-purple-200 rounded-lg flex items-center justify-center text-sm">✨</div>
                  <p className="text-sm font-bold text-gray-900">Auto Optimize</p>
                </div>
                <p className="text-xs text-gray-600">Automatic optimization</p>
              </div>
            </div>
          </div>
        )

      case 3: // Insights & Reports
        return (
          <div className="w-full h-full bg-gradient-to-b from-green-50 to-green-100 flex flex-col">
            <div className="bg-green-600 text-white px-3 py-1.5 flex justify-between items-center text-xs font-semibold">
              <span>9:41</span>
              <div className="flex gap-1 text-xs">📶 📡 🔋</div>
            </div>

            <div className="bg-green-600 text-white px-3 py-3">
              <h1 className="text-base font-bold">Reports</h1>
              <p className="text-xs text-green-100">Analytics & Insights</p>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-xs text-gray-500 font-semibold mb-2">MONTHLY OVERVIEW</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Revenue</span>
                    <div className="w-12 h-1.5 bg-green-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-green-600 rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">Growth</span>
                    <div className="w-12 h-1.5 bg-green-200 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-green-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 4: // Payment Records & History
        return (
          <div className="w-full h-full bg-gradient-to-b from-orange-50 to-orange-100 flex flex-col">
            <div className="bg-orange-600 text-white px-3 py-1.5 flex justify-between items-center text-xs font-semibold">
              <span>9:41</span>
              <div className="flex gap-1 text-xs">📶 📡 🔋</div>
            </div>

            <div className="bg-orange-600 text-white px-3 py-3">
              <h1 className="text-base font-bold">Payments</h1>
              <p className="text-xs text-orange-100">Transaction History</p>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              <div className="bg-white rounded-lg p-2.5 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Payment Received</p>
                    <p className="text-xs text-gray-600">Today at 10:30 AM</p>
                  </div>
                  <p className="text-sm font-bold text-green-600">+$500</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-2.5 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-gray-900">Payment Sent</p>
                    <p className="text-xs text-gray-600">Yesterday at 3:45 PM</p>
                  </div>
                  <p className="text-sm font-bold text-red-600">-$250</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 5: // Billing & GST-Compliant Invoicing
        return (
          <div className="w-full h-full bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col">
            <div className="bg-pink-600 text-white px-3 py-1.5 flex justify-between items-center text-xs font-semibold">
              <span>9:41</span>
              <div className="flex gap-1 text-xs">📶 📡 🔋</div>
            </div>

            <div className="bg-pink-600 text-white px-3 py-3">
              <h1 className="text-base font-bold">Invoices</h1>
              <p className="text-xs text-pink-100">Billing & GST Compliant</p>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-start mb-1.5">
                  <p className="text-sm font-bold text-gray-900">Invoice #INV-001</p>
                  <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Paid</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">Due: Oct 30, 2024</p>
                <p className="text-sm font-bold text-pink-600">$1,200.00</p>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-start mb-1.5">
                  <p className="text-sm font-bold text-gray-900">Invoice #INV-002</p>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">Pending</span>
                </div>
                <p className="text-xs text-gray-600 mb-1">Due: Nov 15, 2024</p>
                <p className="text-sm font-bold text-pink-600">$850.00</p>
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
