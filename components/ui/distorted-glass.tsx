"use client"

import { cn } from "@/lib/utils"

export const DistortedGlass = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={cn(
          "relative h-[50px] w-full overflow-hidden",
          className
        )}
      >
        <div className="pointer-events-none absolute inset-0 z-10 size-full overflow-hidden border-b border-white/5">
          <div className="glass-effect size-full backdrop-blur-md bg-black/40"></div>
        </div>
        <svg className="absolute" width="0" height="0">
          <title>Distorted Glass</title>
          <defs>
            <filter id="fractal-noise-glass">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.15 0.15"
                numOctaves="2"
                result="warp"
              ></feTurbulence>
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="40"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        .glass-effect {
          background-image: repeating-radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.08) 8px,
            rgba(255, 255, 255, 0.15) 20px,
            rgba(255, 255, 255, 0.05) 30px
          );
          filter: url(#fractal-noise-glass);
          background-size: 8px 8px;
        }
      `}</style>
    </>
  )
}
