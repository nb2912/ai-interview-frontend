'use client'
interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <div className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-orange-200 p-8 rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="font-bold text-lg mb-2">Logo PREP TRAIL</h2>
        <h3 className="text-xl font-semibold mb-6">WELCOME BACK</h3>
      </div>
      <div className="flex flex-col space-y-4">
        <input type="email" placeholder="Enter email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none" />
        <input type="password" placeholder="Enter Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none" />
        <div className="text-right text-sm text-gray-600 cursor-pointer">Forgot password?</div>
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded shadow">
          LOGIN
        </button>
        <p className="text-center text-sm">
          DON'T HAVE AN ACCOUNT? <span className="font-bold cursor-pointer">SIGN UP</span>
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <button className="bg-white p-2 rounded-full shadow-md">
            <img src="/google-icon.png" alt="Google" className="h-6 w-6" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <img src="/apple-icon.png" alt="Apple" className="h-6 w-6" />
          </button>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl"
      >
        ×
      </button>
    </div>
  )
}
