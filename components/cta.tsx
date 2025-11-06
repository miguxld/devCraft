"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float-rotate"></div>
        <div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-rotate"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Título */}
        <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            ¿Listo para revolucionar tu desarrollo?
          </span>
        </h2>

        {/* Descripción */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Únete a miles de desarrolladores que ya están ahorrando 100+ horas cada mes con DevCraft.
          <span className="text-cyan-400 font-semibold"> Acceso inmediato, sin tarjeta de crédito.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-bold text-base shadow-lg hover:shadow-cyan-400/50 group"
          >
            Empezar Ahora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/80 font-bold text-base bg-transparent"
          >
            Agendar Demo
          </Button>
        </div>

        {/* Info */}
        <p className="text-gray-500 text-sm font-mono">
          Sin tarjeta de crédito • Acceso instantáneo • Cancela cuando quieras
        </p>

        {/* Watermark */}
        <div className="mt-12 text-xs text-cyan-400/30">
          <p>
            Hecho por{" "}
            <a
              href="https://miguxld-portafolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
            >
              @miguxld
            </a>{" "}
            con ❤️
          </p>
        </div>
      </div>
    </section>
  )
}
