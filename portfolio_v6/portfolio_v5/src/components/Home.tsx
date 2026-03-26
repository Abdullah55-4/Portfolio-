import React from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, CheckCircle, ExternalLink, BookOpen, Globe, Users, Award, FlaskConical } from 'lucide-react';
import { t, Lang } from '../translations';

export default function Home({ setActiveTab, lang }: { setActiveTab: (tab: string) => void; lang: Lang }) {
  const tr = t[lang];
  const h = tr.home;
  const isRTL = lang === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero Section - no badge */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-36 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h1 className="font-serif font-black leading-tight mb-6 text-slate-900 dark:text-slate-50"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>
            Abdullah<br />
            <span className="text-primary">Hossam</span>{' '}
            Abdullah
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">{h.heroBio}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setActiveTab('research')}
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all">
              {h.browsePapers} <ArrowIcon size={20} />
            </button>
            <a href="/Abdullah_Hossam_CV_2026.pdf" download
              className="px-8 py-4 bg-transparent border-2 border-primary/30 text-primary dark:text-primary-light rounded-xl font-bold hover:bg-primary/5 transition-all inline-flex items-center justify-center">
              {h.downloadCV}
            </a>
          </div>
          <div className="mt-16 flex items-center gap-4 opacity-30">
            <div className="h-px w-24 bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-24 bg-primary"></div>
          </div>
        </div>
      </section>

      {/* About Section - no stats bar */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                { emoji: '🎓', title: isRTL ? 'جامعة القاهرة' : 'Cairo University', sub: isRTL ? 'كلية الاقتصاد والعلوم السياسية' : 'Faculty of Econ. & Political Science' },
                { emoji: '🏅', title: h.cert1Title, sub: h.cert1Sub },
                { emoji: '📋', title: h.cert2Title, sub: h.cert2Sub },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 bg-white dark:bg-card-dark rounded-2xl p-5 border border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">{c.emoji}</div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">{c.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50">{h.aboutTitle}</h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                <p>{h.aboutP1}</p>
                <p>{h.aboutP2}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">{h.cert1Title}</p>
                      <p className="text-sm">{h.cert1Sub}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-slate-100">{h.cert2Title}</p>
                      <p className="text-sm">{h.cert2Sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">{h.researchTitle}</h2>
              <p className="text-slate-600 dark:text-slate-400">{h.researchSubtitle}</p>
            </div>
            <button onClick={() => setActiveTab('research')} className="text-primary font-bold flex items-center gap-2 hover:underline shrink-0">
              {h.viewAll} <ExternalLink size={18} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FlaskConical size={24} />, title: h.r1Title, desc: h.r1Desc, tag: h.caseStudy },
              { icon: <Globe size={24} />, title: h.r2Title, desc: h.r2Desc, tag: h.academicResearch },
              { icon: <BookOpen size={24} />, title: h.r3Title, desc: h.r3Desc, tag: h.academicResearch },
            ].map((card, i) => (
              <div key={i} className="bg-white dark:bg-card-dark rounded-xl p-8 border border-primary/10 hover:border-primary/40 transition-all flex flex-col group shadow-sm">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">{card.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">{card.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
