"use client"

import FeatureScreen from "./feature-screen"

interface PhoneMockupProps {
  image: string
  featureId?: number
}

export default function PhoneMockup({ image, featureId = 1 }: PhoneMockupProps) {
  return (
    // iPhone mockup: 70-75vh height, perfectly vertically centered
    // Maintains 9:19 aspect ratio, responsive for all screen sizes
    <div 
      className="mx-auto aspect-[9/19] transition-all duration-500 ease-in-out relative"
      style={{
        height: 'min(72vh, 650px)', // 72vh (~70-75% range), max 650px for large screens
        minHeight: '420px', // Minimum for mobile
      }}
    >
      {/* Volume Buttons (Left Side) */}
      <div className="absolute left-0 top-[15%] -translate-x-full">
        <div className="w-1 h-8 bg-[#0b0b0b] rounded-l-sm mb-2"></div>
        <div className="w-1 h-12 bg-[#0b0b0b] rounded-l-sm mb-2"></div>
        <div className="w-1 h-12 bg-[#0b0b0b] rounded-l-sm"></div>
      </div>

      {/* Power Button (Right Side) */}
      <div className="absolute right-0 top-[20%] translate-x-full">
        <div className="w-1 h-16 bg-[#0b0b0b] rounded-r-sm"></div>
      </div>

      <div className="relative w-full h-full rounded-[36px] border-4 border-[#0b0b0b] overflow-hidden shadow-[0_30px_60px_rgba(2,6,23,0.06)] bg-white transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/30 to-transparent z-10" />

        {/* Phone Content with smooth transition */}
        <div className="w-full h-full overflow-hidden bg-gray-100 pt-6">
          <div className="w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 overflow-y-auto">
            <FeatureScreen featureId={featureId} />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black rounded-full z-20" />
      </div>
    </div>
  )
}
