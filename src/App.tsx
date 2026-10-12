import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Send, 
  Code, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Sun, 
  Moon, 
  Coffee, 
  MapPin, 
  Clock, 
  ArrowRight,
  MessageSquare,
  Compass,
  Smile
} from 'lucide-react';

interface GuestNote {
  id: string;
  name: string;
  message: string;
  time: string;
  tag: string;
}

export default function App() {
  const [visitorName, setVisitorName] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState<boolean>(false);
  const [greetingTime, setGreetingTime] = useState<string>('Welcome');

  // Guestbook state
  const [notes, setNotes] = useState<GuestNote[]>([
    {
      id: '1',
      name: 'Elena Rostova',
      message: 'Such a peaceful and thoughtfully designed environment. Excited for what is ahead!',
      time: 'Today at 09:30 AM',
      tag: 'First visit'
    },
    {
      id: '2',
      name: 'Marcus Chen',
      message: 'Stopping by to say hello. The hospitality and atmosphere here are unmatched.',
      time: 'Yesterday',
      tag: 'Warm greeting'
    },
    {
      id: '3',
      name: 'Sophia Laurent',
      message: 'Wonderful energy in this space. Looking forward to our collaboration.',
      time: '2 days ago',
      tag: 'Collaboration'
    }
  ]);

  const [authorInput, setAuthorInput] = useState<string>('');
  const [messageInput, setMessageInput] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('Warm greeting');
  const [noteSubmitted, setNoteSubmitted] = useState<boolean>(false);

  // Time-aware greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreetingTime('Good morning');
    } else if (hour < 18) {
      setGreetingTime('Good afternoon');
    } else {
      setGreetingTime('Good evening');
    }
  }, []);

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorInput.trim() || !messageInput.trim()) return;

    const newNote: GuestNote = {
      id: Date.now().toString(),
      name: authorInput.trim(),
      message: messageInput.trim(),
      time: 'Just now',
      tag: selectedTag
    };

    setNotes([newNote, ...notes]);
    setMessageInput('');
    setNoteSubmitted(true);
    setTimeout(() => setNoteSubmitted(false), 3000);
  };

  const pureHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Space</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #fbfbfd;
      color: #1d1d1f;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    header {
      padding: 24px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      border-bottom: 1px solid #e5e5ea;
    }
    .brand {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    nav a {
      margin-left: 24px;
      color: #6e6e73;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: color 0.2s ease;
    }
    nav a:hover {
      color: #0071e3;
    }
    main {
      flex: 1;
      max-width: 900px;
      margin: 0 auto;
      padding: 64px 24px;
      width: 100%;
    }
    .hero {
      text-align: center;
      margin-bottom: 56px;
    }
    .badge {
      display: inline-block;
      font-size: 13px;
      color: #0071e3;
      font-weight: 600;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    h1 {
      font-size: 44px;
      font-weight: 700;
      letter-spacing: -1px;
      line-height: 1.2;
      margin-bottom: 16px;
    }
    p.lead {
      font-size: 19px;
      color: #6e6e73;
      max-width: 620px;
      margin: 0 auto 32px;
    }
    .actions {
      display: flex;
      gap: 16px;
      justify-content: center;
    }
    .btn {
      padding: 12px 24px;
      border-radius: 980px;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.2s;
    }
    .btn-primary {
      background: #0071e3;
      color: #ffffff;
    }
    .btn-primary:hover {
      background: #0077ed;
    }
    .btn-secondary {
      background: #f5f5f7;
      color: #1d1d1f;
      border-color: #d2d2d7;
    }
    .btn-secondary:hover {
      background: #e8e8ed;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      margin-top: 48px;
    }
    .card {
      background: #ffffff;
      padding: 28px;
      border-radius: 16px;
      border: 1px solid #e5e5ea;
    }
    .card h3 {
      font-size: 18px;
      margin-bottom: 8px;
    }
    .card p {
      font-size: 14px;
      color: #6e6e73;
    }
    footer {
      border-top: 1px solid #e5e5ea;
      text-align: center;
      padding: 32px 24px;
      font-size: 13px;
      color: #86868b;
      background: #ffffff;
    }
  </style>
</head>
<body>

  <header>
    <div class="brand">Welcome Studio</div>
    <nav>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <div class="hero">
      <span class="badge">Hello &amp; Welcome</span>
      <h1>We are delighted you're here.</h1>
      <p class="lead">
        A tranquil place crafted for discovery, ideas, and pleasant conversations. Take a look around and make yourself at home.
      </p>
      <div class="actions">
        <a href="#about" class="btn btn-primary">Get Started</a>
        <a href="#contact" class="btn btn-secondary">Say Hello</a>
      </div>
    </div>

    <div class="grid" id="features">
      <div class="card">
        <h3>01. Open Community</h3>
        <p>A welcoming environment designed for collaboration, creativity, and thoughtful discussions.</p>
      </div>
      <div class="card">
        <h3>02. Thoughtful Craft</h3>
        <p>Built with intentional simplicity, clean aesthetics, and attention to every small detail.</p>
      </div>
      <div class="card">
        <h3>03. Always Accessible</h3>
        <p>Fast, lightweight, and responsive across all screens, devices, and platforms.</p>
      </div>
    </div>
  </main>

  <footer>
    &copy; 2026 Welcome Studio. All rights reserved.
  </footer>

</body>
</html>`;

  const copyHtml = () => {
    navigator.clipboard.writeText(pureHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadHtml = () => {
    const blob = new Blob([pureHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'welcome.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#1E2022] font-sans antialiased selection:bg-stone-200">
      
      {/* View Switcher Top Banner */}
      <div className="bg-stone-900 text-stone-300 px-6 py-2.5 text-xs flex flex-wrap items-center justify-between border-b border-stone-800 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-medium text-stone-200">Simple Welcoming Page</span>
          <span className="text-stone-500 hidden sm:inline">&bull;</span>
          <span className="text-stone-400 hidden sm:inline">Interactive View &amp; Clean HTML Source</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-stone-800 p-0.5 rounded-lg border border-stone-700">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'preview'
                  ? 'bg-stone-100 text-stone-900 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Interactive Page
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'code'
                  ? 'bg-stone-100 text-stone-900 shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              HTML Source Code
            </button>
          </div>

          {activeTab === 'code' && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={copyHtml}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md border border-stone-700 flex items-center gap-1.5 transition-colors text-xs"
                title="Copy pure HTML code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={downloadHtml}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md border border-stone-700 flex items-center gap-1.5 transition-colors text-xs"
                title="Download welcome.html"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download .html</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {activeTab === 'code' ? (
        /* Standalone HTML Code Viewer */
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-200 bg-stone-50/70 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-stone-800 text-sm">Standalone HTML5 File (welcome.html)</h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Single-file, dependency-free responsive HTML page ready to open in any browser.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyHtml}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied to Clipboard' : 'Copy HTML'}
                </button>
                <button
                  onClick={downloadHtml}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </div>
            <pre className="p-6 bg-stone-900 text-stone-200 text-xs font-mono overflow-x-auto leading-relaxed max-h-[700px]">
              <code>{pureHtmlCode}</code>
            </pre>
          </div>
        </div>
      ) : (
        /* Interactive Welcoming Page */
        <>
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <header className="sticky top-0 z-30 bg-[#FDFDFC]/90 backdrop-blur-md border-b border-stone-200/80 px-6 sm:px-12 py-4 flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark (single element) */}
            <a href="#" className="text-lg font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0">
              Aura Studio
            </a>

            {/* Zone 2: 4-5 single-line nav links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
              <a href="#about" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">About</a>
              <a href="#highlights" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">Highlights</a>
              <a href="#guestbook" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">Guestbook</a>
              <a href="#contact" className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0">Say Hello</a>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a 
                href="#guestbook" 
                className="px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
              >
                Sign Guestbook
              </a>
            </div>
          </header>

          <main>
            {/* Hero Section */}
            <section className="relative px-6 sm:px-12 pt-14 pb-16 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                
                {/* Hero Text */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Visitor Personalization & Greeting Badge */}
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="font-medium text-stone-800">
                      {greetingTime}{visitorName ? `, ${visitorName}` : ''}
                    </span>
                    <span aria-hidden="true">&bull;</span>
                    <span>Warmly welcomed</span>
                    <span aria-hidden="true">&bull;</span>
                    <span className="tabular-nums">
                      {new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] text-balance">
                    {visitorName.trim() ? (
                      <>Welcome to our sanctuary, <span className="underline decoration-stone-300 underline-offset-8">{visitorName}</span>.</>
                    ) : (
                      <>A warm welcome to our creative space.</>
                    )}
                  </h1>

                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                    We designed this room as a calm haven for discovery, ideas, and thoughtful conversations. Feel free to explore our craft, read notes from visitors, or introduce yourself.
                  </p>

                  {/* Personalize Greeting Field */}
                  <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200/80 max-w-md">
                    <label htmlFor="visitor-input" className="block text-xs font-medium text-stone-600 mb-1.5">
                      Personalize your visit (Optional)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="visitor-input"
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="Type your name..."
                        className="flex-1 px-3.5 py-1.5 text-xs bg-white rounded-lg border border-stone-300 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all"
                      />
                      {visitorName && (
                        <button
                          onClick={() => setVisitorName('')}
                          className="px-2 py-1 text-xs text-stone-500 hover:text-stone-800 transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href="#guestbook"
                      className="px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-sm inline-flex items-center gap-2"
                    >
                      <span>Leave a Note</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#about"
                      className="px-5 py-2.5 text-xs sm:text-sm font-medium text-stone-800 bg-stone-100 rounded-lg hover:bg-stone-200 border border-stone-200/90 transition-colors"
                    >
                      Our Story
                    </a>
                  </div>
                </div>

                {/* Hero High-Impact Image Slot */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100 aspect-[4/3] lg:aspect-[3/4]">
                    <img
                      src="/src/assets/images/hero_welcoming_space_1791812930190.jpg"
                      alt="Welcoming architectural space with sunny atrium and greenery"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Resilient fallback in case image load is prevented
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent p-5 text-white">
                      <p className="text-xs font-semibold tracking-wide uppercase text-stone-300">Sanctuary Atrium</p>
                      <p className="text-sm font-medium text-stone-100 mt-0.5">Designed for light, warmth, and dialogue</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* About / Hospitality Philosophy */}
            <section id="about" className="py-16 px-6 sm:px-12 border-t border-stone-200 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mb-12">
                  <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Hospitality &bull; Philosophy</span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-2">
                    Creating environments where visitors feel heard and at ease.
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                    A welcoming page is more than greeting words. It is an invitation to pause, breathe, and experience thoughtful craftsmanship.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-3 p-6 rounded-xl bg-stone-50/70 border border-stone-200/70">
                    <span className="text-xs font-semibold text-stone-400">01</span>
                    <h3 className="text-base font-semibold text-stone-900">Warm Transparency</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      Every element is clear and honest. No deceptive popups, no hidden catches—just direct hospitality and purpose.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-xl bg-stone-50/70 border border-stone-200/70">
                    <span className="text-xs font-semibold text-stone-400">02</span>
                    <h3 className="text-base font-semibold text-stone-900">Quiet Simplicity</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      We prioritize generous breathing room, legible typography, and calm tones over visual noise and clutter.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-xl bg-stone-50/70 border border-stone-200/70">
                    <span className="text-xs font-semibold text-stone-400">03</span>
                    <h3 className="text-base font-semibold text-stone-900">Open Community</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      Whether you stay for one moment or return often, your presence enriches the community space we share.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Highlights Section with Photo Showcase */}
            <section id="highlights" className="py-16 px-6 sm:px-12 border-t border-stone-200 bg-[#FBFBFA]">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-[4/3]">
                      <img
                        src="/src/assets/images/welcome_gathering_lounge_1791812942771.jpg"
                        alt="Warm lounge interior with cozy chairs and ambient lighting"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                    <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Highlights</span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                      Every corner curated with genuine intention.
                    </h2>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      From quiet reading nooks to sun-drenched meeting tables, our gathering lounge offers room for both focused reflection and lively exchange.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="border border-stone-200 bg-white p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-1.5 text-stone-800 font-semibold text-xs">
                          <Coffee className="w-4 h-4 text-stone-600" />
                          <span>Thoughtful Comfort</span>
                        </div>
                        <p className="text-xs text-stone-500">
                          Handcrafted seating, soothing lighting, and natural textures to set a tranquil tone.
                        </p>
                      </div>

                      <div className="border border-stone-200 bg-white p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-1.5 text-stone-800 font-semibold text-xs">
                          <Clock className="w-4 h-4 text-stone-600" />
                          <span>Always Open Door</span>
                        </div>
                        <p className="text-xs text-stone-500">
                          Accessible anytime, with resources and support ready whenever you arrive.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Interactive Guestbook Section */}
            <section id="guestbook" className="py-16 px-6 sm:px-12 border-t border-stone-200 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left Column: Sign Form */}
                  <div className="lg:col-span-5 space-y-5">
                    <div>
                      <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Guest Registry</span>
                      <h2 className="text-2xl font-bold tracking-tight text-stone-900 mt-1">
                        Sign the Welcome Book
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
                        Leave a greeting for fellow visitors. Your words will appear in the registry below.
                      </p>
                    </div>

                    <form onSubmit={handleAddNote} className="space-y-4 bg-stone-50/80 p-5 rounded-2xl border border-stone-200">
                      <div>
                        <label htmlFor="guest-name" className="block text-xs font-medium text-stone-700 mb-1">
                          Your Name
                        </label>
                        <input
                          id="guest-name"
                          type="text"
                          required
                          value={authorInput}
                          onChange={(e) => setAuthorInput(e.target.value)}
                          placeholder="e.g. John Doe or Jane"
                          className="w-full px-3.5 py-2 text-xs bg-white rounded-lg border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="guest-message" className="block text-xs font-medium text-stone-700 mb-1">
                          Welcome Message
                        </label>
                        <textarea
                          id="guest-message"
                          required
                          rows={3}
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder="Say hello, share a thought, or leave a blessing..."
                          className="w-full px-3.5 py-2 text-xs bg-white rounded-lg border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1.5">
                          Note Category
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {['Warm greeting', 'First visit', 'Inspiration', 'Collaboration'].map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              onClick={() => setSelectedTag(tag)}
                              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                                selectedTag === tag
                                  ? 'bg-stone-900 text-white'
                                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                              }`}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Post Note to Guestbook</span>
                      </button>

                      {noteSubmitted && (
                        <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded-lg text-center font-medium">
                          Thank you! Your note has been added to our guestbook.
                        </p>
                      )}
                    </form>
                  </div>

                  {/* Right Column: List of Notes */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                      <span className="text-xs font-semibold text-stone-700">
                        Recent Visitor Notes ({notes.length})
                      </span>
                      <span className="text-xs text-stone-500">Live Community Notes</span>
                    </div>

                    <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                      {notes.map((note) => (
                        <div
                          key={note.id}
                          className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-stone-50 transition-colors space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-stone-900 text-xs">
                              {note.name}
                            </span>
                            <div className="flex items-center gap-2 text-xs text-stone-500">
                              <span>{note.tag}</span>
                              <span aria-hidden="true">&bull;</span>
                              <span className="tabular-nums">{note.time}</span>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            "{note.message}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Contact / Say Hello Section */}
            <section id="contact" className="py-16 px-6 sm:px-12 border-t border-stone-200 bg-[#FDFDFC]">
              <div className="max-w-3xl mx-auto text-center space-y-5">
                <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">Connect</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                  We'd love to hear from you.
                </h2>
                <p className="text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
                  Have questions, ideas for collaboration, or simply wish to say hi? Drop us a note or explore our downloadable HTML template anytime.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('code');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-4 py-2.5 text-xs font-medium text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors inline-flex items-center gap-2"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>View Pure HTML Template</span>
                  </button>
                  <a
                    href="mailto:hello@example.com"
                    className="px-4 py-2.5 text-xs font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send an Email</span>
                  </a>
                </div>
              </div>
            </section>
          </main>

          {/* Quiet Footer */}
          <footer className="border-t border-stone-200 bg-white px-6 sm:px-12 py-8 text-stone-500 text-xs">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-stone-800">Aura Studio</span>
                <span aria-hidden="true">&bull;</span>
                <span>Welcoming visitors with warmth and craft</span>
              </div>
              <div className="flex items-center gap-6 text-stone-600">
                <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
                <a href="#highlights" className="hover:text-stone-900 transition-colors">Highlights</a>
                <a href="#guestbook" className="hover:text-stone-900 transition-colors">Guestbook</a>
                <button
                  onClick={() => {
                    setActiveTab('code');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-stone-900 transition-colors"
                >
                  HTML Code
                </button>
              </div>
              <p className="tabular-nums">&copy; 2026 Aura Studio. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}

    </div>
  );
}
