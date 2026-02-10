import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Car, ShoppingBag, UtensilsCrossed, Clock, MapPin, Star, Phone, ArrowRight, CreditCard, Baby, Users } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import wingsImg from "@/assets/food-wings.jpg";
import pastaImg from "@/assets/food-pasta.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import SectionHeading from "@/components/SectionHeading";

const services = [
  { icon: Truck, title: "Delivery", desc: "Hot food delivered to your doorstep" },
  { icon: Car, title: "Drive-through", desc: "Quick pick-up on the go" },
  { icon: ShoppingBag, title: "Takeaway", desc: "Pack and go your favorites" },
  { icon: UtensilsCrossed, title: "Table Service", desc: "Dine in our cozy space" },
];

const highlights = [
  { icon: CreditCard, text: "Cards & NFC Payments" },
  { icon: Baby, text: "Kid Friendly" },
  { icon: Users, text: "Great for Groups" },
  { icon: Car, text: "Free Parking" },
];

const popularItems = [
  { img: burgerImg, name: "Signature Burger", price: "From ₦3,500" },
  { img: wingsImg, name: "Crispy Wings", price: "From ₦2,800" },
  { img: pastaImg, name: "Classic Pasta", price: "From ₦3,000" },
];

const testimonials = [
  { name: "Amaka O.", text: "The best burgers in Awka! Quick service and amazing vibes. I always bring my friends here.", rating: 5 },
  { name: "Chidi E.", text: "Iconic Spot never disappoints. The delivery is fast and the food always arrives hot. Highly recommend!", rating: 5 },
  { name: "Ngozi U.", text: "Perfect spot for family dinners. Kids love it and the atmosphere is so welcoming. 10/10!", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Iconic Spot food spread" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--warm-dark)/0.9)] via-[hsl(var(--warm-dark)/0.7)] to-[hsl(var(--warm-dark)/0.4)]" />
        </div>
        <div className="relative container-main px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Welcome to Iconic Spot
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-[hsl(var(--warm-cream))] mb-6 leading-tight">
              Quick Bites.<br />
              Big Flavor.<br />
              <span className="text-primary">Iconic Taste.</span>
            </h1>
            <p className="font-body text-lg text-[hsl(var(--warm-cream)/0.8)] mb-8 max-w-lg leading-relaxed">
              Your favorite casual food spot in Awka. Fresh ingredients, bold flavors, 
              and an atmosphere you'll love — open almost 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Order Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-[hsl(var(--warm-cream)/0.3)] text-[hsl(var(--warm-cream))] px-7 py-3.5 rounded-lg font-body font-semibold hover:bg-[hsl(var(--warm-cream)/0.1)] transition-colors"
              >
                Visit Us
              </Link>
              <a
                href="tel:08144237799"
                className="inline-flex items-center gap-2 border-2 border-[hsl(var(--warm-cream)/0.3)] text-[hsl(var(--warm-cream))] px-7 py-3.5 rounded-lg font-body font-semibold hover:bg-[hsl(var(--warm-cream)/0.1)] transition-colors"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Our Services"
            title="How Would You Like It?"
            description="Whether you're dining in, driving through, or ordering delivery — we've got you covered."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-6 text-center hover:shadow-[var(--shadow-warm)] transition-shadow border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <SectionHeading
            subtitle="Fan Favorites"
            title="Most Loved Dishes"
            description="Our customers keep coming back for these iconic picks."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {popularItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="font-body text-primary font-semibold text-sm">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">
                About Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                More Than Just Food — It's an Experience
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                At Iconic Spot, we believe great food brings people together. Located in the heart of Awka, 
                we serve up bold flavors in a trendy, welcoming atmosphere that's perfect for everyone — 
                from solo diners to big groups and families with kids.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <h.icon size={18} className="text-primary" />
                    </div>
                    <span className="font-body text-sm font-medium">{h.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:underline"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={interiorImg}
                alt="Iconic Spot interior"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <SectionHeading
            subtitle="Reviews"
            title="What Our Customers Say"
            description="Don't just take our word for it — hear from our happy diners."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-body font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location Preview */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock size={24} className="text-primary" />
                <h3 className="font-display text-xl font-semibold">Opening Hours</h3>
              </div>
              <div className="space-y-3 font-body text-sm">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-medium">Open 24 Hours</span>
                  </div>
                ))}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">11:00 AM – 11:00 PM</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={24} className="text-primary" />
                <h3 className="font-display text-xl font-semibold">Find Us</h3>
              </div>
              <p className="font-body text-muted-foreground mb-4">
                3 Obi Okoli Ave, Awka 234000, Anambra, Nigeria
              </p>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Free street parking and parking lot available.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=3+Obi+Okoli+Ave+Awka+Anambra+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Directions <ArrowRight size={16} />
                </a>
                <a
                  href="tel:08144237799"
                  className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg font-body text-sm font-semibold hover:bg-muted transition-colors"
                >
                  <Phone size={16} /> Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-secondary" />
        <div className="relative container-main text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
              Ready for Something <span className="text-primary">Iconic?</span>
            </h2>
            <p className="font-body text-secondary-foreground/70 mb-8 max-w-md mx-auto">
              Order now for delivery or swing by for the full experience. Your taste buds will thank you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Order Now <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-secondary-foreground/20 text-secondary-foreground px-7 py-3.5 rounded-lg font-body font-semibold hover:bg-secondary-foreground/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
