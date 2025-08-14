# Lenis + Framer Motion Setup for Next.js 14+

This project now uses **Lenis** for smooth scrolling and **Framer Motion** for animations, providing a production-ready solution without layout issues or extra whitespace.

## 🚀 Features

- **Lenis Smooth Scrolling**: Buttery-smooth scrolling with optimized performance
- **Framer Motion Animations**: Page transitions, content animations, and micro-interactions
- **No Layout Issues**: Proper height handling prevents extra whitespace
- **Route Transitions**: Smooth page-to-page navigation with `AnimatePresence`
- **Mobile Optimized**: Touch-friendly scrolling and responsive animations
- **TypeScript Support**: Full type safety throughout the animation system

## 📦 Installation

```bash
# Install Lenis
bun add @studio-freight/lenis

# Framer Motion is already installed
```

## 🏗️ Architecture

### File Structure

```
components/
├── animations/
│   └── page-transition.tsx      # Page transition components
├── providers/
│   └── lenis-provider.tsx       # Lenis smooth scroll provider
└── navigation.tsx               # Animated navigation component

hooks/
└── use-lenis-scroll.ts          # Lenis utility hooks

app/
├── layout.tsx                   # Root layout with providers
├── page.tsx                     # Home page with animations
└── about/
    └── page.tsx                 # Example page with transitions
```

## 🔧 Core Components

### 1. LenisProvider (`components/providers/lenis-provider.tsx`)

Wraps the entire app and provides smooth scrolling:

```tsx
<LenisProvider>
  <PageTransition>{children}</PageTransition>
</LenisProvider>
```

**Features:**

- Automatic scroll restoration on route changes
- Optimized scroll settings for performance
- Proper cleanup and memory management

### 2. PageTransition (`components/animations/page-transition.tsx`)

Handles page transitions with `AnimatePresence`:

```tsx
<PageTransition mode="wait">{children}</PageTransition>
```

**Components Available:**

- `PageTransition`: Main page wrapper
- `LayoutWrapper`: For layout-level animations
- `ContentWrapper`: For content animations with delays

### 3. Navigation (`components/navigation.tsx`)

Animated navigation with mobile menu:

```tsx
<Navigation />
```

**Features:**

- Smooth mobile menu animations
- Route-aware navigation
- Touch-friendly interactions

## 🎨 Usage Examples

### Basic Page Animation

```tsx
import { ContentWrapper } from "@/components/animations/page-transition";

export default function MyPage() {
  return (
    <div className="min-h-screen">
      <ContentWrapper>
        <h1>Animated Title</h1>
      </ContentWrapper>

      <ContentWrapper delay={0.1}>
        <p>Content with staggered animation</p>
      </ContentWrapper>
    </div>
  );
}
```

### Custom Animation Variants

```tsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>;
```

### Page Transitions

```tsx
// In layout.tsx
<PageTransition mode="wait">{children}</PageTransition>

// Each page automatically gets smooth transitions
```

## ⚙️ Configuration

### Lenis Options

```tsx
<LenisProvider
  options={{
    duration: 1.2, // Scroll animation duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true, // Enable smooth wheel scrolling
    wheelMultiplier: 1, // Wheel scroll sensitivity
    touchMultiplier: 2, // Touch scroll sensitivity
  }}
>
  {children}
</LenisProvider>
```

### Animation Settings

```tsx
// Page transition timing
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

// Content animation defaults
const contentDefaults = {
  duration: 0.6,
  ease: "easeOut",
  delay: 0.1,
};
```

## 🎯 Best Practices

### 1. Animation Hierarchy

- Use `PageTransition` for route-level animations
- Use `ContentWrapper` for section-level animations
- Use `motion.div` for element-level animations

### 2. Performance

- Keep animations under 60fps
- Use `will-change: transform` sparingly
- Avoid animating layout properties (width, height)

### 3. Accessibility

- Respect `prefers-reduced-motion`
- Provide fallbacks for non-JS users
- Ensure animations don't interfere with navigation

### 4. Mobile Considerations

- Use touch-friendly animation durations
- Avoid complex animations on low-end devices
- Test on various screen sizes and orientations

## 🔄 Adding New Pages

### 1. Create Page Component

```tsx
// app/new-page/page.tsx
"use client";

import { ContentWrapper } from "@/components/animations/page-transition";

export default function NewPage() {
  return (
    <div className="min-h-screen">
      <ContentWrapper>
        <h1>New Page</h1>
      </ContentWrapper>
    </div>
  );
}
```

### 2. Add Navigation Link

```tsx
// In components/navigation.tsx
<Link href="/new-page" className="...">
  New Page
</Link>
```

### 3. Page Automatically Gets Transitions

The `PageTransition` wrapper in `layout.tsx` automatically handles all routes.

## 🐛 Troubleshooting

### Common Issues

1. **Extra Whitespace Below Footer**

   - Ensure `min-h-screen` instead of `h-screen`
   - Check for conflicting CSS height properties
   - Verify Lenis is properly initialized

2. **Animations Not Working**

   - Check if component is wrapped in `ContentWrapper`
   - Verify Framer Motion imports are correct
   - Ensure no CSS conflicts with `overflow: hidden`

3. **Smooth Scrolling Issues**
   - Verify Lenis is initialized in `LenisProvider`
   - Check for conflicting scroll behaviors
   - Ensure proper cleanup on unmount

### Debug Mode

```tsx
// Enable Lenis debug mode
<LenisProvider
  options={{
    duration: 1.2,
    debug: true, // Add this for debugging
  }}
>
```

## 📱 Mobile Optimization

### Touch Scrolling

- Lenis automatically handles touch gestures
- Optimized for mobile performance
- Respects device scroll preferences

### Responsive Animations

```tsx
const isMobile = window.innerWidth < 768;
const animationDuration = isMobile ? 0.4 : 0.6;

<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: animationDuration }}
>
```

## 🚀 Production Deployment

### Build Optimization

```bash
npm run build
npm run start
```

### Performance Monitoring

- Monitor Core Web Vitals
- Check animation frame rates
- Verify smooth scrolling performance

### SEO Considerations

- Animations don't affect SEO
- Content is accessible to crawlers
- Progressive enhancement approach

## 📚 Additional Resources

- [Lenis Documentation](https://github.com/studio-freight/lenis)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

When adding new animations:

1. Follow the existing pattern
2. Use `ContentWrapper` for content animations
3. Test on mobile devices
4. Ensure accessibility compliance
5. Update this documentation

## 📄 License

This implementation uses:

- Lenis (MIT License)
- Framer Motion (MIT License)
- Next.js (MIT License)
- Tailwind CSS (MIT License)
