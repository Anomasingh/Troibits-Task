"use client"

import { motion } from "framer-motion"
import type { Feature } from "@/lib/features"
import AppScreen from "./app-screen"

interface IPhoneMockupProps {
  feature: Feature
  featureNumber: number
}

export default function IPhoneMockup({ feature, featureNumber }: IPhoneMockupProps) {
  return (
    <motion.div
      className="relative w-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      {/* iPhone Frame - Premium design with enhanced proportions */}
      <div className="relative bg-black rounded-4xl overflow-hidden border-8 border-gray-950 shadow-2xl" style={{ maxHeight: "720px", aspectRatio: "9 / 19.5" }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

        {/* Status Bar Background */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900 to-transparent z-10" />

        {/* Screen Content with smooth transitions */}
        <div className="relative w-full h-full overflow-hidden bg-white pt-8">
          <motion.div
            key={featureNumber}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <AppScreen feature={feature} featureNumber={featureNumber} />
          </motion.div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1.5 bg-black rounded-full z-20" />
      </div>

      {/* Enhanced Premium Shadow Effect */}
      <div className="absolute -bottom-3 -right-3 w-full h-full bg-gradient-to-br from-black/20 to-black/40 rounded-4xl -z-10 blur-2xl" />
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 rounded-4xl -z-20 blur-3xl opacity-5 bg-gradient-to-br from-blue-600 to-purple-600" />
    </motion.div>
  )
}
