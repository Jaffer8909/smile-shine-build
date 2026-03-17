import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, BookOpen, Heart, ArrowRight } from "lucide-react";

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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BDS, MDS (Conservative Dentistry & Endodontics)
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Vivek graduated from Narayana Dental College with his MDS
                  specializing in Conservative Dentistry and Endodontics — the branch
                  of dentistry devoted to saving natural teeth.
                </p>
                <p>
                  With over 15 years of hands-on clinical experience and more than
                  10,000 successful treatments, he has established Vivek Dental as a
                  trusted specialist center in Vengal Rao Nagar, Hyderabad.
                </p>
                <p>
                  As a proud member of the Indian Dental Association, Dr. Vivek stays
                  at the forefront of dental innovation — incorporating the latest
                  technologies and techniques into his practice for consistently
                  superior outcomes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-foreground mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every treatment decision is guided by three principles.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Heart size={28} />,
                title: "Patient First",
                desc: "Your comfort and well-being drive every decision. We listen, explain, and never rush.",
              },
              {
                icon: <Award size={28} />,
                title: "Clinical Excellence",
                desc: "Specialist training, premium materials, and evidence-based protocols for predictable results.",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Transparency",
                desc: "Honest diagnosis, clear treatment plans, and upfront pricing — no surprises, no unnecessary procedures.",
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
              Experience specialist dental care with a personal touch. Book your consultation today.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">Request a Visit <ArrowRight size={16} /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}