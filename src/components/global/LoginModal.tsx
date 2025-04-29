'use client'
import { useEffect } from 'react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-gradient-to-r from-orange-200 to-orange-300 w-[90%] max-w-md rounded-xl p-6 relative shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-black text-lg font-bold">
          ✕
        </button>
        <div className="text-center space-y-4">
          <h2 className="text-xl font-bold">WELCOME BACK</h2>
          <input type="email" placeholder="Enter email" className="w-full px-4 py-2 rounded-full border focus:outline-none" />
          <input type="password" placeholder="Enter Password" className="w-full px-4 py-2 rounded-full border focus:outline-none" />
          <div className="text-right text-xs text-gray-700">Forgot password?</div>
          <button className="w-full mt-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition">
            LOGIN
          </button>
          <p className="text-sm mt-2">
            DON'T HAVE AN ACCOUNT? <span className="font-bold cursor-pointer">SIGN UP</span>
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-white p-2 rounded-full shadow-md">
              <img src="/google-icon.png" alt="Google" className="w-6 h-6" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md">
              <img src="/apple-icon.png" alt="Apple" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
