'use client';

import {
  FiActivity,
  FiCalendar,
  FiAward,
  FiUser,
  FiSettings,
  FiLogOut
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useMemo } from 'react';

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

  const quickActions = useMemo(() => [
    {
      title: 'Progress Report',
      desc: 'See your improvement over time',
      btnText: 'View Report',
      icon: FiAward,
      color: { bg: 'bg-orange-100', icon: 'text-orange-600', btn: 'bg-orange-600' }
    },
    {
      title: 'Weak Areas',
      desc: 'Focus on your challenges',
      btnText: 'Practice Now',
      icon: FiSettings,
      color: { bg: 'bg-red-100', icon: 'text-red-600', btn: 'bg-red-600' }
    },
    {
      title: 'Mock Interviews',
      desc: 'Simulate real interviews',
      btnText: 'Schedule Now',
      icon: FiUser,
      color: { bg: 'bg-orange-100', icon: 'text-orange-600', btn: 'bg-orange-600' }
    },
    {
      title: 'Resources',
      desc: 'Study materials & tips',
      btnText: 'Browse',
      icon: FiActivity,
      color: { bg: 'bg-red-100', icon: 'text-red-600', btn: 'bg-red-600' }
    }
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 text-gray-800">
      {/* Header */}
      <header className="bg-white/80 shadow-md backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
            PrepTrail Dashboard
          </h1>
          <div className="relative" ref={profileRef}>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              aria-label="Profile settings"
            >
              <FiUser className="h-5 w-5 text-gray-700" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-xl z-30">
                {['View Profile', 'Settings'].map((label) => (
                  <button
                    key={label}
                    onClick={() => {
                      setIsProfileOpen(false);
                      alert(`${label} page under construction`);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {label}
                  </button>
                ))}
                <button
                  onClick={() => router.push('/')}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Welcome Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-1">Welcome back, Nihal 👋</h2>
          <p className="opacity-90">Your next opportunity is just one session away.</p>
          <button
            onClick={() => router.push('/interview/start')}
            className="mt-5 px-5 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Start New Session
          </button>
        </section>

        {/* Resume Upload */}
        <section className="bg-white/70 border border-orange-100 shadow-md backdrop-blur rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-3">Upload Your Resume (PDF only)</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
            />
            {resumeName && <span className="text-sm text-green-600">Uploaded: {resumeName}</span>}
          </div>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-6 rounded-xl shadow border border-orange-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FiActivity className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500">{stat.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-bold">{stat.value}</span>
                    <span className={`text-sm font-semibold ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Sessions */}
        <section className="bg-white/80 border border-gray-100 rounded-xl shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center">
            <FiCalendar className="mr-2 text-orange-500" />
            <h3 className="text-lg font-semibold">Recent Practice Sessions</h3>
          </div>
          <div>
            {recentSessions.map((session) => (
              <div key={session.id} className="px-6 py-4 flex justify-between items-center hover:bg-orange-50 transition">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${session.type === 'Technical' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}>
                    {session.type}
                  </span>
                  <span className="text-sm text-gray-600">{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800 font-semibold">{session.score}</span>
                  <button className="text-orange-600 hover:underline text-sm font-medium">View</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map(({ icon: Icon, title, desc, btnText, color }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-orange-100 shadow hover:shadow-xl transition text-center"
            >
              <div className={`mx-auto h-12 w-12 rounded-full flex items-center justify-center ${color.bg}`}>
                <Icon className={`h-6 w-6 ${color.icon}`} />
              </div>
              <h4 className="mt-4 text-lg font-semibold">{title}</h4>
              <p className="mt-1 text-sm text-gray-500">{desc}</p>
              <button className={`mt-4 px-4 py-2 text-sm font-medium rounded-md text-white ${color.btn} hover:opacity-90 transition`}>
                {btnText}
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
