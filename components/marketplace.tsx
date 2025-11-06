"use client"

import { Star, Download, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Advanced Form Builder",
    category: "Componentes",
    price: "$29",
    rating: 4.9,
    downloads: 3421,
    gradient: "from-blue-500 via-cyan-400 to-cyan-300",
    badge: "Trending",
  },
  {
    id: 2,
    name: "Dashboard Template Pro",
    category: "Templates",
    price: "$49",
    rating: 4.8,
    downloads: 2156,
    gradient: "from-purple-500 via-pink-500 to-pink-400",
    badge: "Popular",
  },
  {
    id: 3,
    name: "E-Commerce Hooks",
    category: "Hooks",
    price: "$19",
    rating: 4.95,
    downloads: 5432,
    gradient: "from-orange-500 via-yellow-400 to-yellow-300",
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Animation Library",
    category: "Utilidades",
    price: "$39",
    rating: 4.7,
    downloads: 1890,
    gradient: "from-green-500 via-emerald-400 to-cyan-400",
    badge: "New",
  },
  {
    id: 5,
    name: "Auth System Pro",
    category: "Componentes",
    price: "$34",
    rating: 4.92,
    downloads: 4215,
    gradient: "from-rose-500 via-pink-500 to-orange-400",
    badge: "Trending",
  },
  {
    id: 6,
    name: "UI Icons Pack",
    category: "Recursos",
    price: "$14",
    rating: 4.88,
    downloads: 6842,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "Best Seller",
  },
]

export function Marketplace() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [liked, setLiked] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    const newLiked = new Set(liked)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLiked(newLiked)
  }

  return (
    <section id="marketplace" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Marketplace Premium
            </span>
          </h2>
          <p className="text-lg text-gray-400">Los recursos más descargados, probados y confiables.</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm group-hover:bg-background/60 transition-all duration-300"></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-black">
                  {product.badge}
                </span>
              </div>

              {/* Image placeholder con gradiente */}
              <div className={`h-48 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap size={64} className="text-white/30" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-600 text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{product.rating}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-cyan-400/10">
                  <span className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Download size={14} />
                      {product.downloads}
                    </div>
                    <button
                      onClick={() => toggleLike(product.id)}
                      className="p-2 hover:bg-pink-500/10 rounded-lg transition-all"
                    >
                      <Heart
                        size={16}
                        className={liked.has(product.id) ? "fill-pink-500 text-pink-500" : "text-gray-400"}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más button */}
        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-bold shadow-lg hover:shadow-cyan-400/50 px-8">
            Ver Todo el Marketplace
          </Button>
        </div>

        {/* Watermark */}
        <div className="mt-16 text-center">
          <p className="text-xs text-cyan-400/30 font-mono">
            Marketplace creado por{" "}
            <a
              href="https://github.com/miguxld"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
            >
              @miguxld
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
