import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldAlert, 
  Layers, 
  TrendingUp, 
  Globe, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Overview', href: '#overview' },
    { name: 'Definition', href: '#definition' },
    { name: 'Business Model', href: '#shift' },
    { name: 'Risks', href: '#risks' },
    { name: 'GTM Strategy', href: '#strategies' },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white tracking-tighter">
                OB<span className="text-green-500">2026</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-green-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <a 
                  href="https://substack.com/@prksh" 
                  target="_blank"
                  className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded-md text-sm font-bold transition-all"
                >
                  Subscribe
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium mb-6">
            UPDATED FOR 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Open Banking</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            A practical guide for Incumbent Banks and Fintech Startups. <br className="hidden md:block"/>
            From definition to Go-to-Market strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#overview" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-400 transition-all">
              Start Learning
            </a>
            <a href="https://substack.com/@prksh" target="_blank" className="inline-flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-800 transition-all">
              Get Updates <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The $43 Billion Shift</h2>
              <p className="text-gray-400 mb-6 text-lg">
                By 2026, Open Banking will have transitioned financial services from siloed fortresses to collaborative ecosystems. This isn't just compliance—it's a fundamental change in how value is created.
              </p>
              <ul className="space-y-4 mb-8">
                {['Bank as a Platform', 'Secure Data Sharing', 'Ecosystem Collaboration'].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Target Audience</h3>
              <div className="space-y-4">
                <div className="p-4 bg-black/50 rounded-lg border border-gray-700">
                  <div className="text-green-400 font-bold mb-1">Banking Professionals</div>
                  <div className="text-sm text-gray-500">Incumbents looking to defend and expand.</div>
                </div>
                <div className="p-4 bg-black/50 rounded-lg border border-gray-700">
                  <div className="text-green-400 font-bold mb-1">Entrepreneurs</div>
                  <div className="text-sm text-gray-500">Challengers building the next big fintech.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section id="definition" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">What is Open Banking?</h2>
            <p className="mt-4 text-gray-400">The evolution from Open Banking to Open Finance.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <Globe className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Secure APIs</h3>
              <p className="text-gray-400">Mandated data sharing via standardized APIs, ensuring interoperability between banks and TPPs.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <ShieldAlert className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">User Consent</h3>
              <p className="text-gray-400">Data is only shared when the customer explicitly agrees. The customer owns the data, not the bank.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <Layers className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">Enables new use cases like aggregated dashboards, instant credit checks, and personalized offers.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://prksh.substack.com/p/how-open-banking-disrupts-traditional" target="_blank" className="text-green-400 hover:text-green-300 inline-flex items-center">
              Read Deep Dive on Disruption <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Business Model Shift */}
      <section id="shift" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">The Business Model Shift</h2>
          
          <div className="overflow-hidden rounded-xl border border-gray-800">
            <div className="grid grid-cols-3 bg-gray-800 p-4 font-bold text-white text-sm md:text-base">
              <div>Feature</div>
              <div>Traditional Model</div>
              <div className="text-green-400">Platform Model (2026)</div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-800 p-4 text-sm md:text-base hover:bg-gray-800/50 transition-colors">
              <div className="text-gray-400">Structure</div>
              <div>Vertically Integrated</div>
              <div className="text-green-300">Ecosystem / Network</div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-800 p-4 text-sm md:text-base hover:bg-gray-800/50 transition-colors">
              <div className="text-gray-400">Innovation</div>
              <div>Internal R&D (Slow)</div>
              <div className="text-green-300">Open APIs (Fast)</div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-800 p-4 text-sm md:text-base hover:bg-gray-800/50 transition-colors">
              <div className="text-gray-400">Revenue</div>
              <div>Interest & Fees</div>
              <div className="text-green-300">API Usage & Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section id="risks" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Balancing Innovation & Risk</h2>
              <p className="mt-2 text-gray-400">Opening up ecosystems amplifies specific threats.</p>
            </div>
            <a href="https://prksh.substack.com/p/balancing-innovation-and-risk-in" target="_blank" className="text-green-400 hover:text-green-300 text-sm mt-4 md:mt-0">
              View Risk Framework →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Disintermediation", desc: "TPPs may erode the bank’s direct relationship with the customer." },
              { title: "Legacy Tech Failure", desc: "Old systems may crash under high-volume API call loads." },
              { title: "Security Vectors", desc: "More entry points mean more potential cyber threats." },
              { title: "Economic Pressure", desc: "New entrants squeeze margins on traditional products." },
              { title: "Compliance Gaps", desc: "Cross-border data sharing creates liability complexity." }
            ].map((risk, idx) => (
              <div key={idx} className="bg-black border border-red-900/30 p-6 rounded-lg">
                <h4 className="text-red-400 font-bold mb-2">{risk.title}</h4>
                <p className="text-gray-500 text-sm">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GTM Strategy */}
      <section id="strategies" className="py-20 bg-green-900/10 border-y border-green-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">Go-to-Market Playbooks</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Incumbent */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Layers size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Incumbent Banks</h3>
              <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">The "Defend & Expand" Strategy</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-gray-800 p-1 rounded text-green-400 mr-3">1</span>
                  <span><strong>Address Legacy Debt:</strong> Modularize architecture first.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-800 p-1 rounded text-green-400 mr-3">2</span>
                  <span><strong>Choose Role:</strong> Aggregator vs. Orchestrator.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-800 p-1 rounded text-green-400 mr-3">3</span>
                  <span><strong>Treat as New Market:</strong> Adopt agile governance.</span>
                </li>
              </ul>
            </div>

            {/* Startups */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Startups</h3>
              <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">The "Disrupt & Scale" Strategy</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-gray-800 p-1 rounded text-green-400 mr-3">1</span>
                  <span><strong>Identify Niches:</strong> Don't rebuild; use incumbent APIs.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-800 p-1 rounded text-green-400 mr-3">2</span>
                  <span><strong>Hyper-Personalize:</strong> Use AI on top of open data.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-gray-800 p-1 rounded text-green-400 mr-3">3</span>
                  <span><strong>Partner:</strong> Leverage bank trust for distribution.</span>
                </li>
              </ul>
            </div>
          </div>

           <div className="mt-12 text-center">
            <a href="https://prksh.substack.com/p/launch-your-open-banking-go-to-strategies" target="_blank" className="inline-block bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Read the Full GTM Guide
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Stay Ahead of the Curve</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            The landscape changes daily. Get deep dives and expert analysis delivered to your inbox.
          </p>
          <a 
            href="https://substack.com/@prksh" 
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-lg transition-all text-lg"
          >
            Subscribe to Newsletter <ArrowRight className="ml-2" />
          </a>
          <div className="mt-12 text-gray-600 text-sm">
            <p>© 2026 Open Banking Guide. Curated by Prakash Neupane.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
