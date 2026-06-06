import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Loader2, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("https://formsubmit.co/ajax/gokulv0331@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: Message from ${formData.name}!`,
          _template: "table",
        }),
      });
      if (!response.ok) throw new Error("Failed to send message.");
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = "w-full bg-paper border-2 border-ink px-4 py-3 font-body text-ink placeholder-ink-3 outline-none focus:border-accent transition-colors disabled:opacity-50";

  return (
    <>
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={reveal}
        className="py-20 sm:py-28 border-t-2 border-ink"
      >
        <header className="mb-12">
          <span className="section-num">05 — CONTACT</span>
          <h2 className="mt-2 font-display font-black uppercase tracking-tight text-ink"
              style={{ fontSize: 'var(--text-4xl)' }}>
            Get in touch
          </h2>
        </header>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Info */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] px-3 py-2 border-2 border-accent text-accent mb-6">
              <span className="w-2 h-2 bg-accent" /> Available for opportunities
            </span>
            <h3 className="font-display font-extrabold text-2xl text-ink mb-4 leading-tight">
              Looking for thesis positions & engineering challenges.
            </h3>
            <p className="font-body text-ink-2 leading-relaxed mb-8 max-w-md">
              Reach out via the form or directly — internships, thesis work, or interesting
              hardware problems all welcome.
            </p>

            <div className="border-t-2 border-ink">
              <a href="mailto:gokulv0331@gmail.com" className="flex items-center gap-4 py-4 border-b border-hairline group">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span className="font-mono text-sm text-ink group-hover:text-accent transition-colors min-w-0 truncate">gokulv0331@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 py-4 border-b border-hairline">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span className="font-mono text-sm text-ink-2">Nürnberg, Germany</span>
              </div>
              <div className="flex items-center gap-4 py-4">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span className="font-mono text-sm text-ink-2">+49 15510176813</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card-hard p-6 sm:p-8 flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-[0.1em] text-ink-2 mb-2">Your Name</label>
                  <input id="name" type="text" required value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    disabled={isSubmitting} className={field} placeholder="Jane Müller" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-[0.1em] text-ink-2 mb-2">Email Address</label>
                  <input id="email" type="email" required value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting} className={field} placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-[0.1em] text-ink-2 mb-2">Message</label>
                <textarea id="message" rows={5} required value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting} className={`${field} resize-none`} placeholder="Hello Gokul, I'd like to discuss…" />
              </div>

              {submitStatus === 'success' && (
                <p className="font-mono text-sm border-2 border-ink bg-paper-2 text-ink px-4 py-3">
                  ✓ Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="font-mono text-sm border-2 border-accent text-accent px-4 py-3">
                  ⚠ Something went wrong — please email directly.
                </p>
              )}

              <button type="submit" disabled={isSubmitting} className="slab justify-center w-full">
                {isSubmitting ? (
                  <>Sending <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* FOOTER — Ft1 Mast-headed */}
      <footer className="border-t-[3px] border-ink bg-paper-2">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12 py-14">
          <p className="font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-ink"
             style={{ fontSize: 'var(--text-4xl)' }}>
            Gokul Vemulapalli
          </p>
          <div className="mt-8 pt-6 border-t-2 border-ink flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-2">
              © {new Date().getFullYear()} — Electrical Engineer · Nürnberg, DE
            </span>
            <div className="flex flex-wrap gap-5">
              <a href="https://github.com/gokulv03" target="_blank" rel="noreferrer" className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors">GitHub <ArrowUpRight className="w-3.5 h-3.5" /></a>
              <a href="https://www.linkedin.com/in/gokul-vemulapalli" target="_blank" rel="noreferrer" className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors">LinkedIn <ArrowUpRight className="w-3.5 h-3.5" /></a>
              <a href="mailto:gokulv0331@gmail.com" className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] text-ink hover:text-accent transition-colors">Email <ArrowUpRight className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
