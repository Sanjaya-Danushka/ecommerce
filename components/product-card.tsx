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
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 font-jost">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 dark:bg-foreground/90 text-foreground dark:text-background px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm shadow-sm">
          {category}
        </span>
        
        {/* Out of Stock overlay */}
        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-[2px]">
            <span className="rounded-full bg-destructive/10 border border-destructive/20 text-destructive px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Info & CTA */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-base md:text-lg leading-snug tracking-tight text-foreground line-clamp-1">
            {name}
          </h3>
          <span className="text-base md:text-lg font-extrabold text-foreground shrink-0">
            ${price.toFixed(2)}
          </span>
        </div>
        
        <p className="line-clamp-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto pt-3 border-t border-border/30">
          <Button
            className="w-full rounded-xl bg-foreground hover:bg-foreground/90 text-background flex items-center justify-center py-5 font-semibold text-xs md:text-sm transition-all duration-300 cursor-pointer"
            disabled={!inStock}
            onClick={() => addItem({ id, name, price, image })}
          >
            <ShoppingCart className="mr-1.5 h-4 w-4" />
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>
    </div>
  )
}
