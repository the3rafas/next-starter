import HomeNavBar from '@/component/home-navbar';
import LocaleSwitcher from '@/component/i18n/switch';
import Loading from '@/component/ui/loading';
import {useTranslations} from 'next-intl';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const t = useTranslations();
  return (
    <>
      <HomeNavBar />

      <section className='container m-auto mt-9'>
        <Suspense fallback={<Loading />}></Suspense>
        <h1>{t('Index.title')}</h1>
      </section>
    </>
  );
}
