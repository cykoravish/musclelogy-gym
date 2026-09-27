export const gym = {
  name: "Musclelogy Gym",
  tagline: "Badowala's own iron yard",
  phoneDisplay: "+91 89792 89862",
  phoneTel: "+918979289862",
  whatsapp: "https://wa.me/918979289862",
  address: "Premnagar Rd, near Blinkit store, Baronwala, Badowala, Dehradun, Uttarakhand 248007",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Musclelogy+gym+Badowala+Dehradun&query_place_id=ChIJ50PXloYrCTkR96Uk1-0BqC4",
  mapsEmbedQuery: "Musclelogy%20gym%2C%20Premnagar%20Rd%2C%20Badowala%2C%20Dehradun",
  lat: 30.299612,
  lng: 77.9468817,
  rating: 5.0,
  ratingCount: 7,
  instagram: [
    { handle: "@musclelogy.09", url: "https://instagram.com/musclelogy.09" },
    { handle: "@muscle_logy", url: "https://instagram.com/muscle_logy" },
  ],
  hours: [
    { day: "Monday", time: "5:00 AM – 9:30 PM" },
    { day: "Tuesday", time: "5:00 AM – 9:30 PM" },
    { day: "Wednesday", time: "5:00 AM – 9:30 PM" },
    { day: "Thursday", time: "5:00 AM – 9:30 PM" },
    { day: "Friday", time: "5:00 AM – 9:30 PM" },
    { day: "Saturday", time: "5:00 AM – 9:30 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const plans = [
  {
    id: "general",
    name: "General Membership",
    price: "₹1,000",
    period: "/ month",
    description: "Full floor access, every machine, every open hour.",
    features: [
      "Access to all equipment",
      "Open 5 AM – 9:30 PM, Mon–Sat",
      "Locker & changing area",
      "No hidden charges — genuine, flat fee",
    ],
    highlight: false,
  },
  {
    id: "pt",
    name: "Personal Training",
    price: "+₹2,500",
    period: "/ month, on top of membership",
    description: "One-on-one coaching for weight loss, strength or muscle gain.",
    features: [
      "Custom program from the trainer",
      "Form correction, every session",
      "Progress tracked week to week",
      "Diet direction included",
    ],
    highlight: true,
  },
];

export const reviews = [
  {
    text: "Fees are genuine with no surprises, and the machines are new and well kept. The trainer actually guides you rather than leaving you to figure it out — one of the better gyms in Badowal.",
    source: "Google review",
  },
  {
    text: "A comfortable, safe space for women to train — there's nothing to feel nervous about here.",
    source: "Google review",
  },
  {
    text: "Good environment, consistently.",
    source: "Google review",
  },
];

export const whyUs = [
  {
    title: "Genuinely priced",
    body: "No surprise add-ons. What you're quoted is what you pay, every month.",
  },
  {
    title: "Real coaching",
    body: "The trainer corrects your form and builds your plan — not just a machine handover.",
  },
  {
    title: "Safe for everyone",
    body: "Members specifically call out how comfortable and welcoming it is for women.",
  },
  {
    title: "New equipment",
    body: "Freshly set up gym floor with modern machines, kept in working order.",
  },
];
