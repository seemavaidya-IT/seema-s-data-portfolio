import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Experience</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Professional Journey</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-2xl"
      >
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
        <div className="pl-12 relative">
          <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <Briefcase size={12} className="text-primary-foreground" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground">Data Science Trainee</h4>
            <p className="text-sm text-muted-foreground mb-4 font-mono">6 Months · Training Program</p>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-accent mt-1.5 shrink-0">▸</span>
                Conducted end-to-end data analysis and preprocessing on structured datasets, improving data quality for downstream ML models
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1.5 shrink-0">▸</span>
                Built and evaluated machine learning models (classification & regression) using Scikit-learn, achieving measurable accuracy improvements
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1.5 shrink-0">▸</span>
                Leveraged SQL for efficient data extraction and transformation from relational databases
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1.5 shrink-0">▸</span>
                Designed interactive dashboards and visualizations using Matplotlib, Seaborn, and Power BI to communicate insights to stakeholders
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
