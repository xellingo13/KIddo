import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Place } from '../types';
import { cn } from '../lib/utils';

interface PlaceCardProps {
  place: Place;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function PlaceCard({ place, isSelected, onClick }: PlaceCardProps) {
  const price = place.pricePerDay || place.averageCheck || 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer glass rounded-[2rem] p-2 shadow-lg border-white/60 transition-all duration-300",
        isSelected && "ring-2 ring-emerald-400 shadow-2xl"
      )}
    >
      <div className="relative aspect-[1.3/1] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-inner border border-black/5">
        <img
          src={place.images[0]}
          alt={place.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Floating Category Tag */}
        <div className="absolute top-2 left-2">
          <div className="bg-emerald-500 px-2 py-1 rounded-lg text-[7px] font-black uppercase tracking-widest text-white shadow-lg">
            {place.category}
          </div>
        </div>

        {/* Poster Info (Top Right) */}
        {place.poster && (
          <div className="absolute top-2 right-2 flex items-center gap-1 pl-1 pr-2 py-0.5 rounded-full glass border border-white/40 shadow-lg backdrop-blur-md">
            <img src={place.poster.avatar} alt="" className="w-4 h-4 rounded-full object-cover border border-white shadow-sm" />
            <span className="text-[7px] font-black tracking-tight text-slate-800 uppercase whitespace-nowrap">{place.poster.name}</span>
          </div>
        )}
      </div>

      <div className="px-1.5 pt-2 pb-1 space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-display text-[13px] font-black tracking-tight text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-1 leading-tight">
              {place.name}
            </h3>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-1.5 border-t border-black/[0.03]">
          <div className="flex flex-col">
            <span className="text-[12px] font-black tracking-tight text-slate-950">
              {price.toLocaleString()} <span className="text-[8px] opacity-30 uppercase font-black">uzs</span>
            </span>
          </div>
          <button className="w-7 h-7 rounded-full glass flex items-center justify-center hover:bg-white group/heart transition-all shadow-sm border-white/60">
            <Heart className="w-3 h-3 text-slate-300 group-hover/heart:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
