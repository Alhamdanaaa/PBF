import Layout from './components/Layout';
import "./globals.css";
import {Inter} from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
  title: 'Website Pribadi',
  description: 'Website pribadi untuk menampilkan proyek dan esai.'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
