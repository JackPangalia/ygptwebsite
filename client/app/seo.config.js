export const defaultMetadata = {
  metadataBase: new URL('https://www.centonis.com'),
  title: {
    default: 'Centonis - Venture Studio | Vancouver',
    template: '%s | Centonis'
  },
  description: 'Centonis AI Inc. is a venture studio and holding company based in Vancouver. We build high-performance software, scaling human potential through intelligent software.',
  keywords: ['Venture Studio', 'Holding Company', 'Software Development', 'Software Solutions', 'Vancouver', 'Realtysnap', 'AI Solutions'],
  authors: [{ name: 'Centonis AI Inc.' }],
  creator: 'Centonis AI Inc.',
  publisher: 'Centonis AI Inc.',
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
    title: 'Centonis - Venture Studio | Vancouver',
    description: 'Centonis AI Inc. is a venture studio and holding company based in Vancouver. We build high-performance software, scaling human potential through intelligent software.',
    images: [
      {
        url: '/Centonis_Logo_v5.webp',
        width: 1200,
        height: 630,
        alt: 'Centonis - Venture Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centonis - Venture Studio',
    description: 'A venture studio and holding company building high-performance software to scale human potential through intelligent software.',
    images: ['/Centonis_Logo_v5.webp'],
    creator: '@centonis',
  },
  verification: {
    google: 'YCaSyT7OuzrtAQJR48b9K9fw4LbgwpKAsGIckwE_qVU',
  },
  alternates: {
    canonical: 'https://www.centonis.com',
  },
} 
