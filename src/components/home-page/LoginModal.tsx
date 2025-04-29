'use client'
interface LoginModalProps {
  onClose: () => void
}

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <div className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-orange-100 p-8 rounded-xl shadow-xl">
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-black"
      >
        &times;
      </button>

      <div className="text-center mb-6">
        <h2 className="text-lg font-bold">Logo PREP TRAIL</h2>
        <h3 className="text-2xl font-semibold">WELCOME BACK</h3>
      </div>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter email"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
        />
        <div className="text-sm text-right text-gray-600 cursor-pointer">Forgot password?</div>
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded">
          LOGIN
        </button>
      </div>

      <p className="mt-4 text-sm text-center">
        DON'T HAVE AN ACCOUNT? <span className="font-bold cursor-pointer">SIGN UP</span>
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-white p-2 rounded-full shadow">
          <img src="/google-icon.png" alt="Google" className="h-6 w-6" />
        </button>
        <button className="bg-white p-2 rounded-full shadow">
          <img src="/apple-icon.png" alt="Apple" className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
