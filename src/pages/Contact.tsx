import { Card } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-20">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl text-foreground mb-4">
                Contact & Location
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Visit us at Vengal Rao Nagar or book an appointment online.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info + Map */}
            <AnimatedSection>
              <div className="space-y-6 mb-8">
                {[
                  { icon: <MapPin size={20} />, label: "Address", value: "Vengal Rao Nagar, Hyderabad, Telangana" },
                  { icon: <Phone size={20} />, label: "Phone", value: "+91 95818 60260 / 040-48574087", href: "tel:+919581860260" },
                  { icon: <Clock size={20} />, label: "Hours", value: "Sunday – Saturday, 10 AM – 8 PM" },
                  { icon: <Mail size={20} />, label: "WhatsApp", value: "Message us on WhatsApp", href: "https://wa.me/919581860260" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe
                  title="Vivek Dental Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.45!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzEyLjAiTiA3OMKwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>

            {/* Booking Form */}
            <AnimatedSection delay={0.1}>
              <Card className="p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl mb-6 text-foreground">Request a Visit</h2>
                <BookingForm />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}