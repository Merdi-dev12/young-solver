# Young Solver — Platform Portfolio

> Site corporate et portfolio de **Young Solver**, agence de développement numérique.  
> **Status:** Production · **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Three.js

---

## Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Stack technologique](#stack-technologique)
3. [Architecture](#architecture)
4. [Installation & Configuration](#installation--configuration)
5. [Environnement](#environnement)
6. [Design System](#design-system)
7. [Structure & Pages](#structure--pages)
8. [Internationalisation (i18n)](#internationalisation-i18n)
9. [SEO & Métadonnées](#seo--métadonnées)
10. [Déploiement](#déploiement)
11. [Maintenance & Mises à jour](#maintenance--mises-à-jour)

---

## Vue d'ensemble

Portfolio corporate et vitrine digitale de **Young Solver**, showcasing les services, projets clients et solutions SaaS propriétaires.

### Capacités

- **Services** : Développement web, apps mobiles, backend, design, IA, cloud
- **Portefeuille** : 6+ projets clients premium
- **Solutions** : 5 produits SaaS (SolverFlow, NovaOps, Atelier AI, VaultData, AuditFlow)
- **Présentation** : Équipe, valeurs et compétences
- **Lead Generation** : Formulaire de contact intégré

### Caractéristiques techniques

- ✅ **Bilingue** : Français / Anglais avec switcher de langue
- ✅ **Responsive** : Mobile, tablet, desktop — optimisé tous formats
- ✅ **Performance** : Next.js SSG/SSR, lazy-loading, image optimization
- ✅ **SEO** : Métadonnées structurées, Open Graph, sitemap.xml, robots.txt
- ✅ **Animations** : Framer Motion, Three.js 3D — fluidité premium
- ✅ **Production** : Déploiement FTP automatisé via GitHub Actions

---

## Stack technologique

| Technologie | Rôle |
|---|---|
| **Next.js 16** | Framework React fullstack — SSR, SSG, API routes |
| **React 19** | Bibliothèque UI — hooks, fragments, composants |
| **TypeScript** | Typage strict — zéro any, type-safe |
| **Tailwind CSS 4** | Utility-first CSS — design system intégré |
| **Framer Motion** | Animations fluides — transitions et scroll effects |
| **Three.js** | Graphiques 3D — hero scene, particles, cubes interactifs |
| **React Three Fiber** | Wrapper React pour Three.js |
| **react-intl** | i18n — FR/EN avec traductions |
| **Lucide React** | Bibliothèque d'icônes modernes |
| **React Hook Form** | Gestion formulaires optimisée |
| **Zod** | Validation schéma TypeScript |
| **next-themes** | Mode clair/sombre avec persistance |
| **PostCSS 8** | Transformations CSS — autoprefixer, Tailwind |

---

## Architecture

### Structure du projet

```
app/                          # Pages & routes App Router (Next.js 13+)
├── layout.tsx              # Layout racine + métadonnées globales
├── page.tsx                # Accueil
├── projects/               # Portefeuille
│   ├── page.tsx
│   ├── projects-content.tsx
│   └── opengraph-image.tsx
├── solutions/              # Solutions SaaS
│   ├── page.tsx
│   ├── solutions-content.tsx
│   └── opengraph-image.tsx
├── sitemap.ts              # Sitemap XML
└── robots.ts               # robots.txt

components/
├── home/                   # Sections accueil
│   ├── home-page.tsx
│   ├── sections/           # Hero, Services, Projects, Solutions, Contact, About
│   └── visuals/            # 3D scenes, animations
├── layout/                 # Header, footer
├── ui/                     # Composants réutilisables
└── seo/                    # Structured data

content/
├── site.ts                 # Configuration site, projets, solutions
├── translations.ts         # Traductions FR/EN
└── site-config.ts          # Constantes

providers/
├── language-provider.tsx   # Context i18n
└── theme-provider.tsx      # Context dark mode

hooks/
└── use-active-theme-mode.ts

lib/
└── utils.ts

public/
├── images/
└── assets/

styles/
└── globals.css             # Styles globaux Tailwind
```

### Flux de données

- **Pages** : SSG statique (pre-rendered à la build)
- **Métadonnées** : Générées côté serveur (Server Components)
- **Contenu dynamique** : Client Components avec `useLanguage()` hook
- **i18n** : LanguageProvider en racine, accessible via hook `useLanguage()`
- **3D/Animations** : Lazy-loaded côté client (Framer Motion, Three.js)

---

## Installation & Configuration

### Prérequis

- **Node.js** ≥ 22.x
- **pnpm** ≥ 10.x
- **Git**

### Setup local

```bash
# 1. Cloner le dépôt
git clone https://github.com/Merdi-dev12/young-solver.git
cd young-solver

# 2. Installer les dépendances
pnpm install

# 3. Copier la configuration d'environnement
cp .env.example .env.local

# 4. Démarrer le serveur local
pnpm dev
# → http://localhost:3000

# 5. Build de production
pnpm build

# 6. Tester le build
pnpm start
```

### Vérifications avant commit

```bash
# Linting
pnpm lint

# Type checking
pnpm type-check

# Build final
pnpm build
```

---

## Environnement

Variables requises dans `.env.local` :

```env
# URL publique (Open Graph, metadonnées)
NEXT_PUBLIC_SITE_URL=https://www.young-solver.com

# Email de contact
NEXT_PUBLIC_CONTACT_EMAIL=contact@young-solver.com

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G_XXXXXXXX
```

### GitHub Secrets (CI/CD FTP)

Configurer dans **Settings → Secrets and variables → Actions** :

```
FTP_SERVER        = votre-domaine.com
FTP_USERNAME      = utilisateur_ftp
FTP_PASSWORD      = motdepasse_ftp
FTP_PORT          = 21  (standard FTP)
```

---

## Design System

### Palette de couleurs

| Rôle | Hex |
|---|---|
| Fond principal | `#020617` |
| Arrière-plan secondaire | `#0a0a0a` |
| Texte principal | `#ffffff` |
| Texte secondaire | `#9ca3af` |
| Accent primaire | `#007BFF` |
| Succès | `#10b981` |
| Erreur | `#ef4444` |

### Typographie

- **Body/Labels** : Inter (default)
- **Headings** : Poppins (optionnel)

### Composants clés

| Composant | Rôle |
|---|---|
| `Button` | Bouton primaire/outline |
| `Input` / `Textarea` | Champs formulaire |
| `GlassCard` | Glassmorphism cards |
| `ScrollAnimation` | Animations au scroll |
| `BrandLogo` | Logo Young Solver |

### Animations

- **Scroll Fade-Up** : Apparition progressive
- **Hero 3D** : Cubes interactifs (Three.js)
- **Button Hover** : Scale + shadow
- **Stagger** : Items en cascade

---

## Structure & Pages

### Accueil (`/`)

Sections complètes :

1. **Hero** — Logo animé + titre "Construisons les solutions digitales de demain"
2. **Services** — 4 colonnes desktop
3. **Projets** — Grille 4 colonnes (featured) → lien vers `/projects`
4. **Solutions** — Grille 4 colonnes (featured) → lien vers `/solutions`
5. **À propos** — Valeurs, stats, compétences
6. **Contact** — Formulaire + informations

### Portefeuille (`/projects`)

- Liste complète tous les projets (4 colonnes desktop)
- Titre/description bilingue via i18n
- Responsive : 1 mobile, 2 tablet, 4 desktop

### Solutions (`/solutions`)

- Tous les produits SaaS (4 colonnes desktop)
- Tags et descriptions (FR/EN)
- Même layout responsive que projets

---

## Internationalisation (i18n)

### Langues supportées

- **FR** (français) — défaut
- **EN** (anglais)

### Utilisation

```typescript
import { useLanguage } from '@/providers/language-provider'

export function MyComponent() {
  const { t, language } = useLanguage()
  return <h1>{t('hero.title')}</h1>
}
```

### Fichier de traductions

Toutes les chaînes dans `content/translations.ts` :

```typescript
export const translations = {
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'hero.title': { fr: 'Construisons...', en: 'Building...' },
  // ... 100+ entrées
}
```

### Sélecteur de langue

- Switcher de drapeaux en header
- URL query: `?lang=en`
- Persisté en localStorage

---

## SEO & Métadonnées

### Fichiers SEO

| Fichier | Rôle |
|---|---|
| `app/layout.tsx` | Métadonnées globales |
| `app/sitemap.ts` | Sitemap XML |
| `app/robots.ts` | robots.txt |
| `components/seo/*` | Schema.org JSON-LD |

### Open Graph

Chaque page inclut :
- `og:title`, `og:description`, `og:image`
- `og:url`, `og:type`
- Twitter cards

### Optimisations

- ✅ Titres/descriptions uniques par page
- ✅ Headings hiérarchiques (H1-H6)
- ✅ Alt-text images
- ✅ Liens internes avec `<Link>` Next.js
- ✅ Mobile-friendly
- ✅ Schema.org structuré

---

## Déploiement

### Build & Déploiement Local

```bash
# Build
pnpm build

# Test
pnpm start

# Logs
pnpm lint
pnpm type-check
```

### CI/CD FTP (GitHub Actions)

Workflow automatique à chaque push sur `main` :

1. ✅ Checkout code
2. ✅ Setup Node.js 22 + pnpm 10
3. ✅ Install dependencies
4. ✅ Type check (non-bloquant)
5. ✅ Build Next.js
6. ✅ Deploy `./.next/` → FTP server (port 21)

**Fichier:** `.github/workflows/deploy.yml`

---

## Maintenance & Mises à jour

### Process de modification

1. **Créer une branche feature**
   ```bash
   git checkout -b feature/nom-modification
   ```

2. **Apporter les changements**
   - Éditer composants, pages, contenu
   - Ajouter traductions FR/EN si applicable

3. **Vérifier localement**
   ```bash
   pnpm dev        # Tester en développement
   pnpm build      # Vérifier build
   pnpm type-check # Vérifier types
   pnpm lint       # Vérifier linting
   ```

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: description claire du changement"
   git push origin feature/nom-modification
   ```

5. **Merger vers main**
   - Créer PR sur GitHub
   - Push automatique en production via CI/CD

### Mises à jour courantes

#### Ajouter un projet au portefeuille

1. Éditer `content/site.ts` — ajouter entrée dans `FEATURED_PROJECTS`
2. Ajouter traduction dans `content/translations.ts` (FR/EN)
3. Ajouter image dans `public/images/projects/`

#### Ajouter une solution SaaS

1. Éditer `content/site.ts` — ajouter dans `SOLUTION_PRODUCTS`
2. Ajouter traductions (FR/EN)
3. Ajouter image

#### Modifier un texte

1. Éditer `content/translations.ts` (clé + valeurs FR/EN)
2. Utiliser `useLanguage()` dans le composant

#### Animations/Styling

1. Éditer composant `.tsx`
2. Utiliser Tailwind classes ou Framer Motion
3. Tester `pnpm dev`

### Déploiement après modifications

```bash
git push origin main
# → GitHub Actions déclenche automatiquement :
#   - Build Next.js
#   - Deploy FTP (port 21)
```

---

## Support & Documentation

- **Framework** : [Next.js 16 Docs](https://nextjs.org)
- **Styling** : [Tailwind CSS 4](https://tailwindcss.com)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **3D** : [Three.js](https://threejs.org) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## Statut

- **Version** : 1.0.0
- **Statut** : Production
- **Dernière mise à jour** : 18 avril 2026
- **Maintenance** : Mise à jour régulière

---

> **Young Solver** — Construisons les solutions digitales de demain.  
> Tous droits réservés © 2026
