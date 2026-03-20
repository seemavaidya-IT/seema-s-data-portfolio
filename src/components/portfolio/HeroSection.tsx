import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm tracking-widest text-hero-accent mb-4 uppercase">
            Python Developer · Data Scientist
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground leading-tight mb-4">
            Seema{" "}
            <span className="text-gradient">Vaidya</span>
          </h1>
          <p className="text-xl md:text-2xl text-hero-muted font-light max-w-2xl mb-3">
            Transforming Raw Data into Intelligent Solutions
          </p>
          <p className="text-base text-hero-muted/70 max-w-xl mb-8">
            Aspiring Python Developer specializing in Machine Learning, Data Science, and AI-driven applications. Passionate about solving real-world problems through data.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <span className="flex items-center gap-1.5 text-sm text-hero-muted">
              <MapPin size={14} className="text-hero-accent" /> Pune, Maharashtra, India
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="mailto:seema.vaidya@email.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-accent">
              <Mail size={16} /> Get In Touch
            </a>
            <a href="https://github.com/seemavaidya-IT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-hero-muted/20 text-hero-foreground text-sm hover:border-hero-accent/40 transition-colors">
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-muted/50 animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
