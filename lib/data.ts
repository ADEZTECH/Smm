export type Plan = {
  id: string;
  name: string;
  price: number;
  desc: string;
  features: string[];
  popular?: boolean;
};

export type DomainTld = { ext: string; price: number };

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 1490,
    desc: "Best for personal projects and small sites.",
    features: ["1 website", "10 GB SSD", "Free SSL", "Email included"],
  },
  {
    id: "growth",
    name: "Growth",
    price: 2990,
    desc: "For growing businesses and marketing sites.",
    features: ["Unlimited websites", "50 GB SSD", "Daily backups", "Priority support"],
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: 6990,
    desc: "Built for busy ecommerce and apps.",
    features: ["VPS-ready resources", "Dedicated support", "Advanced monitoring", "Custom deployments"],
  },
];

export const tlds: DomainTld[] = [
  { ext: ".com", price: 3200 },
  { ext: ".co.ke", price: 2500 },
  { ext: ".org", price: 2900 },
  { ext: ".net", price: 2800 },
  { ext: ".shop", price: 4200 },
];

export const features: [string, string, string][] = [
  ["Zap", "Lightning speed", "Optimized infrastructure and CDN edge delivery."],
  ["ShieldCheck", "Secure by design", "Monitoring, updates, and hardened hosting defaults."],
  ["Server", "Scalable hosting", "From static sites to managed VPS and cloud workloads."],
  ["Headset", "Always here", "Kenyan support and migration assistance for businesses."],
];

export const testimonials = [
  { name: "Amina K.", role: "Founder, Studio K", text: "Our site loads faster and the team feels more prepared than ever." },
  { name: "Daniel O.", role: "Director, Eastline", text: "The migration was smooth and their support team actually answered in time." },
  { name: "Njeri M.", role: "Brand Lead, Nuru Labs", text: "The dashboard and account handling feel polished and easy to trust." },
];

export const faqs: [string, string][] = [
  ["Do you provide email hosting?", "Yes. We can bundle custom email, domain forwarding, and managed hosting in one package."],
  ["Can I migrate my current site?", "Absolutely. We offer migration guidance for WordPress, static sites, and custom apps."],
  ["Do you support domains outside Kenya?", "Yes. We support popular global TLDs and local Kenyan extensions."],
];

export const admin = {
  customers: [
    ["Abdi Noor", "abdi@demo.io", "Starter, Growth"],
    ["Miriam Wachira", "miriam@demo.io", "Scale"],
    ["Nimesh Patel", "nimesh@demo.io", "Starter"],
  ],
  orders: [
    ["ORD-1001", "Abdi Noor", "Starter", "Paid"],
    ["ORD-1002", "Miriam Wachira", "Scale", "Pending"],
  ],
  tickets: [
    ["TCK-201", "Abdi Noor", "Open"],
    ["TCK-202", "Miriam Wachira", "Resolved"],
  ],
  payments: [
    ["REF-101", "INV-930", "Paid"],
    ["REF-102", "INV-931", "Pending"],
  ],
};

export const customer = {
  services: [
    ["SRV-1", "Growth", "example.co.ke", "Running"],
    ["SRV-2", "Starter", "portfolio.app", "Upgrading"],
  ],
  domains: [
    ["example.co.ke", "2027-01-06", "Auto-renew"],
    ["portfolio.app", "2027-08-12", "Manual review"],
  ],
  invoices: [
    ["INV-930", "Growth hosting", 2990, "Paid"],
    ["INV-931", "SSL renewal", 1500, "Pending"],
  ],
  transactions: [
    ["TXN-901", "INV-930", 2990, "Paid"],
    ["TXN-902", "INV-931", 1500, "Pending"],
  ],
  tickets: [
    ["TCK-401", "Migration support", "Open"],
    ["TCK-402", "Billing question", "Resolved"],
  ],
};
