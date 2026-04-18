'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { SERVICE_ITEMS } from '@/content/site'
import { useLanguage } from '@/providers/language-provider'

const SERVICE_VISUALS = {
  web: {
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/Image_1.jpg',
    tone: 'border-[#23442d] bg-[#122118] text-[#8fd79d]',
  },
  mobile: {
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/Image_2.jpeg',
    tone: 'border-[#263b63] bg-[#121c2f] text-[#8eb3ff]',
  },
  backend: {
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_3.jpg',
    tone: 'border-[#5d3d17] bg-[#2a1d11] text-[#f0ab54]',
  },
  design: {
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_4.jpg',
    tone: 'border-[#4d3374] bg-[#241831] text-[#b792ff]',
  },
} as const

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative bg-background/72 py-24 backdrop-blur-[2px]">
      <div className="container mx-auto px-4">
        <ScrollAnimation variant="fadeUp">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-[#050505] px-6 py-6 text-white shadow-[0_28px_80px_rgba(0,0,0,0.2)] sm:px-8 sm:py-8 lg:px-12 lg:py-12">
            <div className="mb-8 flex flex-wrap gap-3">
              {SERVICE_ITEMS.map((serviceItem) => (
                <span
                  key={serviceItem.key}
                  className={`rounded-full border px-4 py-2 text-sm font-medium ${SERVICE_VISUALS[serviceItem.key].tone}`}
                >
                  {t(`services.${serviceItem.key}.title`)}
                </span>
              ))}
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="max-w-2xl pt-2">
                <h2 className="mb-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                  Des services pensés
                  <br />
                  comme de vrais produits.
                </h2>

                <p className="max-w-xl text-lg leading-relaxed text-white/62 sm:text-[1.35rem]">
                  {t('services.description')}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_14px_40px_rgba(255,255,255,0.08)]">
                  Explorer nos services
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[430px]">
                <div className="relative h-full">
                  {SERVICE_ITEMS.map((serviceItem, index) => {
                    const visual = SERVICE_VISUALS[serviceItem.key]

                    return (
                      <article
                        key={serviceItem.key}
                        className="absolute overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#0b0b0b] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.34)]"
                        style={{
                          top: index === 0 ? '0px' : index === 1 ? '46px' : index === 2 ? '136px' : '226px',
                          left: index === 0 ? '0%' : index === 1 ? '27%' : index === 2 ? '8%' : '39%',
                          width: index === 0 ? '58%' : index === 1 ? '56%' : index === 2 ? '54%' : '50%',
                          transform:
                            index === 0
                              ? 'rotate(-4deg)'
                              : index === 1
                                ? 'rotate(5deg)'
                                : index === 2
                                  ? 'rotate(-3deg)'
                                  : 'rotate(4deg)',
                          zIndex: index + 1,
                        }}
                      >
                        <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-black">
                          <Image
                            src={visual.image}
                            alt={t(`services.${serviceItem.key}.title`)}
                            width={900}
                            height={620}
                            className="aspect-[4/3] w-full object-cover object-top"
                            sizes="(max-width: 1024px) 80vw, 320px"
                          />
                        </div>
                        <div className="px-2 pb-1 pt-4">
                          <h3 className="text-xl font-semibold text-white">
                            {t(`services.${serviceItem.key}.title`)}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-white/62">
                            {t(`services.${serviceItem.key}.description`)}
                          </p>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
