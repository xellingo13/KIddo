import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Map as MapIcon, 
  List, 
  Compass, 
  ChevronRight, 
  X, 
  Plus, 
  Globe, 
  LayoutGrid, 
  SlidersHorizontal, 
  Heart, 
  User, 
  Sparkles, 
  Baby, 
  ShieldAlert, 
  BookOpen, 
  ShoppingBag, 
  Clock, 
  Bell, 
  CheckCircle, 
  CreditCard, 
  Activity, 
  DollarSign, 
  CheckSquare, 
  Coffee, 
  Moon, 
  Camera,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SAMPLE_NANNIES, SAMPLE_AD_PRODUCTS, SAMPLE_JOURNAL_ENTRIES, SAMPLE_BLOGS } from './data';
import { Category, Nanny, ProductAd, JournalEntry, BlogPost, User as UserType } from './types';
import MapView from './components/MapView';
import PlaceCard from './components/PlaceCard';
import PlaceDetail from './components/PlaceDetail';
import ProfileModal from './components/ProfileModal';
import { cn } from './lib/utils';

export default function App() {
  // Navigation & View States
  const [activeTab, setActiveTab] = useState<'sitters' | 'journal' | 'ads' | 'blog'>('sitters');
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNanny, setSelectedNanny] = useState<Nanny | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserType | null>({
    id: 'usr_parent_1',
    name: 'Dilnoza Karimova',
    email: 'dilnoza@kiddo.uz',
    phone: '+998 90 915 22 33',
    role: 'PARENT',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    isVerified: true
  });

  // Language & Notifications
  const [language, setLanguage] = useState<'UZ' | 'EN' | 'RU'>('UZ');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([
    "Jasurbekning kundalik jurnali yangilandi: 'Kunduzgi uyqu yakunlandi'",
    "Sizga yaqin hududda 2 ta yangi tasdiqlangan enaga ish boshladi",
    "A+ toifali enaga Madina Alimova suhbatga tayyor!"
  ]);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(['1']);

  // Filters State
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState<number>(70000);
  const [minExperience, setMinExperience] = useState<number>(0);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');

  // Emergency SOS State
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [sosStep, setSosStep] = useState<'idle' | 'searching' | 'found' | 'booked'>('idle');
  const [sosNanny, setSosNanny] = useState<Nanny | null>(null);

  // Journal Management
  const [journals, setJournals] = useState<JournalEntry[]>(SAMPLE_JOURNAL_ENTRIES);
  const [newJournalChild, setNewJournalChild] = useState('');
  const [newJournalMeal, setNewJournalMeal] = useState('');
  const [newJournalSleep, setNewJournalSleep] = useState('');
  const [newJournalActivity, setNewJournalActivity] = useState('');
  const [newJournalNote, setNewJournalNote] = useState('');
  const [showAddJournalForm, setShowAddJournalForm] = useState(false);

  // Payment State
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentPurpose, setPaymentPurpose] = useState<string>('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [paymentStep, setPaymentStep] = useState<'form' | 'processing' | 'success'>('form');

  // Classified Ads State
  const [ads, setAds] = useState<ProductAd[]>(SAMPLE_AD_PRODUCTS);
  const [isAddAdOpen, setIsAddAdOpen] = useState(false);
  const [newAdTitle, setNewAdTitle] = useState('');
  const [newAdCategory, setNewAdCategory] = useState<'O\'yinchoqlar' | 'Kiyimlar' | 'Ta\'lim' | 'Sog\'liqni saqlash' | 'Chaqaloqlar'>('O\'yinchoqlar');
  const [newAdPrice, setNewAdPrice] = useState('');
  const [newAdDesc, setNewAdDesc] = useState('');
  const [newAdPhone, setNewAdPhone] = useState('');

  // Multilingual translation dictionary
  const t = {
    UZ: {
      brand: "KIDDOO",
      tagline: "Eng ishonchli enagalar maskani",
      emergency: "Menga hozir enaga kerak",
      searchPlaceholder: "Ism yoki hudud bo'yicha qidirish...",
      tabSitters: "Enagalar",
      tabJournal: "Kundalik Jurnal",
      tabAds: "Klassifikator va Reklama",
      tabBlog: "Ota-onalar Blogi",
      filters: "Filtrlar",
      experience: "Tajriba (kamida yillar)",
      hourlyRate: "Maksimal soatbay narx",
      languages: "Muloqot tili",
      verifiedOnly: "Faqat tasdiqlangan profillar",
      clearFilters: "Tozalash",
      apply: "Qo'llash",
      journalTitle: "Bolajonlar Kundalik Jurnali",
      journalDesc: "Farzandingizning kun davomida nima yeganligi, qancha uxladi va qanday o'yinlar o'ynaganligi haqida real vaqtda hisobotlar.",
      newJournalBtn: "Yangi Journal Yozish",
      adsTitle: "Bolalar Mahsulotlari va Reklamalar",
      adsDesc: "Bolangiz uchun eng yaxshi o'yinchoqlar, ta'lim markazlari, kiyim-kechaklar va sog'lomlashtirish markazlarining maxsus takliflari.",
      newAdBtn: "E'lon berish",
      blogTitle: "Bilimli Ota-onalar Maktabi",
      blogDesc: "Malakali shifokorlar, psixologlar va tajribali tarbiyachilar tomonidan yozilgan eng foydali tavsiyalar va maqolalar.",
      realtor: "Rieltor",
      user: "Foydalanuvchi",
      parent: "Ota-ona",
      nanny: "Enaga",
      favorites: "Sevimlilar",
      noNannyFound: "Kechirasiz, tanlangan talablar bo'yicha enagalar topilmadi.",
      notificationsTitle: "Bildirishnomalar",
      clearBtn: "Tozalash",
      noNotif: "Hozircha xabarlar yo'q",
      profile: "PROFIL",
      login: "Kirish",
      yearsSuffix: "yil"
    },
    EN: {
      brand: "KIDDOO",
      tagline: "The hub of trusted babysitters",
      emergency: "I need a babysitter now",
      searchPlaceholder: "Search by name or area...",
      tabSitters: "Babysitters",
      tabJournal: "Daily Journal",
      tabAds: "Ads & Classifieds",
      tabBlog: "Parenting Blog",
      filters: "Filters",
      experience: "Min Experience (years)",
      hourlyRate: "Max Hourly Rate",
      languages: "Language",
      verifiedOnly: "Verified profiles only",
      clearFilters: "Clear",
      apply: "Apply",
      journalTitle: "Children's Daily Journal",
      journalDesc: "Real-time reports on what your child ate, slept, and which interactive games they played today.",
      newJournalBtn: "Create Journal Entry",
      adsTitle: "Kids Products & Classifies",
      adsDesc: "Discover high quality toys, education centers, clothing, and kids health services nearby.",
      newAdBtn: "Post an Ad",
      blogTitle: "Informed Parents Guide",
      blogDesc: "The most useful advice and articles authored by expert pediatricians, psychologists, and educators.",
      realtor: "Realtor",
      user: "User",
      parent: "Parent",
      nanny: "Nanny",
      favorites: "Favorites",
      noNannyFound: "Sorry, no babysitters found matching the criteria.",
      notificationsTitle: "Notifications",
      clearBtn: "Clear",
      noNotif: "No messages yet",
      profile: "PROFILE",
      login: "Log In",
      yearsSuffix: "yrs"
    },
    RU: {
      brand: "KIDDOO",
      tagline: "Проверенные няни для ваших детей",
      emergency: "Мне нужна няня прямо сейчас",
      searchPlaceholder: "Поиск по имени или району...",
      tabSitters: "Няни",
      tabJournal: "Дневник ребенка",
      tabAds: "Объявления и реклама",
      tabBlog: "Блог для родителей",
      filters: "Фильтры",
      experience: "Мин. опыт (лет)",
      hourlyRate: "Макс. почасовая ставка",
      languages: "Язык общения",
      verifiedOnly: "Только проверенные",
      clearFilters: "Очистить",
      apply: "Применить",
      journalTitle: "Ежедневный журнал ребенка",
      journalDesc: "Отчеты в реальном времени о том, что ел ваш ребенок, сколько спал и во что играл в течение дня.",
      newJournalBtn: "Создать запись",
      adsTitle: "Детские товары и реклама",
      adsDesc: "Лучшие предложения игрушек, детских центров, одежды и оздоровительных услуг для вашего ребенка.",
      newAdBtn: "Подать объявление",
      blogTitle: "Школа осознанных родителей",
      blogDesc: "Полезные рекомендации и статьи от опытных педиатров, детских психологов и педагогов.",
      realtor: "Риелтор",
      user: "Пользователь",
      parent: "Родитель",
      nanny: "Няня",
      favorites: "Избранное",
      noNannyFound: "Извините, няни по вашим критериям не найдены.",
      notificationsTitle: "Уведомления",
      clearBtn: "Очистить",
      noNotif: "Сообщений пока нет",
      profile: "ПРОФИЛЬ",
      login: "Войти",
      yearsSuffix: "лет"
    }
  }[language];

  // Map representation toggle (visual list / maps view)
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  // Search, Filter, Category logic combined
  const filteredNannies = useMemo(() => {
    return SAMPLE_NANNIES.filter(n => {
      // Category Filter
      if (selectedCategory !== Category.ALL && n.category !== selectedCategory) return false;
      
      // Text Search Filter (name or location address)
      const query = searchQuery.toLowerCase();
      if (query && !n.name.toLowerCase().includes(query) && !n.location.address.toLowerCase().includes(query)) return false;

      // Premium Advanced Filters
      if (n.hourlyRate > maxPrice) return false;
      if (n.experienceYears < minExperience) return false;
      if (selectedLanguage !== 'All' && !n.languages.includes(selectedLanguage)) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, maxPrice, minExperience, selectedLanguage]);

  // Toggle favorite helper
  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  // Trigger Emergency SOS simulation
  const startSosSimulation = () => {
    setIsSosOpen(true);
    setSosStep('searching');
    setSosNanny(null);

    // After 3 seconds, find the closest nanny and connect
    setTimeout(() => {
      // Pick first nanny as the match
      setSosNanny(SAMPLE_NANNIES[0]);
      setSosStep('found');
    }, 3000);
  };

  // Confirm booking from SOS
  const confirmSosBooking = () => {
    setSosStep('booked');
    // Add custom notification
    setNotifications(prev => [
      `Shoshilinch buyurtma tasdiqlandi: ${sosNanny?.name} 15 daqiqada yetib keladi!`,
      ...prev
    ]);
  };

  // Add new Journal entry simulation
  const handleAddJournalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJournalChild || !newJournalMeal || !newJournalSleep || !newJournalActivity) return;

    const newLog: JournalEntry = {
      id: 'j_' + Math.random().toString(36).substr(2, 9),
      childName: newJournalChild,
      date: 'Bugun, ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      meals: newJournalMeal,
      sleep: newJournalSleep,
      activities: newJournalActivity,
      note: newJournalNote || 'Sog\'lom va faol.',
      media: [
        'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=300'
      ],
      loggedBy: currentUser ? `${currentUser.name} (${currentUser.role === 'PARENT' ? 'Ota-ona' : 'Enaga'})` : 'KIDDOO tizimi'
    };

    setJournals([newLog, ...journals]);
    setNewJournalChild('');
    setNewJournalMeal('');
    setNewJournalSleep('');
    setNewJournalActivity('');
    setNewJournalNote('');
    setShowAddJournalForm(false);

    // Trigger fake notification
    setNotifications(prev => [
      `Farzandingiz ${newJournalChild} uchun yangi kunlik jurnal muvaffaqiyatli saqlandi!`,
      ...prev
    ]);
  };

  // Add classified Ad simulation
  const handleAddAdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdTitle || !newAdPrice || !newAdPhone) return;

    const newProduct: ProductAd = {
      id: 'ad_' + Math.random().toString(36).substr(2, 9),
      title: newAdTitle,
      category: newAdCategory,
      price: Number(newAdPrice),
      image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=500',
      description: newAdDesc || 'Sifatli va qulay bolalar mahsuloti.',
      phone: newAdPhone,
      postedBy: currentUser?.name || 'Mustaqil e\'lonchi'
    };

    setAds([newProduct, ...ads]);
    setNewAdTitle('');
    setNewAdPrice('');
    setNewAdDesc('');
    setNewAdPhone('');
    setIsAddAdOpen(false);

    setNotifications(prev => [
      `"${newAdTitle}" reklama/e'loningiz muvaffaqiyatli chop etildi!`,
      ...prev
    ]);
  };

  // Hire/Premium payment trigger
  const launchPayment = (amount: number, purpose: string) => {
    setPaymentAmount(amount);
    setPaymentPurpose(purpose);
    setCardNumber('');
    setCardExpiry('');
    setCardCvv('');
    setPaymentStep('form');
    setIsPaymentOpen(true);
  };

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');

    // Simulate safe SSL bank transaction process
    setTimeout(() => {
      setPaymentStep('success');
      setNotifications(prev => [
        `To'lov muvaffaqiyatli o'tkazildi: ${paymentPurpose}. ${amountFormated(paymentAmount)} UZS`,
        ...prev
      ]);
    }, 2500);
  };

  const amountFormated = (val: number) => val.toLocaleString();

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 font-sans selection:bg-pink-100 antialiased overflow-x-hidden pb-12">
      
      {/* ----------------- TOP INTEGRATED HEADER ----------------- */}
      <header className="sticky top-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-black/[0.03] px-4 py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Brand logo & Slogan */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl shadow-lg shadow-pink-500/10">
                <Baby className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
                  {t.brand}
                  <Sparkles className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block leading-none">{t.tagline}</span>
              </div>
            </div>

            {/* Micro Toggles on mobile */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Language Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 font-bold text-xs"
                  aria-label="Language"
                >
                  <Globe className="w-4.5 h-4.5 text-slate-500" />
                </button>
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-[140]" 
                        onClick={() => setIsLangDropdownOpen(false)} 
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-32 bg-white border border-black/5 rounded-2xl p-1.5 shadow-xl z-[150] origin-top-right"
                      >
                        {(['UZ', 'EN', 'RU'] as const).map((lang) => {
                          const label = lang === 'UZ' ? "O'zbekcha" : lang === 'EN' ? "English" : "Русский";
                          return (
                            <button
                              key={lang}
                              onClick={() => {
                                setLanguage(lang);
                                setIsLangDropdownOpen(false);
                              }}
                              className={cn(
                                "w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between",
                                language === lang 
                                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" 
                                  : "text-slate-600 hover:bg-slate-50"
                              )}
                            >
                              <span>{label}</span>
                              {language === lang && <CheckCircle className="w-3 h-3 text-white" />}
                            </button>
                          );
                        })}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 relative border border-slate-100"
              >
                <Bell className="w-4.5 h-4.5" />
                {notifications.length > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full animate-ping" />
                )}
              </button>
              <button 
                onClick={() => setIsProfileOpen(true)}
                className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center"
              >
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Searchbar / Actions */}
          <div className="flex-1 max-w-lg mx-auto w-full flex items-center gap-3">
            {activeTab === 'sitters' && (
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-black/[0.03] rounded-2xl text-xs font-bold focus:bg-white focus:ring-2 focus:ring-pink-500/10 transition-all outline-none"
                />
              </div>
            )}
          </div>

          {/* Right Controls - Lang, Notifications, SOS & Profile */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Elegant Dropdown Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl border border-slate-100 transition-colors text-xs font-black uppercase tracking-wider"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                <span>{language}</span>
                <span className="text-[8px] text-slate-400 transition-transform duration-200" style={{ transform: isLangDropdownOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-[140]" 
                      onClick={() => setIsLangDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-36 bg-white border border-black/5 rounded-2xl p-1.5 shadow-2xl z-[150] origin-top-right"
                    >
                      {(['UZ', 'EN', 'RU'] as const).map((lang) => {
                        const label = lang === 'UZ' ? "O'zbekcha" : lang === 'EN' ? "English" : "Русский";
                        return (
                          <button
                            key={lang}
                            onClick={() => {
                              setLanguage(lang);
                              setIsLangDropdownOpen(false);
                            }}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between",
                              language === lang 
                                ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" 
                                : "text-slate-600 hover:bg-slate-50"
                            )}
                          >
                            <span>{label}</span>
                            {language === lang && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Notification Tray Button */}
            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="w-11 h-11 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-100 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                {notifications.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border border-white" />
                )}
              </button>

              <AnimatePresence>
                {isNotifOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute right-0 mt-3 w-80 bg-white border border-black/5 rounded-3xl p-5 shadow-2xl z-[150]"
                  >
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/[0.03]">
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{t.notificationsTitle}</h4>
                      <button onClick={() => setNotifications([])} className="text-[10px] text-slate-400 hover:text-rose-500 font-bold">{t.clearBtn}</button>
                    </div>
                    {notifications.length === 0 ? (
                      <p className="text-xs text-slate-400 text-center py-6 font-medium">{t.noNotif}</p>
                    ) : (
                      <div className="space-y-3 max-h-60 overflow-y-auto no-scrollbar">
                        {notifications.map((notif, idx) => (
                          <div key={idx} className="flex gap-2.5 p-2 rounded-xl bg-slate-50 border border-black/[0.01]">
                            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full shrink-0 mt-1" />
                            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">{notif}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Info Card */}
            <div 
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 p-2 rounded-full border border-black/[0.02] cursor-pointer transition-colors"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 text-white shadow-md overflow-hidden">
                {currentUser?.avatar ? (
                  <img src={currentUser.avatar} alt="" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>
              <div className="pr-4 pl-1 hidden lg:block">
                <div className="flex flex-col text-slate-900">
                  <span className="text-[11px] font-black tracking-tighter leading-none uppercase">
                    {currentUser ? currentUser.name : t.profile}
                  </span>
                  <span className="text-[8px] font-bold uppercase opacity-60">
                    {currentUser ? (currentUser.role === 'PARENT' ? t.parent : t.nanny) : t.login}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ----------------- SUB-NAVIGATION BAR (Kiddo Custom Tabs) ----------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.03] pb-4">
          
          {/* Main Module Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'sitters', label: t.tabSitters, icon: Baby, color: 'text-pink-500 bg-pink-50 border-pink-100' },
              { id: 'journal', label: t.tabJournal, icon: Activity, color: 'text-emerald-500 bg-emerald-50 border-emerald-100' },
              { id: 'ads', label: t.tabAds, icon: ShoppingBag, color: 'text-blue-500 bg-blue-50 border-blue-100' },
              { id: 'blog', label: t.tabBlog, icon: BookOpen, color: 'text-amber-500 bg-amber-50 border-amber-100' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setSelectedCategory(Category.ALL);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all shadow-sm active:scale-95",
                    isActive 
                      ? "bg-slate-950 text-white border-slate-950 shadow-md" 
                      : "bg-white text-slate-500 border-black/[0.03] hover:bg-slate-50"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-white" : tab.color.split(' ')[0])} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* SOS Emergency Sitter Button (Visually prominent action) */}
          <button 
            onClick={startSosSimulation}
            className="flex items-center gap-2.5 px-6 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-rose-500/20 active:scale-95 hover:brightness-105 transition-all"
          >
            <ShieldAlert className="w-5 h-5 text-white animate-bounce" />
            {t.emergency}
          </button>

        </div>
      </div>

      {/* ----------------- CORE MODULE ROUTERS & VIEWS ----------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        
        {/* 1. BABYSITTERS MODULE */}
        {activeTab === 'sitters' && (
          <div className="space-y-8">
            
            {/* Category tabs & view togglers */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {Object.values(Category).map((cat) => {
                  const translatedCat = {
                    UZ: {
                      'Barchasi': 'Barchasi',
                      'Chaqaloqlar (0-2 yosh)': 'Chaqaloqlar (0-2 yosh)',
                      'Kichkintoylar (3-5 yosh)': 'Kichkintoylar (3-5 yosh)',
                      'Maktab yoshi (6+ yosh)': 'Maktab yoshi (6+ yosh)',
                      'Maxsus enagalar': 'Maxsus enagalar'
                    },
                    EN: {
                      'Barchasi': 'All',
                      'Chaqaloqlar (0-2 yosh)': 'Infants (0-2 yrs)',
                      'Kichkintoylar (3-5 yosh)': 'Toddlers (3-5 yrs)',
                      'Maktab yoshi (6+ yosh)': 'School age (6+ yrs)',
                      'Maxsus enagalar': 'Special Sitters'
                    },
                    RU: {
                      'Barchasi': 'Все',
                      'Chaqaloqlar (0-2 yosh)': 'Младенцы (0-2 года)',
                      'Kichkintoylar (3-5 yosh)': 'Малыши (3-5 лет)',
                      'Maktab yoshi (6+ yosh)': 'Школьники (6+ лет)',
                      'Maxsus enagalar': 'Специальные няни'
                    }
                  }[language][cat] || cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "px-4.5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                        selectedCategory === cat 
                          ? "bg-pink-500 text-white shadow-md shadow-pink-500/10" 
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      )}
                    >
                      {translatedCat}
                    </button>
                  );
                })}
              </div>

              {/* Advanced Filter, Search toggles */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className={cn(
                    "flex items-center gap-2 px-4.5 py-2.5 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-colors",
                    isFiltersOpen ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-black/5 hover:bg-slate-50"
                  )}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  {t.filters}
                </button>
                
                <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-black/[0.02]">
                  <button 
                    onClick={() => setViewMode('list')}
                    className={cn("p-2 rounded-lg transition-all", viewMode === 'list' ? "bg-white text-slate-900 shadow-sm" : "text-slate-400")}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('map')}
                    className={cn("p-2 rounded-lg transition-all", viewMode === 'map' ? "bg-white text-slate-900 shadow-sm" : "text-slate-400")}
                  >
                    <MapIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Tray */}
            <AnimatePresence>
              {isFiltersOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-inner grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {/* Experience slider */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">{t.experience}</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="range" 
                        min="0" 
                        max="10" 
                        value={minExperience}
                        onChange={(e) => setMinExperience(Number(e.target.value))}
                        className="flex-1 accent-pink-500"
                      />
                      <span className="text-xs font-black text-slate-900">{minExperience} {t.yearsSuffix}</span>
                    </div>
                  </div>

                  {/* Price limit slider */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">{t.hourlyRate}</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="range" 
                        min="30000" 
                        max="80000" 
                        step="5000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="flex-1 accent-pink-500"
                      />
                      <span className="text-xs font-black text-slate-900">{maxPrice.toLocaleString()} UZS</span>
                    </div>
                  </div>

                  {/* Language selector */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 block px-1">{t.languages}</label>
                    <select 
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-black/5 rounded-xl text-xs font-bold outline-none"
                    >
                      <option value="All">{language === 'UZ' ? 'Barchasi (All)' : language === 'EN' ? 'All Languages' : 'Все языки'}</option>
                      <option value="O'zbekcha">{language === 'UZ' ? 'O\'zbekcha' : language === 'EN' ? 'Uzbek' : 'Узбекский'}</option>
                      <option value="Ruscha">{language === 'UZ' ? 'Ruscha' : language === 'EN' ? 'Russian' : 'Русский'}</option>
                      <option value="Inglizcha">{language === 'UZ' ? 'Inglizcha' : language === 'EN' ? 'English' : 'Английский'}</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Render items (List vs Map toggle) */}
            {viewMode === 'list' ? (
              filteredNannies.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-[3rem] space-y-4">
                  <Baby className="w-16 h-16 text-slate-300 mx-auto" />
                  <p className="text-slate-400 font-bold">{t.noNannyFound}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredNannies.map((nanny) => (
                    <PlaceCard 
                      key={nanny.id}
                      place={nanny}
                      isFavorite={favorites.includes(nanny.id)}
                      onToggleFavorite={() => handleToggleFavorite(nanny.id)}
                      onClick={() => setSelectedNanny(nanny)}
                      language={language}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="h-[60vh] rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl">
                <MapView 
                  places={filteredNannies as any}
                  selectedPlace={selectedNanny as any}
                  onSelectPlace={(place) => setSelectedNanny(place as any)}
                  language={language}
                />
              </div>
            )}

          </div>
        )}

        {/* 2. CHILD JOURNALS MODULE */}
        {activeTab === 'journal' && (
          <div className="space-y-8">
            
            {/* Intro Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-8 sm:p-12 rounded-[3rem] border border-emerald-100">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex p-3 bg-white text-emerald-500 rounded-2xl shadow-sm">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.journalTitle}</h2>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{t.journalDesc}</p>
              </div>
              <button 
                onClick={() => setShowAddJournalForm(!showAddJournalForm)}
                className="flex items-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-500/10 active:scale-95 transition-all self-start md:self-center shrink-0"
              >
                <Plus className="w-4 h-4" />
                {t.newJournalBtn}
              </button>
            </div>

            {/* Add New Journal Record Form */}
            <AnimatePresence>
              {showAddJournalForm && (
                <motion.form 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  onSubmit={handleAddJournalSubmit}
                  className="bg-white p-8 rounded-[2.5rem] border border-black/5 shadow-2xl space-y-5"
                >
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">
                    {{
                      UZ: "Yangi Kunlik Jurnal kiritish",
                      EN: "Add New Daily Journal Entry",
                      RU: "Добавить запись в ежедневный журнал"
                    }[language]}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                        {{
                          UZ: "Bola Ismi & Yoshi",
                          EN: "Child's Name & Age",
                          RU: "Имя и возраст ребенка"
                        }[language]}
                      </label>
                      <input 
                        type="text" 
                        value={newJournalChild}
                        onChange={(e) => setNewJournalChild(e.target.value)}
                        placeholder={{
                          UZ: "Masalan: Jasurbek (2 yosh)",
                          EN: "e.g., Jasur (2 years old)",
                          RU: "Например: Джасур (2 года)"
                        }[language]}
                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                        {{
                          UZ: "Ovqatlanish hisoboti",
                          EN: "Meal/Feeding Report",
                          RU: "Отчет о питании"
                        }[language]}
                      </label>
                      <input 
                        type="text" 
                        value={newJournalMeal}
                        onChange={(e) => setNewJournalMeal(e.target.value)}
                        placeholder={{
                          UZ: "Kasha, sut, meva puresi",
                          EN: "Porridge, milk, fruit puree",
                          RU: "Каша, молоко, фруктовое пюре"
                        }[language]}
                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                        {{
                          UZ: "Uyqu hisoboti",
                          EN: "Sleep/Nap Report",
                          RU: "Отчет о сне"
                        }[language]}
                      </label>
                      <input 
                        type="text" 
                        value={newJournalSleep}
                        onChange={(e) => setNewJournalSleep(e.target.value)}
                        placeholder={{
                          UZ: "Kunduzgi uyqu: 13:00 - 15:00",
                          EN: "Daytime sleep: 13:00 - 15:00",
                          RU: "Дневной сон: 13:00 - 15:00"
                        }[language]}
                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                        {{
                          UZ: "Kreativ & Ta'lim mashg'ulotlari",
                          EN: "Creative & Educational Activities",
                          RU: "Творческие и развивающие занятия"
                        }[language]}
                      </label>
                      <input 
                        type="text" 
                        value={newJournalActivity}
                        onChange={(e) => setNewJournalActivity(e.target.value)}
                        placeholder={{
                          UZ: "Rasm chizish, Montessori kubiklari",
                          EN: "Drawing, Montessori puzzles",
                          RU: "Рисование, кубики Монтессори"
                        }[language]}
                        className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                      {{
                        UZ: "Qo'shimcha eslatma",
                        EN: "Additional Notes",
                        RU: "Дополнительные примечания"
                      }[language]}
                    </label>
                    <textarea 
                      value={newJournalNote}
                      onChange={(e) => setNewJournalNote(e.target.value)}
                      placeholder={{
                        UZ: "Bolajon bugun juda yaxshi kayfiyatda bo'ldi, harorati joyida...",
                        EN: "The child was in a very good mood today, temperature normal...",
                        RU: "Ребенок сегодня был в отличном настроении, температура в норме..."
                      }[language]}
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-xs font-bold focus:bg-white outline-none min-h-[100px]"
                    />
                  </div>

                  <button className="px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-colors w-full">
                    {{
                      UZ: "Saqlash & Chop etish",
                      EN: "Save & Publish Entry",
                      RU: "Сохранить и опубликовать"
                    }[language]}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* List journal logs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {journals.map((log) => (
                <div key={log.id} className="bg-white rounded-[2.5rem] border border-black/5 shadow-lg p-8 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-black/[0.03]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                        <Baby className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-base">{log.childName}</h4>
                        <span className="text-[10px] text-slate-400 font-bold">{log.date}</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl">
                      {log.loggedBy}
                    </span>
                  </div>

                  {/* Journal metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-orange-50/50 p-4 rounded-2xl space-y-1">
                      <Coffee className="w-5 h-5 text-orange-500" />
                      <h5 className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Ovqat</h5>
                      <p className="text-xs text-slate-800 font-bold leading-relaxed truncate">{log.meals}</p>
                    </div>
                    <div className="bg-purple-50/50 p-4 rounded-2xl space-y-1">
                      <Moon className="w-5 h-5 text-purple-500" />
                      <h5 className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Uyqu</h5>
                      <p className="text-xs text-slate-800 font-bold leading-relaxed truncate">{log.sleep}</p>
                    </div>
                    <div className="bg-blue-50/50 p-4 rounded-2xl space-y-1">
                      <Compass className="w-5 h-5 text-blue-500" />
                      <h5 className="text-[9px] font-black uppercase text-slate-400 tracking-wider">O'yinlar</h5>
                      <p className="text-xs text-slate-800 font-bold leading-relaxed truncate">{log.activities}</p>
                    </div>
                  </div>

                  {/* Media attachment simulation */}
                  <div className="space-y-3">
                    <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Kunning qiziqarli lahzalari (Media)</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {log.media.map((img, index) => (
                        <div key={index} className="aspect-video rounded-2xl overflow-hidden border border-black/5 bg-slate-50 relative group">
                          <img src={img} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs font-medium leading-relaxed bg-slate-50 p-5 rounded-2xl border border-black/[0.01]">
                    <span className="font-black text-slate-800 block mb-1">Eslatma:</span>
                    {log.note}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 3. CLASSIFIED ADS & PROMO SECTION */}
        {activeTab === 'ads' && (
          <div className="space-y-8">
            
            {/* Header intro */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 p-8 sm:p-12 rounded-[3rem] border border-blue-100">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex p-3 bg-white text-blue-500 rounded-2xl shadow-sm">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.adsTitle}</h2>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{t.adsDesc}</p>
              </div>
              <button 
                onClick={() => setIsAddAdOpen(true)}
                className="flex items-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/10 active:scale-95 transition-all self-start md:self-center shrink-0"
              >
                <Plus className="w-4 h-4" />
                {t.newAdBtn}
              </button>
            </div>

            {/* Grid listings of baby products & ads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ads.map((ad) => (
                <div key={ad.id} className="bg-white rounded-[2.5rem] border border-black/5 p-3.5 shadow-lg flex flex-col justify-between group">
                  <div className="space-y-3.5">
                    <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-100 border border-black/5">
                      <img src={ad.image} alt={ad.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      {ad.isPromo && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-black uppercase tracking-wider text-[7px] px-2.5 py-1 rounded-lg shadow">
                          TAVSIYA ETILADI (PROMO)
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg">
                        {ad.category}
                      </div>
                    </div>

                    <div className="px-1.5 space-y-1">
                      <h4 className="font-black text-[14px] text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-500 transition-colors">
                        {ad.title}
                      </h4>
                      <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-medium">{ad.description}</p>
                    </div>
                  </div>

                  <div className="px-1.5 pt-4 mt-4 border-t border-black/[0.03] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase block">Narxi</span>
                      <span className="text-[15px] font-black text-slate-900">{ad.price.toLocaleString()} UZS</span>
                    </div>
                    <button 
                      onClick={() => launchPayment(ad.price, ad.title)}
                      className="px-4.5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/10 active:scale-95 transition-all"
                    >
                      Sotib olish
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* 4. PARENTS BLOG MODULE */}
        {activeTab === 'blog' && (
          <div className="space-y-8">
            
            {/* Header intro */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-br from-amber-50 to-orange-50/50 p-8 sm:p-12 rounded-[3rem] border border-amber-100">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex p-3 bg-white text-amber-500 rounded-2xl shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{t.blogTitle}</h2>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{t.blogDesc}</p>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SAMPLE_BLOGS.map((blog) => (
                <div key={blog.id} className="bg-white rounded-[2.5rem] border border-black/5 overflow-hidden shadow-xl flex flex-col md:flex-row group">
                  <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-slate-100">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                  <div className="p-8 w-full md:w-3/5 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime} o'qiladi</span>
                      </div>
                      <h4 className="font-black text-lg text-slate-900 group-hover:text-amber-500 transition-colors line-clamp-2 leading-snug">
                        {blog.title}
                      </h4>
                      <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed font-medium">{blog.summary}</p>
                    </div>

                    <div className="pt-4 border-t border-black/[0.03] flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-amber-600">{blog.author}</span>
                      <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-50 hover:text-amber-500 transition-colors border border-black/5">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* ----------------- EMERGENCY SOS COUNTDOWN & MATCH MODAL ----------------- */}
      <AnimatePresence>
        {isSosOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white rounded-[3rem] w-full max-w-lg shadow-3xl p-10 text-center relative overflow-hidden border border-black/5"
            >
              {/* Close SOS */}
              <button 
                onClick={() => setIsSosOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dynamic Steps rendering */}
              {sosStep === 'searching' && (
                <div className="py-10 space-y-8">
                  <div className="w-24 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto animate-pulse relative">
                    <ShieldAlert className="w-10 h-10 animate-ping absolute" />
                    <ShieldAlert className="w-12 h-12 relative z-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Shoshilinch Qidiruv...</h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto font-medium">
                      GPS orqali uyingizga eng yaqin (500 metr masofadagi) navbatchi va tasdiqlangan professional enagalarga xabar yuborilmoqda.
                    </p>
                  </div>
                  <div className="flex justify-center gap-1.5 pt-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-0" />
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-150" />
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              )}

              {sosStep === 'found' && sosNanny && (
                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className="inline-flex px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
                      Sizga Yaqin Eng Yaxshi Enaga Topildi!
                    </div>
                    <div className="relative w-28 h-28 mx-auto">
                      <img src={sosNanny.images[0]} alt="" className="w-full h-full rounded-[2rem] object-cover border-4 border-white shadow-2xl" />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="font-black text-xl text-slate-900 mt-4">{sosNanny.name}</h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">Masofa: uyingizdan 350 metr • Tajriba: {sosNanny.experienceYears} yil</p>
                  </div>

                  {/* Pricing brief */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-black/[0.02]">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-500 uppercase tracking-wider">Soatbay narxi</span>
                      <span className="font-black text-slate-900">{sosNanny.hourlyRate.toLocaleString()} UZS / soat</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button 
                      onClick={() => setIsSosOpen(false)}
                      className="py-4.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-colors"
                    >
                      Rad etish
                    </button>
                    <button 
                      onClick={confirmSosBooking}
                      className="py-4.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                    >
                      Chaqirish (Buyurtma)
                    </button>
                  </div>
                </div>
              )}

              {sosStep === 'booked' && (
                <div className="py-8 space-y-6">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Enaga Yo'lga Chiqdi!</h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto font-medium">
                      {sosNanny?.name} buyurtmani qabul qildi. Hozirda barcha zaruriy ma'lumotlar bilan uyingiz tomonga yo'l oldi.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-5 rounded-2xl border border-black/[0.01]">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-500">Yetib kelish vaqti</span>
                      <span className="font-black text-emerald-600 uppercase tracking-widest">~ 15 Daqiqa</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsSosOpen(false)}
                    className="w-full py-4.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-colors"
                  >
                    Kuzatishni boshlash (Xaritada)
                  </button>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------- SECURE SSL PAYMENT SIMULATOR MODAL ----------------- */}
      <AnimatePresence>
        {isPaymentOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[320] bg-black/50 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white rounded-[3rem] w-full max-w-lg shadow-3xl p-8 relative overflow-hidden border border-black/5"
            >
              {/* Close Payment */}
              <button 
                onClick={() => setIsPaymentOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              {paymentStep === 'form' && (
                <form onSubmit={handlePaySubmit} className="space-y-6">
                  <div className="text-center space-y-1">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-2">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Xavfsiz Onlayn To'lov</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-tight">{paymentPurpose}</p>
                    <p className="text-3xl font-black text-slate-900 pt-2">{amountFormated(paymentAmount)} UZS</p>
                  </div>

                  {/* Card input details */}
                  <div className="space-y-3">
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
                          setCardNumber(v);
                        }}
                        placeholder="Karta raqami (Uzcard, Humo, Visa)" 
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 rounded-xl border border-black/5 text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\//g, '').replace(/(\d{2})/g, '$1/').replace(/\/$/, '').trim();
                          setCardExpiry(v);
                        }}
                        placeholder="Muddati (MM/YY)" 
                        className="px-5 py-4 bg-slate-50 rounded-xl border border-black/5 text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                      <input 
                        type="password" 
                        maxLength={3}
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="CVV/CVC" 
                        className="px-5 py-4 bg-slate-50 rounded-xl border border-black/5 text-xs font-bold focus:bg-white outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* SSL Assurance banner */}
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-50 p-4 rounded-xl border border-black/[0.01]">
                    <ShieldAlert className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-[10px] font-bold leading-normal">
                      SSL Bank Shifrlash tizimi. Ushbu to'lov 100% xavfsiz va faqat kelishilgan vaqtda enaga hisobiga o'tkaziladi.
                    </p>
                  </div>

                  <button className="w-full py-4.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                    Tasdiqlash & To'lash
                  </button>
                </form>
              )}

              {paymentStep === 'processing' && (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-lg">Bank Tranzaksiyasi...</h4>
                    <p className="text-slate-400 text-xs font-medium">To'lov xavfsiz kanallar orqali tekshirilmoqda. Iltimos, sahifani yopmang.</p>
                  </div>
                </div>
              )}

              {paymentStep === 'success' && (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-xl">To'lov Muvaffaqiyatli Bajarildi!</h4>
                    <p className="text-slate-400 text-xs font-medium">To'lov kvitansiyasi elektron pochtangizga yuborildi.</p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-black/[0.01] text-left space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-400">To'lov Maqsadi</span>
                      <span className="font-black text-slate-900 truncate max-w-[200px]">{paymentPurpose}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-slate-400">Tranzaksiya ID</span>
                      <span className="font-mono text-slate-500">TXN_{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-black/[0.03]">
                      <span className="font-bold text-slate-400">O'tkazilgan Summa</span>
                      <span className="font-black text-emerald-600">{amountFormated(paymentAmount)} UZS</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsPaymentOpen(false)}
                    className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors"
                  >
                    Yopish
                  </button>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------- RENDER MODALS (Details and Login) ----------------- */}
      <AnimatePresence>
        {selectedNanny && (
          <PlaceDetail 
            place={selectedNanny}
            isFavorite={favorites.includes(selectedNanny.id)}
            onToggleFavorite={() => handleToggleFavorite(selectedNanny.id)}
            onClose={() => setSelectedNanny(null)}
            language={language}
          />
        )}
      </AnimatePresence>

      <ProfileModal 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        currentUser={currentUser}
        language={language}
        onLogin={(user) => {
          setCurrentUser(user);
          setIsProfileOpen(false);
          setNotifications(prev => [
            {
              UZ: `KIDDOO tizimiga xush kelibsiz, ${user.name}!`,
              EN: `Welcome to KIDDOO, ${user.name}!`,
              RU: `Добро пожаловать в KIDDOO, ${user.name}!`
            }[language],
            ...prev
          ]);
        }}
        onLogout={() => {
          setCurrentUser(null);
          setIsProfileOpen(false);
          setNotifications(prev => [
            {
              UZ: "Siz profil tizimidan muvaffaqiyatli chiqdingiz.",
              EN: "You have successfully logged out.",
              RU: "Вы успешно вышли из системы."
            }[language],
            ...prev
          ]);
        }}
      />

      {/* Classified Ad creation popup */}
      <AnimatePresence>
        {isAddAdOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/40 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white rounded-[3rem] w-full max-w-lg shadow-3xl p-8 relative overflow-hidden border border-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsAddAdOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <form onSubmit={handleAddAdSubmit} className="space-y-4">
                <div className="text-center space-y-1 mb-2">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {{
                      UZ: "Yangi E'lon/Reklama Joylash",
                      EN: "Post a New Classified Ad",
                      RU: "Подать новое объявление"
                    }[language]}
                  </h3>
                  <p className="text-xs text-slate-400 font-bold">
                    {{
                      UZ: "Mahsulot yoki xizmatlaringizni ota-onalarga soting",
                      EN: "Sell your products or services to trusted parents",
                      RU: "Продавайте свои товары или услуги родителям"
                    }[language]}
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                    {{
                      UZ: "E'lon Sarlavhasi",
                      EN: "Ad Title",
                      RU: "Заголовок объявления"
                    }[language]}
                  </label>
                  <input 
                    type="text" 
                    value={newAdTitle}
                    onChange={(e) => setNewAdTitle(e.target.value)}
                    placeholder={{
                      UZ: "Masalan: Montessori rivojlantiruvchi o'yinchoq",
                      EN: "e.g., Montessori educational wooden toy",
                      RU: "Например: Развивающая игрушка Монтессори"
                    }[language]}
                    className="w-full px-4 py-3 bg-slate-50 border border-black/5 rounded-xl text-xs font-bold outline-none focus:bg-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                      {{
                        UZ: "Kategoriya",
                        EN: "Category",
                        RU: "Категория"
                      }[language]}
                    </label>
                    <select 
                      value={newAdCategory}
                      onChange={(e) => setNewAdCategory(e.target.value as any)}
                      className="w-full px-4 py-3 bg-slate-50 border border-black/5 rounded-xl text-xs font-bold outline-none focus:bg-white"
                    >
                      <option value="O'yinchoqlar">
                        {{
                          UZ: "O'yinchoqlar",
                          EN: "Toys",
                          RU: "Игрушки"
                        }[language]}
                      </option>
                      <option value="Kiyimlar">
                        {{
                          UZ: "Kiyimlar",
                          EN: "Clothing",
                          RU: "Одежда"
                        }[language]}
                      </option>
                      <option value="Ta'lim">
                        {{
                          UZ: "Ta'lim",
                          EN: "Education",
                          RU: "Обучение"
                        }[language]}
                      </option>
                      <option value="Sog'liqni saqlash">
                        {{
                          UZ: "Sog'liqni saqlash",
                          EN: "Health",
                          RU: "Здоровье"
                        }[language]}
                      </option>
                      <option value="Chaqaloqlar">
                        {{
                          UZ: "Chaqaloqlar",
                          EN: "Babies",
                          RU: "Младенцы"
                        }[language]}
                      </option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                      {{
                        UZ: "Narxi (UZS)",
                        EN: "Price (UZS)",
                        RU: "Цена (сум)"
                      }[language]}
                    </label>
                    <input 
                      type="number" 
                      value={newAdPrice}
                      onChange={(e) => setNewAdPrice(e.target.value)}
                      placeholder="150000" 
                      className="w-full px-4 py-3 bg-slate-50 border border-black/5 rounded-xl text-xs font-bold outline-none focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                    {{
                      UZ: "Aloqa Telefoni",
                      EN: "Contact Phone",
                      RU: "Контактный телефон"
                    }[language]}
                  </label>
                  <input 
                    type="tel" 
                    value={newAdPhone}
                    onChange={(e) => setNewAdPhone(e.target.value)}
                    placeholder="+998 90..." 
                    className="w-full px-4 py-3 bg-slate-50 border border-black/5 rounded-xl text-xs font-bold outline-none focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 px-1">
                    {{
                      UZ: "Tavsif",
                      EN: "Description",
                      RU: "Описание"
                    }[language]}
                  </label>
                  <textarea 
                    value={newAdDesc}
                    onChange={(e) => setNewAdDesc(e.target.value)}
                    placeholder={{
                      UZ: "Mahsulot yoki xizmat haqida batafsil yozing...",
                      EN: "Describe your product or service in detail...",
                      RU: "Подробно опишите ваш товар или услугу..."
                    }[language]}
                    className="w-full px-4 py-3 bg-slate-50 border border-black/5 rounded-xl text-xs font-bold outline-none focus:bg-white min-h-[80px]"
                  />
                </div>

                <button className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/10 active:scale-95 transition-all">
                  {{
                    UZ: "E'lonni chop etish",
                    EN: "Post Ad Now",
                    RU: "Опубликовать объявление"
                  }[language]}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
