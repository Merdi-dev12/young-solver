'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2, Heart } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation'
import { ABOUT_STATS, ABOUT_VALUE_KEYS } from '@/content/site'
import { useLanguage } from '@/providers/language-provider'

const VALUE_ICONS = {
  innovation: Sparkles,
  quality: CheckCircle2,
  client: Heart,
} as const

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Éléments décoratifs en arrière-plan pour la cohérence visuelle */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,123,255,0.06),transparent_25%)]" />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Partie gauche : Contenu textuel et Statistiques */}
          <ScrollAnimation variant="fadeRight">
            <div className="max-w-xl">
              <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {t('about.title.prefix')}{' '}
                <span className="text-primary">{t('about.title.highlight')}</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p className="font-medium text-foreground/90 leading-relaxed">
                  {t('about.description.lead')}
                </p>
                <p className="leading-relaxed">
                  {t('about.description.body')}
                </p>
              </div>

              {/* Grille de statistiques harmonisée avec le reste de l'UI */}
              <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {ABOUT_STATS.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <StaggerItem key={stat.key}>
                      <div className="group flex flex-col items-center rounded-2xl border border-border/40 bg-secondary/10 p-4 text-center backdrop-blur-sm transition-all hover:bg-secondary/20 lg:items-start lg:text-left">
                        <Icon className="mb-2 h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                        <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                          {t(`about.stats.${stat.key}`)}
                        </span>
                      </div>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          </ScrollAnimation>

          {/* Partie droite : Cartes de Valeurs (Glassmorphism) */}
          <div className="relative">
            {/* Cercle décoratif derrière les cartes */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,123,255,0.03)_0%,transparent_70%)]" />
            
            <StaggerContainer className="relative space-y-6">
              {ABOUT_VALUE_KEYS.map((valueKey) => {
                const Icon = VALUE_ICONS[valueKey as keyof typeof VALUE_ICONS]
                
                return (
                  <StaggerItem key={valueKey}>
                    <GlassCard 
                      className="group transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(0,123,255,0.3)]">
                          {Icon && <Icon className="h-6 w-6" />}
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-semibold tracking-tight">
                            {t(`about.value.${valueKey}.title`)}
                          </h3>
                          <p className="text-[0.92rem] leading-relaxed text-muted-foreground">
                            {t(`about.value.${valueKey}.description`)}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}