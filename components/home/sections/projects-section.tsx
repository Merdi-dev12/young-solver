'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShowcaseCard } from '@/components/home/sections/showcase-card'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { FEATURED_PROJECTS, PROJECT_CATEGORIES } from '@/content/site'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/providers/language-provider'

type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export function ProjectsSection() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects =
    activeCategory === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="relative bg-secondary/18 py-24 backdrop-blur-[2px]">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="fadeUp" className="mb-12 text-center">
          <h2 className="mb-4 text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('projects.title.prefix')} <span className="text-primary">{t('projects.title.highlight')}</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">{t('projects.description')}</p>

          <div className="flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'relative overflow-hidden transition-all duration-300',
                  activeCategory !== category && 'glass hover:border-primary/25 hover:text-foreground',
                )}
              >
                {activeCategory === category ? (
                  <motion.span
                    layoutId="project-filter-indicator"
                    className="absolute inset-0 rounded-[inherit] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{t(`projects.filter.${category}`)}</span>
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredProjects.map((project) => (
            <div key={`${activeCategory}-${project.key}`} className="w-full max-w-[18.75rem]">
              <ShowcaseCard
                title={t(`projects.${project.key}.title`)}
                subtitle={t(`projects.filter.${project.category}`)}
                description={t(`projects.${project.key}.description`)}
                image={project.image}
                tags={project.tags}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="glass">
              {t('projects.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
