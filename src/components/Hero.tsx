import hero from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-[1.1]">
          Build Your Ideal{" "}
          <span className="text-brand-gradient-full">Development Stack</span>
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-brand-gradient text-white px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition">
            Explore Technologies
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={hero}
          alt="banner image"
          className="rounded-xl w-full max-w-md mx-auto"
        />
      </div>
    </section>
  )
}

export default Hero