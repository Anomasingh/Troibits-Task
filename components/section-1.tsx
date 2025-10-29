"use client"

import { forwardRef } from "react"

const Section1 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full h-screen bg-white" />
  )
})

Section1.displayName = "Section1"

export default Section1
