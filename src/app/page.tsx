import HomeNavBar from '@/component/home-navbar';
import Loading from '@/component/ui/loading';
import Image from 'next/image';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <>
      <HomeNavBar />

      <section className='container m-auto mt-9'>
        <Suspense fallback={<Loading />}></Suspense>
      </section>
    </>
  );
}
