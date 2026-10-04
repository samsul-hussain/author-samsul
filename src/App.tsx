import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BooksCatalog } from './components/BooksCatalog';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceInquiryModal } from './components/ServiceInquiryModal';
import { heroPortraitCircle } from './data/portfolioData';

export default function App() {
  const [globalConsultationOpen, setGlobalConsultationOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>(heroPortraitCircle);

  // Preserve the applied photo if one was saved
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('samsul_profile_photo');
      if (savedPhoto) {
        setCurrentPhoto(savedPhoto);
      }
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => setGlobalConsultationOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onExploreBooks={() => scrollToSection('books')}
          onOpenConsultation={() => setGlobalConsultationOpen(true)}
          photoUrl={currentPhoto}
        />
        <About />
        <BooksCatalog />
        <Services />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer photoUrl={currentPhoto} />

      {/* Global Consultation Modal */}
      <ServiceInquiryModal
        isOpen={globalConsultationOpen}
        onClose={() => setGlobalConsultationOpen(false)}
      />
    </div>
  );
}
