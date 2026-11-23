import { prices } from "../../lib/prices";
import { site } from "../../lib/site";

export type Faq = {
  id: string;
  question: string;
  answer: string[];
  list?: string[];
  contact?: boolean;
};

export const faqs: Faq[] = [
  {
    id: "offer",
    question: "What does Nourish offer?",
    answer: [
      `Nourish offers a ${prices.single.minutes}-minute session of sauna and ice bath.`,
      "We recommend 15 minutes in the sauna, a few minutes to cool down and shower, then 3 minutes in the ice bath. Repeat this three times, and always finish with an ice bath.",
    ],
  },
  {
    id: "bring",
    question: "What should I bring?",
    answer: ["Please bring:"],
    list: ["2 towels", "Slippers", "A water bottle", "Swimwear", "Your best vibes and a smile"],
  },
  {
    id: "first-time",
    question: "This is my first time. What do I do?",
    answer: [
      "Breathe and relax: you've got this.",
      "The heat can feel uncomfortable at first. Relax your mind and your body, and breathe. Sit through the discomfort, but always listen to your body and step out when the heat becomes too much. It is meant to be enjoyable, not a torture.",
      "The ice bath is the same. Breathe through the discomfort: slowly in through the nose and out through the mouth. Relax your mind and keep your focus on your breath. The ice bath is next to the sauna.",
    ],
  },
  {
    id: "stove",
    question: "Is the sauna stove wood or electric?",
    answer: [
      "Nourish has an electric stove. A bucket of water is there to raise the temperature, if the group needs it and agrees.",
    ],
  },
  {
    id: "shower",
    question: "Is there a shower?",
    answer: ["Yes. There are water buckets and a shower."],
  },
  {
    id: "parking",
    question: "Is there free parking close to the sauna?",
    answer: ["Yes. There is a large free parking area, a one-minute walk from the sauna."],
  },
  {
    id: "cancellation",
    question: "What is the cancellation policy?",
    answer: [
      "Please cancel at least 24 hours before your session, so that we can offer the space to someone else.",
    ],
  },
  {
    id: "group-hire",
    question: "Can a group hire Nourish?",
    answer: [
      `Yes. A group of up to ${prices.groupHire.people} people can hire Nourish. Contact us directly by email or on WhatsApp.`,
    ],
    contact: true,
  },
  {
    id: "toilet",
    question: "Is there a toilet on site?",
    answer: ["Yes, there is a toilet on site."],
  },
  {
    id: "talking",
    question: "Can I talk during the sauna session?",
    answer: ["Yes, you can talk. Please respect the other guests and keep the conversation mindful."],
  },
  {
    id: "capacity",
    question: "How many people fit in the sauna?",
    answer: ["The sauna seats 8 people comfortably."],
  },
  {
    id: "hours",
    question: "What are the opening hours?",
    answer: [`Nourish is open every day from ${site.hours}.`],
  },
  {
    id: "entry",
    question: "How do I get in?",
    answer: [
      "You get your entry code when you book. The code lets you enter and leave the premises.",
    ],
  },
];

export const houseRules: string[] = [
  "Be mindful of others during and after your visit. Respect matters.",
  "Swimwear is required. There is a changing area.",
  "There is no host on site, so please take a little extra care.",
  "Stay hydrated and cool off between rounds.",
  "Only water is allowed. Please do not bring other food or drinks.",
  "Keep to your booked time for arrival and departure.",
  "Please leave the sauna clean for the next guests.",
];

export function faqText(faq: Faq): string {
  const parts = [...faq.answer];
  if (faq.list) parts.push(faq.list.join(", ") + ".");
  if (faq.contact) parts.push(`Email: ${site.email}. WhatsApp: ${site.phone}.`);
  return parts.join(" ");
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faqText(faq) },
    })),
  };
}
