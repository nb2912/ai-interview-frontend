type LoginModalProps = {
  onClose: () => void
  onSwitchToSignup: () => void
}

export default function LoginModal({ onClose, onSwitchToSignup }: LoginModalProps) {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="bg-orange-50 p-6 rounded-xl shadow-xl w-full max-w-md relative z-50">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 text-xl">
          ×
        </button>
        <div className="text-center">
          <h2 className="text-lg font-semibold">Logo PREP TRAIL</h2>
          <h3 className="text-2xl font-bold mb-6">WELCOME BACK</h3>
        </div>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-4 py-2 border mb-3 rounded-md"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-4 py-2 border mb-3 rounded-md"
        />
        <div className="flex justify-between items-center mb-4 text-sm">
          <span></span>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <button className="bg-orange-500 w-full py-2 text-white font-bold rounded-md">
          LOGIN
        </button>
        <div className="text-center mt-4 text-sm">
          DON'T HAVE AN ACCOUNT?{' '}
          <button onClick={onSwitchToSignup} className="font-bold hover:underline">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}
