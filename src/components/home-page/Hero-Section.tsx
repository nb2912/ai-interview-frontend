export default function HeroSection() {
    return (
      <section className="w-full px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Want anything to be <br className="hidden md:block" />
            easy with <span className="text-indigo-600">PrepTrail.</span>
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Ace your dream job interview with smart tools, practical preparation,
            and an immersive mock experience.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md shadow hover:bg-red-600 transition">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img
            src="/homepage.jpg"
            alt="Interview Preparation"
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </section>
    )
  }
  