"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FEATURES } from "@/lib/features"
import FeatureList from "./feature-list"
import FeatureContent from "./feature-content"
import IPhoneMockup from "./iphone-mockup"

interface FeatureShowcaseProps {
  currentFeature: number
  setCurrentFeature: (feature: number) => void
}

export default function FeatureShowcase({ currentFeature, setCurrentFeature }: FeatureShowcaseProps) {
  const feature = FEATURES[currentFeature]

  const handlePrevious = () => {
    if (currentFeature > 0) {
      setCurrentFeature(currentFeature - 1)
    }
  }

  const handleNext = () => {
    if (currentFeature < FEATURES.length - 1) {
      setCurrentFeature(currentFeature + 1)
    }
  }

  return (
    <div className="w-full h-full">
      {/* 3-Column Layout - Professional SaaS Style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-center w-full h-full">
        {/* Left Column - Feature Content */}
        <div className="order-1 md:order-1 flex flex-col justify-start space-y-2 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="min-h-max"
            >
              <FeatureContent feature={feature} featureNumber={currentFeature + 1} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-8 pt-4">
            <button
              onClick={handlePrevious}
              disabled={currentFeature === 0}
              className="p-2.5 md:p-3 hover:bg-sky-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Previous feature"
              title="Previous Feature"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentFeature === FEATURES.length - 1}
              className="p-2.5 md:p-3 hover:bg-sky-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 active:scale-95"
              aria-label="Next feature"
              title="Next Feature"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Center Column - iPhone Mockup */}
        <div className="order-2 md:order-2 flex justify-center items-center py-8 md:py-0">
          <AnimatePresence mode="wait">
            <IPhoneMockup key={currentFeature} feature={feature} featureNumber={currentFeature + 1} />
          </AnimatePresence>
        </div>

        {/* Right Column - Feature List */}
        <div className="order-3 md:order-3 flex flex-col justify-start">
          <FeatureList currentFeature={currentFeature} setCurrentFeature={setCurrentFeature} />
        </div>
      </div>
    </div>
  )
}
