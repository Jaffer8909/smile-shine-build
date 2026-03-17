import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl mb-4">Vivek Dental</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Specialist dental care by Dr. Vivek Kandanuru, MDS — delivering
              clinical precision with a gentle, patient-first approach.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <Link to="/services/root-canal" className="hover:text-primary-foreground transition-colors">Root Canal</Link>
              <Link to="/services/smile-designing" className="hover:text-primary-foreground transition-colors">Smile Designing</Link>
              <Link to="/services/dental-implants" className="hover:text-primary-foreground transition-colors">Dental Implants</Link>
              <Link to="/about" className="hover:text-primary-foreground transition-colors">About Dr. Vivek</Link>
              <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg mb-4">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Vengal Rao Nagar, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+919581860260" className="hover:text-primary-foreground">+91 95818 60260</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="shrink-0" />
                <span>Sun–Sat, 10 AM – 8 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Vivek Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}