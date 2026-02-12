# TCRUFC Website

Trinity Christs Rugby Union Football Club website - showcasing over 150 years of rugby excellence at Cambridge University.

## Features

- **Home Page**: Hero section with club branding, statistics, heritage information, and call-to-action buttons
- **About Us Page**: Detailed history, core values, team statistics, and timeline of milestones
- **Gallery Page**: Photo archive with filtering by era (1920s-1970s, 1980s-2000s, 2010s-Today)
- **Smooth Scroll Animations**: Beautiful fade-in, slide, and scale animations triggered as users scroll through the website
- **Interactive Filtering**: Animated transitions when filtering gallery photos by era
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Custom Color Scheme**:
  - Red: RGB(200, 16, 46)
  - Blue: RGB(0, 51, 160)
  - Gold: RGB(255, 205, 0)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/              # Reusable React components
│   ├── Layout.jsx          # Main layout with header
│   ├── Header.jsx          # Navigation header
│   ├── Button.jsx          # Reusable button component
│   ├── StatCard.jsx        # Statistics display card
│   ├── ValueCard.jsx       # Core values card
│   ├── AnimatedSection.jsx # Animation wrapper components
│   └── Icons.jsx           # SVG icon components
├── pages/                  # Page components
│   ├── Home.jsx            # Home page with hero and stats
│   ├── AboutUs.jsx         # About Us page with history timeline
│   └── Gallery.jsx         # Gallery page with animated filtering
├── main.jsx                # Application entry point with routing
└── index.css               # Global styles and Tailwind directives
```

## Technologies Used

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Motion (Framer Motion)** - Animation library for scroll-triggered animations
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## Animation Features

The website includes smooth, performant scroll animations powered by Motion (Framer Motion):

### Animation Types

- **Fade In**: Elements smoothly fade into view as you scroll
- **Slide Animations**: Content slides in from left, right, top, or bottom
- **Scale Animations**: Elements scale up from smaller size on scroll
- **Stagger Animations**: Multiple elements animate in sequence for visual appeal
- **Interactive Transitions**: Gallery photos smoothly transition when filtering by era

### Reusable Animation Components

- `AnimatedSection`: Wraps content with scroll-triggered animations
- `StaggerContainer` & `StaggerItem`: Creates sequential animations for lists
- `ScaleOnView`: Scales elements when they enter the viewport

All animations are optimized to:
- Only animate once when elements come into view
- Use GPU-accelerated transforms
- Respect user's motion preferences
- Provide smooth 60fps performance

## Customization

### Adding Photos to Gallery

Edit `src/pages/Gallery.jsx` and update the `galleryPhotos` array:

```javascript
const galleryPhotos = [
  {
    id: 1,
    era: '1920s-1970s',
    year: 1920,
    title: 'Team Photo 1920s',
    imageUrl: '/path/to/image.jpg' // Add your image path
  },
  // Add more photos...
]
```

### Updating Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'tcrufc-red': 'rgb(200, 16, 46)',
  'tcrufc-blue': 'rgb(0, 51, 160)',
  'tcrufc-gold': 'rgb(255, 205, 0)',
}
```

## Future Enhancements

- Alumni network pages with event listings
- Results and fixtures pages for current season
- Match highlights and video gallery
- Player profiles and statistics
- News and blog section
- Contact form and membership registration

## License

This project is created for Trinity Christs Rugby Union Football Club at Cambridge University.
