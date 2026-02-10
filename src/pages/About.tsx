import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Zap, Shield, Users } from "lucide-react";
import aboutImg from "@/assets/about-dining.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Quality First", desc: "We use only the freshest ingredients in every dish we prepare." },
  { icon: Zap, title: "Speed Matters", desc: "Quick service without compromising on taste or quality." },
  { icon: Shield, title: "Trust & Hygiene", desc: "Clean kitchen, safe food, and transparent practices." },
  { icon: Users, title: "Community", desc: "We're more than a restaurant — we're your neighborhood spot." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">Our Story</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Where Flavor Meets <span className="text-primary">Passion</span>
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Iconic Spot was born from a simple idea: everyone deserves access to great food in a space that feels like home. 
                Located on Obi Okoli Avenue in Awka, we've quickly become the go-to destination for locals, tourists, and 
                families looking for a memorable meal.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                From our signature burgers to our crispy wings and fresh salads, every dish is crafted with care 
                using quality ingredients. Our trendy, casual atmosphere makes every visit feel special — whether 
                you're grabbing a quick bite or enjoying dinner with loved ones.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Our Menu <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden">
              <img src={aboutImg} alt="Friends dining at Iconic Spot" className="w-full h-[450px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <SectionHeading subtitle="Our Values" title="What We Stand For" description="These principles guide everything we do at Iconic Spot." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-6 text-center border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <img src={interiorImg} alt="Iconic Spot atmosphere" className="w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">The Vibe</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Casual, Trendy & Welcoming</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Our space is designed to make you feel comfortable from the moment you walk in. 
                Whether you're a solo diner, a couple on a date night, or a big group celebrating, 
                Iconic Spot has the perfect setting.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                With free parking, multiple payment options including NFC, and service that's open 
                nearly around the clock, convenience is always on the menu at Iconic Spot.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
