'use client'

import Image from 'next/image'
import { GlassCard } from '@/components/ui/glass-card'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { SERVICE_ITEMS } from '@/content/site'
import { useLanguage } from '@/providers/language-provider'

const SERVICE_VISUALS = {
  web: {
    image: '/images/projects/ecommerce-app.png',
    accent: 'from-[#0B132B] via-[#123C69] to-[#2A9D8F]',
  },
  mobile: {
    image: '/images/projects/healthtrack-app.png',
    accent: 'from-[#061826] via-[#1B4965] to-[#5FA8D3]',
  },
  backend: {
    image: '/images/projects/dashboard-app.png',
    accent: 'from-[#101820] via-[#213A57] to-[#2A9D8F]',
  },
  design: {
    image: '/images/projects/atelierai-app.png',
    accent: 'from-[#1A102A] via-[#4A266A] to-[#F26CA7]',
  },
} as const

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative bg-background/72 py-24 backdrop-blur-[2px]">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="fadeUp" className="mb-16 text-center">
          <h2 className="mb-4 text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('services.title.prefix')} <span className="text-primary">{t('services.title.highlight')}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t('services.description')}</p>
        </ScrollAnimation>

        <StaggerContainer
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
          staggerDelay={0.1}
        >
          {SERVICE_ITEMS.map((serviceItem) => {
            const Icon = serviceItem.icon
            const visual = SERVICE_VISUALS[serviceItem.key]

            return (
              <StaggerItem key={serviceItem.key}>
                <GlassCard className="group mx-auto h-full w-full max-w-sm overflow-hidden p-0">
                  <div className="flex h-full flex-col">
                    <div
                      className={`relative min-h-[220px] overflow-hidden rounded-b-[2rem] bg-gradient-to-br ${visual.accent}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_42%)]" />
                      <div className="absolute inset-x-0 bottom-0 top-10 mx-auto w-[82%] rounded-[1.8rem] border border-white/15 bg-black/15 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="mb-3 flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
                          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        </div>
                        <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20">
                          <Image
                            src={visual.image}
                            alt={t(`services.${serviceItem.key}.title`)}
                            width={420}
                            height={320}
                            className="h-[168px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 100vw, 320px"
                          />
                        </div>
                      </div>
                      <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col items-center px-6 py-6 text-center">
                      <h3 className="mb-3 text-xl font-semibold text-foreground">
                        {t(`services.${serviceItem.key}.title`)}
                      </h3>
                      <p className="max-w-[30ch] text-sm leading-relaxed text-muted-foreground">
                        {t(`services.${serviceItem.key}.description`)}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
