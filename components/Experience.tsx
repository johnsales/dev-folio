'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Role = {
  title: string
  period: string
  current: boolean
  highlights: string[]
  tags: string[]
}

type Job = {
  company: string
  url: string
  referral: string | null
  roles: Role[]
}

const jobs: Job[] = [
  {
    company: 'The Home Depot',
    url: 'https://www.homedepot.com',
    referral: null,
    roles: [
      {
        title: 'Senior Software Engineer — Booking Search',
        period: 'Present',
        current: true,
        highlights: [
          'Enabled store-based rollout feature on the main apps (Receipt-Search and Booked-Order-Search)',
          'Implemented GitHub Actions in multiple apps to enable build and deployment in LLC environments',
          'Designed a solution for communication between cloud apps and the in-store app using Monarch, an internal tool',
          'Implemented a reprocess framework for a SAGA design pattern project',
        ],
        tags: ['Java', 'GraphQL', 'GitHub Actions', 'Monarch', 'SAGA', 'GCP'],
      },
      {
        title: 'Senior Software Engineer — Store Checkout',
        period: 'Oct 2024',
        current: false,
        highlights: [
          'Led Vault Rehoming: migrated legacy C/Tandem DB system to Java Spring Boot + CockroachDB on PCF & GCP',
          'Designed secure daily CRDB snapshots on GKE via JavaScript automation — achieved 100% uptime',
          'Built comprehensive Grafana dashboards for real-time operational visibility',
          'Established code review sessions and Slack channels to coordinate distributed team',
        ],
        tags: ['Java', 'Spring Boot', 'CockroachDB', 'GKE', 'GCP', 'Grafana'],
      },
    ],
  },
  {
    company: 'Grid Dynamics',
    url: 'https://www.griddynamics.com',
    referral: '/ref-homedepot-griddynamics.pdf',
    roles: [
      {
        title: 'Software Engineer — Retail Media (Contract at The Home Depot)',
        period: 'Oct 2021 — Oct 2024',
        current: false,
        highlights: [
          'Modernized 6-year-old Spring Boot API with Java 17 + OpenFeign on GCP',
          'Designed GraphQL + REST hybrid model, improving code maintainability by 20%',
          'Optimized auto-scaling: reduced CPU usage from 80% → 25%; latency from 150ms → 30ms via Redis caching',
          'Improved unit test coverage by 80% using Cucumber BDD',
          'Increased product recommendation engagement by 21% through internal API integration',
        ],
        tags: ['Java 17', 'Spring Boot', 'GraphQL', 'Redis', 'GCP', 'React'],
      },
    ],
  },
  {
    company: 'FUNPEC — SINFO / UFRN',
    url: 'https://sipac.ufrn.br/public/jsp/portal.jsf',
    referral: '/ref-funpec-ufrn.pdf',
    roles: [
      {
        title: 'Software Developer — SIPAC & SigAdmin Systems',
        period: 'Jun 2019 — Jan 2021',
        current: false,
        highlights: [
          'Enhanced SIPAC and SIGAA university systems serving multiple Brazilian institutions',
          'Transitioned from JNDI to RabbitMQ for data synchronization, reducing dependencies by 10%',
          'Implemented advanced password security features in SIGADMIN',
          'Maintained 2-week SLA compliance across development support for multiple institutions',
        ],
        tags: ['Java', 'RabbitMQ', 'JNDI', 'SIPAC', 'SIGAA'],
      },
    ],
  },
  {
    company: 'TCE — IMD / UFRN',
    url: 'https://legis.tce.rn.gov.br/#/login',
    referral: '/ref-tce-imd.pdf',
    roles: [
      {
        title: 'Software Developer — Legis & SIAP AP Concessoes',
        period: 'Oct 2017 — May 2019',
        current: false,
        highlights: [
          'Built Legis — norms and laws submission system for the Court of Accounts of Rio Grande do Norte',
          'Digitized the auditing process and reduced validation time by 15%',
          'Provided public access to legislation via web portal',
          'Streamlined project management using a customized agile methodology',
        ],
        tags: ['C#', '.NET', 'Angular 2+', 'SQL Server'],
      },
    ],
  },
]

