"use client"

import type { Feature } from "@/lib/features"

interface FeatureListItemProps {
  feature: Feature
  isActive: boolean
  onClick: () => void
  featureNumber: number
}

export default function FeatureListItem({
  feature,
  isActive,
  onClick,
  featureNumber,
}: FeatureListItemProps) {
  return (
    <button
      onClick={onClick}
      // Smooth cubic-bezier easing for all transitions
      className={`relative w-full text-left rounded-lg px-6 py-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isActive
          ? "bg-sky-100/80 text-sky-600 font-semibold scale-[1.02]"
          : "bg-gray-100 text-gray-600 hover:bg-gray-50 hover:scale-[1.01]"
      }`}
    >
      {/* Active indicator with smooth slide-in animation */}
      {isActive && (
        <div className="absolute left-0 -ml-3 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-sky-500 rounded transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] animate-in slide-in-from-left-2" />
      )}
      <p className="font-semibold transition-colors duration-300">{feature.heading}</p>
      <p className="text-xs mt-1 opacity-75 transition-opacity duration-300">Feature {featureNumber}</p>
    </button>
  )
}
