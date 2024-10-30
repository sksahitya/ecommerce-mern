import { Outlet } from 'react-router-dom';
import ShoppingHeader from './header';
import ShoppingFooter from './footer';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';

export default function ShoppingLayout() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="flex flex-col bg-white overflow-hidden">
        <ShoppingHeader />
        <main className="flex mt-14 flex-col w-full">
          <Outlet />
        </main>
        <ShoppingFooter />

        {showScrollButton && (
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="fixed bottom-20 right-4 p-1 rounded-full shadow-lg transition"
            aria-label="Back to top"
          >
            <ArrowUp className='w-6 h-6' />
          </Button>
        )}
      </div>
    </div>
  );
}
