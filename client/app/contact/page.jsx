import ContactForm from "../components/Contactform"
import Script from 'next/script'

export const metadata = {
  title: "Contact - Centonis: Get In Touch for Custom AI Solutions",
  description: "Reach out to Centonis for custom AI software solutions designed to elevate your business. Contact us today to discuss your project needs and discover how our proprietary technology can drive your success. Let's innovate together.",
  keywords: ["Contact Centonis", "AI Solutions Contact", "Custom Software Inquiry", "Business AI Consultation", "Technology Partnership", "AI Development Contact"],
  openGraph: {
    title: "Contact Centonis - Let's Transform Your Business with AI",
    description: "Ready to elevate your business with custom AI solutions? Contact Centonis today for a consultation and discover how we can help you achieve your goals.",
    images: [
      {
        url: "/Centonis_Logo_v5.webp",
        width: 1200,
        height: 630,
        alt: "Contact Centonis - AI Solutions Consultation"
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
              "description": "Contact page for Centonis AI solutions and consulting services",
              "url": "https://centonis.com/contact",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Canada"
              }
            })
          }}
        />
        <ContactForm />
      </main>
    </>
  )
}

export default Contact