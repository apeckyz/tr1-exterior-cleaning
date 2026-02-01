# RainGrid Component - Testing Guide

## Overview

This guide provides comprehensive testing strategies for the RainGrid component, including manual testing procedures, automated test setup, and performance benchmarking.

## Manual Testing

### Desktop Testing Checklist

#### Visual Verification
- [ ] **Grid Rendering**: Fractal grid pattern displays correctly
- [ ] **Grid Opacity**: Grid lines are subtle (opacity ~0.2)
- [ ] **Grid Color**: Cyan/white bluish tint is visible
- [ ] **Background**: Deep navy background renders correctly
- [ ] **Rain Particles**: White/blue rain droplets are visible
- [ ] **Rain Animation**: Particles fall smoothly from top to bottom

#### Interaction Testing
- [ ] **Mouse Movement**: Moving cursor creates cleaning effect
- [ ] **Rain Repelling**: Rain particles move away from cursor
- [ ] **Grid Glow**: Grid cells glow bright when cursor passes over
- [ ] **Glow Fade**: Glowing cells fade back to normal opacity
- [ ] **Pooling Effect**: Some rain drops pool on horizontal grid lines
- [ ] **Dripping Effect**: Pooled drops eventually drip and continue falling

#### Performance Testing
- [ ] **Smooth Animation**: 60fps with default settings (150 particles)
- [ ] **No Lag**: Cursor movement is responsive
- [ ] **Memory Usage**: No memory leaks after 5 minutes
- [ ] **CPU Usage**: Reasonable CPU usage (< 30% on modern hardware)

### Mobile Testing Checklist

#### Touch Interaction
- [ ] **Touch Start**: Tapping screen activates cleaning effect
- [ ] **Touch Move**: Swiping creates continuous cleaning trail
- [ ] **Touch End**: Effect stops when finger lifts
- [ ] **Multi-touch**: Component handles multiple touches gracefully
- [ ] **Touch Action**: No page scrolling during interaction

#### Responsive Behavior
- [ ] **Particle Reduction**: Fewer particles on mobile (75 vs 150)
- [ ] **Grid Simplification**: Reduced grid depth (3 vs 4 levels)
- [ ] **Performance**: Smooth 60fps on modern mobile devices
- [ ] **Canvas Sizing**: Canvas fills entire viewport correctly

#### Device Testing Matrix

| Device Type | Screen Size | Particle Count | Grid Depth | Expected FPS |
|-------------|-------------|----------------|------------|--------------|
| Desktop HD | 1920x1080 | 150 | 4 | 60 |
| Desktop 4K | 3840x2160 | 150 | 4 | 60 |
| Tablet | 1024x768 | 75 | 3 | 60 |
| Mobile Large | 414x896 | 75 | 3 | 60 |
| Mobile Small | 375x667 | 75 | 3 | 55-60 |

### Browser Testing

Test in the following browsers:

- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest)
- [ ] **Edge** (latest)
- [ ] **Mobile Safari** (iOS 14+)
- [ ] **Chrome Mobile** (Android)

### Resize Testing

- [ ] **Window Resize**: Canvas adjusts to new dimensions
- [ ] **Debouncing**: Resize events are debounced (250ms)
- [ ] **No Crashes**: Component doesn't crash during rapid resizing
- [ ] **Particle Reset**: Particles reinitialize correctly after resize

## Automated Testing Setup

### Prerequisites

Install testing dependencies:

```bash
npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  @types/jest \
  jest \
  jest-environment-jsdom \
  jest-canvas-mock
```

### Jest Configuration

Create or update `jest.config.js`:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['@swc/jest', {
      jsc: {
        parser: {
          syntax: 'typescript',
          tsx: true,
        },
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
      },
    }],
  },
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/**/*.test.{ts,tsx}',
    '!components/**/*.example.{ts,tsx}',
  ],
};
```

### Jest Setup File

Create `jest.setup.js`:

```javascript
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

// Mock requestAnimationFrame
global.requestAnimationFrame = (cb) => {
  cb(0);
  return 0;
};

global.cancelAnimationFrame = jest.fn();

// Mock window dimensions
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024,
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 768,
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test RainGrid.test.tsx
```

### Test Coverage Goals

Aim for the following coverage:

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## Performance Testing

### FPS Measurement

Add FPS counter for development:

```typescript
useEffect(() => {
  let frameCount = 0;
  let lastTime = performance.now();
  
  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      console.log(`RainGrid FPS: ${fps}`);
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFPS);
  };
  
  measureFPS();
}, []);
```

### Performance Benchmarks

Expected performance metrics:

| Configuration | Desktop FPS | Mobile FPS | Memory (MB) | CPU (%) |
|---------------|-------------|------------|-------------|---------|
| Default | 60 | 55-60 | 50-80 | 15-25 |
| High Impact | 55-60 | 45-55 | 80-120 | 25-35 |
| Performance | 60 | 60 | 30-50 | 10-15 |
| Subtle | 60 | 60 | 25-40 | 8-12 |

### Memory Leak Testing

Test for memory leaks:

```typescript
// Run this in browser console
let components = [];

// Mount 10 instances
for (let i = 0; i < 10; i++) {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<RainGrid />, root);
  components.push(root);
}

// Take heap snapshot 1

