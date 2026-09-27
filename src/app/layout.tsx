import type { Metadata } from "next";
import { Big_Shoulders, Manrope } from "next/font/google";
import { gym } from "@/lib/data";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://musclelogy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Musclelogy Gym – Best Gym in Badowala, Dehradun | Personal Training",
    template: "%s | Musclelogy Gym",
  },
  description:
    "Musclelogy Gym in Badowala, Dehradun — genuine pricing, new equipment, hands-on personal training and a safe space for everyone. Open 5 AM–9:30 PM, Mon–Sat.",
  keywords: [
    "gym in Dehradun",
    "gym in Badowala",
    "gym near Premnagar Road Dehradun",
    "personal training Dehradun",
    "Musclelogy gym",
    "best gym in Badowala",
  ],
  openGraph: {
    title: "Musclelogy Gym – Badowala, Dehradun",
    description:
      "Genuine pricing, new equipment and real personal training in Badowala, Dehradun. Open 5 AM–9:30 PM, Mon–Sat.",
    url: siteUrl,
    siteName: "Musclelogy Gym",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: gym.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Premnagar Rd, near Blinkit store, Baronwala, Badowala",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: gym.lat,
      longitude: gym.lng,
    },
    telephone: gym.phoneTel,
    url: siteUrl,
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: gym.rating,
      reviewCount: gym.ratingCount,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "05:00",
        closes: "21:30",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${manrope.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-ink text-chalk">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
