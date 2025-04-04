export const defaultMetadata = {
  metadataBase: new URL('https://www.centonis.com'),
  title: {
    default: 'Centonis - Custom AI Software Solutions for Business Enhancement',
    template: '%s | Centonis'
  },
  description: 'Discover Centonis, your partner in AI innovation. We specialize in developing custom proprietary software solutions tailored to enhance your business efficiency and growth.',
  keywords: ['AI Solutions', 'Enterprise Consulting', 'Chatbot Development', 'Business Automation', 'Custom AI Software', 'AI Integration', 'Digital Transformation'],
  authors: [{ name: 'Centonis' }],
  creator: 'Centonis',
  publisher: 'Centonis',
  robots: {
    index: true,
    follow: true, 
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.centonis.com',
    siteName: 'Centonis',
    title: 'Centonis - Custom AI Software Solutions for Business Enhancement',
    description: 'Discover Centonis, your partner in AI innovation. We specialize in developing custom proprietary software solutions tailored to enhance your business efficiency and growth.',
    images: [
      {
        url: '/centonislogov2.png',
        width: 1200,
        height: 630,
        alt: 'Centonis Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centonis - Custom AI Software Solutions',
    description: 'Custom AI software solutions tailored to enhance your business efficiency and growth.',
    images: ['/centonislogov2.png'],
    creator: '@centonis',
  },
  verification: {
    google: 'YCaSyT7OuzrtAQJR48b9K9fw4LbgwpKAsGIckwE_qVU',
  },
  alternates: {
    canonical: 'https://www.centonis.com',
  },
} 