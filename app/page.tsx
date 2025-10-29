"use client"

import { useState, useEffect, useRef } from "react"
import Section1 from "@/components/section-1"
import Section2 from "@/components/section-2"
import Section3 from "@/components/section-3"

const TOTAL_FEATURES = 5

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isSection2Active, setIsSection2Active] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const lastScrollTimeRef = useRef(0)
  const hasEnteredSection2Ref = useRef(false)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!section1Ref.current || !section2Ref.current || !section3Ref.current) return

      // Prevent rapid scroll events
      if (isScrollingRef.current) return

      const section1Rect = section1Ref.current.getBoundingClientRect()
      const section2Rect = section2Ref.current.getBoundingClientRect()
      const section3Rect = section3Ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Section 1 is fully out of view when its bottom is above viewport top
      const isSection1FullyOut = section1Rect.bottom <= 0

      // Section 2 begins when fully visible in viewport
      const isSection2FullyVisible = section2Rect.top <= 0 && section2Rect.bottom >= viewportHeight

      // Check if Section 2 is the primary section
      const isMostlyInSection2 =
        section2Rect.top < viewportHeight * 0.5 && section2Rect.bottom > viewportHeight * 0.5

      // Activate Section 2 pinning only after Section 1 is fully scrolled out
      if (isSection1FullyOut && isMostlyInSection2 && !hasEnteredSection2Ref.current) {
        hasEnteredSection2Ref.current = true
        setIsSection2Active(true)
        setCurrentFeature(0)
      }

      // Deactivate Section 2 when scrolling away
      if (!isMostlyInSection2) {
        hasEnteredSection2Ref.current = false
        setIsSection2Active(false)
      }

      // Handle pinned scrolling within Section 2
      if (isSection2Active && hasEnteredSection2Ref.current) {
        const isScrollingDown = e.deltaY > 0
        const isScrollingUp = e.deltaY < 0
        const isAtLastFeature = currentFeature === TOTAL_FEATURES - 1
        const isAtFirstFeature = currentFeature === 0

        // Allow scroll past Section 2 only after Feature 5 is shown
        if (isAtLastFeature && isScrollingDown) {
          return
        }

        // ALWAYS prevent default scroll while cycling features
        if (!isAtLastFeature) {
          e.preventDefault()

          // Debounce scroll events
          const now = Date.now()
          if (now - lastScrollTimeRef.current < 500) return
          lastScrollTimeRef.current = now

          isScrollingRef.current = true
          setTimeout(() => {
            isScrollingRef.current = false
          }, 300)

          // Change features on scroll
          if (isScrollingDown && !isAtLastFeature) {
            setCurrentFeature((prev) => Math.min(prev + 1, TOTAL_FEATURES - 1))
          } else if (isScrollingUp && !isAtFirstFeature) {
            setCurrentFeature((prev) => Math.max(prev - 1, 0))
          }
        } else if (isAtLastFeature && isScrollingUp) {
          // Allow cycling back from Feature 5
          e.preventDefault()

          const now = Date.now()
          if (now - lastScrollTimeRef.current < 500) return
          lastScrollTimeRef.current = now

          setCurrentFeature((prev) => Math.max(prev - 1, 0))
        }
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [currentFeature, isSection2Active])

  return (
    <div ref={containerRef} className="w-full bg-white overflow-x-hidden">
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} currentFeature={currentFeature} setCurrentFeature={setCurrentFeature} />
      <Section3 ref={section3Ref} />
    </div>
  )
}
