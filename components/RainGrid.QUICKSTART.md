# RainGrid Component - Quick Start Guide

## 🚀 Get Started in 5 Minutes

This guide will help you integrate the RainGrid component into your exterior cleaning website quickly.

## Step 1: Import the Component

```tsx
import RainGrid from '@/components/RainGrid';
```

## Step 2: Add to Your Hero Section

Replace your existing hero background with RainGrid:

```tsx
export default function HomePage() {
  return (
    <main>
      {/* Hero Section with RainGrid */}
      <section className="relative h-screen w-full">
        <RainGrid />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">
            TR1 Exterior Cleaning
          </h1>
        </div>
      </section>
      
      {/* Rest of your page */}
    </main>
  );
}
```

## Step 3: Test It Out

1. **Desktop**: Move your mouse cursor around to see the cleaning effect
2. **Mobile**: Swipe your finger across the screen

That's it! You now have an interactive hero background.

## Common Customizations

### Change Colors to Match Your Brand

```tsx
<RainGrid 
  backgroundColor="#1e293b"
  gridColor="rgba(56, 189, 248, 0.3)"
  rainColor="rgba(186, 230, 253, 0.7)"
/>
```

### Improve Performance on Slower Devices

```tsx
<RainGrid 
  particleCount={100}
  maxDepth={3}
/>
```

### Make the Effect More Dramatic

```tsx
<RainGrid 
  particleCount={200}
  cleaningRadius={150}
  glowIntensity={1.5}
/>
```

## Complete Hero Example

Here's a complete, production-ready hero section:

```tsx
export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Interactive Background */}
      <RainGrid />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            TR1 Cleaning
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-white hover:text-cyan-300">
              Services
            </a>
            <a href="#about" className="text-white hover:text-cyan-300">
              About
            </a>
            <a href="#contact" className="text-white hover:text-cyan-300">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Crystal Clear Results,<br />
              <span className="text-cyan-400">Every Time</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Professional exterior cleaning services that transform your property.
              Move your cursor to experience our cleaning power.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
```

## Troubleshooting

### Problem: Can't see the rain

**Solution**: The rain is subtle by design. Try increasing the opacity:
```tsx
<RainGrid rainColor="rgba(255, 255, 255, 0.9)" />
```

### Problem: Performance is slow on mobile

**Solution**: The component auto-optimizes for mobile, but you can reduce further:
```tsx
<RainGrid particleCount={50} maxDepth={2} />
```

### Problem: Touch not working on mobile

**Solution**: Make sure there's no CSS preventing touch events:
```tsx
<div style={{ touchAction: 'none' }}>
  <RainGrid />
</div>
```

### Problem: Content is behind the canvas

**Solution**: Add `relative z-10` to your content container:
```tsx
<div className="relative z-10">
  {/* Your content */}
</div>
```

## Next Steps

- 📖 Read the [Full Documentation](./RainGrid.README.md)
- 🎨 Check out [More Examples](./RainGrid.example.tsx)
- 🧪 Learn about [Testing](./RainGrid.TESTING.md)

## Props Reference

| Prop | Default | Description |
|------|---------|-------------|
| `backgroundColor` | `"#0f172a"` | Canvas background color |
| `gridColor` | `"rgba(125, 211, 252, 0.2)"` | Grid line color |
| `rainColor` | `"rgba(255, 255, 255, 0.6)"` | Rain particle color |
| `particleCount` | `150` (desktop), `75` (mobile) | Number of rain drops |
| `maxDepth` | `4` (desktop), `3` (mobile) | Grid recursion depth |
| `cleaningRadius` | `100` | Cleaning effect radius (px) |
| `glowIntensity` | `1.0` | Glow brightness (0-2) |
| `className` | `""` | Additional CSS classes |

## Tips for Best Results

1. **Use on Hero Sections**: Works best as a full-screen hero background
2. **Keep Content Readable**: Ensure text has good contrast against the background
3. **Test on Mobile**: Always test touch interaction on actual mobile devices
4. **Monitor Performance**: Check FPS in production, especially on older devices
5. **Add Instructions**: Consider adding a subtle hint like "Move your cursor to clean"

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the [full documentation](./RainGrid.README.md)
3. Verify your React and Next.js versions are up to date
4. Test in different browsers

## Performance Tips

- **Desktop**: Default settings work great (150 particles, depth 4)
- **Mobile**: Auto-optimized to 75 particles, depth 3
- **Older Devices**: Use `particleCount={50}` and `maxDepth={2}`
- **High-End**: Can go up to `particleCount={200}` and `maxDepth={5}`

## Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile Safari iOS 14+  
✅ Chrome Mobile 90+

---

**Ready to go?** Copy the complete hero example above and customize it for your needs!
