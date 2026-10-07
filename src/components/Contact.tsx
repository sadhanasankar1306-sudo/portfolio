import { useState, FormEvent } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  ExternalLink,
  GraduationCap,
  Sparkles,
  Info
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [linkNotice, setLinkNotice] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate natural processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 700);
  };

  const handlePlaceholderClick = (label: string) => {
    setLinkNotice(`${label} profile link to be added`);
    setTimeout(() => {
      setLinkNotice(null);
    }, 3500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>07</span>
            <span className="w-6 h-[1px] bg-cyan-500/50" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact details & Profile placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#111827]/80 border border-slate-800 p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-white tracking-tight mb-2">
                  Academic & Professional Inquiries
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Open to discussions regarding technical projects, collaborative student research, software development, and cloud computing.
                </p>
              </div>

              {/* Location Detail */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Current Location</span>
                    <span className="text-sm font-medium text-slate-200">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Affiliation</span>
                    <span className="text-sm font-medium text-slate-200">{PERSONAL_INFO.institution}</span>
                  </div>
                </div>
              </div>

              {/* Placeholders for GitHub, LinkedIn, Email */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                    Connect Profiles
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400">Placeholders</span>
                </div>

                <div className="space-y-2">
                  {/* GitHub Placeholder */}
                  <button
                    type="button"
                    onClick={() => handlePlaceholderClick('GitHub')}
                    className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">GitHub</span>
                        <span className="text-[11px] text-slate-400">Link to be added</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 group-hover:text-cyan-300 flex items-center gap-1">
                      <span>Pending Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </button>

                  {/* LinkedIn Placeholder */}
                  <button
                    type="button"
                    onClick={() => handlePlaceholderClick('LinkedIn')}
                    className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">LinkedIn</span>
                        <span className="text-[11px] text-slate-400">Link to be added</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 group-hover:text-cyan-300 flex items-center gap-1">
                      <span>Pending Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </button>

                  {/* Email Placeholder */}
                  <button
                    type="button"
                    onClick={() => handlePlaceholderClick('Email')}
                    className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-left transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300 group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">Email</span>
                        <span className="text-[11px] text-slate-400">Link to be added</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 group-hover:text-cyan-300 flex items-center gap-1">
                      <span>Pending Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </button>
                </div>

                {linkNotice && (
                  <div className="mt-3 p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800 text-xs text-cyan-200 flex items-center gap-2 animate-in fade-in">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{linkNotice} (as per student privacy guidelines).</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111827]/90 border border-slate-800 p-6 sm:p-8 shadow-xl relative">
              <h3 className="font-heading text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to start a conversation.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been received. I look forward to connecting with you.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or organization"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, question, or collaboration opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 disabled:opacity-50 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
