"use client"

import { forwardRef } from "react"
import FeatureShowcase from "./feature-showcase"

interface Section2Props {
  currentFeature: number
  setCurrentFeature: (feature: number) => void
}

const Section2 = forwardRef<HTMLDivElement, Section2Props>(({ currentFeature, setCurrentFeature }, ref) => {
  return (
    <section ref={ref} className="w-full bg-white h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="w-full max-w-7xl">
        <FeatureShowcase currentFeature={currentFeature} setCurrentFeature={setCurrentFeature} />
      </div>
    </section>
  )
})

Section2.displayName = "Section2"

export default Section2
