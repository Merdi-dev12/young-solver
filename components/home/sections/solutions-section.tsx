'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { SOLUTION_PRODUCTS } from '@/content/site'
import { useLanguage } from '@/providers/language-provider'

export function SolutionsSection() {
  const { t } = useLanguage()

  return (
    <section id="solutions" className="relative bg-background/72 py-24 backdrop-blur-[2px]">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="fadeUp" className="mb-14 text-center">
          <h2 className="mb-4 text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('solutions.title.prefix')} <span className="text-primary">{t('solutions.title.highlight')}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('solutions.description')}</p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {SOLUTION_PRODUCTS.map((solution) => (
            <StaggerItem key={solution.key}>
              <GlassCard className="group h-full overflow-hidden p-0">
                <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-b-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_45%)]" />
                  <Image
                    src={solution.image}
                    alt={t(`solutions.${solution.key}.title`)}
                    width={220}
                    height={220}
                    className="relative z-10 h-36 w-36 rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 144px, 220px"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-foreground text-xl font-semibold">{t(`solutions.${solution.key}.title`)}</h3>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {t(`solutions.${solution.key}.description`)}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span key={tag} className="rounded bg-secondary/50 px-2 py-1 text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="glass flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      {t('projects.code')}
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('projects.demo')}
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link href="/solutions">
            <Button size="lg" variant="outline" className="glass">
              {t('solutions.viewAll')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
