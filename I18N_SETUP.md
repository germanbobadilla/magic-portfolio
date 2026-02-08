# Internationalization (i18n) Setup

Your website now supports **English** and **Spanish** with automatic locale detection based on user location and browser preferences.

## 🌍 Features

- ✅ Automatic locale detection from browser settings
- ✅ Language switcher in the header (EN/ES buttons)
- ✅ Locale-based routing (`/en/*` and `/es/*`)
- ✅ SEO-friendly with proper sitemap and metadata
- ✅ Translation files for easy content management

## 📁 Key Files

### Configuration
- **`src/middleware.ts`** - Handles locale detection and routing
- **`src/i18n/request.ts`** - Configures next-intl
- **`next.config.mjs`** - Includes next-intl plugin

### Translation Files
- **`messages/en.json`** - English translations
- **`messages/es.json`** - Spanish translations

### Components
- **`src/components/LanguageSwitcher.tsx`** - Language toggle component
- **`src/app/[locale]/layout.tsx`** - Main layout with locale support

## 🔧 How to Use

### 1. Access Different Locales

The website will automatically detect the user's preferred language, but you can access specific locales:

- English: `http://localhost:3000/en`
- Spanish: `http://localhost:3000/es`
- Auto (default): `http://localhost:3000` (redirects based on browser settings)

### 2. Add New Translations

Edit the translation files to add or modify text:

**messages/en.json:**
```json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "home": {
    "title": "Portfolio"
  }
}
```

**messages/es.json:**
```json
{
  "nav": {
    "home": "Inicio",
    "about": "Acerca de"
  },
  "home": {
    "title": "Portafolio"
  }
}
```

### 3. Use Translations in Components

In your React components, use the `useTranslations` hook:

```tsx
'use client';

import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('nav');

  return (
    <div>
      <h1>{t('home')}</h1>
    </div>
  );
}
```

### 4. Switch Languages

Users can switch languages using the EN/ES buttons in the header, which will:
- Preserve the current page
- Update the URL to include the new locale
- Re-render the page with translated content

## 🗂️ Supported Locales

Currently configured locales:
- **en** (English) - Default
- **es** (Spanish)

To add more locales:
1. Update `src/middleware.ts` - add locale to the array
2. Update `src/i18n/request.ts` - add locale validation
3. Update `src/app/[locale]/layout.tsx` - add locale to array
4. Create new translation file in `messages/` directory (e.g., `messages/fr.json`)

## 🌐 How Locale Detection Works

1. **URL Priority**: If user visits `/es/about`, Spanish is used
2. **Browser Settings**: If no locale in URL, checks `Accept-Language` header
3. **Default Fallback**: If no match found, defaults to English

## 📝 Next Steps

1. **Update Content**: Replace placeholder content in `src/resources/content.tsx` with your actual information
2. **Translate Content**: Add Spanish versions of your personal information
3. **Customize**: Modify translation keys in `messages/` files to match your needs
4. **Add More Languages**: Follow the steps above to support additional languages

## 🚀 Build & Deploy

The i18n setup works automatically in both development and production:

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## 📚 Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
