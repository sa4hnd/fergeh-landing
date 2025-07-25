import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-teslearn-bg overflow-hidden relative">
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top area elements */}
        <div className="absolute top-16 left-8 text-blue-400 text-3xl opacity-60 font-light">
          ∫
        </div>
        <div className="absolute top-32 left-20 text-teslearn-gray text-base opacity-50">
          H₂O
        </div>
        <div className="absolute top-48 left-4 text-blue-400 text-sm opacity-50">
          F = ma
        </div>
        <div className="absolute top-20 left-64 text-teslearn-gray text-sm opacity-40">
          {"</>"}
        </div>
        <div className="absolute top-64 left-16 text-blue-400 text-sm opacity-50">
          def()
        </div>

        {/* Top right area */}
        <div className="absolute top-20 right-16 text-teslearn-gray text-base opacity-60">
          a² + b² = c²
        </div>
        <div className="absolute top-44 right-8 text-blue-400 text-sm opacity-60">
          E = mc²
        </div>
        <div className="absolute top-72 right-32 text-teslearn-gray text-xs opacity-40">
          {"x</>ax"}
        </div>
        <div className="absolute top-16 right-64 text-blue-400 text-xl opacity-50">
          y
        </div>
        <div className="absolute top-96 right-12 text-teslearn-gray text-sm opacity-50">
          /else
        </div>

        {/* Left side scattered */}
        <div className="absolute top-80 left-32 text-blue-400 text-base opacity-50">
          PV = nRT
        </div>
        <div className="absolute top-1/2 left-8 text-teslearn-gray text-sm opacity-40">
          {"{ }"}
        </div>
        <div className="absolute bottom-1/3 left-16 text-blue-400 text-sm opacity-50">
          {"</π>"}
        </div>
        <div className="absolute bottom-48 left-32 text-teslearn-gray text-xs opacity-40">
          CO₂
        </div>
        <div className="absolute bottom-24 left-48 text-blue-400 text-sm opacity-50">
          lim
        </div>

        {/* Right side scattered */}
        <div className="absolute top-1/3 right-24 text-blue-400 text-sm opacity-50">
          Σ
        </div>
        <div className="absolute top-1/2 right-48 text-teslearn-gray text-xs opacity-40">
          if/else
        </div>
        <div className="absolute top-2/3 right-16 text-blue-400 text-sm opacity-50">
          NaCl
        </div>
        <div className="absolute bottom-1/3 right-32 text-teslearn-gray text-sm opacity-40">
          ∂/∂x
        </div>
        <div className="absolute bottom-48 right-48 text-blue-400 text-xs opacity-50">
          OH⁻
        </div>
        <div className="absolute bottom-24 right-24 text-teslearn-gray text-sm opacity-40">
          f(x)
        </div>

        {/* Center area scattered */}
        <div className="absolute top-1/4 left-1/2 text-teslearn-gray text-sm opacity-30">
          x = 5
        </div>
        <div className="absolute top-1/3 left-2/3 text-blue-400 text-sm opacity-50">
          {"{ }"}
        </div>
        <div className="absolute top-2/3 left-1/3 text-teslearn-gray text-xs opacity-40">
          def()
        </div>
        <div className="absolute bottom-1/4 left-2/3 text-blue-400 text-sm opacity-50">
          lim
        </div>
        <div className="absolute top-3/4 left-1/4 text-teslearn-gray text-xs opacity-40">
          ∂x
        </div>

        {/* Additional scattered elements for authenticity */}
        <div className="absolute top-40 left-1/2 text-blue-400 text-xs opacity-40">
          dx
        </div>
        <div className="absolute top-1/2 left-1/4 text-teslearn-gray text-sm opacity-30">
          π
        </div>
        <div className="absolute bottom-40 right-1/3 text-blue-400 text-sm opacity-50">
          √
        </div>
        <div className="absolute top-56 right-1/4 text-teslearn-gray text-xs opacity-40">
          n!
        </div>
        <div className="absolute bottom-32 left-1/3 text-blue-400 text-xs opacity-40">
          α
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teslearn-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-teslearn-dark font-semibold text-xl">Teslearn</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors">
            Home
          </a>
          <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors">
            About
          </a>
          <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors">
            Features
          </a>
          <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors">
            FAQs
          </a>
        </nav>

        <button className="bg-teslearn-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Join Now
        </button>
      </header>

      {/* Public Access Notice */}
      <div className="relative z-10 flex justify-center mt-8 mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-full px-4 py-2 flex items-center space-x-2">
          <div className="w-3 h-3 bg-teslearn-blue rounded-full"></div>
          <span className="text-teslearn-blue text-sm font-medium">Public access launching soon!</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-teslearn-dark mb-8">
          Teslearn
          <br />
          <span className="text-teslearn-blue relative">
            Learn Your Way
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 20" fill="none">
              <path d="M10 15 Q200 5 390 12" stroke="#439eed" strokeWidth="4" strokeLinecap="round" fill="none"/>
            </svg>
          </span>
          <span className="text-teslearn-blue">.</span>
        </h1>

        <p className="text-teslearn-gray text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Simply enter a subject and our AI instantly creates your personalized course, complete with video lessons, study notes, diagrams, and practice quizzes.
        </p>

        {/* Email Signup */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-16">
          <input
            type="email"
            placeholder="Join the waitlist by entering your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-teslearn-dark placeholder-teslearn-gray focus:outline-none focus:ring-2 focus:ring-teslearn-blue focus:border-transparent"
          />
          <button className="bg-teslearn-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors whitespace-nowrap">
            Join Now!
          </button>
        </div>
      </section>

      {/* Why Students Love Teslearn */}
      <section className="relative z-10 py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teslearn-dark mb-4">
            Why Students Love Teslearn
          </h2>
          <p className="text-teslearn-gray text-lg">
            Discover the features that make learning more effective and enjoyable
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {/* Feature 1 - AI-Generated Video Lessons */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teslearn-blue font-bold text-lg">1</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teslearn-dark mb-4">
                AI-Generated Video Lessons
              </h3>
              <p className="text-teslearn-gray text-lg mb-6">
                Turn any topic into a dynamic video lesson with stunning visuals and animations.
              </p>
              <div className="bg-blue-50 border-l-4 border-teslearn-blue p-4 rounded">
                <p className="text-sm text-teslearn-gray mb-2">Try this prompt:</p>
                <p className="text-teslearn-dark font-medium italic">
                  "What are limits, explain with a graph"
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://ext.same-assets.com/3656126229/2918206224.jpeg"
                alt="Calculus - Limits graph visualization"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 2 - Reels Like Revisions */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teslearn-blue font-bold text-lg">2</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teslearn-dark mb-4">
                Reels Like Revisions
              </h3>
              <p className="text-teslearn-gray text-lg mb-6">
                Revise your notes in a fun and engaging way with AI-generated video lessons.
              </p>
              <div className="bg-blue-50 border-l-4 border-teslearn-blue p-4 rounded">
                <p className="text-sm text-teslearn-gray mb-2">Try this prompt:</p>
                <p className="text-teslearn-dark font-medium italic">
                  "I got 2 minutes to revise, I want to revise all machine learning concepts"
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://ext.same-assets.com/3656126229/1993015102.png"
                alt="Reels Like Revisions interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 3 - Interactive Mind Maps */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teslearn-blue font-bold text-lg">3</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teslearn-dark mb-4">
                Interactive Mind Maps
              </h3>
              <p className="text-teslearn-gray text-lg mb-6">
                Last minute revision? Create a mind map to help you understand the topic.
              </p>
              <div className="bg-blue-50 border-l-4 border-teslearn-blue p-4 rounded">
                <p className="text-sm text-teslearn-gray mb-2">Try this prompt:</p>
                <p className="text-teslearn-dark font-medium italic">
                  "I have my exam in 5 minutes, I want to revise all newton's laws"
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://ext.same-assets.com/3656126229/4011266669.png"
                alt="Interactive Mind Maps interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 4 - Virtual Labs */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teslearn-blue font-bold text-lg">4</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teslearn-dark mb-4">
                Virtual Labs to Learn by Doing
              </h3>
              <p className="text-teslearn-gray text-lg mb-6">
                Simulate experiments and learn by doing.
              </p>
              <div className="bg-blue-50 border-l-4 border-teslearn-blue p-4 rounded">
                <p className="text-sm text-teslearn-gray mb-2">Try this prompt:</p>
                <p className="text-teslearn-dark font-medium italic">
                  "I want to experiment with projectile motion"
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://ext.same-assets.com/3656126229/2618529168.png"
                alt="Virtual Labs interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 5 - Test Your Knowledge */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-teslearn-blue font-bold text-lg">5</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-teslearn-dark mb-4">
                Test Your Knowledge
              </h3>
              <p className="text-teslearn-gray text-lg mb-6">
                Test your knowledge with smart quizzes that adapt to your progress.
              </p>
              <div className="bg-blue-50 border-l-4 border-teslearn-blue p-4 rounded">
                <p className="text-sm text-teslearn-gray mb-2">Try this prompt:</p>
                <p className="text-teslearn-dark font-medium italic">
                  "Create a quiz on the 5th chapter of the book"
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://ext.same-assets.com/3656126229/2366096861.png"
                alt="Quiz interface"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Example Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-teslearn-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  1
                </div>
                <h4 className="text-lg font-semibold text-teslearn-dark">Your Prompt</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-teslearn-dark italic">
                  "Explain photosynthesis in plants and how it affects the environment"
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-teslearn-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  2
                </div>
                <h4 className="text-lg font-semibold text-teslearn-dark">Teslearn's Response</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <div className="text-teslearn-blue text-xl mr-2">📹</div>
                    <span className="font-medium text-teslearn-dark text-sm">AI Video</span>
                  </div>
                  <p className="text-xs text-teslearn-gray">10-minute animated explanation with visual diagrams</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <div className="text-green-600 text-xl mr-2">🧪</div>
                    <span className="font-medium text-teslearn-dark text-sm">Virtual Labs</span>
                  </div>
                  <p className="text-xs text-teslearn-gray">Simulate experiments and learn by doing</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <div className="text-purple-600 text-xl mr-2">🗺️</div>
                    <span className="font-medium text-teslearn-dark text-sm">Mind Maps</span>
                  </div>
                  <p className="text-xs text-teslearn-gray">Interactive diagrams showing process connections</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <div className="text-orange-600 text-xl mr-2">📝</div>
                    <span className="font-medium text-teslearn-dark text-sm">Quiz</span>
                  </div>
                  <p className="text-xs text-teslearn-gray">Test your knowledge with smart quizzes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teslearn-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-teslearn-gray text-lg">
            Here are the answers to the most common questions about TesLearn
          </p>
        </div>

        <div className="space-y-4">
          {[
            "What is TesLearn?",
            "How can TesLearn help me with my studies?",
            "What kind of learning materials does TesLearn provide?",
            "Is TesLearn only for STEM students?",
            "How does TesLearn personalize learning?",
            "When will TesLearn be available?"
          ].map((question, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between">
                <span className="font-medium text-teslearn-dark">{question}</span>
                <svg className="w-5 h-5 text-teslearn-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Have an Idea Section */}
      <section className="relative z-10 py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-teslearn-dark mb-4">
            Have an Idea? <span className="text-teslearn-blue">Let's Hear It.</span>
          </h2>
          <p className="text-teslearn-gray text-lg">
            Your insights help us build a better learning experience for everyone.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-teslearn-dark font-medium mb-2">
                What type of feedback? (optional)
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 text-teslearn-dark rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Feature Request
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 text-teslearn-dark rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Question
                </button>
              </div>
            </div>

            <div>
              <label className="block text-teslearn-dark font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teslearn-blue focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-teslearn-dark font-medium mb-2">
                What's on your mind?
              </label>
              <textarea
                rows={4}
                placeholder='e.g., "I wish there was a feature to export notes as PDFs..."'
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teslearn-blue focus:border-transparent resize-none"
              ></textarea>
              <div className="text-right text-sm text-teslearn-gray mt-1">0/2000</div>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-teslearn-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Send Feedback
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-teslearn-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <span className="text-teslearn-dark font-semibold text-xl">Teslearn</span>
              </div>
              <p className="text-teslearn-gray text-sm mb-4">Learn Your Way</p>
              <div className="flex space-x-4">
                <button className="bg-teslearn-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  Join waitlist
                </button>
                <button className="text-teslearn-gray hover:text-teslearn-dark transition-colors text-sm">
                  Learn more
                </button>
              </div>
              <div className="flex space-x-3 mt-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-teslearn-blue text-sm">T</span>
                </div>
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-500 text-sm">I</span>
                </div>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-500 text-sm">D</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-teslearn-dark mb-4">Features</h3>
              <ul className="space-y-2 text-teslearn-gray text-sm">
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">AI Explanation Video</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">Notes</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">Flowchart</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">Quiz</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">Study Plan</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">Virtual Lab</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-teslearn-dark mb-4">Company</h3>
              <ul className="space-y-2 text-teslearn-gray text-sm">
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-teslearn-dark transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-teslearn-gray text-sm">
              © 2025 Teslearn. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-teslearn-gray hover:text-teslearn-dark transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
