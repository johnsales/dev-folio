'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '4', label: 'Companies' },
  { value: '5', label: 'Certifications' },
  { value: '2', label: 'Languages' },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <div>
            <motion.p
              className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.p>

            <motion.h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Java &amp; Cloud
              <br />
              <span className="text-accent">Engineer</span>
            </motion.h2>

            <motion.div
              className="space-y-5 text-muted leading-relaxed text-[1.0625rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Senior Software Engineer specializing in{' '}
                <span className="text-foreground font-medium">Java</span> and{' '}
                <span className="text-foreground font-medium">Cloud technologies</span>, with deep
                expertise in distributed systems, microservices, and cloud-native architectures on
                GCP and AWS. Passionate about building software that is reliable, performant, and
                built to last.
              </p>
              <p>
                I thrive at the intersection of backend engineering and DevOps — designing systems
                that scale, automating what slows teams down, and shipping meaningful improvements
                to production. I enjoy mentoring engineers and driving technical decisions that
                raise the quality bar across the whole team.
              </p>
              <p>
                Outside of engineering I'm an avid soccer player and fishing enthusiast. I believe
                the balance of hobbies and technical work shapes a sharper, more creative
                problem-solver. Fluent in{' '}
                <span className="text-foreground font-medium">English</span> and{' '}
                <span className="text-foreground font-medium">Portuguese</span>.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Download Resume
              </a>
              <a
                href="#experience"
                className="px-5 py-2.5 border border-border text-muted text-sm hover:text-foreground hover:border-foreground/30 rounded-full transition-all duration-300 cursor-pointer"
              >
                View Experience →
              </a>
            </motion.div>
          </div>

          {/* Right: photo + stats */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-border"
            >
              <Image
                src="/profile.png"
                alt="Johnathan Santiago"
                width={450}
                height={350}
                className="w-full h-auto block"
                priority
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="p-6 bg-card border border-border rounded-2xl hover:border-accent/30 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                >
                  <p className="font-heading text-3xl font-black text-foreground mb-1">{stat.value}</p>
                  <p className="text-muted text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
