"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ProductCard } from "@/components/product-card"
import { ArrowRight, Sparkles, Flame, MoveRight } from "lucide-react"

const placeholderShoes = [
  {
    id: 1,
    name: "Classic Nike Air",
    description: "Comfortable and stylish sneakers for everyday wear",
    price: 89.99,
    image: "/shoes/shoe-5.avif",
    category: "Sneakers",
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Running Shoe",
    description: "Engineered for performance and speed",
    price: 129.99,
    image: "/shoes/shoe-6.avif",
    category: "Running",
    inStock: true,
  },
  {
    id: 3,
    name: "Casual Canvas",
    description: "Perfect for casual outings and relaxation",
    price: 69.99,
    image: "/shoes/shoe-7.avif",
    category: "Casual",
    inStock: true,
  },
  {
    id: 4,
    name: "Sports Pro",
    description: "High-performance athletic footwear",
    price: 149.99,
    image: "/shoes/shoe-8.avif",
    category: "Sports",
    inStock: false,
  },
  {
    id: 5,
    name: "Elite Basketball",
    description: "Court-ready design with superior grip",
    price: 139.99,
    image: "/shoes/shoe-9.avif",
    category: "Basketball",
    inStock: true,
  },
  {
    id: 6,
    name: "Trail Runner",
    description: "Durable shoes for outdoor adventures",
    price: 119.99,
    image: "/shoes/shoe-10.avif",
    category: "Trail",
    inStock: true,
  },
]

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Sneakers", "Running", "Casual", "Sports", "Basketball", "Trail"]

  const filteredShoes = selectedCategory === "All"
    ? placeholderShoes
    : placeholderShoes.filter(shoe => shoe.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div className="w-full bg-background min-h-screen text-foreground">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-zinc-950 text-white min-h-[80vh] flex items-center">
        {/* Background Graphic Overlay */}
        <div className="absolute inset-0 bg-radial from-zinc-900 via-zinc-950 to-black z-0" />
        
        {/* Background Image with opacity */}
        <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay">
          <Image
            src="/hero-bg.png"
            alt="Nike Background"
            fill
            className="object-cover pointer-events-none select-none"
            priority
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
        
        {/* Soft Radial Glow behind the shoe */}
        <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow hidden lg:block" />

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
          {/* Left Side Content */}
          <div className="space-y-6 lg:col-span-6 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <Sparkles className="w-3.5 h-3.5" />
              New Release drops
            </div>
            
            <h1 className="font-jost text-6xl md:text-8xl font-black tracking-tight leading-[0.95] uppercase text-white">
              NIKE AIR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-amber-300">
                MAX PULSE
              </span>
            </h1>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg">
              The next generation of Air is here. Designed with a point-loaded cushioning system that targets specific impact zones for premium response and comfort.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#latest-shoes"
                className="group flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-colors font-semibold px-6 py-3 rounded-full text-sm"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#trending"
                className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/50 transition-all font-medium px-6 py-3 rounded-full text-sm text-zinc-300 hover:text-white"
              >
                View Trending
              </Link>
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="relative flex justify-center items-center lg:col-span-6 h-[300px] md:h-[450px] lg:h-[500px]">
            <Image
              src="/hero-shoe.png"
              alt="Nike Air Max Pulse"
              width={650}
              height={480}
              className="object-contain animate-float drop-shadow-[0_30px_35px_rgba(0,0,0,0.65)] select-none pointer-events-none"
              priority
            />
            
            {/* Overlay Badges */}
            <div className="absolute top-[10%] left-[5%] bg-black/60 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">Cushioning</div>
              <div className="text-xs font-extrabold text-white">Point-Loaded Air</div>
            </div>
            
            <div className="absolute bottom-[15%] right-[5%] bg-black/60 border border-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">Performance</div>
              <div className="text-xs font-extrabold text-white">All-Day Bounce</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section id="trending" className="py-20 lg:py-28 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase flex items-center gap-1">
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
              Curated Favorites
            </span>
            <h2 className="font-jost text-3xl md:text-5xl font-black uppercase text-foreground mt-1 tracking-tight">
              Trending Now
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
            Discover this week's most-wanted styles, curated based on popular demands and street trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group border border-border bg-muted/20 shadow-sm">
            <Image
              src="/trending-1.png"
              alt="Air Force 1 Retro"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
              <span className="text-[10px] text-orange-400 font-bold tracking-widest uppercase mb-1">Retro Classics</span>
              <h3 className="font-jost text-xl md:text-2xl font-black uppercase mb-1 tracking-tight">Air Force 1 '07</h3>
              <p className="text-xs text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
                The legend lives on in this classic silhouette, matching premium leathers with timeless style.
              </p>
              <Link href="#latest-shoes" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white hover:text-orange-400 transition-colors">
                Explore Now <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group border border-border bg-muted/20 shadow-sm">
            <Image
              src="/trending-2.png"
              alt="Nike Dunk Low"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
              <span className="text-[10px] text-orange-400 font-bold tracking-widest uppercase mb-1">Urban Lifestyle</span>
              <h3 className="font-jost text-xl md:text-2xl font-black uppercase mb-1 tracking-tight">Nike Dunk Low</h3>
              <p className="text-xs text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
                Created for the hardwood but taken to the streets, the Dunk Low returns with crisp overlays.
              </p>
              <Link href="#latest-shoes" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white hover:text-orange-400 transition-colors">
                Explore Now <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden group border border-border bg-muted/20 shadow-sm">
            <Image
              src="/trending-3.png"
              alt="Jordan Retro High"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
              <span className="text-[10px] text-orange-400 font-bold tracking-widest uppercase mb-1">Flight Originals</span>
              <h3 className="font-jost text-xl md:text-2xl font-black uppercase mb-1 tracking-tight">Jordan Retro</h3>
              <p className="text-xs text-zinc-300 line-clamp-2 mb-4 leading-relaxed">
                Experience the premium court feel. Inspired by the AJ1, this reissue brings heritage to your feet.
              </p>
              <Link href="#latest-shoes" className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-white hover:text-orange-400 transition-colors">
                Explore Now <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BANNER */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-3xl overflow-hidden group shadow-md border border-border/40">
          <Image
            src="/feature.png"
            alt="Nike Tech Fleece & Zoom"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 text-white max-w-xl space-y-4 z-20">
            <span className="text-orange-400 font-bold tracking-widest text-xs uppercase">Premium Gear</span>
            <h2 className="font-jost text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
              ELEVATE YOUR <br />
              DAILY STRIDE
            </h2>
            <p className="text-zinc-300 text-xs md:text-sm leading-relaxed max-w-md">
              Engineered materials meet sleek silhouettes. The new Flight Series pushes boundaries of comfort, support, and responsiveness.
            </p>
            <div className="pt-2">
              <Link href="#latest-shoes" className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 transition-colors font-bold px-6 py-3 rounded-full text-xs md:text-sm gap-2">
                Shop Flight Gear
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST SHOES GRID */}
      <section id="latest-shoes" className="py-20 lg:py-28 mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase">New Arrivals</span>
            <h2 className="font-jost text-3xl md:text-5xl font-black uppercase text-foreground mt-1 tracking-tight">
              Latest Shoes
            </h2>
          </div>
          
          {/* Responsive Category Pills */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground data-[active=true]:bg-foreground data-[active=true]:text-background data-[active=true]:shadow-lg data-[active=true]:shadow-foreground/10"
                data-active={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredShoes.map((shoe) => (
            <ProductCard key={shoe.id} {...shoe} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
