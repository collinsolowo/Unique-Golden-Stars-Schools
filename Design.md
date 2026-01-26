# Unique Golden Stars Schools Website Design

## Overview
- **Motion Style**: "Fluid Precision" - Physics-based interactions meets architectural typography.
- **Animation Intensity**: Ultra-Dynamic (High polish, performance-optimized)
- **Technology Stack**: WebGL (Three.js/OGL) for image distortions, GSAP for choreography, CSS Houdini for paint worklets.

## Brand Foundation
- **Colors**:
  - Primary: #C9F03A (Lemon Green)
  - Secondary: #0B74FF (Blue)
  - Dark: #0F172A (Dark Slate)
  - Light: #FFFFFF (White)
  - Muted: #F3F4F6 (Light Gray)
  - Text: #0F172A (Dark Slate)
- **Typography**:
  - **Display**: "Inter" (Weights: 700, 800, 900)
  - **Body**: "Inter" (Weights: 400, 500, 600)
- **Core Message**: Nurturing future leaders through innovative, holistic education.

## Global Motion System

### Animation Timing
- **Easing Library**:
  - `custom-expo`: `cubic-bezier(0.16, 1, 0.3, 1)` (Crisp, snappy)
  - `custom-smooth`: `cubic-bezier(0.65, 0, 0.35, 1)` (Luxurious, long)
- **Duration Scale**:
  - Micro-interactions: 0.3s
  - Layout shifts: 0.8s
  - Page transitions: 1.2s
- **Stagger Patterns**: 0.05s per letter for headings, 0.1s per list item.

### Continuous Effects
- **Living Textures**: Subtle grain overlay (opacity: 0.03) fixed on screen to unify diverse images.
- **Mouse Influence**: Elements within 200px of cursor gently lean towards it (magnetic effect).
- **Scroll Velocity**: Skew effect on scroll (max 5deg) to simulate speed and momentum.

### Scroll Engine
- **Lenis Smooth Scroll**: Damping value 0.1 for buttery smooth experience.
- **Parallax Factor**: Backgrounds move at 0.8x speed, foreground text at 1.1x speed.
- **Pinning**: Section titles pin briefly while content scrolls past.

## Section 1: Navigation

### Layout
**Dynamic Glass Header**:
- Fixed top bar that transforms state based on scroll.
- **Initial State**: Transparent, large padding (40px).
- **Scrolled State**: Frosted glass (backdrop-filter: blur(12px)), reduced padding (20px), dark bottom border reveals.

### Content
- **Logo**: SVG (Left aligned)
- **Links**: Home, About, Programs, Admissions, News, Contact
- **CTA**: "Apply Now"

### Motion Choreography
#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Logo | Slide Down + Fade | y: -100% → 0 | 0.8s | 0.0s | custom-expo |
| Nav Links | Staggered Drop | y: -20px → 0 | 0.6s | 0.1s | custom-expo |
| CTA Button | Scale In | scale: 0 → 1 | 0.6s | 0.4s | elastic-out |

#### Interaction Effects
- **Links**: "Strikethrough-to-Underline" effect. A line strikes through the text then settles as an underline on hover.
- **Mega Menu**: Unfolds like origami (perspective-origin top) rather than simple slide.

## Section 2: Hero

### Layout
**The "Lens" Composition**:
- **Left (Text)**: Floating in 3D space, z-index 10.
- **Right (Visuals)**: Full height, but masked by a dynamic fluid shape.
- **Innovation**: The background image is treated as a WebGL texture. On mouse move, a "liquid displacement" effect ripples across the image, making it feel alive and responsive.

### Content
- **Headline**: "Where Young Minds Soar" (Split into lines)
- **Sub-headline**: "Fostering academic excellence, creativity, and character in a nurturing environment."
- **CTA**: "Explore Programs"

