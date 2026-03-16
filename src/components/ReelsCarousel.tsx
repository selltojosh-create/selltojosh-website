'use client';

import { useState } from 'react';
import Image from 'next/image';
import { reels as staticReels, Reel } from '@/data/reels';
import YouTubeEmbed from './YouTubeEmbed';

interface ReelsCarouselProps {
  reels?: Reel[];
}

export default function ReelsCarousel({ reels = staticReels }: ReelsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1));
  };

  const currentReel = reels[currentIndex];

  if (!reels.length) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Main Video Display */}
      <div className="relative">
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <YouTubeEmbed
            videoId={currentReel.youtubeId}
            title={currentReel.title}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy p-2 md:p-3 rounded-full shadow-lg transition-all"
          aria-label="Previous video"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy p-2 md:p-3 rounded-full shadow-lg transition-all"
          aria-label="Next video"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Video Info */}
      <div className="mt-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
          {currentReel.title}
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {currentReel.description}
        </p>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-orange w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
        {reels.map((reel, index) => (
          <button
            key={reel.id}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? 'border-orange ring-2 ring-orange/30'
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <Image
              src={`https://img.youtube.com/vi/${reel.youtubeId}/mqdefault.jpg`}
              alt={reel.title}
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              className="object-cover"
            />
            {index === currentIndex && (
              <div className="absolute inset-0 bg-orange/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
