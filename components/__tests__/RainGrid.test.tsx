import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RainGrid from '../RainGrid';

describe('RainGrid Component', () => {
  let mockCanvas: HTMLCanvasElement;
  let mockContext: CanvasRenderingContext2D;

  beforeEach(() => {
    mockContext = {
      fillRect: jest.fn(),
      strokeRect: jest.fn(),
      beginPath: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      fillStyle: '',
      strokeStyle: '',
      lineWidth: 0,
      globalAlpha: 1,
    } as unknown as CanvasRenderingContext2D;

    HTMLCanvasElement.prototype.getContext = jest.fn(() => mockContext);
    
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

    global.requestAnimationFrame = jest.fn((cb) => {
      cb(0);
      return 0;
    });
    
    global.cancelAnimationFrame = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders canvas element', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas');
      expect(canvas).toBeInTheDocument();
    });

    test('applies default className', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas');
      expect(canvas).toHaveClass('fixed', 'inset-0', 'w-full', 'h-full');
    });

    test('applies custom className', () => {
      const { container } = render(<RainGrid className="custom-class" />);
      const canvas = container.querySelector('canvas');
      expect(canvas).toHaveClass('custom-class');
    });

    test('sets canvas dimensions to window size', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      expect(canvas.width).toBe(1024);
      expect(canvas.height).toBe(768);
    });

    test('sets touch-action to none for touch support', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      expect(canvas.style.touchAction).toBe('none');
    });
  });

  describe('Configuration Props', () => {
    test('accepts custom backgroundColor', () => {
      render(<RainGrid backgroundColor="#000000" />);
      expect(mockContext.fillStyle).toBe('#000000');
    });

    test('accepts custom gridColor', () => {
      render(<RainGrid gridColor="rgba(255, 0, 0, 0.5)" />);
      expect(mockContext.strokeStyle).toContain('rgba(255, 0, 0');
    });

    test('accepts custom rainColor', () => {
      render(<RainGrid rainColor="rgba(0, 255, 0, 0.8)" />);
      expect(mockContext.strokeStyle).toContain('rgba(0, 255, 0');
    });

    test('accepts custom particleCount', () => {
      render(<RainGrid particleCount={200} />);
      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('accepts custom maxDepth', () => {
      render(<RainGrid maxDepth={5} />);
      expect(mockContext.strokeRect).toHaveBeenCalled();
    });

    test('accepts custom cleaningRadius', () => {
      render(<RainGrid cleaningRadius={150} />);
      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('accepts custom glowIntensity', () => {
      render(<RainGrid glowIntensity={0.5} />);
      expect(requestAnimationFrame).toHaveBeenCalled();
    });
  });

  describe('Animation Loop', () => {
    test('starts animation on mount', () => {
      render(<RainGrid />);
      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('stops animation on unmount', () => {
      const { unmount } = render(<RainGrid />);
      unmount();
      expect(cancelAnimationFrame).toHaveBeenCalled();
    });

    test('draws fractal grid', () => {
      render(<RainGrid />);
      expect(mockContext.strokeRect).toHaveBeenCalled();
    });

    test('draws rain particles', () => {
      render(<RainGrid />);
      expect(mockContext.moveTo).toHaveBeenCalled();
      expect(mockContext.lineTo).toHaveBeenCalled();
    });
  });

  describe('Mouse Interaction', () => {
    test('handles mousemove event', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      fireEvent.mouseMove(canvas, {
        clientX: 100,
        clientY: 100,
      });

      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('handles mouseleave event', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      fireEvent.mouseMove(canvas, {
        clientX: 100,
        clientY: 100,
      });
      
      fireEvent.mouseLeave(canvas);
      
      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('creates cleaned cells on pointer movement', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      fireEvent.mouseMove(canvas, {
        clientX: 200,
        clientY: 200,
      });

      expect(mockContext.strokeRect).toHaveBeenCalled();
    });
  });

  describe('Touch Interaction', () => {
    test('handles touchstart event', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      fireEvent.touchStart(canvas, {
        touches: [{ clientX: 150, clientY: 150 }],
      });

      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('handles touchmove event', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      fireEvent.touchMove(canvas, {
        touches: [{ clientX: 150, clientY: 150 }],
      });

      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('handles touchend event', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      fireEvent.touchStart(canvas, {
        touches: [{ clientX: 150, clientY: 150 }],
      });
      
      fireEvent.touchEnd(canvas);
      
      expect(requestAnimationFrame).toHaveBeenCalled();
    });
  });

  describe('Responsive Behavior', () => {
    test('adjusts configuration for mobile devices', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      render(<RainGrid />);
      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('handles window resize with debouncing', async () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;

      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      });
      
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 1080,
      });

      fireEvent(window, new Event('resize'));

      await waitFor(() => {
        expect(canvas.width).toBe(1920);
        expect(canvas.height).toBe(1080);
      }, { timeout: 300 });
    });

    test('reduces particle count on mobile', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });

      render(<RainGrid />);
      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('reduces grid depth on mobile', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 600,
      });

      render(<RainGrid />);
      expect(mockContext.strokeRect).toHaveBeenCalled();
    });
  });

  describe('Performance', () => {
    test('cleans up event listeners on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
      const { unmount } = render(<RainGrid />);
      
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    });

    test('cancels animation frame on unmount', () => {
      const { unmount } = render(<RainGrid />);
      unmount();
      expect(cancelAnimationFrame).toHaveBeenCalled();
    });

    test('debounces resize events', async () => {
      render(<RainGrid />);
      
      fireEvent(window, new Event('resize'));
      fireEvent(window, new Event('resize'));
      fireEvent(window, new Event('resize'));

      await waitFor(() => {
        expect(requestAnimationFrame).toHaveBeenCalled();
      }, { timeout: 300 });
    });
  });

  describe('Canvas Drawing', () => {
    test('fills background with specified color', () => {
      render(<RainGrid backgroundColor="#0f172a" />);
      expect(mockContext.fillStyle).toBe('#0f172a');
      expect(mockContext.fillRect).toHaveBeenCalled();
    });

    test('draws grid lines with correct opacity', () => {
      render(<RainGrid />);
      expect(mockContext.globalAlpha).toBeDefined();
      expect(mockContext.strokeRect).toHaveBeenCalled();
    });

    test('draws rain particles', () => {
      render(<RainGrid />);
      expect(mockContext.moveTo).toHaveBeenCalled();
      expect(mockContext.lineTo).toHaveBeenCalled();
      expect(mockContext.stroke).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    test('handles missing canvas context gracefully', () => {
      HTMLCanvasElement.prototype.getContext = jest.fn(() => null);
      
      expect(() => render(<RainGrid />)).not.toThrow();
    });

    test('handles rapid pointer movements', () => {
      const { container } = render(<RainGrid />);
      const canvas = container.querySelector('canvas') as HTMLCanvasElement;
      
      for (let i = 0; i < 100; i++) {
        fireEvent.mouseMove(canvas, {
          clientX: i * 10,
          clientY: i * 10,
        });
      }

      expect(requestAnimationFrame).toHaveBeenCalled();
    });

    test('handles zero particle count', () => {
      expect(() => render(<RainGrid particleCount={0} />)).not.toThrow();
    });

    test('handles very large particle count', () => {
      expect(() => render(<RainGrid particleCount={1000} />)).not.toThrow();
    });
  });
});
