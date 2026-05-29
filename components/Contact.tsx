'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socials = [
  { Icon: Github, label: 'GitHub', href: 'https://github.com/johnsales' },
  { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/johnathan-santiago' },
  { Icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/john__santiago' },
  { Icon: Mail, label: 'Email', href: 'mailto:johnathan-santiago@outlook.com' },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>

        <motion.h2
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's Build
          <br />
          <span
            style={{
              background: 'linear-gradient(130deg, rgb(37,99,235) 0%, rgb(96,165,250) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Together
          </span>
        </motion.h2>

        <motion.p
          className="text-muted text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind, or just want to connect? My inbox is always
          open — I'm excited to hear what you're building.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:johnathan-santiago@outlook.com"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.45)] transition-all duration-300 text-sm cursor-pointer"
          >
            Send Me a Message
          </a>
          <a
            href="https://github.com/johnsales"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105 text-sm cursor-pointer"
          >
            View GitHub →
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socials.map(({ Icon, label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center border border-border rounded-full text-muted hover:text-foreground hover:border-accent/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
              whileHover={{ scale: 1.15, y: -3 }}
            >
              <Icon size={15} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
