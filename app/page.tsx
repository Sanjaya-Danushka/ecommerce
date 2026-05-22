import { ProductCard } from "@/components/product-card"

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
  return (
    <div>
      <div className="font-jost text-heading-1">Nike</div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Latest Shoes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderShoes.map((shoe) => (
            <ProductCard key={shoe.id} {...shoe} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
