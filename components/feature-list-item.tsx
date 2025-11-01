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
      className={`relative w-full text-left rounded-lg px-6 py-4 transition-all duration-200 ${
        isActive
          ? "bg-sky-100/80 text-sky-600 font-semibold"
          : "bg-gray-100 text-gray-600 hover:bg-gray-50"
      }`}
    >
      {isActive && (
        <div className="absolute left-0 -ml-3 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-sky-500 rounded" />
      )}
      <p className="font-semibold">{feature.heading}</p>
      <p className="text-xs mt-1 opacity-75">Feature {featureNumber}</p>
    </button>
  )
}
