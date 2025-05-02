'use client';

import { useEffect, useRef, useState } from 'react';

export default function StartInterviewPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    async function requestMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setPermissionGranted(true);
      } catch (err) {
        console.error('Permission denied or error:', err);
        setPermissionGranted(false);
      }
    }

    requestMedia();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-50 px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
        🎙️ Start Your Interview
      </h1>

      {/* Video + Questions */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Video Feed */}
        <div className="bg-white/60 backdrop-blur-md border border-orange-100 shadow-xl p-5 rounded-2xl flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-3 text-orange-700">Live Camera Feed</h2>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full rounded-xl border border-gray-200 shadow"
            style={{ transform: 'scaleX(1)' }}
          />
        </div>

        {/* Questions */}
        <div className="bg-white/60 backdrop-blur-md border border-orange-100 shadow-xl p-5 rounded-2xl">
          <h2 className="text-lg font-semibold mb-3 text-orange-700">AI-Generated Questions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Tell me about yourself.</li>
            <li>What are your strengths and weaknesses?</li>
            <li>Describe a challenging project you worked on.</li>
          </ul>
        </div>
      </div>

      {/* Start Interview Button */}
      <button
        disabled={!permissionGranted}
        className={`px-8 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 ${
          permissionGranted
            ? 'bg-orange-600 hover:bg-orange-700 hover:scale-105'
            : 'bg-gray-400 cursor-not-allowed'
        } mb-10`}
      >
        🚀 Start Interview
      </button>

      {/* Transcript */}
      <div className="w-full max-w-6xl bg-white/60 backdrop-blur-md border border-orange-100 shadow-xl p-6 rounded-2xl h-52 overflow-y-auto">
        <h2 className="text-lg font-semibold text-orange-700 mb-3">📜 Live Transcript</h2>
        <p className="text-sm text-gray-500 italic">Real-time transcribed audio will appear here...</p>
      </div>
    </div>
  );
}
