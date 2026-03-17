import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const treatments = [
  "Root Canal Treatment",
  "Smile Designing",
  "Tooth Whitening",
  "Dental Implants",
  "Orthodontics / Braces",
  "Oral Surgery",
  "Veneers / Laminates",
  "Dental Fillings",
  "Dentures (Complete / Partial)",
  "Gum / Periodontal Treatment",
  "General Checkup",
  "Other",
];

export default function BookingForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Request received!",
      description: "We'll call you back within 30 minutes during clinic hours.",
    });
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="mx-auto mb-4 text-primary" size={48} />
        <h3 className="text-2xl mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Your name" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="treatment">Treatment</Label>
          <Select required>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select a treatment" />
            </SelectTrigger>
            <SelectContent>
              {treatments.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input id="date" type="date" className="mt-1.5" />
        </div>
        <Button type="submit" className="w-full rounded-full" size="lg">
          Request a Visit
        </Button>
      </form>

      <div className="flex gap-3 mt-6">
        <Button variant="outline" asChild className="flex-1 rounded-full">
          <a href="tel:+919581860260">
            <Phone size={16} /> Call
          </a>
        </Button>
        <Button variant="outline" asChild className="flex-1 rounded-full">
          <a
            href="https://wa.me/919581860260?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}