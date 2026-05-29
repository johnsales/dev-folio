'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socials = [
  { Icon: Github, href: 'https://github.com/johnsales', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/johnathan-santiago', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/john__santiago', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:johnathan-santiago@outlook.com', label: 'Email' },
]

const stats = [
  { value: '4', label: 'Companies' },
  { value: '5', label: 'Certifications' },
  { value: '2', label: 'Languages' },
]

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yBlob = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-dvh flex items-center"
    >
      {/* Clip container for decorative blobs only — keeps them from scrolling outside section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Parallax ambient blobs */}
        <motion.div className="absolute inset-0" style={{ y: yBlob }}>
          <div
            className="absolute top-[15%] left-[5%] w-[700px] h-[700px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)',
            }}
          />
        </motion.div>

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(250,250,250,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full"
        style={{ y: yText, opacity }}
      >
        {/* Status badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-border bg-card/60 text-xs text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Senior Software Engineer · The Home Depot
        </motion.div>

        {/* Name — masked reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-heading text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.88] tracking-tighter text-foreground"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Johnathan
          </motion.h1>
        </div>
        <div className="mb-10">
          <motion.h1
            className="font-heading text-[clamp(3.5rem,11vw,10rem)] font-black leading-[0.88] tracking-tighter pb-[0.25em]"
            style={{
              background: 'linear-gradient(130deg, rgb(37,99,235) 0%, rgb(96,165,250) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          >
            Santiago
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            <p className="text-muted text-lg md:text-xl max-w-md leading-relaxed mb-8">
              Senior Software Engineer specializing in{' '}
              <span className="text-foreground font-medium">Java</span> &amp;{' '}
              <span className="text-foreground font-medium">Cloud</span>. Currently at{' '}
              <span className="text-foreground font-medium">The Home Depot</span>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-white font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.45)] transition-all duration-300 cursor-pointer text-sm"
              >
                View Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-border text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
              >
                See My Work
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 flex items-center justify-center border border-border rounded-full text-muted hover:text-foreground hover:border-accent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-10 md:gap-20 mt-16 pt-10 border-t border-border/40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-3xl md:text-4xl font-black text-foreground">
                {s.value}
              </p>
              <p className="text-muted text-xs mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
