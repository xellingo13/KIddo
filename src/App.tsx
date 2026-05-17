import { useState, useMemo } from 'react';
import { Search, Map as MapIcon, List, Compass, ChevronRight, X, Plus, Globe, LayoutGrid, SlidersHorizontal, Home, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SAMPLE_PLACES } from './data';
import { Category, Place, User as UserType } from './types';
import MapView from './components/MapView';
import PlaceCard from './components/PlaceCard';
import PlaceDetail from './components/PlaceDetail';
import ProfileModal from './components/ProfileModal';
import { cn } from './lib/utils';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isKatalogOpen, setIsKatalogOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  const filteredPlaces = useMemo(() => {
    return SAMPLE_PLACES.filter(place => {
      const matchesCategory = selectedCategory === 'All' || selectedCategory === Category.ALL || place.category === selectedCategory;
      const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            place.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-bg font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Fixed Sticky Header Container */}
      <div className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Left Side: Logo in Oval */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="glass px-5 py-2.5 rounded-full flex items-center gap-3 shadow-xl border-white/60 bg-white/70"
          >
            <div className="w-9 h-9 flex items-center justify-center bg-emerald-500 rounded-full shadow-lg">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-xl font-black tracking-tighter leading-none text-slate-900">UYTOP</span>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="glass rounded-full px-5 py-3.5 flex items-center gap-3 shadow-xl group focus-within:ring-4 focus-within:ring-black/5 transition-all border-white/60 bg-white/70"
          >
            <Search className="w-4 h-4 text-muted group-focus-within:text-black" />
            <input 
              type="text"
              placeholder="Qidiruv..."
              className="bg-transparent border-none focus:outline-none text-sm font-medium w-32 focus:w-48 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Center: Navigation Bar */}
          <motion.div 
            layout
            className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-xl border-white/60 bg-white/70"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button 
              onClick={() => { setIsKatalogOpen(!isKatalogOpen); setViewMode('list'); }}
              className={cn(
                "flex items-center gap-3 px-8 py-3.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest whitespace-nowrap",
                viewMode === 'list' && isKatalogOpen ? "bg-black text-white shadow-lg" : "hover:bg-black/5"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Katalog</span>
            </button>

            <button 
              onClick={() => { setViewMode('map'); setIsKatalogOpen(true); }}
              className={cn(
                "flex items-center gap-3 px-8 py-3.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest whitespace-nowrap",
                viewMode === 'map' ? "bg-black text-white shadow-lg" : "hover:bg-black/5"
              )}
            >
              <MapIcon className="w-4 h-4" />
              <span>Xarita</span>
            </button>

            <div className="h-6 w-px bg-black/5 mx-2" />

            <div className="hidden sm:flex items-center pr-2">
              <button className="p-3 hover:bg-black/5 rounded-full transition-colors text-muted hover:text-black">
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Side: Add & Profile */}
          <div className="flex items-center gap-3">
            <motion.button 
              className="glass-green h-[58px] px-8 rounded-full flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.1em] shadow-2xl active:scale-95 transition-all shrink-0"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <Plus className="w-5 h-5" />
              <span className="hidden xl:inline">Qo'shish</span>
            </motion.button>

            <div 
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 glass p-2 rounded-full shadow-xl border-white/60 bg-white/70 cursor-pointer hover:bg-white transition-colors"
            >
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 text-white shadow-lg overflow-hidden"
              >
                {currentUser?.avatar ? (
                  <img src={currentUser.avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </motion.button>
              <div className="pr-4 pl-1 hidden lg:block">
                <div className="flex flex-col -gap-1 text-slate-900">
                  <span className="text-[11px] font-black tracking-tighter leading-none uppercase">
                    {currentUser ? currentUser.name : 'MENI PROFILIM'}
                  </span>
                  <span className="text-[8px] font-bold uppercase opacity-60">
                    {currentUser ? (currentUser.role === 'REALTOR' ? 'Pro Rieltor' : 'Foydalanuvchi') : 'Shaxsiy kabinet'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Catalog/Categories Bar */}
      <AnimatePresence>
        {isKatalogOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="fixed top-[92px] left-0 right-0 z-50 flex justify-center px-4"
          >
            <div className="glass rounded-full p-0.5 flex gap-0.5 items-center max-w-full overflow-x-auto no-scrollbar shadow-lg border-white/60 bg-white/50">
              {Object.values(Category).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                    selectedCategory === cat ? "bg-black text-white" : "bg-white/50 hover:bg-white text-muted"
                  )}
                >
                  {cat}
                </button>
              ))}
              <div className="h-3 w-px bg-black/5 mx-1" />
              <button 
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={cn(
                  "p-1.5 rounded-full transition-all",
                  isFiltersOpen ? "bg-emerald-500 text-white shadow-emerald-200 shadow-sm" : "hover:bg-white text-muted"
                )}
              >
                <SlidersHorizontal className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Options (Glassmorphic Dropdown) */}
      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="fixed top-[124px] left-1/2 -translate-x-1/2 z-[40] w-full max-w-2xl px-4"
          >
            <div className="glass rounded-[3rem] p-8 shadow-3xl border-white/60 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted opacity-60 ml-2">Narx (UZS)</label>
                <div className="flex items-center gap-3">
                  <div className="bg-white/40 rounded-2xl px-4 py-3 border border-black/5 flex-1 shadow-inner placeholder:opacity-20 text-sm">Min...</div>
                  <div className="bg-white/40 rounded-2xl px-4 py-3 border border-black/5 flex-1 shadow-inner placeholder:opacity-20 text-sm">Max...</div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted opacity-60 ml-2">Joylashuv</label>
                <div className="bg-white/40 rounded-2xl px-4 py-3 border border-black/5 shadow-inner text-sm flex items-center justify-between cursor-pointer group">
                  <span>Toshkent</span>
                  <ChevronRight className="w-4 h-4 text-muted group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted opacity-60 ml-2">Xonalar</label>
                <div className="flex gap-2">
                  {[1, 2, 3, '4+'].map(num => (
                    <button key={num} className="w-10 h-10 rounded-2xl bg-white/40 border border-black/5 flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-all shadow-sm">
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 min-h-screen">
        {viewMode === 'list' ? (
          <div className="max-w-7xl mx-auto px-6 pb-20 pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredPlaces.map((place: Place) => (
                <div key={place.id}>
                  <PlaceCard 
                    place={place}
                    isSelected={selectedPlace?.id === place.id}
                    onClick={() => {
                      setSelectedPlace(place);
                    }}
                  />
                </div>
              ))}
            </div>

            {filteredPlaces.length === 0 && (
              <div className="py-40 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-black/5">
                  <Compass className="w-10 h-10 text-slate-200" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Hech narsa topilmadi</h3>
                <p className="text-muted text-sm">Boshqa kalit so'zlardan foydalanib ko'ring</p>
              </div>
            )}
          </div>
        ) : (
          <div className="fixed inset-0 pt-0">
            <MapView 
              places={filteredPlaces}
              selectedPlace={selectedPlace}
              onSelectPlace={setSelectedPlace}
            />
            {/* Map Exit Toggle */}
            <button 
              onClick={() => setViewMode('list')}
              className="fixed bottom-10 left-1/2 -translate-x-1/2 glass-dark text-white px-8 py-3.5 rounded-full flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest shadow-2xl active:scale-95 transition-all z-50 whitespace-nowrap"
            >
              <List className="w-4 h-4" />
              <span>Ro'yxatga qaytish</span>
            </button>
          </div>
        )}
      </main>

      <AnimatePresence>
        {selectedPlace && (
          <PlaceDetail 
            place={selectedPlace} 
            onClose={() => setSelectedPlace(null)} 
          />
        )}
      </AnimatePresence>

      <ProfileModal 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)}
        currentUser={currentUser}
        onLogin={(user) => {
          setCurrentUser(user);
          setIsProfileOpen(false);
        }}
        onLogout={() => {
          setCurrentUser(null);
          setIsProfileOpen(false);
        }}
      />
    </div>
  );
}
