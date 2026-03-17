import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/services-data";
import AnimatedSection from "@/components/AnimatedSection";
import BookingForm from "@/components/BookingForm";
import { Star, ArrowRight, Shield, Clock, Users, Award } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "root-canal": <Shield size={28} />,
  "smile-designing": <Star size={28} />,
  "tooth-whitening": <Star size={28} />,
  "dental-implants": <Award size={28} />,
  "orthodontics": <Users size={28} />,
  "oral-surgery": <Clock size={28} />,
};

export default function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                MDS Endodontics Specialist · Hyderabad
              </p>
              <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6 text-foreground">
                Specialist Dental Care.{" "}
                <span className="italic text-primary">Gentle Precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Dr. Vivek Kandanuru brings 15+ years of expertise and an MDS in
                Endodontics to every patient — combining advanced techniques with
                compassionate care at Vengal Rao Nagar, Hyderabad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Book Your Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link to="/about">Meet Dr. Vivek</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <AnimatedSection>
        <section className="border-y border-border bg-card">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              {[
                { icon: <Star size={20} className="text-primary" />, text: "4.9★ Google Rating" },
                { icon: <Award size={20} className="text-primary" />, text: "MDS Endodontics" },
                { icon: <Clock size={20} className="text-primary" />, text: "15+ Years Experience" },
                { icon: <Users size={20} className="text-primary" />, text: "10,000+ Patients" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Our Treatments
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground">
                Specialist Services
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link to={`/services/${service.slug}`}>
                  <Card className="group h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mb-5">
                        {iconMap[service.slug]}
                      </div>
                      <h3 className="text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.shortTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/5] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Dr. Vivek's Photo</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Your Specialist
              </p>
              <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
                Dr. Vivek Kandanuru
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                BDS, MDS (Conservative Dentistry & Endodontics) from Narayana
                Dental College. Member of the Indian Dental Association.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 15 years of clinical experience, Dr. Vivek specializes in
                saving natural teeth through advanced endodontic techniques. His
                patient-first philosophy ensures every visit is comfortable,
                transparent, and focused on long-term dental health.
              </p>
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link to="/about">Full Profile <ArrowRight size={14} /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 md:py-28" id="booking">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                  Get Started
                </p>
                <h2 className="text-4xl md:text-5xl text-foreground mb-4">
                  Request a Visit
                </h2>
                <p className="text-muted-foreground">
                  Fill in the form and we'll call you back within 30 minutes during clinic hours.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card className="p-6 md:p-8">
                <BookingForm />
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile CTA */}
      <div className="h-16 md:hidden" />
    </main>
  );
}