"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana García",
    role: "Lead Developer @ Innovatech",
    content:
      "DevCraft ha acelerado nuestro desarrollo en un 60%. Los componentes son de calidad profesional y el soporte es insuperable.",
    avatar: "👩‍💻",
    rating: 5,
  },
  {
    name: "Carlos López",
    role: "Founder @ StartupXYZ",
    content:
      "La mejor inversión que hice para mi equipo. El soporte y la documentación son impecables. Recomendado 100%.",
    avatar: "👨‍💼",
    rating: 5,
  },
  {
    name: "María Rodríguez",
    role: "Full Stack Developer",
    content: "Increíble comunidad. Todos los días aprendo algo nuevo de otros desarrolladores. ¡Gracias miguxld!",
    avatar: "👩‍🚀",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Lo que dicen nuestros usuarios
            </span>
          </h2>
          <p className="text-lg text-gray-400">Miles de desarrolladores confían en DevCraft</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-500/5 group-hover:from-cyan-400/10 group-hover:to-pink-500/10 transition-all"></div>

              {/* Border glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: "inset 0 0 20px rgba(0, 255, 200, 0.1)" }}
              ></div>

              <div className="relative z-10">
                {/* Quote icon */}
                <Quote size={28} className="text-cyan-400/50 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-cyan-400/10">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Watermark */}
        <div className="mt-16 text-center">
          <p className="text-xs text-cyan-400/30 font-mono">
            Testimonios de usuarios reales que usan{" "}
            <a
              href="https://miguxld-portafolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
            >
              DevCraft by miguxld
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
