import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import ShareModal from './components/ShareModal';
import { menuCategories } from './data/menuData';

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="min-h-screen  relative" dir="rtl">

      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed -z-10"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <Header onShareClick={() => setIsShareModalOpen(true)} />

      <Hero />

      <main className="relative">
        <div className="relative container mx-auto px-4 py-24">
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </main>

      <Footer />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}

export default App;