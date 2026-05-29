'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const groups = [
  {
    label: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'Python', 'Bash / Linux'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Quarkus', '.NET', 'React', 'Angular 2+', 'OpenFeign'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['GCP', 'AWS', 'PCF', 'Docker', 'Kubernetes (CKAD)', 'GitHub Actions', 'Concourse CI'],
  },
  {
    label: 'Databases & Messaging',
    items: ['CockroachDB', 'Redis', 'PostgreSQL', 'SQL Server', 'NoSQL', 'RabbitMQ'],
  },
  {
    label: 'APIs & Architecture',
    items: ['REST', 'GraphQL', 'SOAP', 'Microservices', 'Vault', 'OpenAPI'],
  },
  {
    label: 'Testing & Monitoring',
    items: ['JUnit', 'Cucumber BDD', 'Jest', 'Wiremock', 'Neoload', 'New Relic', 'Grafana'],
  },
]

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Expertise
        </motion.p>

        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="text-xs text-muted font-medium tracking-[0.15em] uppercase mb-5 pb-3 border-b border-border">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="px-3.5 py-2 bg-card border border-border rounded-lg text-sm text-foreground hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.045 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
