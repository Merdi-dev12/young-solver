import React from 'react'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/content/site-config'

export function SolutionsStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/solutions#webpage`,
    name: 'Our SaaS Solutions - Young Solver',
    description: 'SaaS products for workflow automation, operations monitoring, and AI content creation',
    url: `${SITE_URL}/solutions`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Solutions',
          item: `${SITE_URL}/solutions`,
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
