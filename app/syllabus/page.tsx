'use client';

import Header from '@/components/Header';

export default function Syllabus() {
  const syllabusData = [
    {
      week: 1,
      title: "Introduction to Google Cloud Platform",
      topics: [
        "What is Google Cloud Platform?",
        "GCP Services Overview",
        "Setting up GCP Account",
        "Cloud Console Navigation",
        "Billing and Pricing Models"
      ],
      duration: "2 hours",
      difficulty: "Beginner"
    },
    {
      week: 2,
      title: "Compute Services",
      topics: [
        "Google Compute Engine",
        "Virtual Machines",
        "Instance Types and Pricing",
        "Networking and Security",
        "Load Balancing"
      ],
      duration: "3 hours",
      difficulty: "Intermediate"
    },
    {
      week: 3,
      title: "Storage Services",
      topics: [
        "Cloud Storage",
        "Storage Classes",
        "Data Transfer",
        "Cloud SQL",
        "Cloud Spanner"
      ],
      duration: "2.5 hours",
      difficulty: "Intermediate"
    },
    {
      week: 4,
      title: "Networking and Security",
      topics: [
        "Virtual Private Cloud (VPC)",
        "Firewall Rules",
        "Cloud Identity and Access Management",
        "Security Best Practices",
        "Monitoring and Logging"
      ],
      duration: "3 hours",
      difficulty: "Intermediate"
    },
    {
      week: 5,
      title: "Data Analytics",
      topics: [
        "BigQuery",
        "Data Warehousing",
        "Data Studio",
        "Machine Learning APIs",
        "Cloud Dataflow"
      ],
      duration: "4 hours",
      difficulty: "Advanced"
    },
    {
      week: 6,
      title: "Machine Learning",
      topics: [
        "AI Platform",
        "AutoML",
        "TensorFlow on GCP",
        "ML APIs",
        "Model Deployment"
      ],
      duration: "4 hours",
      difficulty: "Advanced"
    },
    {
      week: 7,
      title: "DevOps and CI/CD",
      topics: [
        "Cloud Build",
        "Container Registry",
        "Kubernetes Engine",
        "Cloud Functions",
        "Deployment Strategies"
      ],
      duration: "3.5 hours",
      difficulty: "Advanced"
    },
    {
      week: 8,
      title: "Final Project and Certification",
      topics: [
        "Project Planning",
        "Implementation",
        "Testing and Deployment",
        "Documentation",
        "Google Cloud Certification Prep"
      ],
      duration: "5 hours",
      difficulty: "Expert"
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Google Cloud Study Jams Syllabus
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive 8-week journey through Google Cloud Platform fundamentals to advanced topics
          </p>
        </div>

        {/* Syllabus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {syllabusData.map((week) => (
            <div
              key={week.week}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              {/* Week Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {week.week}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Week {week.week}
                    </h3>
                    <p className="text-sm text-gray-500">{week.duration}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(week.difficulty)}`}>
                  {week.difficulty}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-semibold text-gray-900 mb-4 text-base">
                {week.title}
              </h4>

              {/* Topics */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</h5>
                <ul className="space-y-1">
                  {week.topics.map((topic, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🏆 Certification</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Google Cloud Digital Leader</li>
                <li>• Google Cloud Associate Engineer</li>
                <li>• Completion certificate</li>
                <li>• Hands-on project portfolio</li>
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
