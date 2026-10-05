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

  // Preserve the applied photo if a real custom photo was uploaded
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('samsul_profile_photo');
      // If saved photo is an old AI generated portrait reference, purge it
      if (
        savedPhoto &&
        (savedPhoto.includes('samsul_holding_book') ||
          savedPhoto.includes('samsul_circle_portrait') ||
          savedPhoto.includes('hero_author_editorial'))
      ) {
        localStorage.removeItem('samsul_profile_photo');
        setCurrentPhoto(heroPortraitCircle);
      } else if (savedPhoto) {
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
