import { motion } from "framer-motion";
import { Brain, Database, BarChart3 } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Machine Learning", desc: "Classification, Regression & Deep Learning" },
  { icon: Database, label: "Data Engineering", desc: "Cleaning, Preprocessing & Feature Engineering" },
  { icon: BarChart3, label: "Visualization", desc: "Power BI, Matplotlib & Seaborn" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Driven by Data, Powered by Curiosity</h3>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I am an aspiring Python Developer with hands-on experience in machine learning, data preprocessing, and analytical modeling.
          Leveraging Python libraries such as Pandas, NumPy, and Scikit-learn, I build intelligent solutions that extract meaningful insights from complex datasets.
          My goal is to contribute to impactful AI-driven applications that solve real-world challenges.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <h.icon size={28} className="text-primary mb-4 group-hover:text-accent transition-colors" />
            <h4 className="font-semibold text-foreground mb-1">{h.label}</h4>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
