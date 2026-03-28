import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from "lucide-react";
import professionalPic from "@/assets/professional_pic.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Animated floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-hero-accent/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/6 w-72 h-72 rounded-full bg-hero-glow/5 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm tracking-widest text-hero-accent mb-4 uppercase"
            >
              Python Developer · Data Scientist · Data Analyst
            </motion.p>
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

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="mailto:seemavaidya64@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-accent">
                <Mail size={16} /> Get In Touch
              </a>
              <a href="/resume-seema-vaidya.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-hero-accent/15 text-hero-accent font-medium text-sm hover:bg-hero-accent/25 transition-colors border border-hero-accent/20">
                <Download size={16} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-hero-muted/50 font-mono uppercase tracking-wider mr-2">Find me on</span>
              <a href="https://github.com/seemavaidya-IT" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-hero-muted/15 flex items-center justify-center text-hero-muted hover:text-hero-accent hover:border-hero-accent/40 transition-all hover:bg-hero-accent/5">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/seema-vaidya-804726275" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg border border-hero-muted/15 flex items-center justify-center text-hero-muted hover:text-hero-accent hover:border-hero-accent/40 transition-all hover:bg-hero-accent/5">
                <Linkedin size={18} />
              </a>
              <a href="mailto:seemavaidya64@gmail.com" className="w-10 h-10 rounded-lg border border-hero-muted/15 flex items-center justify-center text-hero-muted hover:text-hero-accent hover:border-hero-accent/40 transition-all hover:bg-hero-accent/5">
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-hero-accent to-hero-glow opacity-30 blur-md" />
              <img
                src={professionalPic}
                alt="Seema Vaidya - Python Developer & Data Scientist"
                className="relative w-52 h-52 md:w-72 md:h-72 rounded-full object-cover object-top border-2 border-hero-accent/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-hero-muted/50 animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
