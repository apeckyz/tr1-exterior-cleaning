"use client";

import React, { useEffect, useRef, useCallback } from "react";

/**
 * @interface RainGridProps
 * @description Configuration props for the organic water-on-window component
 */
interface RainGridProps {
  /** Background color of the canvas (default: #0f172a - Deep Navy) */
  backgroundColor?: string;
  /** Color of the static grid lines (default: rgba(125, 211, 252, 0.1) - Subtle texture) */
  gridColor?: string;
  /** Color of water droplets (default: rgba(200, 230, 255, 0.7) - Water blue) */
  rainColor?: string;
  /** Maximum recursion depth for fractal grid (default: 4, mobile: 3) */
  maxDepth?: number;
  /** Number of rain particles (default: 150, mobile: 75) */
  particleCount?: number;
  /** Radius of the repelling force field (default: 120px) */
  repelRadius?: number;
  /** Strength of the repelling force (default: 0.5) */
  repelStrength?: number;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * @interface Raindrop
 * @description Represents a single organic water droplet with velocity
 */
interface Raindrop {
  x: number;
  y: number;
  vx: number;        // X velocity for smooth lateral movement
  vy: number;        // Y velocity (fall speed)
  length: number;    // Streak length
  width: number;     // Droplet width
  opacity: number;
  depth: number;     // 0-1, determines speed (parallax effect)
}

/**
 * @interface GridLine
 * @description Represents a static grid line (window pane texture)
 */
interface GridLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isHorizontal: boolean;
}

/**
 * @component RainGrid
 * @description Organic water-on-window effect with smooth radial repulsion.
 * The component creates an interactive canvas where:
 * - A static fractal grid provides subtle window pane texture
 * - Organic water droplets fall with varying speeds (parallax depth)
 * - User pointer creates a radial "dry zone" that smoothly repels rain
 * - Droplets curve around the force field with realistic physics
 * - Fully responsive with mobile touch support
 * 
 * @example
 * ```tsx
 * <RainGrid 
 *   backgroundColor="#000000"
 *   particleCount={150}
 *   repelRadius={120}
 * />
 * ```
 */
