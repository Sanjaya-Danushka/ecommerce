"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  inStock,
}: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border bg-card">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute left-2 top-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
          {category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-medium leading-tight">{name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          <Button
            size="sm"
            disabled={!inStock}
            onClick={() => addItem({ id, name, price, image })}
          >
            <ShoppingCart className="mr-1 h-4 w-4" />
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </div>
  )
}
