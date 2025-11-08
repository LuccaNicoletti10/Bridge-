export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  onClick: () => void;
};

export const tiers: Tier[] = [
  {
    name: "For You",
    id: "tier-for-you",
    href: "/contact",
    priceMonthly: "",
    priceYearly: "",
    description: "For individuals and small teams who want Bridge as a proactive context layer.",
    features: [
      "Context-aware assistant across your favorite apps",
      "Personal cognitive profile that adapts to how you work",
      "Proactive suggestions, reminders, and workflow shortcuts",
      "Local-first processing for privacy and security",
      "Automation of repetitive tasks based on your habits",
      "Early access to upcoming Bridge features",
    ],
    featured: false,
    cta: "Contact Us",
    onClick: () => {},
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/contact",
    priceMonthly: "",
    priceYearly: "",
    description: "For teams and organizations that need Bridge as a secure, scalable context engine.",
    features: [
      "Everything in \"For You\" across your entire organization",
      "Centralized admin, policy controls, and workspace management",
      "SSO/SAML, audit logs, and advanced security controls",
      "Private, VPC or on-prem deployment options",
      "Custom integrations with internal tools and LLMs",
      "Dedicated support, onboarding, and SLAs",
    ],
    featured: true,
    cta: "Contact Us",
    onClick: () => {},
  },
];
