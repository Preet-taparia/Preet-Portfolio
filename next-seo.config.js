const canonicalUrl = 'https://preet-portfolio.vercel.app';
const metaImage = 'https://cloud.Taparianza.com/public/images/Taparianza-id.png';
const metaDescription =
  'Seasoned Software Engineer especially in Frontend side, with a passion for creating pixel-perfect web experiences';

const defaultSEOConfig = {
  defaultTitle: 'Preet Taparia - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Preet Taparia - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'preet-portfolio.vercel.app og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'preet-portfolio.vercel.app og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'preet-portfolio.vercel.app og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'preet-portfolio.vercel.app',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
