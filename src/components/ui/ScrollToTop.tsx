"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll position to 0
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[60]">
            <button
                type="button"
                onClick={scrollToTop}
                className={`
                    flex items-center justify-center
                    bg-[#1A5261] hover:bg-[#14414d] 
                    text-white p-3 rounded-sm shadow-xl 
                    transition-all duration-300 transform
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}
                    hover:-translate-y-1 active:scale-95
                `}
                aria-label="Scroll to top"
            >
                <ChevronUp size={24} />
            </button>
        </div>
    );
};

export default ScrollToTop;
