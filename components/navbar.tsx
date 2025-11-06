"use client"

import Link from "next/link"
import { Github, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Background con blur */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-xl border-b border-cyan-400/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 animate-glow-pulse">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg"></div>
            <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
              <Zap size={20} className="text-cyan-400" />
            </div>
          </div>
          <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            DEVCRAFT
          </span>
        </Link>

        {/* Links centrales */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Características", href: "#features" },
            { label: "Marketplace", href: "#marketplace" },
            { label: "Precios", href: "#pricing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
              {hoveredLink === link.href && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Botones derechos */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/miguxld"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-cyan-400/10 rounded-lg transition-all duration-300 group"
          >
            <Github size={20} className="text-cyan-400 group-hover:text-pink-500 transition-colors" />
          </a>
          <Button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-bold shadow-lg hover:shadow-cyan-500/50">
            Comenzar
          </Button>
        </div>
      </div>

      {/* Watermark elegante en navbar */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 text-xs text-cyan-400/40 font-mono">
        <a
          href="https://github.com/miguxld"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400/70 transition"
        >
          by @miguxld
        </a>
      </div>
    </nav>
  )
}
