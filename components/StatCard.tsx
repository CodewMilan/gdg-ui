'use client';

import { useEffect, useState } from 'react';

interface StatCardProps {
  title: string;
  value: number;
  color: 'green' | 'blue';
  icon?: React.ReactNode;
  delay?: number;
}

export default function StatCard({ title, value, color, icon, delay = 0 }: StatCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setAnimatedValue(value);
          clearInterval(timer);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const colorClasses = {
    green: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100',
      border: 'border-green-200',
      text: 'text-green-700',
      value: 'text-green-800',
      glow: 'shadow-green-200'
    },
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
      border: 'border-blue-200',
      text: 'text-blue-700',
      value: 'text-blue-800',
      glow: 'shadow-blue-200'
    }
  };

  const classes = colorClasses[color];

  return (
    <div
      className={`
        relative p-4 sm:p-6 rounded-xl border transition-all duration-500 transform
        ${classes.bg} ${classes.border} ${classes.glow}
        ${isVisible ? 'animate-fade-in-up shadow-lg' : 'opacity-0 translate-y-4'}
        hover:scale-105 hover:shadow-xl
      `}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {icon && (
              <div className={`p-1.5 sm:p-2 rounded-lg ${color === 'green' ? 'bg-green-100' : 'bg-blue-100'}`}>
                {icon}
              </div>
            )}
            <h3 className={`text-xs sm:text-sm font-medium ${classes.text} leading-tight`}>
              {title}
            </h3>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${classes.value} tabular-nums`}>
              {animatedValue.toLocaleString()}
            </div>
          </div>
          
          {/* Decorative element */}
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${color === 'green' ? 'bg-green-200' : 'bg-blue-200'} opacity-20 flex items-center justify-center`}>
            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${color === 'green' ? 'bg-green-300' : 'bg-blue-300'} animate-pulse-slow`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

