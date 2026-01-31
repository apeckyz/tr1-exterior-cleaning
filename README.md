# Premium Service Business Multi-Page Template

A designer-led, premium multi-page application template for service businesses. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 **Designer-Led Aesthetics**: Minimalist, modern, premium design
- 📱 **Mobile-First**: Fully responsive across all devices
- ⚡ **Multi-Page Architecture**: Dedicated routes for better UX and SEO
- 🎭 **Smooth Page Transitions**: Powered by Framer Motion
- 🎯 **Conversion-Focused**: Clear CTAs and trust indicators
- 🔧 **Easy Customization**: Single config file for content management
- 🍪 **GDPR-Compliant**: Cookie consent banner with localStorage
- 🔒 **Privacy Modal**: Interactive privacy policy overlay
- 🎬 **Media Placeholders**: Reusable components for images/videos

## Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Page Structure

The template includes four main pages:

- **`/` (Home)**: Hero, Trust Indicators, Services Preview
- **`/services`**: Complete services listing with detailed cards
- **`/about`**: Company history, values, team showcase
- **`/contact`**: Dedicated contact form with business information

## Customization

### Change Business Type & Content

Edit `data/config.ts` to customize all content:

```typescript
export const siteConfig = {
  businessType: "Your Business Type",
  businessName: "Your Business Name",
  services: [...],
  testimonials: [...],
  // ... more configuration
}
```

### Change Brand Color

Edit `tailwind.config.ts` and modify the `primary-brand` color palette:

```typescript
colors: {
  'primary-brand': {
    50: '#f0f9ff',
    // ... your custom color scale
    950: '#082f49',
  }
}
```

### Customize JMCDEV Attribution

In `components/Footer.tsx`, update the designer link:

```typescript
// Change hover color by modifying the className
className="... hover:text-primary-brand-600 ..."
```

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with CookieConsent
│   ├── page.tsx                # Home page
│   ├── services/page.tsx       # Services page
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigation with active states
│   ├── Hero.tsx                # Hero section
│   ├── Footer.tsx              # Footer with Privacy Modal
│   ├── PageTransition.tsx      # Page transition wrapper
│   ├── MediaPlaceholder.tsx    # Reusable media placeholder
│   ├── PrivacyModal.tsx        # Privacy policy modal
│   ├── CookieConsent.tsx       # Cookie consent banner
│   └── ...                     # More components
├── data/
│   └── config.ts               # Site configuration
└── tailwind.config.ts          # Tailwind configuration
```

## Interactive Components

### Cookie Consent Banner

Automatically appears on first visit. Saves user preference to localStorage.

**Customization:**
- Colors: Edit Tailwind classes in `components/CookieConsent.tsx`
- Storage key: Modify `STORAGE_KEY` constant
- Animation: Adjust Framer Motion variants

### Privacy Policy Modal

Triggered by clicking "Privacy Policy" in the footer.

**Customization:**
- Content: Edit the policy sections in `components/PrivacyModal.tsx`
- Styling: Modify Tailwind classes
- Backdrop: Adjust `backdrop-blur-sm` class

### Media Placeholders

Reusable component for image/video placeholders:

```tsx
<MediaPlaceholder 
  type="image" 
  aspectRatio="landscape" 
  className="rounded-xl" 
/>
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS (Mobile-first)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (via Google Fonts)

## Design Philosophy

This template follows a "designer-led" approach with:
- High contrast typography
- Ample whitespace
- Sophisticated neutral palette
- Premium interactions
- Editorial-style layouts
- Smooth page transitions

## Credits

Template designed by [jmcdev](https://jmcdev.co.uk)

## License

MIT
