import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angel Custom Homes | Luxury Custom Home Builder DFW',
  description: 'Angel Custom Homes builds luxury custom residences across the Dallas-Fort Worth metro, with a focus on new construction and select remodels.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
