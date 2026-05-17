import { X, MapPin, Phone, MessageSquare, Share2, Heart, ArrowLeft, MoreVertical, Send, Navigation, LayoutGrid, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Place } from '../types';
import { cn } from '../lib/utils';
import { useMemo, useState } from 'react';

interface PlaceDetailProps {
  place: Place;
  onClose: () => void;
}

export default function PlaceDetail({ place, onClose }: PlaceDetailProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const price = useMemo(() => {
    return place.averageCheck || place.pricePerDay || 0;
  }, [place]);

  const images = useMemo(() => {
    // Fill up to 5 images if not enough
    const baseImages = [...place.images];
    while (baseImages.length < 5) {
      baseImages.push(baseImages[0]);
    }
    return baseImages;
  }, [place.images]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-white overflow-y-auto"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-6 md:px-12 md:py-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onClose}
            className="flex items-center gap-3 text-slate-900 group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-slate-100 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">Orqaga</span>
          </button>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400 text-sm font-medium">
              {place.details?.postedAt || '17.05.2026 19:37'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          {/* Left Column: Info & Actions */}
          <div className="xl:col-span-7 space-y-10 order-2 xl:order-1">
            {/* Action Bar */}
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 min-w-[180px] glass-green text-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-3 shadow-xl">
                <Phone className="w-5 h-5 text-white" />
                Qo'ng'iroq qiling
              </button>
              <button className="flex-1 min-w-[180px] glass-blue text-white px-8 py-5 rounded-2xl font-black uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-3 shadow-xl">
                <Navigation className="w-5 h-5 text-white" />
                Joylashuv
              </button>
            </div>

            {/* Tags & Wishlist */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-5 py-2 rounded-xl bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-600">
                  {place.category === 'Sotuv' ? 'SOTAMAN' : 'IJARAGA'}
                </span>
                <span className="px-5 py-2 rounded-xl bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-600">
                  {place.details?.propertyType || 'KVARTIRA'}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-50 transition-all">
                  <Heart className="w-7 h-7 text-slate-900" />
                </button>
                <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-slate-50 transition-all">
                  <Send className="w-7 h-7 text-slate-900 rotate-12" />
                </button>
              </div>
            </div>

            {/* Title & Price */}
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {place.name}
              </h1>
              <p className="text-3xl font-black text-slate-900">
                {price.toLocaleString()} <span className="text-xl text-slate-400">y.e</span>
              </p>
            </div>

            {/* Descriptions */}
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {place.description} Barcha qulayliklar va narxlar bo'yicha bog'laning. Sotiladi hovli yoki kvartira...
              </p>
              
              {/* Details List */}
              <div className="space-y-4 pt-6 border-t border-black/[0.03]">
                {[
                  { label: "Kim joylashtirdi", value: place.poster?.role || "Rieltor" },
                  { label: "Kvartira turi", value: place.details?.propertyType || "Ikkinchi qo'l" },
                  { label: "Xonalar soni", value: place.details?.roomsCount || "4" },
                  { label: "Qavat", value: place.details?.floor || "7" },
                  { label: "Uyning qavatlari soni", value: place.details?.totalFloors || "9" },
                  { label: "Maydon, m²", value: place.details?.area || "90.0" },
                  { label: "Ta'mir", value: place.details?.repairType || "Dizaynerlik" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <span className="text-base font-bold text-slate-900">{item.label}</span>
                    <div className="flex-1 mx-4 border-b border-dotted border-slate-200" />
                    <span className="text-base font-black text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-6 pt-10 border-t border-black/[0.03]">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black tracking-tight">Joylashuv</h3>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-bold">{place.location.city}, {place.location.address}</span>
                </div>
              </div>
              
              <div className="relative aspect-[16/7] rounded-[2rem] overflow-hidden bg-slate-100 border border-black/5 shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Map" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                {/* Map Interface Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex bg-white/90 backdrop-blur rounded-xl p-1 pointer-events-auto shadow-lg max-w-sm">
                    <input type="text" placeholder="Manzil yoki obyekt" className="flex-1 px-4 py-2 bg-transparent text-sm font-medium focus:outline-none" />
                    <button className="glass-blue text-white px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest">Topish</button>
                  </div>
                  <div>
                    <button className="glass-blue text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest pointer-events-auto shadow-lg">To'liq ekran</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-20" />
          </div>

          {/* Right Column: Image Gallery & Profile */}
          <div className="xl:col-span-5 space-y-8 order-1 xl:order-2">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-black/5 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={images[activeImageIdx]}
                    alt={place.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button 
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-white/40 transition-all border border-white/20"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-white/40 transition-all border border-white/20 rotate-180"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 inset-x-8 flex gap-2">
                  {images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={cn(
                        "h-1.5 flex-1 rounded-full bg-white/30 overflow-hidden",
                        idx === activeImageIdx && "bg-white/50"
                      )}
                    >
                      {idx === activeImageIdx && (
                        <motion.div 
                          layoutId="active-bar"
                          className="h-full bg-emerald-400"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-3">
                {images.slice(0, 5).map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                      idx === activeImageIdx ? "border-emerald-400 scale-95 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Poster Card (Matches design on the left block) */}
            {place.poster && (
              <div className="p-8 rounded-[2.5rem] bg-slate-50/50 border border-black/[0.03] space-y-6">
                <div className="flex items-start justify-between">
                  {/* Title & Name */}
                  <div className="flex gap-4">
                    <img src={place.poster.avatar} alt={place.poster.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl" />
                    <div className="space-y-1">
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight">{place.poster.name}</h4>
                      <div className="flex gap-4">
                        <div className="flex flex-col">
                          <span className="text-xl font-black text-slate-900">{place.poster.listingsCount || 0}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">E'lonlar</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xl font-black text-slate-900">{place.poster.callsCount || 0}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Qo'ng'iroqlar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Поможем купить / продать жилую 🏠 и коммерческую недвижимость 🔐 в центре Ташкента ! Подписывайтесь и будьте в курсе лучших 👍 вариантов на рынке недвижимости в вашем городе uz
                </p>

                <button className="w-full py-5 rounded-2xl glass-green text-white font-black uppercase text-xs tracking-widest transition-all active:scale-95 shadow-xl">
                  Profilni ko'rish
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
