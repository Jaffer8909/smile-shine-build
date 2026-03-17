import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/services-data";
import { testimonials } from "@/lib/testimonials-data";
import AnimatedSection from "@/components/AnimatedSection";
import BookingForm from "@/components/BookingForm";
import {
  Star, ArrowRight, Shield, Clock, Users, Award, Sparkles,
  Heart, CheckCircle, Quote, Stethoscope, Scissors, Smile, Paintbrush, Wrench, Syringe
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "root-canal": <Stethoscope size={28} />,
  "smile-designing": <Smile size={28} />,
  "tooth-whitening": <Sparkles size={28} />,
  "dental-implants": <Syringe size={28} />,
  "orthodontics": <Shield size={28} />,
  "oral-surgery": <Scissors size={28} />,
  "veneers-laminates": <Paintbrush size={28} />,
  "dental-fillings": <Wrench size={28} />,
  "dentures": <Award size={28} />,
  "periodontal-treatment": <Heart size={28} />,
};

export default function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                MDS Endodontics Specialist · Vengal Rao Nagar, Hyderabad
              </p>
              <h1 className="text-5xl md:text-7xl leading-[1.05] mb-6 text-foreground">
                Specialist Dental Care.{" "}
                <span className="italic text-primary">Gentle Precision.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-lg">
                Dr. Vivek Kandanuru is an Endodontist, Dentist and Cosmetic/Aesthetic
                Dentist in Vengal Rao Nagar, Hyderabad — with over 15 years of
                experience and an MDS in Conservative Dentistry & Endodontics.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                From painless root canals to beautiful smile makeovers, every treatment
                is delivered with advanced techniques, premium materials, and a
                patient-first approach. Your comfort and long-term dental health are
                our top priorities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link to="/contact">Book Your Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <a href="tel:+919581860260">Call: 95818 60260</a>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="aspect-[4/5] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Dr. Vivek's Photo</span>
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
                { icon: <Users size={20} className="text-primary" />, text: "10,000+ Patients Treated" },
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

      {/* About the Doctor — Expanded */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/5] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Dr. Vivek at the Clinic</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Meet Your Specialist
              </p>
              <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
                Dr. Vivek Kandanuru
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Vivek Kandanuru is an Endodontist, Dentist and Cosmetic/Aesthetic
                  Dentist in Vengal Rao Nagar, Hyderabad and has an experience of over
                  15 years in these fields.
                </p>
                <p>
                  He completed his <strong className="text-foreground">BDS from Narayana Dental College
                  & Hospital in 2005</strong> and <strong className="text-foreground">MDS in Conservative
                  Dentistry & Endodontics from Narayana Dental College & Hospital in
                  2010</strong>. He is a proud member of the <strong className="text-foreground">Indian
                  Dental Association</strong>.
                </p>
                <p>
                  Some of the services provided by Dr. Vivek include Root Canal Treatment,
                  Dental Braces Fixing, Periodontal Flap Surgery, Veneers/Laminates,
                  Cast Partial Dentures, Dental Fillings, Smile Designing, Tooth
                  Whitening, Dental Implants, and Oral Surgery — covering the complete
                  spectrum of modern dentistry.
                </p>
                <p>
                  His patient-first philosophy ensures every visit is comfortable,
                  transparent, and focused on achieving the best possible outcome for
                  your long-term dental health.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="outline" className="rounded-full px-8">
                  <Link to="/about">Full Profile <ArrowRight size={14} /></Link>
                </Button>
                <Button asChild className="rounded-full px-8">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Why Vivek Dental
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Vivek Dental, we combine specialist expertise with a warm,
                patient-centric approach to deliver dental care that's both clinically
                excellent and genuinely comfortable.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award size={28} />,
                title: "Specialist Expertise",
                desc: "Dr. Vivek holds an MDS in Endodontics — a specialist qualification that goes beyond a general BDS degree, ensuring expert-level diagnosis and treatment.",
              },
              {
                icon: <Heart size={28} />,
                title: "Gentle & Painless",
                desc: "Advanced anesthesia techniques, a calm environment, and Dr. Vivek's gentle approach mean even nervous patients leave saying 'that was easy!'",
              },
              {
                icon: <Sparkles size={28} />,
                title: "Modern Technology",
                desc: "Digital X-rays, rotary endodontic instruments, apex locators, and premium materials — state-of-the-art technology for state-of-the-art results.",
              },
              {
                icon: <CheckCircle size={28} />,
                title: "Transparent Pricing",
                desc: "Honest diagnosis, clear treatment plans, and upfront pricing. No surprises, no unnecessary procedures — just the care you genuinely need.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Services / Treatments */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-6">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Our Treatments
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground">
                Comprehensive Dental Services
              </h2>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              From routine fillings to complex surgeries, Vivek Dental offers a full range
              of specialist treatments under one roof. Every procedure is performed by
              Dr. Vivek personally, ensuring consistent quality and care.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.06}>
                <Link to={`/services/${service.slug}`}>
                  <Card className="group h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mb-5">
                        {iconMap[service.slug] || <Stethoscope size={28} />}
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

      {/* Treatment Highlights — Featured Treatments with Details */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Featured Treatments
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground">
                Treatments We're Known For
              </h2>
            </div>
          </AnimatedSection>

          {/* Root Canal Feature */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Root Canal Treatment</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="text-3xl mb-4 text-foreground">Root Canal Treatment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a tooth gets grossly decayed, the pulp of the tooth gets infected,
                either damaging it or exposing it, which triggers intense pain. Pain and
                sensitivity are two different terms — accurate diagnosis is key.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With his MDS specialization in Endodontics, Dr. Vivek is among the most
                experienced root canal specialists in Hyderabad. Using rotary instruments
                and digital apex locators, he performs painless, single-sitting root canals
                that save your natural teeth and relieve pain immediately.
              </p>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/services/root-canal">Learn More <ArrowRight size={14} /></Link>
              </Button>
            </AnimatedSection>
          </div>

          {/* Smile Design Feature */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection delay={0.1} className="md:order-2">
              <div className="aspect-[4/3] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Smile Designing</span>
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:order-1">
              <h3 className="text-3xl mb-4 text-foreground">Smile Designing & Cosmetic Dentistry</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A face is said beautiful when it has a beautiful smile. A smile is mostly
                dependent on the teeth — the way they are present or aligned in our mouth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To make your smile beautiful, Dr. Vivek combines artistry with advanced
                dental techniques — using digital smile design, porcelain veneers, composite
                bonding, and whitening to create a natural, radiant smile that complements
                your unique facial features.
              </p>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/services/smile-designing">Learn More <ArrowRight size={14} /></Link>
              </Button>
            </AnimatedSection>
          </div>

          {/* Implants Feature */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Dental Implants</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="text-3xl mb-4 text-foreground">Dental Implants</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Missing teeth affect more than just your smile — they impact your ability
                to eat, speak, and your overall confidence. Dental implants are the gold
                standard solution.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Titanium implants surgically placed in the jawbone serve as permanent
                artificial roots, topped with natural-looking crowns that function and
                feel exactly like real teeth. Dr. Vivek uses premium implant systems for
                predictable, lifetime results.
              </p>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/services/dental-implants">Learn More <ArrowRight size={14} /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "15+", label: "Years of Experience" },
                { number: "10,000+", label: "Treatments Performed" },
                { number: "5,000+", label: "Root Canals Done" },
                { number: "99%", label: "Patient Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-serif text-primary mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Patient Stories
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground mb-4">
                What Our Patients Say
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Don't just take our word for it — hear from the thousands of patients
                who trust Dr. Vivek with their dental care.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name + i} delay={i * 0.06}>
                <Card className="h-full">
                  <CardContent className="p-8">
                    <Quote size={24} className="text-primary/30 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-medium text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                Our Clinic
              </p>
              <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
                Visit Vivek Dental
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Located in the heart of Vengal Rao Nagar, Hyderabad, our clinic is
                designed to provide a calm, comfortable environment where you can receive
                world-class dental care. From the waiting area to the treatment room,
                every detail is designed with your comfort in mind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We're equipped with the latest dental technology including digital X-rays,
                rotary endodontic systems, and premium materials — ensuring accurate
                diagnosis and superior treatment outcomes every time.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-foreground">
                  <Clock size={16} className="text-primary" />
                  <span>Open 7 days: Sunday – Saturday, 10 AM – 8 PM</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Phone: +91 95818 60260 / 040-48574087</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>Vengal Rao Nagar, Hyderabad, Telangana</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="rounded-full px-8">
                  <Link to="/contact">Get Directions & Book <ArrowRight size={14} /></Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="aspect-video rounded-2xl overflow-hidden border border-border">
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
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 md:py-28 bg-card" id="booking">
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
                  Fill in the form and we'll call you back within 30 minutes during
                  clinic hours. Or call us directly at{" "}
                  <a href="tel:+919581860260" className="text-primary font-medium hover:underline">
                    95818 60260
                  </a>.
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