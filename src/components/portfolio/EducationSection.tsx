import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-24 bg-card">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Education</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Academic Background</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        {[
          { degree: "B.Tech in Information Technology", school: "RTMNU University, Nagpur", year: "2021 – 2025", score: "CGPA: 7.91" },
          { degree: "Higher Secondary (HSC)", school: "Maharashtra Board", year: "", score: "82%" },
          { degree: "Secondary (SSC)", school: "Maharashtra Board", year: "", score: "66%" },
        ].map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border bg-background"
          >
            <GraduationCap size={22} className="text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1 text-sm">{ed.degree}</h4>
            <p className="text-xs text-muted-foreground mb-2">{ed.school}</p>
            {ed.year && <p className="text-xs text-muted-foreground mb-2 font-mono">{ed.year}</p>}
            <span className="inline-block px-2.5 py-1 rounded bg-accent/10 text-accent text-xs font-semibold">{ed.score}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
