'use client'

import Link from 'next/link'
import { ShowcaseCard } from '@/components/home/sections/showcase-card'
import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
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

        <div className="flex flex-wrap justify-center gap-6">
          {SOLUTION_PRODUCTS.map((solution) => (
            <div key={solution.key} className="w-full md:max-w-[18.75rem]">
              <ShowcaseCard
                title={t(`solutions.${solution.key}.title`)}
                subtitle={t(`projects.filter.${solution.category}`)}
                description={t(`solutions.${solution.key}.description`)}
                image={solution.image}
                tags={solution.tags}
                showGithubButton
              />
            </div>
          ))}
        </div>

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
