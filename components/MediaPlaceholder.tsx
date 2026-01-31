import { Image as ImageIcon, Play } from 'lucide-react'

/**
 * MediaPlaceholder Component
 * 
 * A reusable placeholder component for images and videos with subtle styling.
 * Perfect for maintaining visual hierarchy while content is being prepared.
 * 
 * @param {Object} props - Component props
 * @param {'image' | 'video'} props.type - Type of media placeholder (determines icon)
 * @param {'square' | 'video' | 'portrait' | 'landscape'} props.aspectRatio - Aspect ratio preset
 * @param {string} props.className - Additional CSS classes
 * 
 * @example
 * <MediaPlaceholder type="image" aspectRatio="landscape" />
 * <MediaPlaceholder type="video" aspectRatio="video" className="rounded-xl" />
 */
export default function MediaPlaceholder({
  type = 'image',
  aspectRatio = 'landscape',
  className = '',
}: {
  type?: 'image' | 'video'
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  className?: string
}) {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }

  const Icon = type === 'video' ? Play : ImageIcon

  return (
    <div
      className={`${aspectRatioClasses[aspectRatio]} w-full bg-slate-100 rounded-lg flex items-center justify-center ${className}`}
    >
      <Icon className="w-12 h-12 text-slate-300" strokeWidth={1.5} />
    </div>
  )
}
