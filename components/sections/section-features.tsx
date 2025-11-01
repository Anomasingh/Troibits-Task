"use client"

import { FEATURES } from "@/lib/features"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PhoneMockup from "@/components/phone-mockup"
import FeatureListItem from "@/components/feature-list-item"

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
    // Main container with RELATIVE positioning for arrow placement
    // min-h-screen ensures consistent height regardless of content
    <div className="w-full h-screen max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative flex items-center">
      
      {/* 🔧 NAVIGATION ARROWS - Positioned at bottom, aligned with iPhone mockup end */}
      {/* Styled with vertical separator line like the reference design */}
      <div className="absolute left-[5%] top-1/2 translate-y-[28vh] flex items-center gap-0 z-20">
        <button
          onClick={handlePrevious}
          disabled={activeFeature === 0}
          className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0 hover:scale-110 active:scale-95"
          title="Previous Feature"
          aria-label="Previous Feature"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
        </button>
        
        {/* Vertical separator line */}
        <div className="w-px h-8 bg-sky-500" />
        
        <button
          onClick={handleNext}
          disabled={activeFeature === FEATURES.length - 1}
          className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0 hover:scale-110 active:scale-95"
          title="Next Feature"
          aria-label="Next Feature"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" strokeWidth={2.5} />
        </button>
      </div>

      {/* 3-column grid with responsive gaps */}
      {/* gap-6 (768px), gap-8 (1024px), gap-12 (1440px+) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full items-center">
        
        {/* LEFT COLUMN: Feature Text with FIXED min-height */}
        <div className="flex flex-col justify-center">
          {/* Feature Content Block with FIXED min-height to prevent container height changes */}
          <div className="space-y-4 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] min-h-[280px] max-w-full pr-4">
            {/* Feature Label & Heading */}
            <div>
              <p className="text-sky-500 text-sm font-semibold uppercase tracking-wider transition-opacity duration-500">
                {feature.title}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 mt-2 transition-all duration-500">
                {feature.heading}
              </h2>
            </div>

            {/* Bullet List with responsive clamp font size for better fit */}
            <ul className="text-gray-600 space-y-2 ml-6 list-disc transition-opacity duration-500" style={{ fontSize: 'clamp(0.85rem, 1vw, 1rem)', lineHeight: '1.5' }}>
              {feature.bullets.map((bullet, idx) => (
                <li key={idx} className="leading-relaxed">{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CENTER COLUMN: iPhone Mockup - Perfectly Centered */}
        {/* flex items-center ensures vertical centering */}
        <div className="flex justify-center items-center h-full">
          <PhoneMockup image={feature.image} featureId={activeFeature + 1} />
        </div>

        {/* RIGHT COLUMN: Feature List */}
        <div className="flex flex-col justify-center space-y-4 transition-all duration-500">
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
