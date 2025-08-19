# Professional Typography System

## Overview

This project now implements a **professional typography system** based on the **Major Third scale (1.25 ratio)** used by top design companies like Apple, Google, and Figma. The system provides consistent visual hierarchy with mathematically sound proportions.

## Theory Behind the System

### 1. Font Size Scale (Major Third - 1.25 ratio)

The Major Third musical interval creates pleasing visual rhythm:

- **Base**: `<p>` = 16px (perfect for readability)
- **Scale**: 1.25 ratio creates harmonious progression
- **Result**:
  - p = 16px
  - h6 = 20px (16 × 1.25)
  - h5 = 25px (20 × 1.25)
  - h4 = 31.25px (25 × 1.25)
  - h3 = 39px (31.25 × 1.25)
  - h2 = 48.8px (39 × 1.25)
  - h1 = 61px (48.8 × 1.25)

### 2. Letter Spacing (Negative tracking)

- **p**: Default (0%) - Body text needs natural spacing
- **h6**: -0.5% - Tighter for smaller headings
- **h3**: -1.5% - Medium headings
- **h1**: -2% - Largest headings get tightest spacing

**Why this works**: Larger text naturally appears more spaced out, so negative letter-spacing compensates and creates visual balance.

### 3. Line Height (Descending scale)

- **p**: 150% - Generous for body text readability
- **h4**: 130% - Medium headings
- **h2**: 110% - Large headings
- **h1**: 100% - Tightest for impact

**Why this works**: Larger headings need less line-height because they're already visually prominent. Body text needs generous spacing for readability.

## Implementation

### Tailwind Configuration

The system is implemented in `tailwind.config.ts` with:

```typescript
fontSize: {
  'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],       // 16px - p tag
  'xl': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }], // 20px - h6
  '2xl': ['1.5625rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 25px - h5
  '3xl': ['1.953125rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }], // 31.25px - h4
  '4xl': ['2.44140625rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 39px - h3
  '5xl': ['3.0517578125rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 48.8px - h2
  '6xl': ['3.814697265625rem', { lineHeight: '1.0', letterSpacing: '-0.02em' }], // 61px - h1
}
```

### Custom Utilities

#### Letter Spacing

```typescript
letterSpacing: {
  'tightest': '-0.03em',    // -3% for largest headings
  'tighter': '-0.02em',     // -2% for h1, h2, h3
  'tight': '-0.015em',      // -1.5% for h4
  'tight-sm': '-0.01em',    // -1% for h5
  'tight-xs': '-0.005em',   // -0.5% for h6
  'normal': '0em',          // 0% for body text
}
```

#### Line Height

```typescript
lineHeight: {
  'none': '1',              // 100% for h1
  'tight': '1.1',           // 110% for h2
  'snug': '1.3',            // 130% for h4
  'normal': '1.5',          // 150% for body text (p)
}
```

## Usage

### Basic Usage

Simply use the standard HTML elements - they automatically get the correct typography:

```tsx
<h1>This is a heading</h1>           // 61px, 100% line-height, -2% letter-spacing
<h2>This is a subheading</h2>        // 48.8px, 110% line-height, -2% letter-spacing
<h3>This is a section title</h3>     // 39px, 110% line-height, -2% letter-spacing
<h4>This is a subsection</h4>        // 31.25px, 130% line-height, -1.5% letter-spacing
<h5>This is a minor heading</h5>     // 25px, 130% line-height, -1% letter-spacing
<h6>This is a small heading</h6>     // 20px, 130% line-height, -0.5% letter-spacing
<p>This is body text</p>             // 16px, 150% line-height, 0% letter-spacing
```

### Tailwind Classes

Use Tailwind's text size utilities - letter spacing and line height are automatically applied:

