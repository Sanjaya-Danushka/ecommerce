import { db } from "@/db"
import { products } from "@/db/schema"
import { ProductList } from "@/components/product-list"
import { CartButton } from "@/components/cart-button"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const allProducts = await db.select().from(products)

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight">Nike Store</h1>
          <CartButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Products
          </h2>
          <p className="mt-1 text-muted-foreground">
            Check out the latest Nike shoes and gear.
          </p>
        </div>

        <ProductList products={allProducts} />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Nike Store. Built with Next.js,
          Drizzle ORM &amp; shadcn/ui.
        </div>
      </footer>
    </div>
  )
}
