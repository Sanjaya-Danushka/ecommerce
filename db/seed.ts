import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import { products } from "./schema"
import "dotenv/config"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/wzitsrb4oucx3fbo3vi1/AIR+MAX+90.png",
    category: "Running",
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours.",
    price: 110.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b208-25a0b3e3e464/NIKE+DUNK+LOW+RETRO.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Pegasus 42",
    description:
      "The Nike Pegasus 42 is your go-to everyday running shoe. Responsive ReactX foam delivers a smooth, energized ride mile after mile.",
    price: 140.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/2e5e2d5b-83cc-4758-b589-c81b64ba9472/NIKE+PEGASUS+42.png",
    category: "Running",
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description:
      "In the '70s, Nike was the new shoe on the block. The Blazer Mid '77 Vintage harks back to Nike's humble beginnings.",
    price: 105.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/BLAZER+MID+%2777+VINTAGE.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Air Jordan 1 Retro High OG",
    description:
      "The Air Jordan 1 Retro High remakes the classic sneaker with new colours and fresh details, keeping its iconic look intact.",
    price: 180.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2e75addd-8bf9-4829-8a41-38c26cf7d6a3/AIR+JORDAN+1+RETRO+HIGH+OG.png",
    category: "Basketball",
  },
  {
    name: "Nike React Infinity Run Flyknit 4",
    description:
      "The Nike React Infinity Run 4 gives you a supportive, smooth feel for an easy, distraction-free run.",
    price: 160.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c110ce5f-73d6-4a26-a1f0-3f0aa47e1cc8/NIKE+REACTX+INFINITY+RUN+4.png",
    category: "Running",
  },
  {
    name: "Nike Metcon 9",
    description:
      "The Nike Metcon 9 is made for your toughest training sessions. Stable for lifting, flexible for sprints and comfortable for agility work.",
    price: 150.0,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c4031572-503c-4980-8840-c60a3f8e9b6c/NIKE+METCON+9.png",
    category: "Training",
  },
]

async function seed() {
  console.log("Seeding database...")
  await db.insert(products).values(nikeProducts)
  console.log(`Seeded ${nikeProducts.length} Nike products.`)
  process.exit(0)
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
