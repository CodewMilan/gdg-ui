'use client';

import { useState, useMemo } from 'react';

interface Participant {
  id: number;
  rank: number;
  name: string;
  profile_icon: string;
  points: number;
  badges: number;
  last_updated: string;
  increments_decrements: number;
  created_at: string;
}

interface LeaderboardTableProps {
  participants: Participant[];
  searchQuery?: string;
}

export default function LeaderboardTable({ participants, searchQuery = '' }: LeaderboardTableProps) {
  const [sortBy, setSortBy] = useState<keyof Participant>('rank');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredParticipants = useMemo(() => {
    if (!searchQuery) return participants;
    
    return participants.filter(participant =>
      participant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [participants, searchQuery]);

  const sortedParticipants = useMemo(() => {
    return [...filteredParticipants].sort((a, b) => {
      // Always sort by rank first (ascending) to ensure top 3 are at the top
      if (a.rank !== b.rank) {
        return a.rank - b.rank;
      }
      
      // If ranks are the same, then apply the selected sort
      const aValue = a[sortBy];
      const bValue = b[sortBy];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
        return sortOrder === 'asc' ? (aValue ? 1 : -1) : (bValue ? 1 : -1);
      }
      
      return 0;
    });
  }, [filteredParticipants, sortBy, sortOrder]);

  const handleSort = (column: keyof Participant) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };



  const getRankChangeIndicator = (change: number) => {
    if (change > 0) {
      return (
        <div className="flex items-center space-x-1 text-green-600">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium">+{change}</span>
        </div>
      );
    } else if (change < 0) {
      return (
        <div className="flex items-center space-x-1 text-red-600">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium">{change}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center space-x-1 text-gray-500">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-300"></div>
          <span className="text-xs font-medium">0</span>
        </div>
      );
    }
  };


  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
            <tr>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>#</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </th>
              <th
                onClick={() => handleSort('name')}
                className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                  {sortBy === 'name' && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </th>
              <th
                onClick={() => handleSort('points')}
                className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <div className="flex items-center space-x-1">
                  <span>Points</span>
                  {sortBy === 'points' && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </th>
              <th
                onClick={() => handleSort('badges')}
                className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:bg-blue-700 transition-colors"
              >
                <div className="flex items-center space-x-1">
                  <span>Badges</span>
                  {sortBy === 'badges' && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                Rank Change
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedParticipants.map((participant, index) => (
              <tr
                key={participant.id}
                className={`hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {(participant.rank)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex items-center">
                    <span className="font-medium text-xs sm:text-sm">{participant.name}</span>
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className="font-semibold text-xs sm:text-sm">{participant.points.toLocaleString()}</span>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className="font-semibold text-xs sm:text-sm">{participant.badges}</span>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm text-gray-900">
                  {getRankChangeIndicator(participant.increments_decrements)}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-sm font-medium">
                  <button className="inline-flex items-center px-2 sm:px-4 py-1.5 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm hover:shadow-md">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedParticipants.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-500">
            <svg className="mx-auto h-8 w-8 sm:h-12 sm:w-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-base sm:text-lg font-medium">No participants found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        </div>
      )}
    </div>
  );
}

