import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Object-Oriented Programming"],
  },
  {
    title: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["Classification", "Regression", "Feature Engineering", "Model Evaluation", "Generative AI", "NLP", "Deep Learning (CNN)"],
  },
  {
    title: "Data & Analytics",
    skills: ["Data Cleaning", "Preprocessing", "Exploratory Data Analysis", "Statistical Analysis"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Power BI", "Excel", "MS Excel (Advanced)", "Jupyter Notebook", "OpenCV", "Git & GitHub"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 section-alt">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Technical Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">My Tech Stack</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h4 className="font-mono text-xs text-accent uppercase tracking-wider mb-4">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-medium">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
