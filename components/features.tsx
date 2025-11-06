"use client"

import { Code2, Zap, Shield, Users, Lightbulb, Rocket } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Código Ultra Limpio",
    description: "TypeScript 100%, bien documentado y listo para producción.",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Zap,
    title: "Velocidad Extrema",
    description: "Sin dependencias innecesarias. Componentes ultra optimizados.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Pruebas automatizadas y auditorías de seguridad incluidas.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Conecta, colabora y crece con miles de desarrolladores.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Nuevos componentes cada semana. Siempre a la vanguardia.",
    gradient: "from-purple-400 to-violet-500",
  },
  {
    icon: Rocket,
    title: "Deploy en Segundos",
    description: "Integración con Vercel, Netlify y todas las plataformas.",
    gradient: "from-cyan-400 to-pink-500",
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Por qué elegir DevCraft
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Diseñado por desarrolladores experimentados, para desarrolladores que no aceptan compromisos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Background gradient dinámico */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-500/5 group-hover:from-cyan-400/10 group-hover:to-pink-500/10 transition-all"></div>

                {/* Border glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: "inset 0 0 20px rgba(0, 255, 200, 0.1)" }}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="bg-background rounded-md w-full h-full flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Watermark Features */}
        <div className="mt-20 text-center">
          <p className="text-xs text-cyan-400/30 font-mono">
            Creado con pasión por{" "}
            <a
              href="https://github.com/miguxld"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400/60 hover:text-cyan-400 transition-colors"
            >
              miguxld
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
