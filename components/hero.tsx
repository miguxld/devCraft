"use client"

import { Sparkles, Zap, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Fondo animado ÉPICO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbs de neón */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float-rotate"></div>
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-rotate"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-float-rotate"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur-sm">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300">Marketplace de Código Premium</span>
          </div>
        </div>

        {/* Título principal */}
        <h1
          className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight text-center animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
            DEVCRAFT
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 text-center mb-12 max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Tu biblioteca ilimitada de componentes React premium, hooks personalizados y templates profesionales.{" "}
          <span className="text-cyan-400 font-semibold">Ahorra 100 horas de desarrollo.</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-bold text-base shadow-lg hover:shadow-cyan-400/50 transition-all"
          >
            <Zap size={20} className="mr-2" />
            Explorar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 font-bold text-base bg-transparent"
          >
            <Code2 size={20} className="mr-2" />
            Ver Demo
          </Button>
        </div>

        {/* Stats Row */}
        <div
          className="grid grid-cols-3 gap-6 pt-12 border-t border-cyan-400/20 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent group-hover:text-cyan-400 transition-colors">
              2.5K+
            </div>
            <div className="text-sm text-gray-400 mt-2">Componentes</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent group-hover:text-pink-500 transition-colors">
              45K+
            </div>
            <div className="text-sm text-gray-400 mt-2">Desarrolladores</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-blue-400 transition-colors">
              99.8%
            </div>
            <div className="text-sm text-gray-400 mt-2">Satisfacción</div>
          </div>
        </div>

        {/* Watermark hero */}
        <div className="mt-20 text-center text-xs text-cyan-400/40 font-mono">
          <p>
            Diseñado y desarrollado por{" "}
            <a
              href="https://miguxld-portafolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/70 hover:text-cyan-400 transition-colors"
            >
              @miguxld
            </a>{" "}
            ✨
          </p>
        </div>
      </div>
    </section>
  )
}
