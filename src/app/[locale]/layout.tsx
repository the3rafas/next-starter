import type { Metadata } from 'next';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import Loading from '@/component/ui/loading';
import { LanguageCode } from '@/types/i18n.type';
import LocaleSwitcher from '@/component/i18n/switch';
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Catcher',
  description: 'Generated by create next app',
};

export default function RootLayout({ children, params: {locale}}: { children: React.ReactNode,params:{locale:LanguageCode}} ) {
  return (
    <html lang={locale}>
      <body>
        <ToastContainer />
        <LocaleSwitcher/>

        <Suspense fallback={<Loading />}>
          <section className='w-full h-full '>{children}</section>
        </Suspense>
      </body>
    </html>
  );
}
