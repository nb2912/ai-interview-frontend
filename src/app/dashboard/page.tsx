'use client';

import { FiActivity, FiCalendar, FiAward, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [resumeName, setResumeName] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const stats = [
    { name: 'Completed Sessions', value: '12', change: '+3', changeType: 'positive' },
    { name: 'Avg. Performance', value: '82%', change: '+5%', changeType: 'positive' },
    { name: 'Weak Areas', value: '3', change: '-1', changeType: 'negative' },
  ];

  const recentSessions = [
    { id: 1, type: 'Technical', date: '2023-11-15', score: '85%' },
    { id: 2, type: 'Behavioral', date: '2023-11-10', score: '78%' },
    { id: 3, type: 'Technical', date: '2023-11-05', score: '92%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              AI Interview Prep
            </span>
          </h1>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <FiUser className="h-5 w-5 text-gray-500" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    alert('Profile page under construction');
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  View Profile
                </button>
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    alert('Settings page under construction');
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome back, Nihal!</h2>
          <p className="opacity-90">Ready for your next interview practice session?</p>
          <button
            className="mt-4 px-6 py-2 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            onClick={() => router.push('/interview/start')}
          >
            Start New Session
          </button>
        </div>

        {/* Resume Upload */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Your Resume (PDF only)</h3>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file && file.type === "application/pdf") {
                  setResumeName(file.name);
                  alert(`Resume uploaded: ${file.name}`);
                } else {
                  setResumeName(null);
                  alert("Please upload a valid PDF file.");
                }
              }}
              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-orange-50 file:text-orange-700
                hover:file:bg-orange-100"
            />
            {resumeName && (
              <span className="text-sm text-green-600">Uploaded: {resumeName}</span>
            )}
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                    <FiActivity className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Sessions */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <FiCalendar className="mr-2 text-orange-500" />
              Recent Practice Sessions
            </h3>
          </div>
          <div className="bg-white divide-y divide-gray-200">
            {recentSessions.map((session) => (
              <div key={session.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      session.type === 'Technical' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {session.type}
                    </div>
                    <div className="ml-4 text-sm text-gray-500">{session.date}</div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-medium text-gray-900 mr-2">{session.score}</span>
                    <button className="text-orange-600 hover:text-orange-800 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
              <FiAward className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Progress Report</h3>
            <p className="mt-2 text-sm text-gray-500">See your improvement over time</p>
            <button className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
              View Report
            </button>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <FiSettings className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Weak Areas</h3>
            <p className="mt-2 text-sm text-gray-500">Focus on your challenges</p>
            <button className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
              Practice Now
            </button>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
              <FiUser className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Mock Interviews</h3>
            <p className="mt-2 text-sm text-gray-500">Simulate real interviews</p>
            <button className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
              Schedule Now
            </button>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <FiActivity className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Resources</h3>
            <p className="mt-2 text-sm text-gray-500">Study materials & tips</p>
            <button className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
              Browse
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
