# Smooth Scrolling with ScrollMagic + GSAP

This implementation provides smooth scrolling functionality using ScrollMagic and GSAP, offering a scene-based approach to scroll animations with excellent documentation and examples.

## Features

- **Smooth Scrolling**: Implemented with GSAP ScrollSmoother for buttery-smooth scroll behavior
- **Scene-Based Animations**: ScrollMagic provides a scene-based approach for managing scroll animations
- **Performance Optimized**: Uses GSAP's optimized animation engine for 60fps animations
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **Modular Architecture**: Reusable hooks and components for easy implementation

## Installation

The required dependencies are already installed:

```bash
pnpm add gsap scrollmagic @types/scrollmagic
```

## Components

### 1. SmoothScrollProvider (`components/smooth-scroll-provider.tsx`)

A wrapper component that provides smooth scrolling functionality to the entire application.

```tsx
<SmoothScrollProvider smoothness={1.2} effects={true}>
  {children}
</SmoothScrollProvider>
```

**Props:**

- `smoothness`: Controls the smoothness of scrolling (default: 1)
- `effects`: Enables scroll effects (default: true)

### 2. useSmoothScroll Hook (`hooks/use-smooth-scroll.ts`)

A custom hook that provides ScrollMagic scene management and GSAP animations.

```tsx
const { controller, scenes } = useSmoothScroll([
  {
    trigger: ".my-section",
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      // Animation logic
    },
  },
]);
```

**Scene Configuration:**

- `trigger`: CSS selector for the trigger element
- `start`: When the scene should start (e.g., 'top center')
- `end`: When the scene should end (e.g., 'bottom center')
- `duration`: Scene duration in pixels
- `pin`: Whether to pin the element during scroll
- `onEnter`: Callback when entering the scene
- `onLeave`: Callback when leaving the scene
- `onUpdate`: Callback with progress (0-1) during scene

### 3. Utility Functions

#### createSmoothScrollAnimation

Creates a GSAP animation triggered by scroll position.

```tsx
createSmoothScrollAnimation(
  element,
  {
    opacity: 0,
    y: 50,
  },
  {
    start: "top 80%",
    end: "bottom 20%",
  }
);
```

#### createParallaxEffect

Creates a parallax effect for elements.

```tsx
createParallaxEffect(element, 0.5, "down");
```

#### createStaggeredAnimation

Creates a staggered animation for multiple elements.

```tsx
createStaggeredAnimation(
  elements,
  {
    opacity: 0,
    scale: 0.8,
  },
  0.1
);
```

## Usage Examples

### Basic Fade-In Animation

```tsx
import { useSmoothScroll } from "../hooks/use-smooth-scroll";

function MyComponent() {
  useSmoothScroll([
    {
      trigger: ".fade-section",
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.fromTo(
          ".fade-element",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      },
    },
  ]);

  return (
    <section className="fade-section">
      <div className="fade-element">Content</div>
    </section>
  );
}
```

### Parallax Effect

```tsx
useSmoothScroll([
  {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    onUpdate: (progress) => {
      gsap.set(".parallax-element", {
        y: progress * -100,
      });
    },
  },
]);
```

### Pinned Content

```tsx
useSmoothScroll([
  {
    trigger: ".pin-section",
    start: "top center",
    end: "bottom center",
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      gsap.to(".pinned-content", { scale: 1.1 });
    },
    onLeave: () => {
      gsap.to(".pinned-content", { scale: 1 });
    },
  },
]);
```

## CSS Requirements

The following CSS is required for proper smooth scrolling:

```css
/* Smooth scroll wrapper styles */
.smooth-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.smooth-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
  transform: translateZ(0);
  will-change: transform;
}
```

## Performance Tips

1. **Use `will-change`**: Add `will-change: transform` to elements that will be animated
2. **Batch Animations**: Use GSAP's timeline for complex animations
3. **Cleanup**: Always cleanup ScrollTrigger instances in useEffect cleanup
4. **Debounce**: Use debouncing for scroll event handlers
5. **Hardware Acceleration**: Use `transform` and `opacity` for best performance

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

### Common Issues

1. **Animations not triggering**: Check that trigger elements exist and are properly selected
2. **Performance issues**: Ensure animations use `transform` and `opacity` properties
3. **Smooth scrolling not working**: Verify that ScrollSmoother is properly initialized
4. **TypeScript errors**: Ensure all GSAP plugins are registered before use

### Debug Mode

Enable GSAP's debug mode for troubleshooting:

```tsx
if (typeof window !== "undefined") {
  gsap.config({ nullTargetWarn: false });
}
```

## Advanced Features

### Custom Easing

```tsx
gsap.to(element, {
  y: 0,
  duration: 1,
  ease: "back.out(1.7)",
});
```

### Timeline Animations

```tsx
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".timeline-section",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
});

tl.to(".step1", { x: 100, opacity: 1 })
  .to(".step2", { x: 100, opacity: 1 })
  .to(".step3", { x: 100, opacity: 1 });
```

### Responsive Animations

```tsx
const isMobile = window.innerWidth < 768;
const animationProps = isMobile
  ? { y: 20, duration: 0.5 }
  : { y: 50, duration: 0.8 };

gsap.fromTo(element, { opacity: 0 }, animationProps);
```

## License

This implementation uses ScrollMagic and GSAP, which are licensed under their respective licenses.
