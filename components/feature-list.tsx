"use client"

import { motion } from "framer-motion"
import { FEATURES } from "@/lib/features"

interface FeatureListProps {
  currentFeature: number
  setCurrentFeature: (feature: number) => void
}

export default function FeatureList({ currentFeature, setCurrentFeature }: FeatureListProps) {
  return (
    <div className="w-full">
      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Features</h4>
      <div className="space-y-2 md:space-y-3">
        {FEATURES.map((feature, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentFeature(index)}
            className="w-full text-left px-4 md:px-5 lg:px-6 py-3 md:py-4 rounded-xl transition-all duration-150 relative group"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentFeature === index && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-500 rounded-r-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Background highlight */}
            <div
              className={`absolute inset-0 rounded-xl transition-colors duration-200 ${
                currentFeature === index ? "bg-sky-50" : "bg-gray-50 group-hover:bg-gray-100"
              }`}
            />

            {/* Text content */}
            <span
              className={`relative font-semibold text-sm md:text-base transition-colors duration-200 ${
                currentFeature === index
                  ? "text-sky-600"
                  : "text-gray-700 group-hover:text-gray-900"
              }`}
            >
              {feature.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
