import React from 'react';
import { Heart, Star, ShieldCheck, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Nanny } from '../types';
import { cn } from '../lib/utils';

interface PlaceCardProps {
  key?: any;
  place: Nanny; // mapped as place for seamless compatibility
  isSelected?: boolean;
  onClick?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (e?: any) => void;
  language?: 'UZ' | 'EN' | 'RU';
}

export default function PlaceCard({ 
  place: nanny, 
  isSelected, 
  onClick, 
  isFavorite, 
  onToggleFavorite,
  language = 'UZ'
}: PlaceCardProps) {

  const tCard = {
    UZ: {
      verified: "Tasdiqlangan",
      hourlyRate: "Soatbay narxi",
      experience: "Tajribasi",
      years: "yil",
      pref: "Preferensiya",
      daysOpen: "kun ochiq",
      categories: {
        'Barchasi': 'Barchasi',
        'Chaqaloqlar (0-2 yosh)': 'Chaqaloqlar (0-2 yosh)',
        'Kichkintoylar (3-5 yosh)': 'Kichkintoylar (3-5 yosh)',
        'Maktab yoshi (6+ yosh)': 'Maktab yoshi (6+ yosh)',
        'Maxsus enagalar': 'Maxsus enagalar'
      },
      langsMap: {
        'O\'zbekcha': 'O\'zbekcha',
        'Ruscha': 'Ruscha',
        'Inglizcha': 'Inglizcha'
      } as Record<string, string>
    },
    EN: {
      verified: "Verified",
      hourlyRate: "Hourly rate",
      experience: "Experience",
      years: "yrs",
      pref: "Preference",
      daysOpen: "days open",
      categories: {
        'Barchasi': 'All',
        'Chaqaloqlar (0-2 yosh)': 'Infants (0-2 yo)',
        'Kichkintoylar (3-5 yosh)': 'Toddlers (3-5 yo)',
        'Maktab yoshi (6+ yosh)': 'School age (6+ yo)',
        'Maxsus enagalar': 'Special Sitters'
      },
      langsMap: {
        'O\'zbekcha': 'Uzbek',
        'Ruscha': 'Russian',
        'Inglizcha': 'English'
      } as Record<string, string>
    },
    RU: {
      verified: "Проверено",
      hourlyRate: "Почасовая ставка",
      experience: "Опыт работы",
      years: "лет",
      pref: "Предпочтение",
      daysOpen: "дней открыто",
      categories: {
        'Barchasi': 'Все',
        'Chaqaloqlar (0-2 yosh)': 'Младенцы (0-2 года)',
        'Kichkintoylar (3-5 yosh)': 'Малыши (3-5 лет)',
        'Maktab yoshi (6+ yosh)': 'Школьники (6+ лет)',
        'Maxsus enagalar': 'Специальные няни'
      },
      langsMap: {
        'O\'zbekcha': 'Узбекский',
        'Ruscha': 'Русский',
        'Inglizcha': 'Английский'
      } as Record<string, string>
    }
  }[language];

  const catLabel = tCard.categories[nanny.category] || nanny.category;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer glass rounded-[2.5rem] p-3 shadow-lg border-white/60 transition-all duration-300 bg-white/60 hover:bg-white/90",
        isSelected && "ring-2 ring-emerald-400 shadow-2xl bg-white"
      )}
    >
      <div className="relative aspect-[1.2/1] overflow-hidden rounded-[2rem] bg-slate-100 shadow-inner border border-black/5">
        <img
          src={nanny.images[0]}
          alt={nanny.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3">
          <div className="bg-pink-500 text-white px-3 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-lg">
            {catLabel}
          </div>
        </div>

        {/* Verified Badge */}
        {nanny.isVerified && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white shadow-lg backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span className="text-[7px] font-black tracking-widest uppercase">{tCard.verified}</span>
          </div>
        )}

        {/* Rate & Experience Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-black/40 backdrop-blur-md p-2.5 rounded-2xl border border-white/10 text-white">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-white/75 uppercase tracking-wider">{tCard.hourlyRate}</span>
            <span className="text-xs font-black">{nanny.hourlyRate.toLocaleString()} UZS</span>
          </div>
          <div className="w-px h-5 bg-white/25" />
          <div className="flex flex-col text-right">
            <span className="text-[9px] font-bold text-white/75 uppercase tracking-wider">{tCard.experience}</span>
            <span className="text-xs font-black">{nanny.experienceYears} {tCard.years}</span>
          </div>
        </div>
      </div>

      <div className="px-2.5 pt-3.5 pb-2.5 space-y-2">
        {/* Name & Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-0.5">
            <h3 className="font-display text-[15px] font-black tracking-tight text-slate-900 group-hover:text-pink-500 transition-colors line-clamp-1 leading-tight">
              {nanny.name}
            </h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
              {tCard.pref}: {
                language === 'EN' 
                  ? (nanny.ageGroupPreference_en || nanny.ageGroupPreference)
                  : language === 'RU'
                    ? (nanny.ageGroupPreference_ru || nanny.ageGroupPreference)
                    : (nanny.ageGroupPreference_uz || nanny.ageGroupPreference)
              }
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-lg text-[10px] font-black shrink-0">
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
            {nanny.rating}
          </div>
        </div>

        {/* Languages & Availability */}
        <div className="flex flex-wrap gap-1 pt-1">
          {nanny.languages.map((lang, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-[9px] font-bold">
              {tCard.langsMap[lang] || lang}
            </span>
          ))}
        </div>

        {/* Address and Favorite */}
        <div className="flex items-center justify-between pt-2.5 border-t border-black/[0.03]">
          <div className="flex items-center gap-1 text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-pink-500" />
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
              {nanny.availability.length} {tCard.daysOpen}
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(e);
            }}
            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-red-50 group/heart transition-all shadow-sm"
          >
            <Heart className={cn(
              "w-3.5 h-3.5 transition-colors",
              isFavorite ? "text-red-500 fill-red-500" : "text-slate-300 group-hover/heart:text-red-500"
            )} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
