# Congo Na Paris - Design Guidelines

## Visual Identity

**Color Palette:**
- Navy Blue (Primary): #050816 - Header backgrounds, dark sections
- Vibrant Red (Accent): #FF3333 - CTAs, statistics, tags, highlights
- White: #FFFFFF - Text on dark backgrounds, light section backgrounds
- Light Grey: #F5F5F5 - Alternate section backgrounds
- Deep Violet: #3E2A54 - Decorative accents, bullets

**Typography:**
- Primary (Headings/Navigation): Poppins, bold and semibold weights
- Secondary (Body): Inter or Open Sans, regular and medium weights
- Generous spacing, large headings, uppercase for section labels (BILLETERIE, MAGAZINE)

**Button Style:**
- Pill-shaped with border-radius: 999px
- Red background (#FF3333), white uppercase text
- Hover: slight brightness increase with soft shadow
- Buttons on images: add blur backdrop filter, no additional hover interactions

**Image Treatment:**
- All images: object-fit: cover with subtle rounded corners
- Red/blue-night overlay filters for brand cohesion
- Hero images at full viewport height with overlay text

## Layout System

**Spacing Units:**
- Use Tailwind spacing: 4, 8, 12, 16, 20, 24, 32 (generous whitespace throughout)
- Section vertical padding: py-20 to py-32 on desktop, py-12 on mobile
- Container max-width: 1280px with px-6 padding

**Grid Patterns:**
- 2-column layouts for content sections (text + image)
- 3-4 column grids for cards (responsive: 1 on mobile, 2 on tablet, 3-4 on desktop)
- Full-width hero sections with split-screen designs

## Core Components

### Header/Navigation
- White background, full-width, sticky on scroll
- Left: Congo Na Paris logo (two-line stacked text or provided logo image)
- Center: Horizontal menu with dropdown capability
- Right: Search icon (decorative)
- Mobile: Logo left, hamburger right, overlay menu
- Active page: red underline indicator

### Hero Sections
- Split-screen design: Left (navy blue with circular geometric patterns), Right (hero image with red tones)
- Large multi-line headlines in white, very generous font sizes
- Small red tag labels above titles
- Optional decorative navigation dots in red

### Statistics Banner
- Full-width red background
- 4 centered blocks with large white numbers and small uppercase labels
- Metrics: +18500 VISITEURS | 237 STANDS | +130 INTERVENANTS | 6 ÉDITIONS PRÉCÉDENTES

### Content Cards
- White/dark background with image top, content bottom
- Red category tags in uppercase
- Date format: [ 08/31/2025 ]
- Hover: scale(1.02) with shadow enhancement
- Two-line titles maximum, excerpt text

### Call-to-Action Blocks
- Full-width background image with dark overlay
- Giant semi-transparent watermark text (e.g., "BILLETTERIE")
- White heading and description overlay
- Centered red pill button

### Footer
- Navy blue (#050816) background
- 4 columns: Logo/tagline, Edition 2025 links, Participer links, Newsletter signup
- Newsletter: email input + red "S'ABONNER" button
- Bottom decorative geometric pattern band
- Copyright text centered

## Page-Specific Layouts

### Homepage Flow
1. Hero (split-screen with large typography)
2. Statistics banner (red, 4 metrics)
3. "Pourquoi nous choisir?" (2-column: bullet list + video preview with play button)
4. Billetterie CTA (full-width image overlay)
5. 3 action cards (Programme/Exposant/CNP TV)
6. Magazine section (dark background, 3 article cards, giant "MAGAZINE" watermark)

### Programme Page
- Timeline layout organized by day (27-28 September)
- Each session: time, title, description, accompanying image
- Alternating left/right image placement

### Intervenants Page
- Responsive grid: 3-4 cards per row on desktop
- Round or square photos, name, role/description

### Magazine Page
- Main content: Grid of blog cards (similar to homepage section but more extensive)
- Desktop sidebar: Categories list, Featured articles ("À la une"), Tag cloud

### Contact Page
- Practical info block: dates, location, email, phone numbers
- Contact form: Name, First Name, Email, Subject, Message fields
- Red submit button

## Interactive Elements

- Smooth scrolling (scroll-behavior: smooth)
- Fixed "Back to top" button (bottom-right, red circular with arrow)
- Card hover animations (subtle scale + shadow)
- Dropdown menu transitions (smooth fade/slide)
- Mobile menu overlay animation

## Images

**Required Images:**
- Homepage hero: Event crowd/children (provided: Slider-CNP-1-scaled.png)
- Geometric patterns: Navy background patterns (provided: bannerBG-2, bggreyFlip)
- Logos: Black and white versions (provided: LOGOS-CNP, LOGOS-CNP1)
- Conference/auditorium image for billetterie background
- Video preview placeholder with red play button
- Programme/Exposant/CNP TV card images
- Magazine article thumbnails (3+ images)
- Speaker photos for intervenants grid

**Image Placement:**
- Full-viewport hero images with text overlays
- Background images for CTA sections with dark overlays
- Card thumbnails at consistent aspect ratios (16:9 or 4:3)
- All images should evoke African cultural themes, diaspora connection, or professional event atmospheres

## Accessibility & Polish

- Semantic HTML5 elements throughout
- Alt text on all images
- Sufficient color contrast (white on navy, white on red)
- Responsive breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Form validation with clear error states