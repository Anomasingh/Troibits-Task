import { forwardRef } from "react"

const Section3 = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="w-full h-screen bg-white px-24 md:px-32 lg:px-48" />
  )
})

Section3.displayName = "Section3"

export default Section3
