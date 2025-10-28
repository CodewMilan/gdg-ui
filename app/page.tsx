'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page
    router.push('/home');
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex space-x-2">
        <span className="google-loader"></span>
        <span className="google-loader"></span>
        <span className="google-loader"></span>
        <span className="google-loader"></span>
      </div>
    </div>
  );
}
