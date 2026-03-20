import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SMS Spam Detection",
    tagline: "NLP-Powered Classification System",
    description: "Developed a robust machine learning classification model to detect spam messages using Natural Language Processing techniques. Implemented TF-IDF vectorization for feature extraction and conducted thorough exploratory data analysis.",
    achievement: "96% classification accuracy",
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "EDA"],
    github: "https://github.com/seemavaidya-IT/sms-spam-detection",
  },
  {
    title: "Predictive Eye Fluid Detection",
    tagline: "Deep Learning for Medical Imaging",
    description: "Engineered a Convolutional Neural Network (CNN) for automated retinal image classification to detect eye fluid conditions. Applied OpenCV for image preprocessing and data augmentation to enhance model generalization.",
    achievement: "CNN-based medical image classifier",
    tech: ["Python", "CNN", "OpenCV", "Deep Learning", "Data Augmentation"],
    github: "https://github.com/seemavaidya-IT/Eye-Fluid-Detection-ML",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 section-alt">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Featured Work</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-xl transition-all"
          >
            <p className="font-mono text-xs text-accent uppercase tracking-wider mb-2">{p.tagline}</p>
            <h4 className="text-xl font-bold text-foreground mb-3">{p.title}</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
            <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-5">
              ✦ {p.achievement}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs rounded bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-medium">
              <Github size={15} /> View on GitHub <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
