// Server Component (no "use client")
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "HirePro | Find Professionals",
  description: "Find and hire the best professionals for your home projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Brand Section */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">H</span>
                    </div>
                    <span className="text-3xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      HirePro
                    </span>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
                    Connecting you with <span className="text-purple-300 font-semibold">elite professionals</span> who transform visions into reality. Premium quality, guaranteed excellence.
                  </p>
                  <div className="flex space-x-4">
                    {['twitter', 'linkedin', 'instagram', 'facebook'].map((social) => (
                      <a key={social} href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                        <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
                  <ul className="space-y-3">
                    {[
                      { name: 'Home', href: '/' },
                      { name: 'Workers', href: '/workers' },
                      { name: 'About', href: '/about' },
                      { name: 'Contact', href: '#' }
                    ].map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-white/70 hover:text-purple-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                  <ul className="space-y-3">
                    {['Plumbing', 'Electrical', 'Carpentry', 'Painting'].map((service) => (
                      <li key={service}>
                        <a href="#" className="text-white/70 hover:text-cyan-300 transition-colors duration-300 hover:translate-x-1 transform inline-block">
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Stay Updated with <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Premium Insights</span>
                  </h3>
                  <p className="text-white/70 mb-6">Get exclusive access to top professionals and special offers</p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-white/10 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <p className="text-white/60 mb-4 md:mb-0">
                    &copy; 2025 HirePro. All rights reserved. Crafted with 
                    <span className="text-red-400 mx-1">♥</span> 
                    for excellence.
                  </p>
                  <div className="flex space-x-6">
                    {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                      <a key={link} href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
