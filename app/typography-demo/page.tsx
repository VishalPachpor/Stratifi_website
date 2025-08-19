import { TYPOGRAPHY_CLASSES } from "@/lib/typography";

export default function TypographyDemo() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-center mb-16 text-black">
          Professional Typography System
        </h1>

        {/* System Overview */}
        <div className="mb-16 p-6 bg-gray-50 rounded-2xl">
          <h2 className="mb-4 text-black">System Overview</h2>
          <p className="mb-4">
            This typography system follows the{" "}
            <strong>Major Third scale (1.25 ratio)</strong> used by top design
            companies. It provides consistent visual hierarchy with
            mathematically sound proportions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Font Sizes:</strong> 1.25 ratio progression
              <br />
              p=16px, h6=20px, h5=25px, h4=31.25px, h3=39px, h2=48.8px, h1=61px
            </div>
            <div>
              <strong>Letter Spacing:</strong> Decreases with size
              <br />
              p=0%, h6=-0.5%, h3=-1.5%, h1=-2%
            </div>
            <div>
              <strong>Line Height:</strong> Decreases with size
              <br />
              p=150%, h4=130%, h2=110%, h1=100%
            </div>
          </div>
        </div>

        {/* Heading Hierarchy */}
        <section className="mb-16">
          <h2 className="mb-8 text-black">Heading Hierarchy</h2>

          <div className="space-y-8">
            <div>
              <h1 className="text-black mb-2">Heading 1 (61px)</h1>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.h1}</code>
              </p>
            </div>

            <div>
              <h2 className="text-black mb-2">Heading 2 (48.8px)</h2>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.h2}</code>
              </p>
            </div>

            <div>
              <h3 className="text-black mb-2">Heading 3 (39px)</h3>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.h3}</code>
              </p>
            </div>

            <div>
              <h4 className="text-black mb-2">Heading 4 (31.25px)</h4>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.h4}</code>
              </p>
            </div>

            <div>
              <h5 className="text-black mb-2">Heading 5 (25px)</h5>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.h5}</code>
              </p>
            </div>

            <div>
              <h6 className="text-black mb-2">Heading 6 (20px)</h6>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.h6}</code>
              </p>
            </div>
          </div>
        </section>

        {/* Body Text */}
        <section className="mb-16">
          <h2 className="mb-8 text-black">Body Text</h2>

          <div className="space-y-6">
            <div>
              <p className="text-black mb-2">
                This is the standard body text (16px) with 150% line height and
                normal letter spacing. It&apos;s designed for optimal
                readability and follows the professional typography standards
                used by companies like Apple, Google, and Figma.
              </p>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.body}</code>
              </p>
            </div>

            <div>
              <p className="text-lg text-black mb-2">
                This is large body text (18px) with the same line height and
                letter spacing principles. It&apos;s perfect for lead paragraphs
                or important content that needs slightly more emphasis.
              </p>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.bodyLarge}</code>
              </p>
            </div>

            <div>
              <p className="text-sm text-black mb-2">
                This is small body text (14px) for secondary information,
                captions, or less prominent content. It maintains readability
                while creating clear visual hierarchy.
              </p>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.bodySmall}</code>
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section className="mb-16">
          <h2 className="mb-8 text-black">Interactive Elements</h2>

          <div className="space-y-6">
            <div>
              <button className="px-6 py-3 bg-black text-white rounded-lg mb-2">
                Button Text (16px)
              </button>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.button}</code>
              </p>
            </div>

            <div>
              <button className="px-8 py-4 bg-gray-800 text-white rounded-lg mb-2">
                Large Button (18px)
              </button>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.buttonLarge}</code>
              </p>
            </div>

            <div>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg mb-2">
                Small Button (14px)
              </button>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.buttonSmall}</code>
              </p>
            </div>
          </div>
        </section>

        {/* Special Text */}
        <section className="mb-16">
          <h2 className="mb-8 text-black">Special Text</h2>

          <div className="space-y-6">
            <div>
              <p className="text-7xl font-light leading-none tracking-tightest text-black mb-2">
                Display Text
              </p>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.display}</code>
              </p>
            </div>

            <div>
              <p className="text-sm font-light leading-normal tracking-wide text-gray-600 mb-2">
                Caption text with wider letter spacing for better readability
              </p>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.caption}</code>
              </p>
            </div>

            <div>
              <p className="text-xs font-medium leading-normal tracking-widest uppercase text-gray-500 mb-2">
                Overline Text
              </p>
              <p className="text-sm text-gray-600">
                Class: <code>{TYPOGRAPHY_CLASSES.overline}</code>
              </p>
            </div>
          </div>
        </section>

        {/* Responsive Typography */}
        <section className="mb-16">
          <h2 className="mb-8 text-black">Responsive Typography</h2>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-2">
                Responsive H1
              </h1>
              <p className="text-sm text-gray-600">
                Mobile: 36px | Tablet: 48px | Desktop: 61px
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-black mb-2">
                Responsive H2
              </h2>
              <p className="text-sm text-gray-600">
                Mobile: 30px | Tablet: 36px | Desktop: 48.8px
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-black mb-2">
                Responsive H3
              </h3>
              <p className="text-sm text-gray-600">
                Mobile: 24px | Tablet: 30px | Desktop: 39px
              </p>
            </div>
          </div>
        </section>

        {/* Typography Mixins */}
        <section className="mb-16">
          <h2 className="mb-8 text-black">Typography Mixins</h2>

          <div className="space-y-8">
            {/* Hero Section */}
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
              <h3 className="mb-4 text-black">Hero Section</h3>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tighter text-black mb-4">
                Hero Title
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight text-gray-700 mb-4">
                Hero subtitle with perfect proportions
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-normal tracking-normal text-gray-600">
                Supporting text that guides the user through the experience
              </p>
            </div>

            {/* Card */}
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-medium leading-tight tracking-tight-sm text-black mb-2">
                Card Title
              </h3>
              <p className="text-lg md:text-xl font-normal leading-snug tracking-normal text-gray-700 mb-3">
                Card subtitle with balanced typography
              </p>
              <p className="text-base font-light leading-normal tracking-normal text-gray-600 mb-2">
                Card body text that provides detailed information while
                maintaining readability.
              </p>
              <p className="text-sm font-light leading-normal tracking-wide text-gray-500">
                Caption text for additional context
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="mb-16 p-6 bg-blue-50 rounded-2xl">
          <h2 className="mb-4 text-black">Implementation Notes</h2>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              • All typography classes are now available as Tailwind utilities
            </p>
            <p>
              • Use <code>text-6xl</code> for h1, <code>text-5xl</code> for h2,
              etc.
            </p>
            <p>• Letter spacing and line height are automatically applied</p>
            <p>
              • Responsive variants available:{" "}
              <code>text-4xl md:text-5xl lg:text-6xl</code>
            </p>
            <p>
              • Import from <code>@/lib/typography</code> for programmatic
              access
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
