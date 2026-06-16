// =============================================================
//  DPS — Business details. EDIT THIS FILE to update the site.
//  Everything here flows into the website automatically.
// =============================================================

export const site = {
  // --- Brand ---
  name: "DPS",
  tagline: "Property Dealing & Construction",
  // One or two lines shown under the big headline on the home page.
  heroSubtitle:
    "Buying, selling and renting property — and building it from the ground up. Trusted, transparent deals and quality construction, all under one roof.",

  // --- Contact (REPLACE the placeholders below) ---
  phone: "+91 00000 00000", // primary phone
  whatsapp: "910000000000", // digits only, with country code, no + or spaces
  email: "info@example.com",

  // --- Address ---
  address: {
    line1: "DPS Office", // building / shop name
    line2: "Street / Area", // street and area
    city: "City",
    state: "State",
    pincode: "000000",
  },
  // Paste the Google Maps share link here so the "Get Directions"
  // button and embedded map point to the real office.
  mapsLink: "https://maps.app.goo.gl/sVu8R3PcX8btQqM28?g_st=ic",

  // --- Hours ---
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",

  // --- Social (leave "" to hide) ---
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },

  // Stats shown as the trust strip. Tweak numbers/labels freely.
  stats: [
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "200+", label: "Properties Dealt" },
    { value: "50+", label: "Projects Built" },
  ],
};

export const propertyServices = [
  {
    title: "Residential Plots",
    desc: "Verified, clear-title residential plots in prime and developing locations.",
    icon: "plot",
  },
  {
    title: "Buy & Sell Homes",
    desc: "Houses, flats and villas — we match the right property to the right buyer.",
    icon: "home",
  },
  {
    title: "Commercial Property",
    desc: "Shops, offices and commercial land for businesses and investors.",
    icon: "shop",
  },
  {
    title: "Rentals & Leasing",
    desc: "Residential and commercial rentals with hassle-free paperwork.",
    icon: "key",
  },
];

export const constructionServices = [
  {
    title: "Home Construction",
    desc: "End-to-end construction of homes — design, structure, finishing.",
    icon: "build",
  },
  {
    title: "Commercial Builds",
    desc: "Shops, showrooms and commercial complexes built to spec.",
    icon: "tower",
  },
  {
    title: "Renovation & Repair",
    desc: "Remodelling, extensions and restoration of existing structures.",
    icon: "renovate",
  },
  {
    title: "Turnkey Projects",
    desc: "We handle everything from foundation to handover — you get the keys.",
    icon: "keys",
  },
];

// Showcase items. Swap titles/locations and (optional) image URLs.
export const projects = [
  { title: "Modern Family Villa", location: "Sector 5", tag: "Construction" },
  { title: "Premium Residential Plot", location: "Green Valley", tag: "Property" },
  { title: "Commercial Showroom", location: "Main Road", tag: "Construction" },
  { title: "2 & 3 BHK Apartments", location: "City Centre", tag: "Property" },
  { title: "Independent Bungalow", location: "Lake View", tag: "Construction" },
  { title: "Corner Shop Spaces", location: "Market Area", tag: "Property" },
];