// Unmount all instances
components.forEach(root => {
  ReactDOM.unmountComponentAtNode(root);
  document.body.removeChild(root);
});

// Force garbage collection (in Chrome DevTools)
// Take heap snapshot 2
// Compare snapshots - memory should return to baseline
```

## Integration Testing

### Testing with Hero Section

```typescript
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('Hero Section with RainGrid', () => {
  test('renders hero content above RainGrid', () => {
    render(<HeroSection />);
    
    const heading = screen.getByRole('heading');
    const canvas = document.querySelector('canvas');
    
    expect(heading).toBeInTheDocument();
    expect(canvas).toBeInTheDocument();
    
    // Verify z-index layering
    const headingZIndex = window.getComputedStyle(heading.parentElement).zIndex;
    expect(parseInt(headingZIndex)).toBeGreaterThan(0);
  });
});
```

### Testing with Navigation

```typescript
test('RainGrid does not interfere with navigation clicks', () => {
  const handleClick = jest.fn();
  
  render(
    <div>
      <RainGrid />
      <nav style={{ position: 'relative', zIndex: 10 }}>
        <button onClick={handleClick}>Click Me</button>
      </nav>
    </div>
  );
  
  const button = screen.getByText('Click Me');
  fireEvent.click(button);
  
  expect(handleClick).toHaveBeenCalled();
});
```

## Visual Regression Testing

### Using Playwright

Install Playwright:

```bash
npm install --save-dev @playwright/test
```

Create visual regression test:

```typescript
import { test, expect } from '@playwright/test';

test.describe('RainGrid Visual Tests', () => {
  test('renders correctly on desktop', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(1000); // Let animation settle
    
    await expect(page).toHaveScreenshot('raingrid-desktop.png', {
      maxDiffPixels: 100,
    });
  });
  
  test('renders correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');
    await page.waitForTimeout(1000);
    
    await expect(page).toHaveScreenshot('raingrid-mobile.png', {
      maxDiffPixels: 100,
    });
  });
  
  test('cleaning effect works', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    const canvas = await page.locator('canvas');
    await canvas.hover({ position: { x: 100, y: 100 } });
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot('raingrid-cleaned.png', {
      maxDiffPixels: 200,
    });
  });
});
```

## Accessibility Testing

### Automated Accessibility Tests

```bash
npm install --save-dev @axe-core/react jest-axe
```

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('RainGrid has no accessibility violations', async () => {
  const { container } = render(<RainGrid />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Accessibility Checks

- [ ] **Keyboard Navigation**: Not applicable (decorative element)
- [ ] **Screen Reader**: Canvas is ignored by screen readers (decorative)
- [ ] **Color Contrast**: Overlaid text meets WCAG AA standards
- [ ] **Motion Sensitivity**: Consider adding `prefers-reduced-motion` support

## Edge Case Testing

### Test Scenarios

1. **Zero Particles**
   ```typescript
   <RainGrid particleCount={0} />
   ```

2. **Extreme Particle Count**
   ```typescript
   <RainGrid particleCount={1000} />
   ```

3. **Invalid Colors**
   ```typescript
   <RainGrid backgroundColor="invalid" />
   ```

4. **Negative Values**
   ```typescript
   <RainGrid cleaningRadius={-100} />
   ```

5. **Very Small Canvas**
   ```typescript
   // Test with 100x100px viewport
   ```

6. **Rapid Pointer Movement**
   ```typescript
   // Simulate 100 mousemove events in 1 second
   ```

## Continuous Integration

### GitHub Actions Example

```yaml
name: Test RainGrid Component

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm test -- --coverage
      - run: npm run test:visual
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

## Debugging Tips

### Enable Debug Mode

Add debug logging:

```typescript
const DEBUG = process.env.NODE_ENV === 'development';

if (DEBUG) {
  console.log('Raindrops:', raindropsRef.current.length);
  console.log('Grid Lines:', gridLinesRef.current.length);
  console.log('Cleaned Cells:', cleanedCellsRef.current.length);
  console.log('Pointer:', pointerRef.current);
}
```

### Visual Debugging

Draw debug information on canvas:

```typescript
// Add to animation loop
if (DEBUG) {
  ctx.fillStyle = 'yellow';
  ctx.font = '12px monospace';
  ctx.fillText(`FPS: ${fps}`, 10, 20);
  ctx.fillText(`Particles: ${raindropsRef.current.length}`, 10, 40);
  ctx.fillText(`Pointer: ${pointerRef.current.x}, ${pointerRef.current.y}`, 10, 60);
}
```

## Test Maintenance

### When to Update Tests

Update tests when:
- Adding new features
- Changing component behavior
- Fixing bugs
- Modifying props API
- Updating dependencies

### Test Review Checklist

- [ ] All tests pass
- [ ] Coverage meets goals (>80%)
- [ ] No flaky tests
- [ ] Tests are readable and maintainable
- [ ] Edge cases are covered
- [ ] Performance benchmarks are met

## Conclusion

Comprehensive testing ensures the RainGrid component:
- Works correctly across devices and browsers
- Performs well under various conditions
- Handles edge cases gracefully
- Maintains accessibility standards
- Provides a consistent user experience

Regular testing and monitoring help catch issues early and maintain high quality standards.
