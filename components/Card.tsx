import Image from "next/image"

interface CardProps {
  name: string
  category: string
  price: number
  image: string
  colorCount?: number
  badge?: string
}

export function Card({
  name,
  category,
  price,
  image,
  colorCount,
  badge,
}: CardProps) {
  return (
    <div className="group w-full cursor-pointer font-jost">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-light-200">
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-light-100 px-3 py-1 text-sm-regular text-red">
            {badge}
          </span>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Product info */}
      <div className="mt-3 space-y-0.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base-medium text-dark-900">{name}</h3>
          <span className="text-base-medium shrink-0 text-dark-900">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-base-regular text-dark-700">{category}</p>
        {colorCount !== undefined && colorCount > 0 && (
          <p className="text-base-regular text-dark-700">
            {colorCount} Colour
          </p>
        )}
      </div>
    </div>
  )
}
