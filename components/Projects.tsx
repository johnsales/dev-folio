'use client'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Vault Rehoming — The Home Depot',
    description:
      'Led migration of a legacy C/Tandem DB system to Java Spring Boot + CockroachDB on GCP. Designed secure daily CRDB snapshots on GKE via JavaScript automation, achieving 100% uptime for 90-day historical data.',
    tags: ['Java', 'Spring Boot', 'CockroachDB', 'GKE', 'GCP', 'JavaScript'],
    glow: 'rgba(37,99,235,0.18)',
    liveUrl: 'https://www.homedepot.com',
    githubUrl: '#',
  },
  {
    id: '02',
    title: 'Ad Placement API — Grid Dynamics',
    description:
      'Modernized a 6-year-old Spring Boot API using Java 17 and OpenFeign on GCP. Designed a GraphQL + REST hybrid model, optimized auto-scaling cutting CPU usage from 80% → 25%, and slashed latency from 150ms → 30ms via Redis caching.',
    tags: ['Java 17', 'Spring Boot', 'GraphQL', 'Redis', 'GCP', 'React'],
    glow: 'rgba(139,92,246,0.18)',
    liveUrl: 'https://www.homedepot.com',
    githubUrl: '#',
  },
  {
    id: '03',
    title: 'Microservices Springboot',
    description:
      'Personal project showcasing a microservices architecture with Netflix OSS — Eureka Registry, API Gateway, Config Server, Circuit Breaker, and OpenFeign. Orchestrated with Docker Compose.',
    tags: ['Java', 'Spring Boot', 'Netflix OSS', 'Docker', 'Eureka'],
    glow: 'rgba(6,182,212,0.18)',
    liveUrl: '#',
    githubUrl: 'https://github.com/johnsales/microservices-springboot',
  },
  {
    id: '04',
    title: 'Legis — TCE / IMD UFRN',
    description:
      'Norms and laws submission system for the Court of Accounts of RN. Digitized the auditing process, reduced validation time by 15%, and provided public access to state legislation.',
    tags: ['C#', '.NET', 'Angular 2+', 'SQL Server'],
    glow: 'rgba(245,158,11,0.18)',
    liveUrl: 'https://legis.tce.rn.gov.br/#/login',
    githubUrl: '#',
  },
  {
    id: '05',
    title: 'SIPAC & SIGAA — FUNPEC / UFRN',
    description:
      'Enhanced university management systems serving multiple Brazilian institutions. Transitioned from JNDI to RabbitMQ for data sync, reducing dependencies by 10%, and implemented advanced password security features.',
    tags: ['Java', 'RabbitMQ', 'JNDI', 'University Systems'],
    glow: 'rgba(34,197,94,0.18)',
    liveUrl: 'https://sipac.ufrn.br/public/jsp/portal.jsf',
    githubUrl: '#',
  },
  {
    id: '06',
    title: 'Home Server Projects',
    description:
      'Self-hosted applications running on personal infrastructure — Fibonacci sequence calculator and BMI calculator deployed across Oracle OCI and on-premises home server.',
    tags: ['Self-hosted', 'Oracle OCI', 'Linux', 'Bash'],
    glow: 'rgba(251,191,36,0.18)',
    liveUrl: 'https://home.johnathansantiago.com',
    githubUrl: 'https://github.com/johnsales',
  },
]

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      className="relative flex-shrink-0 w-[340px] md:w-[420px] p-8 bg-card border border-border rounded-2xl group overflow-hidden cursor-default select-none"
      whileHover={{ y: -10, borderColor: 'rgba(37,99,235,0.5)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Per-card glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -10%, ${project.glow}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <span className="font-mono text-xs text-muted/60">{project.id}</span>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source code"
              className="text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <Github size={15} />
            </a>
            <a
              href={project.liveUrl}
              aria-label="Live site"
              className="text-muted hover:text-accent transition-colors cursor-pointer"
            >
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs text-muted border border-border rounded-md bg-background/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })
  const [xDistance, setXDistance] = useState(-1200)

  // Measure actual translation needed so it works on all viewport sizes
  useEffect(() => {
    const calculate = () => {
      if (cardsRef.current) {
        const totalWidth = cardsRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        const padding = viewportWidth < 768 ? 24 : 64
        setXDistance(-(totalWidth - viewportWidth + padding))
      }
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, xDistance])

  return (
    <>
      {/* Section header */}
      <div ref={headerRef} className="pt-24 pb-0 px-6 max-w-7xl mx-auto">
        <motion.p
          className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.p>
        <div className="flex items-end justify-between">
          <motion.h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Selected
            <br />
            Projects
          </motion.h2>
          <motion.p
            className="hidden md:block text-muted text-sm"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ← Scroll to explore →
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll — sticky pin technique */}
      <section id="projects" ref={sectionRef} style={{ height: '280vh' }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={cardsRef}
            className="flex gap-5 pl-6 md:pl-16"
            style={{ x }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {/* Trailing spacer so last card doesn't sit at edge */}
            <div className="flex-shrink-0 w-8 md:w-16" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
