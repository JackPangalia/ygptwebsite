export const defaultMetadata = {
  metadataBase: new URL('https://www.centonis.com'),
  title: {
    default: 'Centonis - Digital Work | Vancouver',
    template: '%s | Centonis'
  },
  description: 'Centonis AI Inc. is a Vancouver software studio building clean digital work, useful tools, and practical software for businesses.',
  keywords: ['Digital Studio Vancouver', 'Software Development', 'Digital Work', 'Vancouver', 'Business Websites', 'AI Tools'],
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
    title: 'Centonis - Digital Work | Vancouver',
    description: 'Centonis AI Inc. is a Vancouver software studio building clean digital work, useful tools, and practical software for businesses.',
    images: [
      {
        url: '/Centonis_Logo_v5.webp',
        width: 1200,
        height: 630,
        alt: 'Centonis - Digital Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centonis - Digital Work',
    description: 'A Vancouver software studio building clean digital work, useful tools, and practical software for businesses.',
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
