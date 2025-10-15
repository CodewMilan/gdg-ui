'use client';

import { useEffect, useState } from 'react';

interface TierProgressProps {
  tier: number;
  current: number;
  total: number;
  color: 'blue' | 'green' | 'purple';
  delay?: number;
}

export default function TierProgress({ tier, current, total, color, delay = 0 }: TierProgressProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const percentage = Math.round((current / total) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const steps = 60;
      const increment = percentage / steps;
      let currentProgress = 0;

      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= percentage) {
          setProgress(percentage);
          clearInterval(timer);
        } else {
          setProgress(Math.floor(currentProgress));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-r from-blue-500 to-blue-600',
      bgLight: 'bg-blue-100',
      text: 'text-blue-700',
      value: 'text-blue-800',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-gradient-to-r from-green-500 to-green-600',
      bgLight: 'bg-green-100',
      text: 'text-green-700',
      value: 'text-green-800',
      border: 'border-green-200'
    },
    purple: {
      bg: 'bg-gradient-to-r from-purple-500 to-purple-600',
      bgLight: 'bg-purple-100',
      text: 'text-purple-700',
      value: 'text-purple-800',
      border: 'border-purple-200'
    }
  };

  const classes = colorClasses[color];

  return (
    <div
      className={`
        p-4 sm:p-6 rounded-xl border transition-all duration-500 transform
        bg-white ${classes.border}
        ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}
        hover:shadow-lg hover:scale-[1.02]
      `}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className={`text-base sm:text-lg font-medium ${classes.text}`}>
          Tier #{tier}
        </h3>
        <div className="flex items-center space-x-2">
          <span className={`text-xs sm:text-sm font-medium ${classes.text}`}>
            {current}/{total}
          </span>
          <div className="flex items-center space-x-1">
            <span className={`text-xs ${classes.text}`}>Completed</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {/* Progress Bar */}
        <div className={`w-full h-3 sm:h-4 rounded-full ${classes.bgLight} overflow-hidden`}>
          <div
            className={`h-full ${classes.bg} transition-all duration-1000 ease-out relative`}
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            <div className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-white text-xs font-bold">
              {progress}%
            </div>
          </div>
        </div>

        {/* Progress Details */}
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className={`${classes.text}`}>
            Progress: {progress}%
          </span>
          <span className={`${classes.value} font-medium`}>
            {current} of {total} participants
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10">
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${classes.bg} animate-pulse-slow`}></div>
      </div>
    </div>
  );
}

