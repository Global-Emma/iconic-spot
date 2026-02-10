import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import burgerImg from "@/assets/food-burger.jpg";
import wingsImg from "@/assets/food-wings.jpg";
import pastaImg from "@/assets/food-pasta.jpg";
import saladImg from "@/assets/food-salad.jpg";
import drinksImg from "@/assets/food-drinks.jpg";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "Quick Bites", "Mains", "Small Plates", "Drinks"];

const menuItems = [
  { name: "Iconic Burger", desc: "Juicy beef patty, melted cheese, fresh veggies, signature sauce", price: "₦3,500", category: "Mains", img: burgerImg },
  { name: "Double Stack Burger", desc: "Double patty, extra cheese, caramelized onions, pickles", price: "₦5,000", category: "Mains", img: burgerImg },
  { name: "Crispy Chicken Wings", desc: "6 pcs golden wings with your choice of BBQ or hot sauce", price: "₦2,800", category: "Quick Bites", img: wingsImg },
  { name: "Spicy Wings Platter", desc: "12 pcs extra crispy wings with trio dipping sauces", price: "₦5,200", category: "Quick Bites", img: wingsImg },
  { name: "Classic Spaghetti", desc: "Al dente pasta in rich tomato sauce with fresh basil", price: "₦3,000", category: "Mains", img: pastaImg },
  { name: "Jollof Rice Special", desc: "Smoky party jollof with grilled chicken and plantain", price: "₦3,200", category: "Mains", img: pastaImg },
  { name: "Fresh Garden Salad", desc: "Mixed greens, grilled chicken, avocado, cherry tomatoes", price: "₦2,500", category: "Small Plates", img: saladImg },
  { name: "Loaded Fries", desc: "Crispy fries topped with cheese sauce, bacon bits, herbs", price: "₦2,000", category: "Small Plates", img: saladImg },
  { name: "Tropical Smoothie", desc: "Mango, pineapple, and passion fruit blend", price: "₦1,500", category: "Drinks", img: drinksImg },
  { name: "Fresh Orange Juice", desc: "Freshly squeezed oranges, no added sugar", price: "₦1,200", category: "Drinks", img: drinksImg },
  { name: "Chapman Special", desc: "Our signature chapman with a fruity twist", price: "₦1,800", category: "Drinks", img: drinksImg },
  { name: "Chicken Spring Rolls", desc: "4 pcs crispy rolls with spicy mayo dip", price: "₦1,800", category: "Quick Bites", img: wingsImg },
  { name: "Classic Shawarma", desc: "Grilled chicken, fresh veggies, garlic sauce in warm pita wrap", price: "₦2,500", category: "Quick Bites", img: burgerImg },
  { name: "Spicy Beef Shawarma", desc: "Seasoned beef strips, pickles, hot sauce, crispy onions in pita", price: "₦3,000", category: "Quick Bites", img: burgerImg },
  { name: "Pepperoni Pizza", desc: "Loaded pepperoni, mozzarella cheese, tangy tomato base", price: "₦4,500", category: "Mains", img: pastaImg },
  { name: "Chicken Supreme Pizza", desc: "Grilled chicken, bell peppers, mushrooms, extra cheese", price: "₦5,000", category: "Mains", img: pastaImg },
  { name: "Vanilla Ice Cream", desc: "Creamy classic vanilla with chocolate drizzle", price: "₦1,000", category: "Small Plates", img: drinksImg },
  { name: "Sundae Delight", desc: "Three scoops with caramel, nuts, whipped cream, and cherry", price: "₦2,200", category: "Small Plates", img: drinksImg },
];

const Menu = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Our Menu"
            title="Taste the Iconic Difference"
            description="From quick bites to full meals — every dish is made with love and bold flavors."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm font-medium px-5 py-2.5 rounded-lg transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground border border-border hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-warm)] transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                      <span className="font-body text-primary font-bold text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="text-center mt-16 bg-card rounded-xl p-8 border border-border">
            <h3 className="font-display text-2xl font-bold mb-3">Ready to Order?</h3>
            <p className="font-body text-muted-foreground mb-6">
              Call us to place your order for delivery, takeaway, or dine-in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:08144237799"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone size={18} /> Call to Order
              </a>
              <a
                href="https://wa.me/2348144237799"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-lg font-body font-semibold hover:bg-muted transition-colors"
              >
                Order via WhatsApp <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
