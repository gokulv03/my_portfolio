import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/gokulv0331@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: Message from ${formData.name}!`,
          _template: "table"
        })
      });

      if (!response.ok) throw new Error("Failed to send message.");
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-16 border-t border-white/5 relative"
      >
        <div className="absolute top-0 right-0 -mt-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-12 bg-blue-500/50"></div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Send className="w-6 h-6 text-blue-400" />
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for opportunities
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's build something amazing!</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently looking for thesis positions, internships, and exciting engineering challenges. Feel free to reach out via the form or my contact details.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Email</p>
                    <a href="mailto:gokulv0331@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                      gokulv0331@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Location</p>
                    <p className="text-slate-400 text-sm">Nürnberg, Germany</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-teal-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Phone</p>
                    <p className="text-slate-400 text-sm">+49-15510176813</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div className="lg:col-span-3">
            <div className="bg-[#0a0f1c]/50 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      disabled={isSubmitting}
                      className="w-full bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 focus:border-emerald-500/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors resize-none disabled:opacity-50"
                    placeholder="Hello Gokul, I'd like to discuss..."
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-6 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6 text-center">
                    Oops! Something went wrong. Please try emailing directly.
                  </div>
                )}
                
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-slate-900 font-semibold py-4 rounded-xl hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed z-20"
                >
                  {isSubmitting ? (
                    <>Sending <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0a0f1c]/30 mt-20 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Gokul Vemulapalli. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="https://github.com/gokulv03" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/gokul-vemulapalli" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="mailto:gokulv0331@gmail.com" className="hover:text-emerald-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
