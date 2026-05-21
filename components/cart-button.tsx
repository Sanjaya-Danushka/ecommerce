"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart-store"

export function CartButton() {
  const items = useCartStore((s) => s.items)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <Button variant="outline" size="sm" className="relative">
      <ShoppingCart className="h-4 w-4" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
          {count}
        </span>
      )}
    </Button>
  )
}