### Images
**Hero Background Image**
- **Resolution:** 1920x1080 pixels
- **Aspect Ratio:** 16:9
- **Transparent Background:** No
- **Visual Style:** Candid lifestyle/education photography
- **Subject:** Group of 5 young children in classroom with raised hands
- **Color Palette:** Soft pastels - light blue, yellow, green, white
- **Generation Prompt:** "A candid, brightly lit photograph of a group of five young children sitting at desks in a modern classroom. The children, aged 5-8, are smiling and raising their hands, looking directly at the camera. The teacher, a woman with long dark hair, is partially visible on the left, smiling and holding a pointer. The classroom is colorful with educational posters, a chalkboard, and children's artwork on the walls. Desks are arranged in rows, with colorful pencil holders and school supplies. The lighting is soft and natural, creating a cheerful and inviting atmosphere. The color palette includes soft pastels like light blue, yellow, green, and white. The background is a real, detailed classroom setting, not transparent. The overall mood is happy, engaged, and educational."

### Motion Choreography
#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Headline | Split-Line Reveal | y: 100% → 0 (masked) | 1.0s | 0.2s | custom-expo |
| Subhead | Blur Fade | blur: 10px → 0 | 1.0s | 0.4s | linear |
| Hero Image | Zoom Out | scale: 1.2 → 1.0 | 1.5s | 0.0s | custom-smooth |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Hero Text | Parallax | Top | Bottom | y: 0 → -150px |
| Scroll | Hero Image | Parallax | Top | Bottom | y: 0 → 100px |

#### Interaction Effects
- **WebGL Ripple**: Mouse movement creates a water-like distortion on the hero image (Strength: 0.02).
- **Magnetic CTA**: Button follows cursor with high elasticity.

## Section 3: About

### Layout
**Broken Grid / Asymmetric Balance**:
- **Text Block**: Pushed to the left, vertical orientation.
- **Image Cluster**: Floating on the right, overlapping.
- **Innovation**: The main image and the floating card are linked. As you scroll, the floating card orbits slightly around the main image.

### Content
- **Badge**: "About Us"
- **Heading**: "Dedicated To Excellence"
- **Body**: "We believe in nurturing the whole child..."
- **CTA**: "Read Our Story"

### Images
**About Main Image**
- **Resolution:** 800x1000 pixels
- **Aspect Ratio:** 4:5
- **Transparent Background:** No
- **Visual Style:** Candid lifestyle, shallow depth of field
- **Subject:** Young girl with long braided hair studying
- **Color Palette:** Warm yellows, greens, browns, soft neutrals
- **Generation Prompt:** "A candid, close-up photograph of a young African girl with long braided hair, sitting at a desk and studying. She is wearing a bright yellow and green traditional patterned dress and is writing in a notebook with a pencil. The background is softly blurred, showing indistinct figures of other students in a classroom setting. The lighting is soft and natural, creating a warm, focused atmosphere. The color palette includes warm yellows, greens, browns, and soft neutrals. The background is not transparent."

**About Floating Card Image**
- **Resolution:** 300x200 pixels
- **Aspect Ratio:** 3:2
- **Transparent Background:** No
- **Visual Style:** Documentary style
- **Subject:** Young girl in green and white school uniform
- **Color Palette:** Green, white, brown, natural tones
- **Generation Prompt:** "A candid, documentary-style photograph of a young African girl in a green and white school uniform, standing outdoors in a schoolyard. She is holding a notebook and pen, smiling and looking slightly to the side. The background shows a blurred, earthy school building with some graffiti. The lighting is natural and soft, creating a warm, inviting atmosphere. The color palette features green, white, brown, and natural tones. The background is not transparent."

### Motion Choreography
#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Viewport | Image Cluster | Parallax | Enter | Leave | y: 50px → -50px |
| Viewport | Floating Card | Rotation | Enter | Leave | rotate: -5deg → 5deg |

#### Interaction Effects
- **Image Hover**: The "About Main Image" scales up (1.05x) while the "Floating Card" moves away from the cursor (magnetic repulsion) to create depth.

## Section 4: Programs

### Layout
**Horizontal Scroll "Gallery"**:
- Instead of a vertical grid, this section locks the vertical scroll and moves the cards horizontally (left-to-right).
- **Progress Bar**: A sleek lemon-green line at the bottom indicates scroll progress.
- **Card Design**: Large, immersive cards that take up 60% of the viewport width.

### Content
- **Heading**: "Explore Our Programs"
- **Cards**: Nursery, Primary, Secondary, Pre-University.

