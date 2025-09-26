# Mabel Construction Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Premier Construction's bold, professional aesthetic while modernizing with 3D elements and advanced animations for mobile-first experience.

## Core Design Principles
- **Bold & Captivating**: Strong visual hierarchy with impactful typography
- **Mobile-First**: Touch-friendly interactions with generous tap targets
- **3D Enhanced**: Strategic use of 3D icons and animations without overwhelming
- **Performance Optimized**: Smooth animations that don't compromise loading speed

## Color Palette
**Primary Colors:**
- Deep Purple: 270 85% 25% (brand primary)
- Rich Black: 0 0% 8% (text and depth)
- Pure White: 0 0% 98% (backgrounds and contrast)

**Accent Colors:**
- Electric Blue: 210 100% 65% (interactive elements)
- Warm Gray: 20 5% 75% (subtle backgrounds)

**Gradients:**
- Hero gradient: Deep purple to electric blue diagonal overlay
- Card gradients: Subtle purple tints on white backgrounds

## Typography
**Primary Font**: Inter (Google Fonts)
- Hero Headlines: 900 weight, 3.5rem mobile / 6rem desktop
- Section Headers: 700 weight, 2rem mobile / 3rem desktop  
- Body Text: 400 weight, 1rem base size
- Buttons/CTAs: 600 weight, uppercase tracking

## Layout System
**Spacing Primitives**: Tailwind units of 2, 4, 8, 16, 24
- Micro spacing: p-2, m-2 (8px)
- Standard spacing: p-4, gap-4 (16px) 
- Section spacing: py-8, my-8 (32px)
- Large breaks: py-16, mb-24 (64px, 96px)

## Component Library

**Navigation:**
- Fixed mobile-first nav with animated hamburger menu
- Logo animation on scroll with subtle 3D rotation
- Smooth scroll-to-section with progress indicator

**Hero Section:**
- Full viewport height with animated 3D construction icons
- Overlay gradient on background image/video
- Large CTA button with blur background (variant="outline")
- Parallax scrolling effect on background elements

**3D Elements:**
- Floating construction tool icons with subtle rotation
- 3D cards for services with hover depth effects
- Animated logo with depth and lighting
- Interactive project showcase with 3D previews

**Cards & Content:**
- Service cards with 3D hover animations
- Project gallery with lightbox and smooth transitions
- Testimonial cards with subtle depth shadows
- Contact form with animated validation states

**Interactive Elements:**
- Touch-friendly buttons (minimum 44px tap area)
- Smooth page transitions and scroll animations
- Hover states with 3D transforms
- Loading animations with construction theme

## Images
**Hero Image**: Large construction site or completed project with gradient overlay
**Service Icons**: 3D rendered construction tools (hammer, hard hat, blueprint, etc.)
**Project Gallery**: High-quality before/after construction photos
**Team Photos**: Professional headshots with consistent lighting
**Background Elements**: Subtle construction pattern overlays

## Animations
- Logo entrance with 3D rotation and scale
- Scroll-triggered section reveals with stagger
- 3D icon float animations on hover
- Smooth parallax on hero and section backgrounds
- Loading spinner with construction tool rotation
- Form validation with gentle shake/success animations

## Mobile Optimizations
- Swipe gestures for gallery navigation
- Large touch targets for all interactive elements
- Optimized 3D animations for mobile performance
- Progressive enhancement for complex effects
- Responsive 3D elements that scale appropriately