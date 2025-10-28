'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchLeaderboard, Participant } from '@/lib/supabase';

export default function HomePage() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchLeaderboard();
        setParticipants(data);
      } catch (error) {
        console.error('Error loading leaderboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Calculate metrics from leaderboard data
  const totalParticipants = participants.length;
  const tier1Achieved = totalParticipants >= 100;
  const tier2Achieved = totalParticipants >= 70;
  const tier3Achieved = totalParticipants >= 50;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e3f2fd' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* GDG Logo */}
            <div className="mb-8">
              <Image
                src="/gdglogobms.png"
                alt="GDG BMS Institute of Technology"
                width={300}
                height={120}
                className="mx-auto h-20 w-auto"
                priority
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Google Cloud
              <span className="block text-blue-600">Study Jams</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master Google Cloud Platform with hands-on learning, expert guidance, and real-world projects
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Leaderboard
              </Link>
              <Link
                href="/syllabus"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Syllabus
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-gray-600">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{totalParticipants}</div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies You will Master
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive coverage of Google Cloud Platform services
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Compute Engine', icon: '🖥️' },
              { name: 'Cloud Storage', icon: '💾' },
              { name: 'BigQuery', icon: '📊' },
              { name: 'Kubernetes', icon: '⚙️' },
              { name: 'Cloud Functions', icon: '⚡' },
              { name: 'Cloud SQL', icon: '🗄️' },
              { name: 'AutoML', icon: '🤖' },
              { name: 'Cloud Build', icon: '🔨' },
              { name: 'Cloud Run', icon: '🏃' },
              { name: 'Cloud CDN', icon: '🌐' },
              { name: 'Cloud IAM', icon: '🔐' },
              { name: 'Cloud Monitoring', icon: '📈' }
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center text-2xl">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Swag Tiers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Participant Rewards
            </h2>
            <p className="text-lg text-gray-600">
              Complete courses and earn amazing rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 - Ultimate Prize Pack */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="text-center mb-6">
                <Image
                  src="/tier1.png"
                  alt="Ultimate Prize Pack"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimate Prize Pack</h3>
                <p className="text-sm text-gray-600">Target: First 100 Students</p>
              </div>
              
              <div className="flex-grow mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                <p className="text-sm text-gray-600 mb-4">Complete all 20 courses + Send proof in WhatsApp group</p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Rewards:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Google Cloud Bag
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Google Cloud T-Shirt
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Google Cloud Bottle
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Stickers & Goodies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Certificate of Participation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Digital Badges
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Easy Access to All GDG OC Events
                  </li>
                </ul>
              </div>
              
              <button className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-auto ${
                tier1Achieved 
                  ? 'bg-gray-500 text-white cursor-not-allowed' 
                  : 'bg-yellow-500 hover:bg-yellow-600 text-white'
              }`}>
                {tier1Achieved ? 'Target Reached' : 'Be in Top 100!'}
              </button>
            </div>

            {/* Tier 2 - Advanced Rewards */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="text-center mb-6">
                <Image
                  src="/tier2.png"
                  alt="Advanced Rewards"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Rewards</h3>
                <p className="text-sm text-gray-600">Target: First 70 Students</p>
              </div>
              
              <div className="flex-grow mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                <p className="text-sm text-gray-600 mb-4">Complete all 20 courses + Send proof in WhatsApp group</p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Rewards:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Google Cloud T-Shirt
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Google Cloud Bottle
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Stickers & Goodies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Certificate of Participation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Digital Badges
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Easy Access to All GDG OC Events
                  </li>
                </ul>
              </div>
              
              <button className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-auto ${
                tier2Achieved 
                  ? 'bg-gray-500 text-white cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}>
                {tier2Achieved ? 'Target Reached' : 'Be in Top 70!'}
              </button>
            </div>

            {/* Tier 3 - Starter Rewards */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="text-center mb-6">
                <Image
                  src="/tier3.png"
                  alt="Starter Rewards"
                  width={200}
                  height={150}
                  className="mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter Rewards</h3>
                <p className="text-sm text-gray-600">Target: First 50 Students</p>
              </div>
              
              <div className="flex-grow mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                <p className="text-sm text-gray-600 mb-4">Complete all 20 courses + Send proof in WhatsApp group</p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Rewards:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Google Cloud T-Shirt
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Stickers & Goodies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Certificate of Participation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Digital Badges
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    Easy Access to All GDG OC Events
                  </li>
                </ul>
              </div>
              
              <button className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-auto ${
                tier3Achieved 
                  ? 'bg-gray-500 text-white cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}>
                {tier3Achieved ? 'Target Reached' : 'Be in Top 50!'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Cloud Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of students already learning Google Cloud Platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Leaderboard
            </Link>
            <Link
              href="/syllabus"
              className="bg-blue-700 hover:bg-blue-800 text-white border-2 border-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/gdglogobms.png"
                  alt="GDG BMS Institute of Technology"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Google Developer Group at BMS Institute of Technology, empowering students with cutting-edge technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
                <li><Link href="/syllabus" className="hover:text-white transition-colors">Syllabus</Link></li>
                <li><a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Google Cloud</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>gdg@bmsit.ac.in</li>
                <li>BMS Institute of Technology</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GDG BMSIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
