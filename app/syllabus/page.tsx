'use client';

import Header from '@/components/Header';

export default function Syllabus() {
  const syllabusData = [
    {
      week: 1,
      badges: [
        {
          title: "The Basics of Google Cloud Compute",
          topics: [
            "Creating a Virtual Machine",
            "Creating a Persistent Disk",
            "Hosting a Web App on Google Cloud Using Compute Engine",
            "The Basics of Google Cloud Compute: Challenge Lab"
          ],
          difficulty: "Beginner"
        },
        {
          title: "Get Started with Cloud Storage",
          topics: [
            "APIs Explorer: Cloud Storage",
            "Cloud Storage: Qwik Start - CLI/SDK",
            "Google Cloud Storage - Bucket Lock",
            "Get Started with Cloud Storage: Challenge Lab"
          ],
          difficulty: "Beginner"
        }
      ]
    },
    {
      week: 2,
      badges: [
        {
          title: "Get Started with Pub/Sub",
          topics: [
            "Pub/Sub: Qwik Start - Console",
            "Cloud Scheduler: Qwik Start",
            "Get Started with Pub/Sub: Challenge Lab"
          ],
          difficulty: "Beginner"
        },
        {
          title: "Get Started with API Gateway",
          topics: [
            "API Gateway: Qwik Start",
            "Pub/Sub: Qwik Start - Console",
            "Cloud Functions Qwik Start - Console",
            "Getting Started with API Gateway: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Get Started with Looker",
          topics: [
            "Looker Studio: Qwik Start",
            "Looker Data Explorer - Qwik Start",
            "Looker Developer: Qwik Start",
            "Get Started with Looker: Challenge Lab"
          ],
          difficulty: "Intermediate"
        }
      ]
    },
    {
      week: 3,
      badges: [
        {
          title: "Get Started with Dataplex",
          topics: [
            "Dataplex: Qwik Start - Console",
            "Dataplex: Qwik Start - Command Line",
            "Tagging Dataplex Asset",
            "Get Started with Dataplex: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Get Started with Google Workspace Tools",
          topics: [
            "Gmail: Getting Started",
            "Google Calendar: Getting Started",
            "Google Meet: Getting Started",
            "Google Drive: Getting Started",
            "Google Sheets: Getting Started",
            "Google AppSheet: Getting Started",
            "Get Started with Google Workspace Tools: Challenge Lab"
          ],
          difficulty: "Beginner"
        }
      ]
    },
    {
      week: 4,
      badges: [
        {
          title: "App Building with AppSheet",
          topics: [
            "Google AppSheet: Getting Started",
            "Connect and Configure Data for your AppSheet App",
            "Publish your AppSheet App",
            "App Building with AppSheet: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Develop with Apps Script and AppSheet",
          topics: [
            "Develop No-Code Chat Apps with AppSheet",
            "Introduction to Google Chat Bots with Apps Script",
            "Google Apps Script: Access Google Sheets, Maps & Gmail in 4 Lines of Code",
            "Develop with Apps Script and AppSheet: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Build a Website on Google Cloud",
          topics: [
            "Deploy Your Website on Cloud Run",
            "Host a Web App on Google Cloud Using Compute Engine",
            "Deploy, Scale, and Update Your Website on Google Kubernetes Engine",
            "Migrating a Monolithic Website to Microservices on Google Kubernetes Engine",
            "Build a Website on Google Cloud: Challenge Lab"
          ],
          difficulty: "Advanced"
        }
      ]
    },
    {
      week: 5,
      badges: [
        {
          title: "Set Up a Google Cloud Network",
          topics: [
            "Networking 101",
            "Create a Custom Network and Apply Firewall Rules",
            "Test Network Latency Between VMs",
            "Set Up a Google Cloud Network: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Store, Process, and Manage Data on Google Cloud",
          topics: [
            "Cloud Storage: Qwik Start - Cloud Console",
            "Cloud Run Functions: Qwik Start - Console",
            "Pub/Sub: Qwik Start - Console",
            "Store, Process, and Manage Data on Google Cloud: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Cloud Functions: 3 Ways",
          topics: [
            "Cloud Functions: Qwik Start - Console",
            "Cloud Functions: Qwik Start - Command Line",
            "Cloud Functions 2nd Gen: Qwik Start",
            "Cloud Functions: 3 Ways: Challenge Lab"
          ],
          difficulty: "Intermediate"
        }
      ]
    },
    {
      week: 6,
      badges: [
        {
          title: "App Engine: 3 Ways",
          topics: [
            "App Engine: Qwik Start - Python",
            "App Engine: Qwik Start - Go",
            "App Engine: Qwik Start - PHP",
            "App Engine: 3 Ways: Challenge Lab"
          ],
          difficulty: "Intermediate"
        },
        {
          title: "Cloud Speech API 3 Ways",
          topics: [
            "It Speaks! Create Synthetic Speech Using Text-to-Speech",
            "Translate Text with the Cloud Translation API",
            "Speech to Text Transcription with the Cloud Speech API",
            "Cloud Speech API 3 Ways: Challenge Lab"
          ],
          difficulty: "Advanced"
        },
        {
          title: "Monitoring in Google Cloud",
          topics: [
            "Cloud Monitoring: Qwik Start",
            "Monitoring and Logging for Cloud Functions",
            "Monitor an Apache Web Server using Ops Agent",
            "Monitoring in Google Cloud: Challenge Lab"
          ],
          difficulty: "Intermediate"
        }
      ]
    },
    {
      week: 7,
      badges: [
        {
          title: "Analyze Speech and Language with Google APIs",
          topics: [
            "Cloud Natural Language API: Qwik Start",
            "Speech-to-Text API: Qwik Start",
            "Entity and Sentiment Analysis with the Natural Language API",
            "Analyze Speech & Language with Google APIs: Challenge Lab"
          ],
          difficulty: "Advanced"
        },
        {
          title: "Prompt Design in Vertex AI",
          topics: [
            "Generative AI with Vertex AI: Prompt Design",
            "Get Started with Vertex AI Studio",
            "Getting Started with the Vertex AI Gemini API and Python SDK",
            "Prompt Design in Vertex AI: Challenge Lab"
          ],
          difficulty: "Advanced"
        }
      ]
    },
    {
      week: 8,
      badges: [
        {
          title: "Develop GenAI Apps with Gemini and Streamlit",
          topics: [
            "Getting Started with the Vertex AI Gemini API with cURL",
            "Introduction to Function Calling with Gemini",
            "Getting Started with the Vertex AI Gemini API and Python SDK",
            "Deploy a Streamlit App Integrated with Gemini Pro on Cloud Run",
            "Develop GenAI Apps with Gemini and Streamlit: Challenge Lab"
          ],
          difficulty: "Advanced"
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800';
      case 'Expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Google Cloud Study Jams Syllabus
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An 8-week intensive program covering 19 Google Cloud skill badges from fundamentals to advanced topics
          </p>
        </div>

        {/* Weekly Sections */}
        <div className="space-y-12">
          {syllabusData.map((weekData) => (
            <div key={weekData.week} className="space-y-6">
              {/* Week Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold opacity-90">WEEK</div>
                    <div className="text-2xl font-bold">{weekData.week}</div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Week {weekData.week}
                  </h2>
                  <p className="text-gray-600">
                    {weekData.badges.length} {weekData.badges.length === 1 ? 'Badge' : 'Badges'} to Complete
                  </p>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weekData.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
                  >
                    {/* Badge Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-base mb-2">
                          {badge.title}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${getDifficultyColor(badge.difficulty)}`}>
                        {badge.difficulty}
                      </span>
                    </div>

                    {/* Labs */}
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Labs Included:</h5>
                      <ul className="space-y-1.5">
                        {badge.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                            <span className="leading-tight">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Study Jams Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Schedule</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Weekly sessions every Saturday</li>
                <li>• Duration: 8 weeks</li>
                <li>• Time: 10:00 AM - 2:00 PM IST</li>
                <li>• Location: BMS Institute of Technology</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Prerequisites</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Basic programming knowledge</li>
                <li>• Understanding of cloud concepts</li>
                <li>• Laptop with internet connection</li>
                <li>• Google Cloud account (free tier)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 Outcomes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 19 Google Cloud Skill Badges</li>
                <li>• Hands-on experience with GCP services</li>
                <li>• Completion certificate</li>
                <li>• Portfolio of cloud projects</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📞 Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Email: gdg@bmsit.ac.in</li>
                <li>• Discord: GDG BMSIT Community</li>
                <li>• LinkedIn: GDG BMSIT</li>
                <li>• Website: gdg-bmsit.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}