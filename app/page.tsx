"use client"

import { useState, useEffect, useRef } from "react"
import SectionIntro from "@/components/sections/section-intro"
import SectionFeatures from "@/components/sections/section-features"
import SectionEnd from "@/components/sections/section-end"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isPinnedMode, setIsPinnedMode] = useState(false)
  const section1Ref = useRef<HTMLDivElement>(null)
  const featureSectionRef = useRef<HTMLDivElement>(null)
  const recentScrollRef = useRef(false)
  const lastScrollTimeRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!section1Ref.current) return

      const rect = section1Ref.current.getBoundingClientRect()
      // Section 1 is fully out when bottom <= 0
      const isSection1Out = rect.bottom <= 0
      setIsPinnedMode(isSection1Out)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isPinnedMode) return

      const now = Date.now()
      if (now - lastScrollTimeRef.current < 350) return // Throttle to 350ms

      const isScrollDown = e.deltaY > 0
      const isAtLast = activeFeature === 4 // 0-based, so 4 is the 5th feature
      const isAtFirst = activeFeature === 0

      // If at last feature and scrolling down, release pinned mode
      if (isAtLast && isScrollDown) {
        setIsPinnedMode(false)
        return
      }

      // Prevent default scroll while pinned and not at boundaries
      e.preventDefault()
      lastScrollTimeRef.current = now

      if (isScrollDown && !isAtLast) {
        setActiveFeature((f) => f + 1)
      } else if (!isScrollDown && !isAtFirst) {
        setActiveFeature((f) => f - 1)
      }
    }

    if (isPinnedMode) {
      window.addEventListener("wheel", onWheel, { passive: false })
      return () => window.removeEventListener("wheel", onWheel)
    }
  }, [isPinnedMode, activeFeature])

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      {/* Section 1: Intro */}
      <div ref={section1Ref} className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <SectionIntro />
      </div>

      {/* Section 2: Features (Pinned) */}
      <div ref={featureSectionRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <SectionFeatures activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
        </div>
      </div>

      {/* Section 3: End */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <SectionEnd />
      </div>
    </div>
  )
}
