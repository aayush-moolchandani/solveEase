export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-full text-white/80 text-sm font-medium mb-6">
              ✨ Our Story
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              HirePro
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto text-white/70 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              HirePro is your <span className="text-purple-300 font-semibold">trusted platform</span> for finding and hiring skilled professionals 
              for all your home and business projects.
            </p>
            <p>
              We connect you with <span className="text-cyan-300 font-semibold">verified workers</span> across various services including 
              plumbing, electrical work, carpentry, painting, and much more.
            </p>
            <p>
              Our mission is to make hiring reliable professionals <span className="text-pink-300 font-semibold">simple, transparent, 
              and affordable</span> for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
              Why Choose HirePro?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Experience excellence with our premium platform features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Verified Professionals",
                description: "All our workers are background-checked and skill-verified with advanced AI screening for your complete peace of mind.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: "💎",
                title: "Transparent Pricing",
                description: "Crystal clear, upfront pricing with no hidden fees. Smart algorithms ensure fair rates for premium quality work.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "⭐",
                title: "Quality Guarantee",
                description: "We stand behind our professionals with a comprehensive satisfaction guarantee and premium quality assurance program.",
                gradient: "from-purple-500 to-blue-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Trusted by Thousands
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15K+", label: "Happy Customers" },
              { number: "8K+", label: "Verified Professionals" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Premium Support" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}