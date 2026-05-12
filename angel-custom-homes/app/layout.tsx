import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['300','400','500','600'] });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Angel Custom Homes | Luxury Custom Home Builder in DFW',
  description: 'Angel Custom Homes builds luxury custom new construction residences across the Dallas-Fort Worth metro, with select high-end remodels.',
  metadataBase: new URL('https://angelcustomhomes.com'),
  openGraph: {
    title: 'Angel Custom Homes',
    description: 'Luxury custom homes across the DFW metro.',
    url: 'https://angelcustomhomes.com',
    siteName: 'Angel Custom Homes',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
