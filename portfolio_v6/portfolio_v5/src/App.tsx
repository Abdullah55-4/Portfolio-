import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import Home from './components/Home';
import Research from './components/Research';
import About from './components/About';
import { t, Lang } from './translations';
import { LOGO_B64 } from './images';

// Remove green background from logo using canvas
function useBgRemovedLogo(src: string, size: number) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const img = new Image();
    img.onload = () => {
      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, size, size);
      const tmp = document.createElement('canvas');
      tmp.width = img.width; tmp.height = img.height;
      const tc = tmp.getContext('2d')!;
      tc.drawImage(img, 0, 0);
      const d = tc.getImageData(0, 0, img.width, img.height);
      for (let i = 0; i < d.data.length; i += 4) {
        const r = d.data[i], g = d.data[i + 1], b = d.data[i + 2];
        // Remove green/dark-green pixels (the logo background)
        if (g > 70 && g > r * 1.2 && g > b * 1.2 && b < 120) d.data[i + 3] = 0;
      }
      tc.putImageData(d, 0, 0);
      ctx.drawImage(tmp, 0, 0, size, size);
    };
    img.src = src;
  }, [src, size]);
  return canvasRef;
}

function LogoImg({ size, className }: { size: number; className?: string }) {
  const ref = useBgRemovedLogo(LOGO_B64, size);
  return (
    <canvas
      ref={ref}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const h = document.documentElement;
    h.setAttribute('lang', lang);
    h.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  const tr = t[lang];
  const tabs = [
    { id: 'home', label: tr.nav.home },
    { id: 'research', label: tr.nav.research },
    { id: 'about', label: tr.nav.about },
  ];

  const renderContent = () => {
    if (activeTab === 'research') return <Research lang={lang} />;
    if (activeTab === 'about') return <About lang={lang} />;
    return <Home setActiveTab={setActiveTab} lang={lang} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-transparent flex-shrink-0 flex items-center justify-center">
              <LogoImg size={40} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">{tr.name}</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`text-sm font-medium transition-colors pb-0.5 ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary'
                }`}>
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all font-bold text-sm">
              <Globe size={16} />
              <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            <button onClick={() => setIsDarkMode(d => !d)}
              className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-all">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setActiveTab('about')}
              className="px-5 py-2 bg-primary text-white rounded-xl font-bold text-sm hover:brightness-110 transition-all">
              {tr.nav.contact}
            </button>
          </div>

          <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(o => !o)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/20 p-4 flex flex-col gap-3 shadow-xl">
            {tabs.map(tab => (
              <button key={tab.id}
                onClick={() => { setActiveTab(tab.id); setIsMenuOpen(false); }}
                className={`text-right text-base font-medium p-2.5 rounded-xl transition-colors ${
                  activeTab === tab.id ? 'bg-primary/10 text-primary' : 'text-slate-700 dark:text-slate-300'
                }`}>
                {tab.label}
              </button>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-primary/10">
              <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm">
                <Globe size={16} />
                <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>
              <button onClick={() => setIsDarkMode(d => !d)}
                className="p-2 rounded-xl bg-primary/10 text-primary">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">{renderContent()}</main>

      <footer className="bg-white dark:bg-card-dark border-t border-primary/10 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>{tr.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">{tr.footer.privacy}</a>
            <a href="#" className="hover:text-primary transition-colors">{tr.footer.sitemap}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
