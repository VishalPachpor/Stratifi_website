# Font Files Setup

## Sequel Sans Display Book

To complete the font setup, please add the following font files to this directory:

### Required Files:

- `SequelSansDisplay-Book.woff2` - Web Open Font Format 2.0 (preferred)
- `SequelSansDisplay-Book.woff` - Web Open Font Format (fallback)
- `SequelSansDisplay-Book.ttf` - TrueType Font (fallback)
- `SequelSansDisplay-BookItalic.woff2` - Italic version
- `SequelSansDisplay-BookItalic.woff` - Italic version
- `SequelSansDisplay-BookItalic.ttf` - Italic version

### Font Sources:

You can obtain the Sequel Sans Display Book font from:

- [Sequel Sans Display Font Family](https://www.fontshare.com/fonts/sequel-sans-display)
- Or purchase from the official font foundry

### Implementation:

The font is already configured in:

- `app/globals.css` - Font face declarations
- `tailwind.config.ts` - Tailwind font family
- `app/layout.tsx` - Applied to body element

Once you add the font files, the entire app will use Sequel Sans Display Book as the primary font.
