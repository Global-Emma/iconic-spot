import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Iconic<span className="text-primary"> Spot</span>
            </h3>
            <p className="font-body text-secondary-foreground/70 text-sm leading-relaxed">
              Quick Bites. Big Flavor. Iconic Taste. Your go-to spot for delicious food, 
              great vibes, and memorable dining experiences in Awka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/menu", label: "Our Menu" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-secondary-foreground/70">
                  3 Obi Okoli Ave, Awka 234000, Anambra, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:08144237799" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  0814 423 7799
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body text-sm text-secondary-foreground/70">
                  Mon–Sat: 24 Hours<br />Sun: 11 AM – 11 PM
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Iconic Spot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
