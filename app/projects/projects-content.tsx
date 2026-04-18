'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ShowcaseCard } from '@/components/home/sections/showcase-card'
import { ProjectsStructuredData } from '@/components/seo/projects-structured-data'
import { Button } from '@/components/ui/button'
import { FEATURED_PROJECTS } from '@/content/site'
import { useLanguage } from '@/providers/language-provider'

export default function ProjectsPageContent() {
  const { t } = useLanguage()

  return (
    <>
      <ProjectsStructuredData />
      <main className="min-h-screen bg-background pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-14 overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/18 px-6 py-8 sm:px-8 lg:px-10">
            <Link href="/">
              <Button variant="outline" size="sm" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour a l'accueil
              </Button>
            </Link>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.62fr)] lg:items-end">
              <div>
                <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                  {t('projects.title.prefix')} <span className="text-primary">{t('projects.title.highlight')}</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {t('projects.description')}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/60 bg-card p-5">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Collection complete
                </p>
                <p className="mt-3 text-3xl font-semibold text-foreground">{FEATURED_PROJECTS.length}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Une vue plus large de nos projets clients, avec une presentation unifiee et plus elegante.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <div key={project.key} className="w-full md:max-w-[18.75rem]">
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
        </div>
      </main>
    </>
  )
}
