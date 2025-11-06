"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                DEVCRAFT
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              El marketplace premium para desarrolladores. 2.5K+ componentes React listos para producción.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Producto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#features" className="hover:text-cyan-400 transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#marketplace" className="hover:text-cyan-400 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="hover:text-cyan-400 transition-colors">
                  Testimonios
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Sígueme</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/miguxld"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-david-vasquez-leyton-2a148133a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:miguxld.corp@gmail.com"
                className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 hover:text-cyan-300 transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © 2025 DevCraft. Creado con ❤️ por{" "}
            <a
              href="https://miguxld-portafolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              Miguxld Dev
            </a>
          </p>
          <a
            href="https://github.com/miguxld/portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center gap-2"
          >
            Ver en GitHub <ArrowRight size={16} />
          </a>
        </div>

        {/* Watermarks adicionales */}
        <div className="mt-8 pt-8 border-t border-cyan-400/5 text-center">
          <p className="text-xs text-cyan-400/20 font-mono mb-2">
            Construido con React, Next.js, Tailwind CSS y mucha pasión 🚀
          </p>
          <p className="text-xs text-cyan-400/20 font-mono">
            Diseño y desarrollo por{" "}
            <a href="https://github.com/miguxld" className="text-cyan-400/40 hover:text-cyan-400/70 transition">
              @miguxld
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