const education = [
  {
    degree: 'MS Computer Science',
    school: 'Maharishi International University (MIU)',
    location: 'Fairfield, IA, USA',
    year: '2023',
  },
  {
    degree: 'Technical Residency — Legal IT',
    school: 'Federal University UFRN',
    location: 'Natal, Brazil',
    year: '2019',
  },
  {
    degree: 'BS Information Systems',
    school: 'Rio Grande do Norte University Center (UNI-RN)',
    location: 'Natal, Brazil',
    year: '2016',
  },
]

const certs = [
  {
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    year: 'Feb 2026',
    url: 'https://www.credly.com/badges/32da6551-32df-405f-81a7-97cc14bc4860/linked_in_profile',
  },
  {
    name: 'Generative AI Leader',
    issuer: 'Credly / IAPP',
    year: 'Sep 2025',
    url: 'https://www.credly.com/badges/77757621-34ab-4c29-ba4d-e420a3ffafda/linked_in_profile',
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Linux Foundation',
    year: 'Aug 2024',
    url: 'https://www.credly.com/badges/a9ea7e5c-434e-4758-8374-0bdb244f8e67/linked_in_profile',
  },
  {
    name: 'API Security Fundamentals',
    issuer: 'APISec University',
    year: 'Mar 2024',
    url: 'https://www.credly.com/badges/952cbf3b-f3b4-415b-bc2b-fd2ed4033f7b/linked_in_profile',
  },
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: 'Dec 2022',
    url: '/resume.pdf',
  },
]

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" ref={ref} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Career
        </motion.p>
        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-14">
            {jobs.map((job, i) => {
              const isCurrent = job.roles.some((r) => r.current)
              return (
                <motion.div
                  key={job.company}
                  className="md:pl-10 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3.5px] hidden md:block ${
                      isCurrent ? 'bg-accent' : 'bg-border'
                    }`}
                  />

                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {job.company}
                      </h3>
                      {isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-medium bg-accent/15 text-accent border border-accent/20 rounded-full">
                          Current
                        </span>
                      )}
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${job.company} website`}
                        className="text-muted hover:text-accent transition-colors cursor-pointer"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                      {job.referral && (
                        <a
                          href={job.referral}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium text-accent border border-accent/30 bg-accent/5 rounded-full hover:bg-accent/10 hover:border-accent/60 transition-all duration-200 cursor-pointer"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                          Referral
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Roles within this company */}
                  <div className="space-y-8">
                    {job.roles.map((role, ri) => (
                      <div
                        key={role.title}
                        className={`pl-4 border-l-2 ${
                          role.current ? 'border-accent/40' : 'border-border'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                          <div className="flex items-center gap-2">
                            <p className="text-foreground font-medium text-sm">{role.title}</p>
                            {role.current && (
                              <span className="px-1.5 py-0.5 text-[9px] font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                                Now
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted font-mono whitespace-nowrap">{role.period}</span>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {role.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-sm text-muted leading-relaxed">
                              <span className="text-accent mt-1 flex-shrink-0">→</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {role.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs text-muted border border-border rounded-md bg-card"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Education + Certifications */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-8 pb-4 border-b border-border">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-foreground font-medium text-sm">{edu.degree}</p>
                      <p className="text-muted text-xs mt-0.5">{edu.school}</p>
                      <p className="text-muted/60 text-xs mt-0.5">{edu.location}</p>
                    </div>
                    <span className="text-xs font-mono text-muted flex-shrink-0">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-8 pb-4 border-b border-border">
              Certifications
            </h3>
            <div className="space-y-6">
              {certs.map((cert) => (
                <div key={cert.name} className="flex items-start justify-between gap-4 group">
                  <div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium text-sm hover:text-accent transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      {cert.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <p className="text-muted text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-muted flex-shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
