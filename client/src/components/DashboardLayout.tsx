import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({ 
  children, 
  className 
}: DashboardLayoutProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lockBodyScroll = useCallback(() => {
    const y = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${y}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }, []);

  const unlockBodyScroll = useCallback(() => {
    const top = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    if (top) window.scrollTo(0, -parseInt(top, 10) || 0);
  }, []);

  useEffect(() => {
    if (isMobile && isOpen) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }

    return () => unlockBodyScroll();
  }, [isMobile, isOpen, lockBodyScroll, unlockBodyScroll]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <div className={cn("min-h-screen bg-gray-50", className)}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
      
      <div 
        className={cn(
          "transition-all duration-300 ease-in-out",
          "flex flex-col min-h-screen",
          isOpen && !isMobile ? "md:ml-80" : "md:ml-0"
        )}
      >
        {children}
      </div>

      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
