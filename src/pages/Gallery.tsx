import { motion } from "framer-motion";
import heroImg from "@/assets/hero-food.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import wingsImg from "@/assets/food-wings.jpg";
import pastaImg from "@/assets/food-pasta.jpg";
import saladImg from "@/assets/food-salad.jpg";
import drinksImg from "@/assets/food-drinks.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import aboutImg from "@/assets/about-dining.jpg";
import SectionHeading from "@/components/SectionHeading";

const images = [
  { src: heroImg, alt: "Iconic Spot food spread", span: "col-span-2 row-span-2" },
  { src: burgerImg, alt: "Signature burger", span: "" },
  { src: wingsImg, alt: "Crispy chicken wings", span: "" },
  { src: interiorImg, alt: "Restaurant interior", span: "col-span-2" },
  { src: pastaImg, alt: "Classic pasta", span: "" },
  { src: drinksImg, alt: "Fresh drinks", span: "" },
  { src: saladImg, alt: "Fresh salad", span: "" },
  { src: aboutImg, alt: "Friends dining together", span: "col-span-2" },
];

const Gallery = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Gallery"
            title="A Taste in Pictures"
            description="Explore the flavors, vibes, and moments that make Iconic Spot special."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`rounded-xl overflow-hidden ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover min-h-[180px] hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
