import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Message = dynamic(() => import('@/commons/Toast'));
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const router = useRouter();
  const [backdropLoader, setBackdropLoader] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    open: false,
    variant: '',
    text: '',
  });

  const handleCloseMessage = () => {
    setToastMessage({ ...toastMessage, open: false });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.backdropLoader = setBackdropLoader;
      window.toastMessage = setToastMessage;
    }
  }, []);

  return (
    <>
      <Message open={toastMessage.open} variant={toastMessage.variant} setOpen={handleCloseMessage} message={toastMessage.text} />
      <div className={inter.className}>{children}</div>
    </>
  );
}
