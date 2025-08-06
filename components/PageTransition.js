import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/PageTransition.module.css';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {isLoading && (
        <div className={styles.loadingBar}>
          <div className={styles.progress}></div>
        </div>
      )}
      <div className={`${styles.pageContainer} ${isLoading ? styles.loading : ''}`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;