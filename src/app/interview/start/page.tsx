'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StartInterviewPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const router = useRouter();

  const questions = [
    'Tell me about yourself.',
    'What are your strengths and weaknesses?',
    'Describe a challenging project you worked on.',
    'Why should we hire you?',
    'Where do you see yourself in 5 years?',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

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

  const handleChangeQuestion = (next: boolean) => {
    if ((next && currentIndex < questions.length - 1) || (!next && currentIndex > 0)) {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + (next ? 1 : -1));
        setAnimate(false);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => router.push('/dashboard')}
        className="self-start mb-6 text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-orange-700 mb-10">Start Your Interview</h1>

      {/* Main Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Video Preview */}
        <div className="bg-white border border-neutral-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-orange-700 mb-4">Live Camera</h2>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full aspect-video rounded-lg border border-gray-200"
            style={{ transform: 'scaleX(1)' }}
          />
        </div>

        {/* Question Navigator */}
        <div className="bg-white border border-neutral-200 rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-orange-700 mb-4">Interview Question</h2>
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                animate ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              } bg-orange-50 text-orange-800 border border-orange-200 rounded-lg p-6 min-h-[100px] flex items-center justify-center text-center text-base font-medium`}
            >
              {questions[currentIndex]}
            </div>

            <div className="mt-4 text-sm text-orange-500 text-center">
              Question {currentIndex + 1} of {questions.length}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => handleChangeQuestion(false)}
              disabled={currentIndex === 0}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                currentIndex === 0
                  ? 'bg-orange-100 text-orange-300 cursor-not-allowed'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handleChangeQuestion(true)}
              disabled={currentIndex === questions.length - 1}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                currentIndex === questions.length - 1
                  ? 'bg-orange-100 text-orange-300 cursor-not-allowed'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <button
        disabled={!permissionGranted}
        className={`mb-10 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
          permissionGranted
            ? 'bg-orange-600 text-white hover:bg-orange-700'
            : 'bg-orange-100 text-orange-300 cursor-not-allowed'
        }`}
      >
        Start Interview
      </button>

      {/* Transcript Viewer */}
      <div className="w-full max-w-6xl bg-white border border-neutral-200 shadow p-6 rounded-xl h-52 overflow-y-auto">
        <h2 className="text-lg font-semibold text-orange-700 mb-3">Live Transcript</h2>
        <p className="text-sm text-orange-400 italic">Real-time transcribed audio will appear here...</p>
      </div>
    </div>
  );
}
