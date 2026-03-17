export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview: string;
  whatToExpect: string[];
  recovery: string;
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "root-canal",
    shortTitle: "Root Canal",
    title: "Root Canal Treatment",
    description: "Painless, precision root canal therapy by an MDS Endodontics specialist — saving your natural teeth with advanced techniques.",
    overview: "Root canal treatment removes infected pulp from inside your tooth, relieving pain and preserving the natural structure. Dr. Vivek, with his MDS in Conservative Dentistry & Endodontics, brings specialist-level expertise to every procedure — using rotary instruments and apex locators for predictable, comfortable outcomes.",
    whatToExpect: [
      "Thorough diagnosis with digital X-rays",
      "Local anesthesia for a completely painless experience",
      "Precise cleaning and shaping of root canals",
      "Biocompatible filling and sealing",
      "Crown placement for long-term protection",
    ],
    recovery: "Most patients return to normal activities the same day. Mild sensitivity for 2-3 days is normal and managed with over-the-counter medication.",
    faqs: [
      { question: "Is root canal treatment painful?", answer: "With modern anesthesia and Dr. Vivek's gentle technique, the procedure is virtually painless. Most patients compare it to getting a routine filling." },
      { question: "How many visits does it take?", answer: "Most root canals are completed in 1-2 visits, each lasting 45-60 minutes." },
      { question: "How long does a root canal last?", answer: "With proper crown placement and oral hygiene, a root canal treated tooth can last a lifetime." },
      { question: "What is the cost of root canal in Hyderabad?", answer: "Costs vary based on the tooth and complexity. We provide transparent pricing during your consultation — no hidden fees." },
    ],
    metaTitle: "Root Canal Treatment in Hyderabad — Vivek Dental",
    metaDescription: "Painless root canal by MDS Endodontics specialist Dr. Vivek in Vengal Rao Nagar, Hyderabad. Advanced techniques, same-day relief. Book now.",
  },
  {
    slug: "smile-designing",
    shortTitle: "Smile Design",
    title: "Smile Designing & Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and digital smile design — crafted to complement your facial features.",
    overview: "Smile designing combines art and dental science to create your ideal smile. Using digital planning and high-quality materials like porcelain veneers and composite bonding, Dr. Vivek designs smiles that look natural and enhance your confidence.",
    whatToExpect: [
      "Digital smile analysis and mockup",
      "Discussion of goals and treatment options",
      "Minimally invasive preparation",
      "Custom-fabricated veneers or bonding",
      "Final placement and adjustments",
    ],
    recovery: "Veneers require no downtime. Composite bonding is completed in a single visit. You'll leave with your new smile the same day in many cases.",
    faqs: [
      { question: "What is smile designing?", answer: "It's a customized treatment plan combining cosmetic procedures — veneers, bonding, whitening, and alignment — to create your ideal smile." },
      { question: "How long do veneers last?", answer: "Porcelain veneers typically last 10-15 years with proper care." },
      { question: "Is it painful?", answer: "Most smile design procedures involve minimal to no discomfort. Local anesthesia is used when needed." },
    ],
    metaTitle: "Smile Designing in Hyderabad — Vivek Dental",
    metaDescription: "Expert cosmetic dentistry and smile makeover in Hyderabad by Dr. Vivek. Veneers, bonding & digital smile design. Natural-looking results.",
  },
  {
    slug: "tooth-whitening",
    shortTitle: "Whitening",
    title: "Professional Tooth Whitening",
    description: "Clinically safe, dramatically effective teeth whitening — up to 8 shades brighter in a single session.",
    overview: "Professional whitening at Vivek Dental uses clinically proven bleaching agents that are far more effective and safer than over-the-counter products. The treatment is supervised by Dr. Vivek to ensure even results without sensitivity.",
    whatToExpect: [
      "Dental examination and shade assessment",
      "Gum protection application",
      "Professional-grade whitening gel application",
      "Light activation for enhanced results",
      "Post-treatment care instructions",
    ],
    recovery: "You can eat and drink normally within a few hours. Minor sensitivity may occur for 24-48 hours.",
    faqs: [
      { question: "How white will my teeth get?", answer: "Most patients achieve 4-8 shades of improvement in a single session." },
      { question: "Is professional whitening safe?", answer: "Yes, when performed by a qualified dentist, it's completely safe for your enamel." },
      { question: "How long do results last?", answer: "Results last 6-12 months depending on diet and habits. Touch-up treatments can maintain brightness." },
    ],
    metaTitle: "Teeth Whitening in Hyderabad — Vivek Dental",
    metaDescription: "Professional teeth whitening in Hyderabad. Up to 8 shades brighter in one visit. Safe, effective treatment by Dr. Vivek. Book today.",
  },
  {
    slug: "dental-implants",
    shortTitle: "Implants",
    title: "Dental Implants",
    description: "Permanent tooth replacement with titanium implants — the gold standard for missing teeth restoration.",
    overview: "Dental implants are titanium posts surgically placed in the jawbone that serve as artificial tooth roots. Topped with natural-looking crowns, they function and feel exactly like real teeth. Dr. Vivek works with premium implant systems for predictable, long-lasting results.",
    whatToExpect: [
      "Comprehensive evaluation with 3D imaging",
      "Implant placement under local anesthesia",
      "Healing period of 3-6 months for integration",
      "Abutment and custom crown placement",
      "Follow-up care and maintenance guidance",
    ],
    recovery: "Initial healing takes 1-2 weeks. Full osseointegration (bone fusion) takes 3-6 months, during which you'll have a temporary restoration.",
    faqs: [
      { question: "Am I a candidate for implants?", answer: "Most adults with good general health and adequate jawbone are candidates. A consultation with imaging will confirm." },
      { question: "How long do implants last?", answer: "With proper care, dental implants can last a lifetime. The crown may need replacement every 10-15 years." },
      { question: "Is the procedure painful?", answer: "The procedure is performed under local anesthesia and is well-tolerated. Post-operative discomfort is manageable with medication." },
    ],
    metaTitle: "Dental Implants in Hyderabad — Vivek Dental",
    metaDescription: "Premium dental implants in Hyderabad by Dr. Vivek. Permanent, natural-looking tooth replacement. Expert care in Vengal Rao Nagar.",
  },
  {
    slug: "orthodontics",
    shortTitle: "Orthodontics",
    title: "Orthodontics & Braces",
    description: "Straight teeth and a perfect bite with modern braces and clear aligners — for children and adults.",
    overview: "Orthodontic treatment at Vivek Dental corrects misaligned teeth and jaw issues using traditional braces, ceramic braces, or clear aligners. Dr. Vivek creates personalized treatment plans to achieve optimal alignment and a beautiful smile.",
    whatToExpect: [
      "Detailed orthodontic assessment and records",
      "Custom treatment plan with timeline",
      "Braces or aligner fitting",
      "Regular adjustment appointments",
      "Retainer fitting after treatment completion",
    ],
    recovery: "Mild discomfort for 2-3 days after each adjustment is normal. Treatment typically takes 12-24 months depending on complexity.",
    faqs: [
      { question: "What age is best for braces?", answer: "While ideal for teens, orthodontic treatment is effective at any age. Many of our patients are adults." },
      { question: "Can I get clear/invisible braces?", answer: "Yes, we offer ceramic braces and clear aligner options for a discreet treatment experience." },
      { question: "How long does treatment take?", answer: "Typically 12-24 months, though minor corrections may take as little as 6 months." },
    ],
    metaTitle: "Orthodontics & Braces in Hyderabad — Vivek Dental",
    metaDescription: "Expert orthodontic treatment in Hyderabad. Braces, ceramic braces & clear aligners for all ages. Straight teeth by Dr. Vivek.",
  },
  {
    slug: "oral-surgery",
    shortTitle: "Oral Surgery",
    title: "Oral Surgery",
    description: "Expert surgical procedures including wisdom tooth extraction, cyst removal, and pre-prosthetic surgery.",
    overview: "Oral surgery at Vivek Dental covers a range of surgical procedures performed with precision and care. From complex extractions to cyst removals, Dr. Vivek ensures every procedure is performed safely with minimal discomfort.",
    whatToExpect: [
      "Thorough evaluation and treatment planning",
      "Pre-operative instructions and preparation",
      "Surgery under appropriate anesthesia",
      "Post-operative care and medication",
      "Follow-up visits for healing assessment",
    ],
    recovery: "Recovery varies by procedure — most patients recover within 3-7 days. Detailed post-operative care instructions are provided.",
    faqs: [
      { question: "When is wisdom tooth removal necessary?", answer: "When wisdom teeth are impacted, causing pain, infection, or crowding of other teeth." },
      { question: "Is oral surgery safe?", answer: "Yes, when performed by a qualified specialist with proper planning and modern techniques." },
      { question: "What anesthesia is used?", answer: "Local anesthesia is standard. Sedation options are available for anxious patients." },
    ],
    metaTitle: "Oral Surgery in Hyderabad — Vivek Dental",
    metaDescription: "Expert oral surgery in Hyderabad. Wisdom tooth extraction, cyst removal & more by Dr. Vivek. Safe, precise procedures.",
  },
];