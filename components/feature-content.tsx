import type { Feature } from "@/lib/features"

interface FeatureContentProps {
  feature: Feature
  featureNumber: number
}

export default function FeatureContent({ feature, featureNumber }: FeatureContentProps) {
  return (
    <div className="w-full">
      <p className="text-sky-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
        Feature No.{featureNumber}
      </p>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
        {feature.title}
      </h3>
      <ul className="space-y-3 md:space-y-4">
        {feature.points.map((point, index) => (
          <li key={index} className="flex gap-3 text-gray-700 text-sm md:text-base">
            <span className="text-sky-500 font-semibold mt-0.5 flex-shrink-0 text-lg">•</span>
            <span className="leading-relaxed font-medium">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
