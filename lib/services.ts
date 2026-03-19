export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  procedures: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "bariatric-surgery",
    title: "Advanced Bariatric Surgery",
    shortDescription: "Specialized weight loss procedures designed for long-term health and metabolic improvement.",
    fullDescription: "Bariatric surgery is more than just weight loss; it's a transformative journey toward metabolic health. Dr. Sonam Tyagi specializes in advanced laparoscopic techniques that reduce recovery time and enhance surgical precision. Our comprehensive program includes pre-operative counseling and long-term post-operative support to ensure sustainable results.",
    image: "/images/bariatric.jpg",
    benefits: [
      "Significant and sustained weight loss",
      "Resolution of Type 2 Diabetes",
      "Improved cardiovascular health",
      "Enhanced quality of life and mobility",
    ],
    procedures: [
      "Laparoscopic Sleeve Gastrectomy",
      "Roux-en-Y Gastric Bypass (RYGB)",
      "Mini Gastric Bypass",
      "Revisional Bariatric Surgery",
    ],
  },
  {
    id: "2",
    slug: "general-surgery",
    title: "Expert General Surgery",
    shortDescription: "Precision-led surgical solutions for a wide range of abdominal and soft tissue conditions.",
    fullDescription: "Our general surgery department provides comprehensive care for common and complex conditions of the abdomen, digestive tract, and endocrine system. We prioritize minimally invasive approaches (Laparoscopy) whenever possible to minimize discomfort and expedite your return to daily activities.",
    image: "/images/general.jpg",
    benefits: [
      "Minimally invasive options for most procedures",
      "Fast recovery and minimal scarring",
      "Patient-centric pain management protocols",
      "High success rates for complex revisions",
    ],
    procedures: [
      "Laparoscopic Hernia Repair (Inguinal, Incisional, Umbilical)",
      "Laparoscopic Cholecystectomy (Gallbladder Removal)",
      "Appendectomy",
      "Thyroid and Parathyroid Surgery",
    ],
  },
  {
    id: "3",
    slug: "gi-surgery",
    title: "Gastrointestinal Surgery",
    shortDescription: "Comprehensive surgical treatment for disorders of the esophagus, stomach, and intestines.",
    fullDescription: "Specialized surgical care for the entire gastrointestinal tract. From benign conditions like GERD (Reflux) to complex GI disorders, Dr. Sonam Tyagi utilizes the latest surgical innovations to provide definitive treatment while preserving organ function.",
    image: "/images/gi.jpg",
    benefits: [
      "Effective treatment for chronic acid reflux (GERD)",
      "Management of complex intestinal disorders",
      "Preservation of digestive health and function",
      "Personalized surgical planning",
    ],
    procedures: [
      "Laparoscopic Fundoplication (for Reflux)",
      "Small and Large Bowel Resections",
      "Splenectomy",
      "Diagnostic and Therapeutic Laparoscopy",
    ],
  },
  {
    id: "4",
    slug: "metabolic-surgery",
    title: "Metabolic Surgery & Diabetes Control",
    shortDescription: "Innovative surgical approaches to treat Type 2 Diabetes and metabolic syndrome.",
    fullDescription: "Metabolic surgery is specifically designed to treat Type 2 Diabetes and other metabolic conditions. By modifying the digestive tract, we can trigger hormonal changes that significantly improve blood sugar control, often leading to full remission of diabetes.",
    image: "/images/metabolic.jpg",
    benefits: [
      "Remission of Type 2 Diabetes in many cases",
      "Reduction or elimination of insulin/medications",
      "Improvement in cholesterol and blood pressure",
      "Prevention of long-term diabetes complications",
    ],
    procedures: [
      "Gastric Bypass for Diabetes Control",
      "Sleeve Gastrectomy with Metabolic Focus",
      "Ileal Interposition (Complex Cases)",
      "Biliopancreatic Diversion"
    ],
  }
];
