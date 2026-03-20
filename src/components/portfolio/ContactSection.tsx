import { motion } from "framer-motion";
import { Mail, Github, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="hero-gradient py-24">
    <div className="container mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-hero-accent tracking-widest uppercase mb-2">Contact</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">Let's Connect</h3>
        <p className="text-hero-muted max-w-lg mx-auto mb-10">
          I'm actively seeking opportunities in Data Science and Python Development. Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:seema.vaidya@email.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition glow-accent">
            <Mail size={16} /> seema.vaidya@email.com
          </a>
          <a href="https://github.com/seemavaidya-IT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-hero-muted/20 text-hero-foreground text-sm hover:border-hero-accent/40 transition-colors">
            <Github size={16} /> GitHub Profile
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-hero-muted">
          <MapPin size={14} /> Pune, Maharashtra, India
        </p>
      </motion.div>
    </div>

    <div className="mt-20 border-t border-hero-muted/10 pt-6 text-center">
      <p className="text-xs text-hero-muted/50 font-mono">© 2025 Seema Vaidya. All rights reserved.</p>
    </div>
  </section>
);

export default ContactSection;
