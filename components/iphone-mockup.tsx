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
      {/* iPhone Frame - Realistic proportions with subtle shadow */}
      <div className="relative bg-black rounded-3xl overflow-hidden border-8 border-gray-950 shadow-xl" style={{ maxHeight: "600px", aspectRatio: "9 / 19.5" }}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20" />

        {/* Status Bar Background */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900 to-transparent z-10" />

        {/* Screen Content */}
        <div className="relative w-full h-full overflow-hidden bg-white pt-8">
          <motion.div
            key={featureNumber}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <AppScreen feature={feature} featureNumber={featureNumber} />
          </motion.div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full z-20" />
      </div>

      {/* Subtle Floating Shadow */}
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-black rounded-3xl -z-10 blur-xl opacity-8" />
    </motion.div>
  )
}
