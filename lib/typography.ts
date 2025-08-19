/**
 * Professional Typography System - Major Third Scale (1.25 ratio)
 *
 * This system follows the typography theory used by top design companies:
 * - Font sizes follow 1.25 ratio progression
 * - Letter spacing decreases as font size increases
 * - Line height decreases as font size increases
 *
 * Based on research from typescale.net and professional design systems
 */

// Typography scale constants
export const TYPOGRAPHY_SCALE = {
  // Base font size (16px = 1rem)
  BASE: 16,
  // Major Third ratio (1.25)
  RATIO: 1.25,
  // Letter spacing percentages
  LETTER_SPACING: {
    h1: -0.02, // -2%
    h2: -0.02, // -2%
    h3: -0.02, // -2%
    h4: -0.015, // -1.5%
    h5: -0.01, // -1%
    h6: -0.005, // -0.5%
    p: 0, // 0%
  },
  // Line height percentages
  LINE_HEIGHT: {
    h1: 1.0, // 100%
    h2: 1.1, // 110%
    h3: 1.1, // 110%
    h4: 1.3, // 130%
    h5: 1.3, // 130%
    h6: 1.3, // 130%
    p: 1.5, // 150%
  },
} as const;

// Calculate font sizes based on the Major Third scale
export const calculateFontSize = (level: number): number => {
  return TYPOGRAPHY_SCALE.BASE * Math.pow(TYPOGRAPHY_SCALE.RATIO, level);
};

// Typography utility classes for consistent usage
export const TYPOGRAPHY_CLASSES = {
  // Headings
  h1: "text-6xl font-light leading-none tracking-tighter",
  h2: "text-5xl font-light leading-tight tracking-tighter",
  h3: "text-4xl font-light leading-tight tracking-tighter",
  h4: "text-3xl font-light leading-snug tracking-tight",
  h5: "text-2xl font-light leading-snug tracking-tight-sm",
  h6: "text-xl font-light leading-snug tracking-tight-xs",

  // Body text
  body: "text-base font-light leading-normal tracking-normal",
  bodyLarge: "text-lg font-light leading-normal tracking-normal",
  bodySmall: "text-sm font-light leading-normal tracking-normal",

  // Special text
  display: "text-7xl font-light leading-none tracking-tightest",
  caption: "text-sm font-light leading-normal tracking-wide",
  overline: "text-xs font-medium leading-normal tracking-widest uppercase",

  // Interactive elements
  button: "text-base font-medium leading-tight tracking-normal",
  buttonLarge: "text-lg font-medium leading-tight tracking-normal",
  buttonSmall: "text-sm font-medium leading-tight tracking-normal",

  // Form elements
  input: "text-base font-normal leading-normal tracking-normal",
  label: "text-sm font-medium leading-tight tracking-normal",

  // Navigation
  nav: "text-base font-medium leading-tight tracking-normal",
  navLarge: "text-lg font-medium leading-tight tracking-normal",
} as const;

// Responsive typography utilities
export const RESPONSIVE_TYPOGRAPHY = {
  // Mobile-first responsive adjustments
  mobile: {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
    h4: "text-xl md:text-2xl lg:text-3xl",
    h5: "text-lg md:text-xl lg:text-2xl",
    h6: "text-base md:text-lg lg:text-xl",
  },

  // Container-based responsive sizing
  container: {
    h1: "text-4xl sm:text-5xl md:text-6xl",
    h2: "text-3xl sm:text-4xl md:text-5xl",
    h3: "text-2xl sm:text-3xl md:text-4xl",
    h4: "text-xl sm:text-2xl md:text-3xl",
    h5: "text-lg sm:text-xl md:text-2xl",
    h6: "text-base sm:text-lg md:text-xl",
  },
} as const;

// Helper function to get typography class by element type
export const getTypographyClass = (
  element: keyof typeof TYPOGRAPHY_CLASSES
): string => {
  return TYPOGRAPHY_CLASSES[element];
};

// Helper function to get responsive typography classes
export const getResponsiveTypography = (
  element: keyof typeof RESPONSIVE_TYPOGRAPHY.mobile,
  variant: "mobile" | "container" = "mobile"
): string => {
  return RESPONSIVE_TYPOGRAPHY[variant][element];
};

// Typography mixins for complex components
export const TYPOGRAPHY_MIXINS = {
  // Hero section typography
  hero: {
    title:
      "text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tighter",
    subtitle:
      "text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight",
    body: "text-lg md:text-xl lg:text-2xl font-light leading-normal tracking-normal",
  },

  // Card typography
  card: {
    title: "text-xl md:text-2xl font-medium leading-tight tracking-tight-sm",
    subtitle: "text-lg md:text-xl font-normal leading-snug tracking-normal",
    body: "text-base font-light leading-normal tracking-normal",
    caption: "text-sm font-light leading-normal tracking-wide",
  },

  // Form typography
  form: {
    label: "text-sm font-medium leading-tight tracking-normal",
    input: "text-base font-normal leading-normal tracking-normal",
    help: "text-sm font-light leading-normal tracking-wide",
    error: "text-sm font-medium leading-tight tracking-normal text-red-600",
  },

  // Navigation typography
  navigation: {
    primary: "text-base font-medium leading-tight tracking-normal",
    secondary: "text-sm font-normal leading-tight tracking-normal",
    mobile: "text-lg font-medium leading-tight tracking-normal",
  },
} as const;

// Export everything for easy importing
const TypographySystem = {
  TYPOGRAPHY_SCALE,
  TYPOGRAPHY_CLASSES,
  RESPONSIVE_TYPOGRAPHY,
  TYPOGRAPHY_MIXINS,
  getTypographyClass,
  getResponsiveTypography,
  calculateFontSize,
};

export default TypographySystem;
