import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Machine Learning & Data Science with Python", issuer: "PHN Technology" },
  { name: "Cloud Computing", issuer: "NPTEL" },
  { name: "Programming Fundamentals", issuer: "Great Learning" },
  { name: "Oracle Cloud Generative AI Professional", issuer: "Oracle" },
  { name: "Data Science Certification", issuer: "Yess InfoTech" },
];

const CertificationsSection = () => (
  <section className="py-24 section-alt">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Certifications</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Credentials & Training</h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card"
          >
            <Award size={18} className="text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
