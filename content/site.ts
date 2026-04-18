import {
  Cloud,
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Phone,
  Smartphone,
  Target,
  Trophy,
  Twitter,
  Users,
} from 'lucide-react'

export type OrchestrationTone = 'blue' | 'cyan' | 'slate' | 'amber' | 'violet'

export type OrchestrationItemIcon =
  | 'shield'
  | 'globe'
  | 'zap'
  | 'arrow-left-right'
  | 'box'
  | 'expand'
  | 'layers'
  | 'clock'
  | 'database'
  | 'server'
  | 'eye'
  | 'circle'

export type OrchestrationItem = {
  icon: OrchestrationItemIcon
  label: string
  value: string
  meta?: string
  state?: 'success'
}

export type OrchestrationPanel = {
  key: string
  title: string
  badge: string
  tone: OrchestrationTone
  items: readonly OrchestrationItem[]
  previewRows?: readonly string[]
  footer?: string
}

export type OrchestrationColumn = {
  key: string
  region: string
  panels: readonly OrchestrationPanel[]
  menu?: readonly string[]
}

export const HOME_SECTION_IDS = ['services', 'projects', 'solutions', 'about', 'contact'] as const

export const SERVICE_ITEMS = [
  { icon: Code, key: 'web' },
  { icon: Smartphone, key: 'mobile' },
  { icon: Database, key: 'backend' },
  { icon: Palette, key: 'design' },
] as const

export const PROJECT_CATEGORIES = ['all', 'web', 'mobile', 'api', 'none'] as const

export const PARTNER_NAMES = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Three.js',
] as const

export const SOLUTION_PRODUCTS = [
  {
    key: 'solverflow',
    category: 'api',
    tags: ['Workflow', 'Automation', 'Ops'],
    image: 'https://image.thum.io/get/width/1200/crop/760/https://www.postman.com/',
  },
  {
    key: 'novaops',
    category: 'web',
    tags: ['Monitoring', 'Cloud', 'Teams'],
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/Image_1.jpg',
  },
  {
    key: 'atelierai',
    category: 'api',
    tags: ['AI', 'Content', 'Studio'],
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/Image_2.jpeg',
  },
  {
    key: 'vaultdata',
    category: 'api',
    tags: ['Data', 'Analytics', 'BI'],
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_3.jpg',
  },
  {
    key: 'auditflow',
    category: 'api',
    tags: ['Audit', 'Compliance', 'Security'],
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_4.jpg',
  },
  {
    key: 'logicflow',
    category: 'api',
    tags: ['BPM', 'Logic', 'Service'],
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_6.jpg',
  },
] as const

