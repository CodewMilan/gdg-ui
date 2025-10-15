'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = "Search Your Name Here" }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear any pending timeout and search immediately
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set new timeout for debounced search
    timeoutRef.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          {/* Search Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            className="
              w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 
              bg-white 
              border-2 border-gray-200 
              rounded-xl 
              text-gray-900 
              placeholder-gray-500
              focus:outline-none focus:ring-4 focus:ring-blue-500/20 
              focus:border-blue-500
              transition-all duration-300 ease-in-out
              shadow-sm hover:shadow-md
              text-center text-sm sm:text-base
            "
          />

          {/* Clear Button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                onSearch('');
              }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Neumorphic effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </form>

      {/* Search suggestions (optional) */}
      {query && (
        <div className="mt-2 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Press Enter to search or type to filter results
          </span>
        </div>
      )}
    </div>
  );
}

