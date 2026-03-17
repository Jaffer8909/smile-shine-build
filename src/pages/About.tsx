import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, BookOpen, Heart, ArrowRight, GraduationCap, Stethoscope, Users } from "lucide-react";

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[4/5] rounded-2xl bg-accent flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Dr. Vivek's Photo</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
                About Your Doctor
              </p>
              <h1 className="text-4xl md:text-5xl mb-6 text-foreground">
                Dr. Vivek Kandanuru
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                BDS, MDS (Conservative Dentistry & Endodontics)
              </p>
              <p className="text-sm text-primary font-medium mb-6">
                Endodontist · Cosmetic/Aesthetic Dentist · Member, Indian Dental Association
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Vivek Kandanuru is an Endodontist, Dentist and Cosmetic/Aesthetic
                  Dentist in Vengal Rao Nagar, Hyderabad and has an experience of over
                  15 years in these fields.
                </p>
                <p>
                  He completed his <strong className="text-foreground">BDS from Narayana Dental College
                  & Hospital in 2005</strong> and went on to earn his <strong className="text-foreground">MDS
                  in Conservative Dentistry & Endodontics from Narayana Dental College &
                  Hospital in 2010</strong> — a specialist postgraduate degree that equips him
                  with deep expertise in saving natural teeth and performing complex
                  endodontic procedures.
                </p>
                <p>
                  He is a proud member of the <strong className="text-foreground">Indian Dental
                  Association (IDA)</strong>, staying connected to the latest developments
                  in dental science and maintaining the highest standards of professional
                  practice.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Qualifications & Credentials */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-foreground mb-4">Qualifications & Credentials</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <GraduationCap size={28} />,
                title: "BDS (2005)",
                desc: "Bachelor of Dental Surgery from Narayana Dental College & Hospital — the foundation of comprehensive dental training.",
              },
              {
                icon: <Award size={28} />,
                title: "MDS Endodontics (2010)",
                desc: "Master of Dental Surgery in Conservative Dentistry & Endodontics from Narayana Dental College & Hospital — specialist expertise in saving teeth.",
              },
              {
                icon: <Users size={28} />,
                title: "Indian Dental Association",
                desc: "Active member of the IDA, committed to continuing education and the highest standards of dental practice in India.",
              },
              {
                icon: <Stethoscope size={28} />,
                title: "15+ Years Experience",
                desc: "Over a decade and a half of hands-on clinical experience treating thousands of patients across the full spectrum of dentistry.",
              },
              {
                icon: <Heart size={28} />,
                title: "10,000+ Treatments",
                desc: "Successfully performed over ten thousand dental procedures, from routine check-ups to complex surgical interventions.",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Continuing Education",
                desc: "Regularly attends workshops, seminars, and conferences to stay at the forefront of dental innovation and techniques.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-background">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl text-foreground mb-4">Services by Dr. Vivek</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dr. Vivek personally performs every treatment — ensuring consistent quality
                and a specialist's attention to detail across all procedures.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Root Canal Treatment", href: "/services/root-canal" },
                { label: "Smile Designing", href: "/services/smile-designing" },
                { label: "Tooth Whitening", href: "/services/tooth-whitening" },
                { label: "Dental Implants", href: "/services/dental-implants" },
                { label: "Braces & Aligners", href: "/services/orthodontics" },
                { label: "Oral Surgery", href: "/services/oral-surgery" },
                { label: "Veneers & Laminates", href: "/services/veneers-laminates" },
                { label: "Dental Fillings", href: "/services/dental-fillings" },
                { label: "Dentures", href: "/services/dentures" },
                { label: "Gum Treatment", href: "/services/periodontal-treatment" },
              ].map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="block p-4 rounded-lg border border-border text-center hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-foreground mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every treatment decision is guided by three core principles.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Heart size={28} />,
                title: "Patient First",
                desc: "Your comfort and well-being drive every decision. We listen carefully, explain thoroughly, and never rush. Very few doctors have the patient ear to truly listen — Dr. Vivek does.",
              },
              {
                icon: <Award size={28} />,
                title: "Clinical Excellence",
                desc: "Specialist training, premium materials, and evidence-based protocols for predictable, superior results. State-of-the-art technology meets time-tested expertise.",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Transparency",
                desc: "Honest diagnosis, clear treatment plans, and upfront pricing — no surprises, no unnecessary procedures. You'll always know exactly what to expect.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-primary mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Ready to Visit?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Experience specialist dental care with a personal touch. Book your
              consultation with Dr. Vivek today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Request a Visit <ArrowRight size={16} /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="tel:+919581860260">Call: 95818 60260</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}