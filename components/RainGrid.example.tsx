/**
 * RainGrid Component - Usage Examples
 * 
 * This file demonstrates various ways to use the RainGrid component
 * in your exterior cleaning website.
 */

import RainGrid from './RainGrid';

/**
 * Example 1: Basic Usage
 * Simple implementation with default settings
 */
export function BasicRainGridExample() {
  return (
    <div className="relative h-screen w-full">
      <RainGrid />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white">
          TR1 Exterior Cleaning
        </h1>
      </div>
    </div>
  );
}

/**
 * Example 2: Custom Colors
 * Matching your brand colors
 */
export function CustomColorRainGridExample() {
  return (
    <div className="relative h-screen w-full">
      <RainGrid 
        backgroundColor="#1e293b"
        gridColor="rgba(56, 189, 248, 0.3)"
        rainColor="rgba(186, 230, 253, 0.7)"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Professional Cleaning
          </h1>
          <p className="text-xl text-blue-200">
            Swipe to reveal the clean surface
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 3: Performance Optimized
 * Reduced particle count for better performance on lower-end devices
 */
export function PerformanceOptimizedExample() {
  return (
    <div className="relative h-screen w-full">
      <RainGrid 
        particleCount={100}
        maxDepth={3}
        repelRadius={80}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-2xl px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Experience the Difference
          </h1>
          <p className="text-lg text-gray-300">
            Move your cursor or finger to see our cleaning power in action
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 4: High Impact Visual
 * Maximum visual impact with more particles and stronger glow
 */
export function HighImpactExample() {
  return (
    <div className="relative h-screen w-full">
      <RainGrid 
        particleCount={200}
        maxDepth={5}
        cleaningRadius={150}
        glowIntensity={1.5}
        backgroundColor="#0a0f1e"
        gridColor="rgba(125, 211, 252, 0.25)"
        rainColor="rgba(255, 255, 255, 0.8)"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-center space-y-6">
          <h1 className="text-7xl font-bold text-white drop-shadow-lg">
            Premium Exterior Cleaning
          </h1>
          <p className="text-2xl text-cyan-200">
            Interact with the rain to see our cleaning effect
          </p>
          <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg font-semibold transition-colors">
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 5: Full Hero Section Integration
 * Complete hero section with navigation and CTA
 */
export function FullHeroExample() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Effect */}
      <RainGrid 
        backgroundColor="#0f172a"
        gridColor="rgba(125, 211, 252, 0.2)"
        rainColor="rgba(255, 255, 255, 0.6)"
        particleCount={150}
        cleaningRadius={100}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">TR1 Cleaning</div>
          <div className="space-x-6">
            <a href="#services" className="text-white hover:text-cyan-300 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-cyan-300 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Crystal Clear Results,<br />
              <span className="text-cyan-400">Every Time</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Professional exterior cleaning services that transform your property.
              Move your cursor to experience our cleaning power.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Book Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-lg text-lg font-semibold transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pb-8 flex justify-center">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Example 6: Mobile-First Approach
 * Optimized specifically for mobile devices
 */
export function MobileOptimizedExample() {
  return (
    <div className="relative min-h-screen w-full">
      <RainGrid 
        particleCount={75}
        maxDepth={3}
        cleaningRadius={80}
        backgroundColor="#0f172a"
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Swipe to Clean
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-md">
            Use your finger to reveal the power of professional cleaning
          </p>
          <div className="pt-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 7: Dark Mode with Subtle Effect
 * Minimal, elegant approach
 */
export function SubtleEffectExample() {
  return (
    <div className="relative h-screen w-full bg-slate-950">
      <RainGrid 
        backgroundColor="#020617"
        gridColor="rgba(100, 116, 139, 0.15)"
        rainColor="rgba(203, 213, 225, 0.4)"
        particleCount={80}
        maxDepth={3}
        cleaningRadius={120}
        glowIntensity={0.8}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-light text-white tracking-wide">
            Precision Cleaning
          </h1>
          <p className="text-gray-400 text-lg">
            Where quality meets perfection
          </p>
        </div>
      </div>
    </div>
  );
}

export default BasicRainGridExample;
