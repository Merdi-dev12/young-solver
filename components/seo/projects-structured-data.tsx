import React from 'react'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/content/site-config'

export function ProjectsStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/projects#webpage`,
    name: 'All Projects - Young Solver',
    description: 'Complete portfolio of web, mobile, and AI projects',
    url: `${SITE_URL}/projects`,
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
          name: 'Projects',
          item: `${SITE_URL}/projects`,
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
