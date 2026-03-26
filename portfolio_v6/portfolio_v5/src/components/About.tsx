import React, { useState, useEffect, useRef } from 'react';
import { User, BrainCircuit } from 'lucide-react';
import { t, Lang } from '../translations';
import { LOGO_B64 } from '../images';

function LogoCanvas({ size }: { size: number }) {
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
        if (g > 80 && g > r * 1.15 && g > b * 1.15) d.data[i + 3] = 0;
      }
      tc.putImageData(d, 0, 0);
      ctx.drawImage(tmp, 0, 0, size, size);
    };
    img.src = LOGO_B64;
  }, [size]);

  return <canvas ref={canvasRef} width={size} height={size} style={{ width: size, height: size }} />;
}

export default function About({ lang }: { lang: Lang }) {
  const tr = t[lang];
  const a = tr.about;

  const skills = lang === 'ar'
    ? [
        { name: 'دراسات السلام والصراع النقدية', val: 92 },
        { name: 'التحليل الجيوسياسي والاستراتيجي', val: 88 },
        { name: 'الكتابة الأكاديمية (عربي / إنجليزي)', val: 90 },
        { name: 'مناهج البحث النوعي', val: 85 },
        { name: 'الفلسفة السياسية المقارنة', val: 87 },
        { name: 'اللغة الإنجليزية (C1)', val: 85 },
      ]
    : [
        { name: 'Critical Peace & Conflict Studies', val: 92 },
        { name: 'Geopolitical & Strategic Analysis', val: 88 },
        { name: 'Academic Writing (Arabic / English)', val: 90 },
        { name: 'Qualitative Research Methods', val: 85 },
        { name: 'Comparative Political Philosophy', val: 87 },
        { name: 'English Language (C1)', val: 85 },
      ];

  return (
    <div className="flex flex-1 justify-center py-10 px-6">
      <div className="flex flex-col max-w-[900px] flex-1 gap-12">

        {/* Profile header - no tags */}
        <section className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="relative shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary to-primary/20 rounded-full blur-md opacity-40"></div>
            <div className="relative z-10 w-32 h-32 rounded-full border-4 border-primary/30 overflow-hidden bg-transparent flex items-center justify-center">
              <LogoCanvas size={128} />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start justify-center flex-1 text-center md:text-start">
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-bold tracking-tight mb-2">{tr.fullName}</h1>
            <p className="text-primary text-lg font-medium mb-1">{a.role}</p>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl">{a.roleSub}</p>
          </div>
        </section>

        {/* Bio + Skills side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold flex items-center gap-3 mb-6">
              <User className="text-primary" size={28} />
              {a.bioTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-4">{a.bioP1}</p>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{a.bioP2}</p>
          </div>

          <div>
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold flex items-center gap-3 mb-8">
              <BrainCircuit className="text-primary" size={28} />
              {a.skillsTitle}
            </h2>
            <div className="space-y-6">
              {skills.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{skill.name}</span>
                    <span className="text-primary text-sm font-bold">{skill.val}%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full transition-all duration-700" style={{ width: `${skill.val}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
