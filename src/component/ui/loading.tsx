'use client';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Loading() {
  return (
    <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center  '>
      <span className='relative flex h-14 w-14  opacity-75'>
        <span className='animate-bounce absolute inline-flex h-full w-full rounded-full  opacity-75'>
          <div className='flex flex-shrink-0 items-center'>
          </div>
        </span>
      </span>
    </div>
  );
}
