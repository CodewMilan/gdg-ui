'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import StatCard from '../../components/StatCard';
import SearchBar from '../../components/SearchBar';
import LeaderboardTable from '../../components/LeaderboardTable';
import { fetchLeaderboard, searchParticipants, Participant } from '../../lib/supabase';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    loadParticipants();
  }, []);

  const loadParticipants = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchLeaderboard();
      setParticipants(data);
    } catch (err) {
      setError('Failed to load leaderboard data. Please check your connection.');
      console.error('Error loading participants:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate statistics from participants data
  const calculateStats = () => {
    const totalParticipants = participants.length;
    const totalBadges = participants.reduce((sum, participant) => sum + participant.badges, 0);
    const completedParticipants = participants.filter(p => p.badges >= 20).length;
    const averageProgress = totalParticipants > 0 ? Math.round(totalBadges / totalParticipants) : 0;
    const above50Percent = participants.filter(p => p.badges >= 10).length;

    return {
      totalParticipants,
      totalBadges,
      completedParticipants,
      averageProgress,
      above50Percent
    };
  };

  const stats = calculateStats();

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      // If search is empty, reload all participants
      loadParticipants();
      return;
    }

    try {
      // Don't show loading for search - just update results
      const data = await searchParticipants(query);
      setParticipants(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Failed to search participants.');
      console.error('Error searching participants:', err);
    }
  }, []); // Empty dependency array since we don't want this to change

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex space-x-2">
          <span className="google-loader"></span>
          <span className="google-loader"></span>
          <span className="google-loader"></span>
          <span className="google-loader"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-800 text-sm">{error}</p>
              <button 
                onClick={loadParticipants}
                className="ml-auto px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <StatCard
            title="Above 50% Progress"
            value={stats.above50Percent}
            color="blue"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            }
          />
          <StatCard
            title="Total Badges Earned"
            value={stats.totalBadges.toLocaleString()}
            color="yellow"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            }
          />
          <StatCard
            title="Completed (20/20)"
            value={stats.completedParticipants}
            color="green"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            }
          />
          <StatCard
            title="Average Progress"
            value={stats.averageProgress}
            color="purple"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            }
          />
        </div>

        {/* Campaign Tier Progress - Commented Out */}
        {/*
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium text-center text-gray-900 mb-4 sm:mb-6">
            Campaign Tier Progress
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <TierProgress
              tier={1}
              current={18}
              total={100}
              color="blue"
              delay={600}
            />
            <TierProgress
              tier={2}
              current={18}
              total={70}
              color="green"
              delay={800}
            />
            <TierProgress
              tier={3}
              current={18}
              total={40}
              color="purple"
              delay={1000}
            />
          </div>
        </div>
        */}

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Leaderboard Table */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-medium text-center text-gray-900 mb-4 sm:mb-6">
            Google Cloud Skills Leaderboard
          </h2>
          <LeaderboardTable 
            participants={participants} 
            searchQuery={searchQuery}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              © 2025 Google Developer Group BMS Institute of Technology
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Powered by Google Cloud Study Jams
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

