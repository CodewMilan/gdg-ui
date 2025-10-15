'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-64 h-16 sm:w-80 sm:h-20 lg:w-96 lg:h-24 flex items-center justify-start">
              <Image
                src="/gdglogobms.png"
                alt="GDG BMS Institute of Technology"
                width={1200}
                height={400}
                className="w-full h-full object-contain object-left"
                priority
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                }}
              />
            </div>
          </div>

          {/* Center Title */}
          <div className="hidden lg:block">
            <h2 className="text-xl font-bold text-center text-gray-900" style={{ fontFamily: 'Google Sans, sans-serif' }}>
              Google Cloud Study Jams 25–26
            </h2>
          </div>

          {/* Spacer for mobile */}
          <div className="lg:hidden"></div>
        </div>

        {/* Mobile Center Title */}
        <div className="lg:hidden pb-4">
          <h2 className="text-lg font-semibold text-center text-gray-900" style={{ fontFamily: 'Google Sans, sans-serif' }}>
            Google Cloud Study Jams 25–26
          </h2>
        </div>
      </div>
    </header>
  );
}