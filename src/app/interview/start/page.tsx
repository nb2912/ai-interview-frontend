// app/interview/start/page.tsx

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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Start Your Interview</h1>

      {/* Video and Questions Side-by-Side */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Video Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full rounded-md"
            style={{ transform: 'scaleX(1)' }} // un-mirror the video
          />
        </div>

        {/* Generated Questions Section */}
        <div className="bg-white p-4 rounded-lg shadow border h-full">
          <h2 className="text-lg font-semibold mb-2">Generated Questions</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Tell me about yourself.</li>
            <li>What are your strengths and weaknesses?</li>
            <li>Describe a challenging project you worked on.</li>
            {/* Placeholder list — replace with actual dynamic questions later */}
          </ul>
        </div>
      </div>

      {/* Start Button */}
      <button
        className="bg-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition mb-6 disabled:opacity-50"
        disabled={!permissionGranted}
      >
        Start Interview
      </button>

      {/* Transcript Box */}
      <div className="w-full max-w-5xl bg-white p-4 rounded-lg shadow border h-48 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-2">Live Transcript</h2>
        <p className="text-sm text-gray-500 italic">Real-time transcribed audio will appear here...</p>
      </div>
    </div>
  );
}
