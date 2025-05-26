
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Star, Shield, Zap, Globe, Users, TrendingUp, Wallet } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Navigation */}
      <nav className="px-6 py-4 bg-black/50 backdrop-blur-sm border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-semibold text-xl">SubsidyChain</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#application" className="text-gray-300 hover:text-white transition-colors">Apply</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Track Application
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                🔗 Blockchain-Powered
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Transparent & Efficient
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    {" "}Government Subsidy
                  </span>
                  {" "}Distribution
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Build trust and efficiency with blockchain-powered distribution. Reduce fraud and improve delivery with our platform designed for transparent government subsidy management.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg group"
                >
                  Apply for Subsidy
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Wallet
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-gray-900"></div>
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">Trusted by citizens nationwide</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                  ))}
                  <span className="text-gray-300 text-sm ml-2">Secure & Transparent</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Blockchain visualization */}
                <div className="absolute -left-8 top-8 w-64 h-96 bg-gray-800 rounded-3xl border border-blue-700 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div className="p-6 space-y-4">
                    <div className="h-3 bg-blue-500 rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-400 rounded w-full"></div>
                      <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-blue-500/20 rounded"></div>
                      <div className="h-16 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard mockup */}
                <div className="w-96 h-64 bg-gray-800 rounded-xl border border-blue-700 shadow-2xl ml-16 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-blue-500 rounded w-1/3"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-blue-500/20 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                        <div className="h-12 bg-gray-700 rounded"></div>
                      </div>
                      <div className="h-2 bg-blue-400 rounded w-full"></div>
                      <div className="h-2 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="px-6 py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              Apply Now
            </Badge>
            <h2 className="text-4xl font-bold text-white">Submit Your Subsidy Application</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Fill out the form below to apply for government subsidies through our secure blockchain platform
            </p>
          </div>

          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="aadhaar" className="text-white">Aadhaar Number</Label>
                <Input 
                  id="aadhaar" 
                  placeholder="1234 5678 9123" 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-white">Full Name</Label>
                <Input 
                  id="fullname" 
                  placeholder="John Doe" 
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="income" className="text-white">Annual Income (₹)</Label>
                <Input 
                  id="income" 
                  placeholder="e.g., 250000" 
                  type="number"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-blue-500 hover:bg-blue-600 text-white flex-1"
                >
                  Submit Application
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10 flex-1"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Wallet
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-white">Why Choose SubsidyChain?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionary blockchain technology ensuring transparency and efficiency in government subsidy distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Fraud Prevention",
                description: "Blockchain technology ensures secure, tamper-proof records and eliminates fraudulent claims."
              },
              {
                icon: Zap,
                title: "Fast Processing",
                description: "Automated smart contracts enable rapid application processing and instant fund distribution."
              },
              {
                icon: Globe,
                title: "Transparent Tracking",
                description: "Real-time tracking of applications and funds from submission to distribution."
              },
              {
                icon: Users,
                title: "Universal Access",
                description: "Easy-to-use platform accessible to all citizens regardless of technical expertise."
              },
              {
                icon: TrendingUp,
                title: "Data Analytics",
                description: "Comprehensive insights and reporting for better policy making and resource allocation."
              },
              {
                icon: Wallet,
                title: "Secure Payments",
                description: "Direct digital wallet integration for secure and instant subsidy payments."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 hover:bg-gray-800/70 transition-colors group">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to experience transparent governance?
          </h2>
          <p className="text-xl text-gray-300">
            Join millions of citizens already benefiting from SubsidyChain's secure platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
            >
              Start Your Application
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-white font-semibold text-xl">SubsidyChain</span>
              </div>
              <p className="text-gray-400">
                Blockchain-powered platform for transparent and efficient government subsidy distribution.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Platform</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Apply for Subsidy</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Track Application</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Wallet Integration</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Government</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Policies</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Help Center</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">Documentation</a>
                <a href="#" className="text-gray-400 hover:text-white block transition-colors">System Status</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SubsidyChain. All rights reserved. | Government of India Initiative
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
