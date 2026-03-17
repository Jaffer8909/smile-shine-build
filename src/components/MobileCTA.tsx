import { Phone, MessageCircle } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary text-primary-foreground shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="flex">
        <a
          href="tel:+919581860260"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Phone size={18} /> Call Now
        </a>
        <div className="w-px bg-primary-foreground/20" />
        <a
          href="https://wa.me/919581860260?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}