### Images
**Nursery Program Image**
- **Resolution:** 600x400 pixels
- **Aspect Ratio:** 3:2
- **Transparent Background:** No
- **Visual Style:** Candid lifestyle, shallow depth of field
- **Subject:** Young African boy smiling and counting on fingers
- **Color Palette:** Natural skin tones, soft greens and blues, muted background
- **Generation Prompt:** "A candid, close-up photograph of a young African boy smiling and counting on his fingers, standing outdoors in a natural, green garden or playground. He is wearing a casual t-shirt with blue and red stripes. The background is softly blurred with foliage and playground equipment, creating a shallow depth of field. The lighting is natural and soft, highlighting the child's joyful expression. The color palette features natural skin tones, soft greens and blues, and a muted background. The background is not transparent."

### Motion Choreography
#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Section | Pin & Horizontal | Top | Bottom | x: 0 → -300vw |
| Scroll | Card Images | Skew | Top | Bottom | skewX: 0 → -5deg |

#### Interaction Effects
- **Card Hover**: The image desaturates slightly while the text content slides up to reveal more details. The cursor becomes a "Drag" indicator.

## Section 5: Why Choose Us

### Layout
**The "Constellation" Grid**:
- A dark, immersive section (Dark Mode).
- Icons are not static; they are "alive". They float gently in a suspended state.
- **Connection**: Faint SVG lines draw connections between the icons when hovered, suggesting a network of excellence.

### Content
- **Heading**: "Why Unique Golden Stars?"
- **Features**: Expert Teachers, Holistic Development, etc.

### Motion Choreography
#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Icons | Pop & Float | scale: 0→1, y: 20→0 | 0.6s | Stagger 0.1s | elastic-out |
| Lines | Draw SVG | stroke-dash: 0→100 | 1.2s | 0.5s | custom-smooth |

#### Continuous Animations
- **Floating**: Each icon bobs gently (y: -5px to 5px) with different phases to look organic.

## Section 6: Testimonials

### Layout
**Cinematic Slider**:
- Full-width background image (preserved).
- **Overlay**: A heavy, dark gradient overlay (70% opacity) to ensure text readability.
- **Text**: Large, centered typography.
- **Innovation**: The quote marks are massive, decorative, and animate independently.

### Images
**Testimonial Background**
- **Source**: Preserved from original design.
- **Treatment**: Dark overlay + parallax.

### Motion Choreography
#### Interaction Effects
- **Slide Change**: The background image cross-fades with a "pixelate" or "blur" transition effect.
- **Text Reveal**: New text slides in from the bottom with a mask.

## Section 7: CTA & Footer

### Layout
**The "Curtain" Reveal**:
- The Footer is fixed at the bottom of the page (z-index: -1).
- The CTA section slides UP to reveal the footer underneath it.
- **CTA**: Uses a "Spotlight" background effect—a subtle radial gradient that follows the mouse.

### Content
- **CTA**: "Ready to Join Us?"
- **Footer**: Links, Socials, Copyright.

### Motion Choreography
#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Footer | Unveil | Bottom-800px | Bottom | Static (revealed) |

#### Interaction Effects
- **Social Icons**: On hover, they fill with Lemon Green (#C9F03A) and rotate 360deg.

---

## Technical Implementation Notes

### Required Libraries
- **GSAP (GreenSock)**: Core timeline management and ScrollTrigger.
- **Lenis**: For luxury smooth scrolling (essential for the horizontal section).
- **Three.js / React-Three-Fiber**: For the Hero image displacement shader.
- **Splitting.js**: For text splitting (lines/words/chars).

### Performance Optimization (Critical)
- **WebGL**: Use a single canvas context for the hero background; do not spawn multiple canvases.
- **Will-Change**: Apply `will-change: transform` only during active scroll states.
- **Image Loading**: Decode images asynchronously before triggering entrance animations.
- **Font Loading**: Ensure 'Inter' is preloaded to prevent layout shifts during text animations.

### Accessibility
- **Reduced Motion**: If `prefers-reduced-motion: reduce` is detected:
  - Disable parallax.
  - Disable smooth scroll.
  - Switch all transitions to simple fades.
  - Stop continuous floating animations.

### Browser Support
- **Chrome/Edge/Firefox/Safari**: Full support.
- **Mobile**: Disable WebGL effects on mobile; fallback to static CSS gradients.

---

## Output Path
`/mnt/okcomputer/output/design.md`
