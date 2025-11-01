"use client"

import Image from "next/image"

interface PhoneMockupProps {
  image: string
}

export default function PhoneMockup({ image }: PhoneMockupProps) {
  return (
    <div className="mx-auto w-[280px] sm:w-[300px] md:w-[340px] aspect-[9/19] max-h-[600px] min-h-[320px]">
      <div className="relative w-full h-full rounded-[36px] border-4 border-[#0b0b0b] overflow-hidden shadow-[0_30px_60px_rgba(2,6,23,0.06)] bg-white">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/30 to-transparent z-10" />

        {/* Phone Content */}
        <div className="w-full h-full overflow-hidden bg-gray-100 pt-6">
          <div className="w-full h-full transition-opacity duration-200 ease-out opacity-100">
            <Image
              src={image}
              alt="Feature Screen"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black rounded-full z-20" />
      </div>
    </div>
  )
}
