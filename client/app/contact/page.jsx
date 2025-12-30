import ContactClient from "./ContactClient"
import Script from 'next/script'

export const metadata = {
  title: "Contact - Get In Touch",
  description: "Have a question, inquiry, or partnership opportunity? Reach out to Centonis AI Inc. We'd love to hear from you.",
  keywords: ["Contact Centonis", "Venture Studio Contact", "Partnership Opportunities", "Inquiries", "Vancouver"],
  openGraph: {
    title: "Contact Centonis",
    description: "Have a question, inquiry, or partnership opportunity? Reach out to Centonis AI Inc.",
    images: [
      {
        url: "/Centonis_Logo_v5.webp",
        width: 1200,
        height: 630,
        alt: "Contact Centonis"
      }
    ]
  }
};

const Contact = () => {
  return (
    <>
      <main className="contact-page">
        <Script
          id="contact-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Centonis",
              "description": "Contact page for Centonis AI Inc. - Venture Studio and Holding Company based in Vancouver",
              "url": "https://centonis.com/contact",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "centonisai@gmail.com",
                "contactType": "general inquiries",
                "areaServed": "Worldwide",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vancouver",
                "addressLocality": "Vancouver",
                "addressCountry": "Canada"
              }
            })
          }}
        />
        <ContactClient />
      </main>
    </>
  )
}

export default Contact
