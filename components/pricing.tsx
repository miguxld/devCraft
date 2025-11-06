"use client"

import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfecto para comenzar",
    features: ["100+ componentes", "Comunidad activa", "Actualizaciones gratuitas", "Documentación completa"],
    highlighted: false,
    badge: "Inicio",
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mes",
    description: "Para desarrolladores profesionales",
    features: [
      "Todos los componentes",
      "Soporte prioritario",
      "Actualizaciones premium",
      "Descargas ilimitadas",
      "Acceso API",
      "Comunidad privada",
    ],
    highlighted: true,
    badge: "Popular",
  },
  {
    name: "Team",
    price: "$29",
    period: "/mes",
    description: "Para equipos de desarrollo",
    features: [
      "Todo Pro incluído",
      "Soporte dedicado 24/7",
      "Colaboración en equipo",
      "Licencias múltiples",
      "Consultoría incluida",
      "Custom components",
    ],
    highlighted: false,
    badge: "Enterprise",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Planes Transparentes
            </span>
          </h2>
          <p className="text-lg text-gray-400">Elige el plan perfecto para ti. Sin sorpresas.</p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl p-8 border transition-all duration-300 group ${
                plan.highlighted
                  ? "border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 to-pink-500/5 scale-105 shadow-2xl shadow-cyan-400/20"
                  : "border-cyan-400/20 hover:border-cyan-400/50 bg-gradient-to-br from-cyan-400/5 to-pink-500/5"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-black">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-8">{plan.description}</p>

              {/* Pricing */}
              <div className="mb-8">
                <span className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  {plan.price}
                </span>
                {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
              </div>

              {/* Button */}
              <Button
                className={`w-full mb-8 font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black shadow-lg hover:shadow-cyan-400/50"
                    : "border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60"
                }`}
              >
                <Zap size={16} className="mr-2" />
                Comenzar
              </Button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Watermark */}
        <div className="mt-16 text-center">
          <p className="text-xs text-cyan-400/30 font-mono">
            Precios justos y transparentes por{" "}
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
