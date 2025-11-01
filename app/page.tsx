"use client"

import { useEffect, useRef, useState } from "react"
import SectionIntro from "@/components/sections/section-intro"
import SectionFeatures from "@/components/sections/section-features"
import SectionEnd from "@/components/sections/section-end"

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const section2StartYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!section1Ref.current || !section2Ref.current || !containerRef.current) return

      const section1Rect = section1Ref.current.getBoundingClientRect()
      const section2Top = section2Ref.current.offsetTop
      const section2Height = section2Ref.current.offsetHeight
      const scrollTop = window.scrollY
      const viewportHeight = window.innerHeight

      // Section 1 must completely exit viewport
      const isSection1FullyOut = section1Rect.bottom <= -100

      // � NEW APPROACH: Define the TOTAL scroll range for Section 2
      // Section 2 physical start
      const section2Start = section2Top
      const section2End = section2Top + section2Height
      
      // Check if we're within the physical Section 2 boundaries
      const isScrollingThroughSection2 = scrollTop >= section2Start && scrollTop < section2End

      if (isSection1FullyOut && isScrollingThroughSection2) {
        // Calculate progress through Section 2 (0 to 1)
        const scrollIntoSection2 = scrollTop - section2Start
        const progress = Math.min(Math.max(scrollIntoSection2 / section2Height, 0), 1)

        // 🔥 CLEAR FEATURE THRESHOLDS - Each feature gets equal scroll space
        // Divide Section 2 into 5 equal parts (20% each)
        let feature = 0
        if (progress >= 0.80) {
          feature = 4 // Feature 5: 80-100%
        } else if (progress >= 0.60) {
          feature = 3 // Feature 4: 60-80%
        } else if (progress >= 0.40) {
          feature = 2 // Feature 3: 40-60%
        } else if (progress >= 0.20) {
          feature = 1 // Feature 2: 20-40%
        } else {
          feature = 0 // Feature 1: 0-20%
        }

        setActiveFeature(feature)
        
        // Debug (uncomment to see progress)
        // console.log({ scrollTop, progress: (progress * 100).toFixed(1) + '%', feature: feature + 1 })
      } else if (scrollTop >= section2End) {
        // Keep Feature 5 active after section ends
        setActiveFeature(4)
      }
    }

    // Use requestAnimationFrame for smooth 60fps scroll tracking
    let rafId: number | null = null
    const smoothHandleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        handleScroll()
        rafId = null
      })
    }

    window.addEventListener("scroll", smoothHandleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", smoothHandleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Note: Removed wheel/touch blocking - CSS sticky positioning handles the pin
  // The scrollbar naturally scrolls through Section 2's height while content stays pinned

  // Allow clicking to change features
  const handleFeatureChange = (index: number) => {
    setActiveFeature(index)
  }

  return (
    <div ref={containerRef} className="w-full bg-white text-gray-800 font-sans scroll-smooth">
      {/* Section 1: Intro - Must fully scroll out before Section 2 activates */}
      <section
        ref={section1Ref}
        className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <SectionIntro />
      </section>

      {/* Section 2: Features Showcase (Scroll-Locked/Pinned) */}
      {/* 🔥 OPTIMIZED: 300vh total = 60vh per feature */}
      {/* Fine-tuned for fast, responsive scrolling */}
      <section
        ref={section2Ref}
        className="relative transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          height: "300vh", // Each feature gets 60vh of scroll space
          backgroundColor: "#ffffff",
        }}
      >
        {/* Sticky container - stays fixed while parent scrolls */}
        {/* This creates the "pinned" effect while features transition */}
        <div className="sticky top-0 h-screen flex items-center bg-white overflow-hidden">
          <SectionFeatures
            activeFeature={activeFeature}
            setActiveFeature={handleFeatureChange}
          />
        </div>
      </section>

      {/* Section 3: End - Normal scroll resumes after Section 2 */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <SectionEnd />
      </section>
    </div>
  )
}
