"use client"

import { FEATURES } from "@/lib/features"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PhoneMockup from "../phone-mockup"
import FeatureListItem from "../feature-list-item"

interface SectionFeaturesProps {
  activeFeature: number
  setActiveFeature: (feature: number) => void
}

export default function SectionFeatures({ activeFeature, setActiveFeature }: SectionFeaturesProps) {
  const feature = FEATURES[activeFeature]

  const handlePrevious = () => {
    if (activeFeature > 0) {
      setActiveFeature(activeFeature - 1)
    }
  }

  const handleNext = () => {
    if (activeFeature < FEATURES.length - 1) {
      setActiveFeature(activeFeature + 1)
    }
  }

  return (
    <div className="w-full h-full max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-between h-full">
          {/* Top Section: Title, Heading, Bullets */}
          <div className="space-y-6">
            {/* Feature Label */}
            <div>
              <p className="text-sky-500 text-sm font-semibold uppercase tracking-wider">
                {feature.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mt-2">
                {feature.heading}
              </h2>
            </div>

            {/* Bullet List */}
            <ul className="text-base text-gray-600 space-y-3 ml-6 list-disc">
              {feature.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>

          {/* Bottom Section: Navigation Arrows (Fixed) */}
          <div className="flex gap-3 pb-0">
            <button
              onClick={handlePrevious}
              disabled={activeFeature === 0}
              className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-sky-100 disabled:opacity-30 disabled:cursor-not-allowed transition flex-shrink-0"
              title="Previous Feature"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeFeature === FEATURES.length - 1}
              className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-sky-100 disabled:opacity-30 disabled:cursor-not-allowed transition flex-shrink-0"
              title="Next Feature"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Center Column: Phone Mockup */}
        <div className="flex justify-center items-center">
          <PhoneMockup image={feature.image} />
        </div>

        {/* Right Column: Feature List */}
        <div className="flex flex-col space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Features</p>
          <div className="space-y-3">
            {FEATURES.map((f, idx) => (
              <FeatureListItem
                key={f.id}
                feature={f}
                isActive={idx === activeFeature}
                onClick={() => setActiveFeature(idx)}
                featureNumber={idx + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