const RainGrid: React.FC<RainGridProps> = ({
  backgroundColor = "#0f172a",
  gridColor = "rgba(125, 211, 252, 0.1)",
  rainColor = "rgba(200, 230, 255, 0.7)",
  maxDepth: initialMaxDepth,
  particleCount: initialParticleCount,
  repelRadius = 120,
  repelStrength = 0.5,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const raindropsRef = useRef<Raindrop[]>([]);
  const gridLinesRef = useRef<GridLine[]>([]);
  const staticGridRef = useRef<ImageData | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  /**
   * @function isMobile
   * @description Detects if the device is mobile based on screen width
   * @returns {boolean} True if screen width is less than 768px
   */
  const isMobile = useCallback((): boolean => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  }, []);

  /**
   * @function getResponsiveConfig
   * @description Returns configuration adjusted for mobile devices
   * @returns Configuration object with maxDepth and particleCount
   */
  const getResponsiveConfig = useCallback(() => {
    const mobile = isMobile();
    return {
      maxDepth: initialMaxDepth ?? (mobile ? 3 : 4),
      particleCount: initialParticleCount ?? (mobile ? 75 : 150),
    };
  }, [isMobile, initialMaxDepth, initialParticleCount]);

  /**
   * @function drawFractalGrid
   * @description Recursively draws the static fractal grid pattern (window pane texture)
   * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
   * @param {number} x - Starting x coordinate
   * @param {number} y - Starting y coordinate
   * @param {number} width - Width of the current cell
   * @param {number} height - Height of the current cell
   * @param {number} depth - Current recursion depth
   * @param {number} maxDepth - Maximum recursion depth
   */
  const drawFractalGrid = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      depth: number,
      maxDepth: number
    ) => {
      if (depth > maxDepth || width < 20 || height < 20) return;

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;

      // Draw rectangle
      ctx.strokeRect(x, y, width, height);

      // Store grid lines for reference (not used for interaction anymore)
      gridLinesRef.current.push(
        { x1: x, y1: y, x2: x + width, y2: y, isHorizontal: true },
        { x1: x, y1: y + height, x2: x + width, y2: y + height, isHorizontal: true },
        { x1: x, y1: y, x2: x, y2: y + height, isHorizontal: false },
        { x1: x + width, y1: y, x2: x + width, y2: y + height, isHorizontal: false }
      );

      const midX = x + width / 2;
      const midY = y + height / 2;

      // Draw cross
      ctx.beginPath();
      ctx.moveTo(midX, y);
      ctx.lineTo(midX, y + height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, midY);
      ctx.lineTo(x + width, midY);
      ctx.stroke();

      gridLinesRef.current.push(
        { x1: x, y1: midY, x2: x + width, y2: midY, isHorizontal: true },
        { x1: midX, y1: y, x2: midX, y2: y + height, isHorizontal: false }
      );

      const newDepth = depth + 1;
      const halfWidth = width / 2;
      const halfHeight = height / 2;

      // Recursively subdivide with randomness
      if (Math.random() > 0.3) {
        drawFractalGrid(ctx, x, y, halfWidth, halfHeight, newDepth, maxDepth);
      }
      if (Math.random() > 0.3) {
        drawFractalGrid(ctx, midX, y, halfWidth, halfHeight, newDepth, maxDepth);
      }
      if (Math.random() > 0.3) {
        drawFractalGrid(ctx, x, midY, halfWidth, halfHeight, newDepth, maxDepth);
      }
      if (Math.random() > 0.3) {
        drawFractalGrid(ctx, midX, midY, halfWidth, halfHeight, newDepth, maxDepth);
      }
    },
    [gridColor]
  );

  /**
   * @function initRaindrops
   * @description Initializes organic water droplets with velocity and depth
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @param {number} count - Number of droplets to create
   */
  const initRaindrops = useCallback((width: number, height: number, count: number) => {
    raindropsRef.current = Array.from({ length: count }, () => {
      const depth = Math.random(); // 0 = background (slow), 1 = foreground (fast)
      const baseSpeed = 2 + depth * 4; // Speed varies from 2-6 based on depth
      
      return {
        x: Math.random() * width,
        y: Math.random() * height - height,
        vx: 0, // Horizontal velocity (affected by repulsion)
        vy: baseSpeed, // Vertical velocity (fall speed)
        length: 8 + depth * 15, // Longer streaks for faster drops
        width: 1 + depth * 1.5, // Thicker drops in foreground
        opacity: 0.3 + depth * 0.4, // More visible in foreground
        depth: depth,
      };
    });
  }, []);

  /**
   * @function updateRaindrops
   * @description Updates droplet positions with smooth radial repulsion physics
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  const updateRaindrops = useCallback(
    (width: number, height: number) => {
      const pointer = pointerRef.current;

      raindropsRef.current.forEach((drop) => {
        // Calculate distance to pointer
        const dx = drop.x - pointer.x;
        const dy = drop.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply radial repulsion force if pointer is active and within radius
        if (pointer.active && distance < repelRadius && distance > 0) {
          const force = ((repelRadius - distance) / repelRadius) * repelStrength;
          const angle = Math.atan2(dy, dx);
          
          // Apply force to velocity (smooth acceleration)
          drop.vx += Math.cos(angle) * force * 2;
          drop.vy += Math.sin(angle) * force * 0.5; // Less vertical force
        }

        // Apply gravity and friction
        const baseSpeed = 2 + drop.depth * 4;
        drop.vy += (baseSpeed - drop.vy) * 0.1; // Gradually return to fall speed
        drop.vx *= 0.95; // Friction on horizontal movement

        // Update position
        drop.x += drop.vx;
        drop.y += drop.vy;

        // Wrap around or reset
        if (drop.y > height + drop.length) {
          drop.y = -drop.length;
          drop.x = Math.random() * width;
          drop.vx = 0;
          drop.vy = baseSpeed;
        }

        // Horizontal wrapping
        if (drop.x < -10) drop.x = width + 10;
        if (drop.x > width + 10) drop.x = -10;
      });
    },
    [repelRadius, repelStrength]
  );

  /**
   * @function drawRaindrops
   * @description Renders organic water droplets as streaks or circles
   * @param {CanvasRenderingContext2D} ctx - Canvas rendering context
   */
  const drawRaindrops = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      raindropsRef.current.forEach((drop) => {
        ctx.globalAlpha = drop.opacity;
        
        // Draw as a streak (line) with rounded ends
        ctx.strokeStyle = rainColor;
        ctx.lineWidth = drop.width;
        ctx.lineCap = "round";
        
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
        
        // Optional: Add a small circle at the top for more organic look
        if (drop.depth > 0.5) {
          ctx.fillStyle = rainColor;
          ctx.beginPath();
          ctx.arc(drop.x, drop.y, drop.width * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      ctx.globalAlpha = 1;
    },
    [rainColor]
  );

  /**
   * @function animate
   * @description Main animation loop
   */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // Clear and draw background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Draw static grid (only once, then cache it)
    if (!staticGridRef.current) {
      ctx.globalAlpha = 1;
      const config = getResponsiveConfig();
      gridLinesRef.current = [];
      drawFractalGrid(ctx, 0, 0, width, height, 0, config.maxDepth);
      staticGridRef.current = ctx.getImageData(0, 0, width, height);
    } else {
      // Use cached static grid
      ctx.putImageData(staticGridRef.current, 0, 0);
    }

    // Update and draw rain
    updateRaindrops(width, height);
    drawRaindrops(ctx);

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [
    backgroundColor,
    getResponsiveConfig,
    drawFractalGrid,
    updateRaindrops,
    drawRaindrops,
  ]);

  /**
   * @function handleResize
   * @description Handles window resize events with debouncing
   */
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    // Clear cached grid so it redraws at new size
    staticGridRef.current = null;

    const config = getResponsiveConfig();
    initRaindrops(canvas.width, canvas.height, config.particleCount);
  }, [getResponsiveConfig, initRaindrops]);

  /**
   * @function handlePointerMove
   * @description Handles pointer/touch move events
   */
  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;

    if (e instanceof TouchEvent) {
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    pointerRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      active: true,
    };
  }, []);

  /**
   * @function handlePointerEnd
   * @description Handles pointer/touch end events
   */
  const handlePointerEnd = useCallback(() => {
    pointerRef.current.active = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Size canvas to parent container, not window
    const parent = canvas.parentElement;
    if (!parent) return;
    
    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    resizeCanvas();

    const config = getResponsiveConfig();
    initRaindrops(canvas.width, canvas.height, config.particleCount);

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 250);
    };

    window.addEventListener("resize", debouncedResize);
    canvas.addEventListener("mousemove", handlePointerMove);
    canvas.addEventListener("touchmove", handlePointerMove, { passive: true });
    canvas.addEventListener("touchstart", handlePointerMove, { passive: true });
    canvas.addEventListener("mouseleave", handlePointerEnd);
    canvas.addEventListener("touchend", handlePointerEnd);

    animate();

    return () => {
      window.removeEventListener("resize", debouncedResize);
      canvas.removeEventListener("mousemove", handlePointerMove);
      canvas.removeEventListener("touchmove", handlePointerMove);
      canvas.removeEventListener("touchstart", handlePointerMove);
      canvas.removeEventListener("mouseleave", handlePointerEnd);
      canvas.removeEventListener("touchend", handlePointerEnd);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(resizeTimeout);
    };
  }, [
    animate,
    handleResize,
    handlePointerMove,
    handlePointerEnd,
    getResponsiveConfig,
    initRaindrops,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ touchAction: "none", zIndex: 0 }}
    />
  );
};

export default RainGrid;
