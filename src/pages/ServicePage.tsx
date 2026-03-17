import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  // Other services for cross-linking
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Specialist Treatment
              </p>
              <h1 className="text-4xl md:text-6xl mb-6 text-foreground">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.overview}
              </p>
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#book">Book This Treatment <ArrowRight size={16} /></a>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl mb-8 text-foreground">What to Expect</h2>
              <ul className="space-y-4">
                {service.whatToExpect.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl mb-8 text-foreground">Recovery</h2>
              <p className="text-muted-foreground leading-relaxed">{service.recovery}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl mb-10 text-center text-foreground">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking */}
      <section className="py-20 md:py-28 bg-card" id="book">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl text-foreground mb-4">
                  Book {service.shortTitle} Treatment
                </h2>
                <p className="text-muted-foreground">
                  Schedule your consultation with Dr. Vivek today.
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

      {/* Other Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl mb-10 text-center text-foreground">
              Other Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {otherServices.map((s) => (
              <AnimatedSection key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="block p-4 rounded-lg border border-border text-center hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-sm font-medium text-foreground">{s.shortTitle}</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </main>
  );
}