```tsx
<h1 className="text-6xl">Heading 1</h1>      // 61px, 100% line-height, -2% letter-spacing
<h2 className="text-5xl">Heading 2</h2>      // 48.8px, 110% line-height, -2% letter-spacing
<h3 className="text-4xl">Heading 3</h3>      // 39px, 110% line-height, -2% letter-spacing
<h4 className="text-3xl">Heading 4</h4>      // 31.25px, 130% line-height, -1.5% letter-spacing
<h5 className="text-2xl">Heading 5</h5>      // 25px, 130% line-height, -1% letter-spacing
<h6 className="text-xl">Heading 6</h6>       // 20px, 130% line-height, -0.5% letter-spacing
<p className="text-base">Body text</p>        // 16px, 150% line-height, 0% letter-spacing
```

### Responsive Typography

Use responsive variants for mobile-first design:

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">Responsive Heading</h1>
// Mobile: 36px | Tablet: 48px | Desktop: 61px
```

### Typography Utilities

Import from `@/lib/typography` for programmatic access:

```tsx
import { TYPOGRAPHY_CLASSES, getTypographyClass } from '@/lib/typography';

// Use predefined classes
<h1 className={TYPOGRAPHY_CLASSES.h1}>Heading</h1>

// Or get classes dynamically
<h2 className={getTypographyClass('h2')}>Subheading</h2>
```

## Typography Mixins

Pre-built typography combinations for common components:

```tsx
import { TYPOGRAPHY_MIXINS } from '@/lib/typography';

// Hero section
<h1 className={TYPOGRAPHY_MIXINS.hero.title}>Hero Title</h1>
<p className={TYPOGRAPHY_MIXINS.hero.subtitle}>Hero Subtitle</p>

// Card component
<h3 className={TYPOGRAPHY_MIXINS.card.title}>Card Title</h3>
<p className={TYPOGRAPHY_MIXINS.card.body}>Card Body</p>

// Form elements
<label className={TYPOGRAPHY_MIXINS.form.label}>Form Label</label>
<input className={TYPOGRAPHY_MIXINS.form.input} />
```

## Best Practices

### 1. Maintain Hierarchy

- Use heading levels sequentially (h1 → h2 → h3)
- Don't skip levels
- Only one h1 per page

### 2. Consistent Spacing

- Use consistent margins between typography elements
- Follow the 8px grid system for spacing

### 3. Readability

- Ensure sufficient contrast (4.5:1 minimum)
- Test on different screen sizes
- Consider line length (45-75 characters optimal)

### 4. Performance

- The system is built into Tailwind, so no additional CSS is loaded
- All utilities are tree-shaken automatically

## Browser Support

- **Modern browsers**: Full support
- **Older browsers**: Graceful fallback to system defaults
- **Mobile**: Optimized for touch interfaces

## Customization

To modify the system:

1. **Adjust base font size**: Change `BASE` in `TYPOGRAPHY_SCALE`
2. **Modify ratio**: Change `RATIO` for different scale progression
3. **Customize letter spacing**: Adjust values in `LETTER_SPACING`
4. **Adjust line heights**: Modify `LINE_HEIGHT` values

## Examples

See `app/typography-demo/page.tsx` for a complete showcase of the system.

## Resources

- **typescale.net**: Interactive typography scale calculator
- **Material Design**: Google's typography guidelines
- **Apple Human Interface Guidelines**: iOS typography standards
- **Figma Design System**: Component-based typography

## Migration Guide

If you're updating existing components:

1. **Remove custom font-size classes**: Replace with new scale
2. **Update line-height**: Use new line-height utilities
3. **Adjust letter-spacing**: Apply new tracking utilities
4. **Test responsiveness**: Ensure mobile typography works

## Support

For questions or issues with the typography system:

1. Check the demo page: `/typography-demo`
2. Review the utility file: `lib/typography.ts`
3. Consult Tailwind documentation for base utilities
4. Test with different content lengths and screen sizes

---

_This typography system follows industry best practices and provides a solid foundation for professional web applications._
