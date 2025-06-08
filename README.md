# REMwaste - Skip Hire Container Selection Interface

Coding Challenge, the live version can be found at: `https://fq4rdd-5173.csb.app/` 

## 🎯 Project Overview

This project was developed as part of a front-end coding challenge to completely redesign the "choose your skip size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk/). The goal was to maintain the original functionality while creating a fresh, modern user interface with improved UX/UI.

### Original Requirements
- **Target Page**: Skip size selection page (accessed via postcode LE10 1SH → garden waste)
- **API Integration**: Consume data from `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- **Complete Redesign**: Create a completely different visual design while maintaining core functionality
- **Responsive Design**: Ensure proper display on both mobile and desktop browsers
- **Code Quality**: Focus on clean, maintainable React code

## 🚀 Key Features

### ✅ What's Been Implemented

- **Modern Component Architecture**: Built with TypeScript and functional React components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Container Selection**: Visual card-based selection interface
- **Progress Indicator**: Multi-step progress visualization
- **Real API Integration**: Fetches live data from the provided endpoint
- **Loading States**: Skeleton cards for better UX during data fetching
- **Error Handling**: Graceful error states with user feedback
- **Visual Feedback**: Clear selection states and hover effects
- **Container Details Panel**: Sliding bottom panel with selection summary
- **Road Restrictions**: Visual indicators for containers not allowed on roads

### 🎨 Design Highlights

- **Card-Based Interface**: Each skip is presented as a visually appealing card with container image
- **Visual Hierarchy**: Clear pricing, size, and rental period information
- **Hazard Indicators**: Yellow/black striped warning for road restrictions
- **Brand Identity**: Custom logo integration and consistent color scheme
- **Smooth Animations**: Subtle transitions and hover effects
- **Professional Typography**: Inter font family for modern appearance

### 📱 Responsive Features

- **Mobile Optimization**: Touch-friendly interface with proper spacing
- **Flexible Grid**: Responsive container grid (1 column mobile → 3 columns desktop)
- **Adaptive Layout**: Bottom panel adjusts for different screen sizes
- **Horizontal Scrolling**: Progress indicator scrolls horizontally on mobile

## 🛠 Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework with latest features
- **Heroicons** - Beautiful SVG icons
- **Custom CSS** - Hazard stripes and additional styling

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── WasteCard.tsx    # Individual container card
│   ├── SkeletonCard.tsx # Loading state component
│   ├── StepsIndicator.tsx # Progress visualization
│   ├── ContainerDetails.tsx # Selection summary panel
│   └── index.ts         # Component exports
├── types/
│   └── index.ts         # TypeScript type definitions
├── assets/
│   └── images/          # Logo and static assets
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd remwaste
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Implementation Approach

### Design Philosophy
- **User-Centric**: Prioritized ease of selection and clear information hierarchy
- **Visual Appeal**: Modern card-based design with high-quality container images
- **Accessibility**: Proper ARIA labels, keyboard navigation, and color contrast
- **Performance**: Optimized loading states and efficient rendering

### API Integration
- Fetches container data from the provided API
- Implements proper error handling and loading states
- Uses TypeScript interfaces for type safety
- Handles API response mapping and data transformation

### Responsive Strategy
- Mobile-first CSS approach
- Flexible grid system that adapts to screen size
- Touch-optimized interactions for mobile devices
- Horizontal scrolling for navigation elements on small screens

## 🔧 Code Quality Features

- **TypeScript**: Full type safety throughout the application
- **Component Composition**: Reusable, maintainable component architecture
- **Error Boundaries**: Graceful error handling
- **Modern React Patterns**: Functional components with hooks

## UX Improvements
- **One-Click Selection**: Simple click-to-select interface
- **Clear Feedback**: Visual confirmation of selected items
- **Progressive Disclosure**: Details panel appears only when needed
- **Loading Experience**: Skeleton cards prevent layout shifts