export const FEATURED_PROJECTS = [
  {
    key: 'ecommerce',
    category: 'web',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)',
    image: 'https://image.thum.io/get/width/1200/crop/760/https://www.sonos.com/',
  },
  {
    key: 'health',
    category: 'mobile',
    tags: ['React Native', 'Health', 'IA'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    image: 'https://image.thum.io/get/width/1200/crop/760/https://www.nike.com/',
  },
  {
    key: 'document',
    category: 'api',
    tags: ['AI', 'Python', 'Cloud'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_5.jpg',
  },
  {
    key: 'dashboard',
    category: 'web',
    tags: ['SaaS', 'Analytics', 'Data'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    image: 'https://image.thum.io/get/width/1200/crop/760/https://www.nerdwallet.com/',
  },
  {
    key: 'logistics',
    category: 'mobile',
    tags: ['Maps', 'Real-time', 'Tracking'],
    gradient: 'linear-gradient(135deg, #E76F51 0%, #F4A261 100%)',
    image: 'https://image.thum.io/get/width/1200/crop/760/https://jobs.netflix.com/',
  },
  {
    key: 'assistant',
    category: 'none',
    tags: ['GPT-4', 'LangChain', 'Redis'],
    gradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    image: 'https://bhoqaychlhfshwxfeznc.supabase.co/storage/v1/object/public/temporaire/image_4.jpg',
  },
] as const

export const ABOUT_VALUE_KEYS = ['innovation', 'quality', 'client'] as const

export const ABOUT_STATS = [
  { icon: Users, value: '50+', key: 'clients' },
  { icon: Trophy, value: '100+', key: 'projects' },
  { icon: Target, value: '99%', key: 'success' },
  { icon: Cloud, value: '5+', key: 'experience' },
] as const

export const CONTACT_DETAILS = [
  { icon: Mail, key: 'email', value: 'youngsolverdrc@gmail.com' },
  { icon: Phone, key: 'phone', value: '+243 983-314-789' },
  { icon: MapPin, key: 'location', value: 'Kinshasa, RDC' },
] as const

export const SOCIAL_LINKS = [
  { href: '#', icon: Github, label: 'GitHub' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:youngsolverdrc@gmail.com', icon: Mail, label: 'Email' },
] as const

export const ORCHESTRATION_COLUMNS: readonly OrchestrationColumn[] = [
  {
    key: 'edge',
    region: 'Product foundation',
    panels: [
      {
        key: 'product',
        title: 'Product design',
        badge: 'Product',
        tone: 'blue',
        items: [
          { icon: 'shield', label: 'Discovery workshop', value: 'Active', state: 'success' },
          { icon: 'globe', label: 'UX architecture', value: 'Ready', state: 'success' },
          { icon: 'zap', label: 'UI system', value: 'Reusable', state: 'success' },
        ],
      },
      {
        key: 'platforms',
        title: 'Platform scope',
        badge: 'Scope',
        tone: 'blue',
        items: [
          { icon: 'globe', label: 'Web applications', value: 'Enabled', meta: 'Next.js, React, admin dashboards' },
          { icon: 'globe', label: 'Mobile applications', value: 'Delivery', meta: 'Flutter for Android and iOS' },
          { icon: 'globe', label: 'Desktop software', value: 'Available', meta: 'Tauri, Electron, internal tools' },
        ],
        footer: '+ Add delivery scope',
      },
    ],
  },
  {
    key: 'runtime',
    region: 'Build and release flow',
    panels: [
      {
        key: 'web',
        title: 'Web app',
        badge: 'Web',
        tone: 'cyan',
        items: [
          { icon: 'arrow-left-right', label: 'Frontend stack', value: 'Next.js 16' },
          { icon: 'box', label: 'Backoffice', value: 'Enabled', state: 'success' },
          { icon: 'layers', label: 'SEO and analytics', value: 'Ready', state: 'success' },
        ],
      },
      {
        key: 'mobile',
        title: 'Mobile app',
        badge: 'Mobile',
        tone: 'slate',
        items: [
          { icon: 'box', label: 'Shared codebase', value: 'Flutter' },
          { icon: 'expand', label: 'Native delivery', value: 'iOS + Android' },
          { icon: 'layers', label: 'Offline sync', value: 'Optional' },
        ],
      },
      {
        key: 'automation',
        title: 'Automation',
        badge: 'Ops',
        tone: 'slate',
        items: [
          { icon: 'box', label: 'CI/CD pipeline', value: 'Active', state: 'success' },
          { icon: 'clock', label: 'Release workflow', value: 'Tracked', state: 'success' },
          { icon: 'layers', label: 'QA checkpoints', value: 'Included', state: 'success' },
        ],
        footer: '+ Add release flow',
      },
    ],
  },
  {
    key: 'data',
    region: 'Cloud and intelligence',
    menu: ['View architecture', 'Deploy release', 'Open workspace'],
    panels: [
      {
        key: 'backend',
        title: 'Backend core',
        badge: 'API',
        tone: 'amber',
        previewRows: ['Auth', 'Payments', 'Notifications', 'Sync jobs'],
        items: [
          { icon: 'database', label: 'Runtime', value: 'Node.js / Python' },
          { icon: 'server', label: 'Architecture', value: 'Scalable APIs' },
        ],
      },
      {
        key: 'intelligence',
        title: 'AI services',
        badge: 'AI',
        tone: 'violet',
        items: [
          { icon: 'database', label: 'Assistants and agents', value: 'Integrated', state: 'success' },
          { icon: 'box', label: 'Document workflows', value: 'Automated' },
          { icon: 'layers', label: 'Prompt routing', value: 'Managed' },
        ],
      },
      {
        key: 'cloud',
        title: 'Cloud ops',
        badge: 'Cloud',
        tone: 'violet',
        items: [
          { icon: 'eye', label: 'Monitoring', value: 'Visible', state: 'success' },
          { icon: 'circle', label: 'Deploy target', value: 'Production ready', state: 'success' },
          { icon: 'globe', label: 'Hosting model', value: 'Cloud managed' },
        ],
        footer: '+ Add production service',
      },
    ],
  },
] as const
