import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, Lock, ArrowRight, ShieldCheck, UserCircle, LogOut, FileText, Upload, Award, Plus, Calendar, Star, Smile, Sparkles, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { User as UserType } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserType | null;
  onLogin: (user: UserType) => void;
  onLogout: () => void;
  language?: 'UZ' | 'EN' | 'RU';
}

type AuthMode = 'LOGIN' | 'REGISTER';

export default function ProfileModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onLogin, 
  onLogout,
  language = 'UZ'
}: ProfileModalProps) {
  const [mode, setMode] = useState<AuthMode>('LOGIN');
  const [userRole, setUserRole] = useState<'PARENT' | 'NANNY'>('PARENT');
  
  // Registration Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('3');
  const [rate, setRate] = useState('40000');

  // Translations
  const tP = {
    UZ: {
      welcome: "Xush Kelibsiz!",
      community: "KIDDOO Jamiyati",
      findBest: "Bolangiz uchun eng yaxshi enagani toping",
      createProfile: "Keling, siz uchun profil yarataylik",
      parent: "Ota-onaman",
      nanny: "Enagaman",
      fullName: "To'liq ism-sharfingiz",
      emailAddr: "Email manzili",
      phoneNum: "Telefon raqami (masalan: +998...)",
      createPass: "Parol yaratish",
      expYears: "Tajriba (yillar)",
      hourlyPrice: "Soatlik narxi (Sum)",
      loginBtn: "Tizimga kirish",
      registerBtn: "Hisobni ro'yxatdan o'tkazish",
      noAccount: "Hisobingiz yo'qmi? Ro'yxatdan o'ting",
      hasAccount: "Hisobingiz bormi? Kirish",
      caringParent: "G'amxo'r Ota-ona",
      trustedNanny: "Ishonchli Professional Enaga",
      experienceLabel: "Tajriba",
      ratePerHour: "Narxi / soat",
      ratingLabel: "Reyting",
      myChildren: "Farzandlarim Profillari",
      addBtn: "Qo'shish",
      childName: "Ismi",
      childAge: "Yoshi (masalan: 3 yosh)",
      childNotes: "Eslatma (masalan: allergiya, xarakter)",
      addChildBtn: "Farzandni qo'shish",
      yearsSuffix: "yosh",
      docsTitle: "Hujjatlar & Sertifikatlar (Tasdiqlash uchun)",
      uploadTitle: "Kattalashtirish yoki fayl yuklash",
      uploadDesc: "Diplom, sertifikat, pasport skani yoki tavsiyanomalar (PDF, JPG, PNG)",
      verifiedBadge: "Tasdiqlandi",
      personalInfo: "Shaxsiy Ma'lumotlar",
      cityLabel: "Shahar",
      tashkent: "Toshkent",
      logoutBtn: "Tizimdan Chiqish",
      classSuffix: "Sinf: A+"
    },
    EN: {
      welcome: "Welcome Back!",
      community: "KIDDOO Community",
      findBest: "Find the best babysitter for your beloved child",
      createProfile: "Let's create an account for you",
      parent: "I am a Parent",
      nanny: "I am a Sitter",
      fullName: "Your full name",
      emailAddr: "Email address",
      phoneNum: "Phone number (e.g. +998...)",
      createPass: "Create password",
      expYears: "Experience (years)",
      hourlyPrice: "Hourly rate (UZS)",
      loginBtn: "Log In",
      registerBtn: "Register Account",
      noAccount: "Don't have an account? Sign Up",
      hasAccount: "Already have an account? Log In",
      caringParent: "Caring Parent",
      trustedNanny: "Trusted Professional Sitter",
      experienceLabel: "Experience",
      ratePerHour: "Rate / hour",
      ratingLabel: "Rating",
      myChildren: "My Children's Profiles",
      addBtn: "Add",
      childName: "Name",
      childAge: "Age (e.g., 3 years old)",
      childNotes: "Notes (allergies, quirks, favorites)",
      addChildBtn: "Add Child",
      yearsSuffix: "yo",
      docsTitle: "Documents & Certificates (For verification)",
      uploadTitle: "Click or drag files here to upload",
      uploadDesc: "Diplomas, certificates, passport scans, or reference letters (PDF, JPG, PNG)",
      verifiedBadge: "Verified",
      personalInfo: "Personal Information",
      cityLabel: "City",
      tashkent: "Tashkent",
      logoutBtn: "Log Out",
      classSuffix: "Class: A+"
    },
    RU: {
      welcome: "Добро пожаловать!",
      community: "Сообщество KIDDOO",
      findBest: "Найдите лучшую няню для вашего малыша",
      createProfile: "Давайте создадим профиль для вас",
      parent: "Я родитель",
      nanny: "Я няня",
      fullName: "Полное имя и фамилия",
      emailAddr: "Электронная почта",
      phoneNum: "Номер телефона (например: +998...)",
      createPass: "Создать пароль",
      expYears: "Опыт работы (лет)",
      hourlyPrice: "Почасовая ставка (сум)",
      loginBtn: "Войти в систему",
      registerBtn: "Зарегистрировать аккаунт",
      noAccount: "Нет аккаунта? Зарегистрируйтесь",
      hasAccount: "Уже есть аккаунт? Войти",
      caringParent: "Заботливый родитель",
      trustedNanny: "Профессиональная няня",
      experienceLabel: "Опыт",
      ratePerHour: "Ставка / час",
      ratingLabel: "Рейтинг",
      myChildren: "Профили моих детей",
      addBtn: "Добавить",
      childName: "Имя ребенка",
      childAge: "Возраст (например: 3 года)",
      childNotes: "Примечания (аллергия, характер, привычки)",
      addChildBtn: "Добавить ребенка",
      yearsSuffix: "г/лет",
      docsTitle: "Документы и сертификаты (Для подтверждения)",
      uploadTitle: "Нажмите или перетащите файлы для загрузки",
      uploadDesc: "Дипломы, сертификаты, скан паспорта или рекомендации (PDF, JPG, PNG)",
      verifiedBadge: "Подтверждено",
      personalInfo: "Личные данные",
      cityLabel: "Город",
      tashkent: "Ташкент",
      logoutBtn: "Выйти из системы",
      classSuffix: "Класс: A+"
    }
  }[language];

  // Simulation Upload States
  const [uploadedCertificates, setUploadedCertificates] = useState<string[]>([
    'TDPU Pedagogika Diplomi.pdf',
    'Birinchi_Yordam_Sertifikati_Qizil_Xoch.png'
  ]);
  const [isDragging, setIsDragging] = useState(false);
  
  // Parent children profile states
  const [children, setChildren] = useState<{name: string, age: string, notes: string}[]>([]);

  // Seed default child profile based on language
  useEffect(() => {
    if (language === 'EN') {
      setChildren([
        { name: 'Jasur', age: '2 years old', notes: 'Allergic to dairy products' }
      ]);
    } else if (language === 'RU') {
      setChildren([
        { name: 'Джасур', age: '2 года', notes: 'Аллергия на молочные продукты' }
      ]);
    } else {
      setChildren([
        { name: 'Jasurbek', age: '2 yosh', notes: 'Sutli taomlarga allergiyasi bor' }
      ]);
    }
  }, [language]);

  const [newChildName, setNewChildName] = useState('');
  const [newChildAge, setNewChildAge] = useState('');
  const [newChildNotes, setNewChildNotes] = useState('');
  const [showAddChild, setShowAddChild] = useState(false);

  // Auth Handler
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser: UserType = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: name || (userRole === 'PARENT' ? (language === 'RU' ? 'Олимова Гульноза' : language === 'EN' ? 'Gulnoza Olimova' : 'Olimova Gulnoza') : (language === 'RU' ? 'Зиёдова Наргиза' : language === 'EN' ? 'Nargiza Ziyodova' : 'Ziyodova Nargiza')),
      email: email || 'user@kiddo.uz',
      phone: phone || '+998 90 912 34 56',
      role: userRole,
      avatar: userRole === 'PARENT' 
        ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
        : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
      isVerified: true,
      rating: userRole === 'NANNY' ? 4.9 : undefined,
      reviewsCount: userRole === 'NANNY' ? 14 : undefined,
      experienceYears: userRole === 'NANNY' ? Number(experience) : undefined,
      hourlyRate: userRole === 'NANNY' ? Number(rate) : undefined,
      languages: ['O\'zbekcha', 'Ruscha'],
      availability: ['Dushanba', 'Chorshanba', 'Juma']
    };
    onLogin(mockUser);
  };

  // Drag and Drop Simulator
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files) as File[];
      const fileNames = files.map(f => f.name);
      setUploadedCertificates(prev => [...prev, ...fileNames]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files) as File[];
      const fileNames = files.map(f => f.name);
      setUploadedCertificates(prev => [...prev, ...fileNames]);
    }
  };

  const handleAddChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (newChildName && newChildAge) {
      setChildren(prev => [...prev, { name: newChildName, age: newChildAge, notes: newChildNotes }]);
      setNewChildName('');
      setNewChildAge('');
      setNewChildNotes('');
      setShowAddChild(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/50 backdrop-blur-lg"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="w-full max-w-xl bg-white rounded-[3rem] shadow-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto no-scrollbar border border-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-950 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {!currentUser ? (
              <div className="p-8 sm:p-12 space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                  <div className="inline-flex p-3 bg-pink-100 text-pink-500 rounded-3xl animate-bounce mb-2">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
                    {mode === 'LOGIN' ? tP.welcome : tP.community}
                  </h2>
                  <p className="text-slate-400 font-bold text-sm">
                    {mode === 'LOGIN' ? tP.findBest : tP.createProfile}
                  </p>
                </div>

                {/* Role Toggle */}
                <div className="flex p-2 bg-slate-100 rounded-2xl relative">
                  <button
                    onClick={() => setUserRole('PARENT')}
                    className={cn(
                      "flex-1 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                      userRole === 'PARENT' ? "bg-white text-pink-500 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <Smile className="w-4 h-4" />
                    {tP.parent}
                  </button>
                  <button
                    onClick={() => setUserRole('NANNY')}
                    className={cn(
                      "flex-1 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                      userRole === 'NANNY' ? "bg-white text-emerald-500 shadow-sm" : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    {tP.nanny}
                  </button>
                </div>

                {/* Authentication Form */}
                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {mode === 'REGISTER' && (
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder={tP.fullName} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all outline-none"
                        required
                      />
                    </div>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder={tP.emailAddr} 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="tel" 
                      placeholder={tP.phoneNum} 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="password" 
                      placeholder={tP.createPass} 
                      className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-pink-500/20 transition-all outline-none"
                      required
                    />
                  </div>

                  {/* Additional Nanny fields for registration */}
                  {mode === 'REGISTER' && userRole === 'NANNY' && (
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 px-1">{tP.expYears}</label>
                        <input 
                          type="number" 
                          placeholder="Yil" 
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 px-1">{tP.hourlyPrice}</label>
                        <input 
                          type="number" 
                          placeholder="Sum" 
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                          className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <button className={cn(
                    "w-full py-5 rounded-2xl text-white font-black uppercase text-xs tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 mt-4",
                    userRole === 'PARENT' ? "glass-green" : "glass-blue"
                  )}>
                    {mode === 'LOGIN' ? tP.loginBtn : tP.registerBtn}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                {/* Switch Mode Button */}
                <div className="text-center pt-2">
                  <button 
                    onClick={() => setMode(mode === 'LOGIN' ? 'REGISTER' : 'LOGIN')}
                    className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-pink-500 transition-colors"
                  >
                    {mode === 'LOGIN' ? tP.noAccount : tP.hasAccount}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-0">
                {/* Profile Banner */}
                <div className={cn(
                  "p-8 pt-12 flex flex-col items-center text-center space-y-5 relative",
                  currentUser.role === 'PARENT' 
                    ? "bg-gradient-to-br from-pink-50/50 to-orange-50/70"
                    : "bg-gradient-to-br from-emerald-50/50 to-teal-50/70"
                )}>
                  <div className="relative">
                    <img 
                      src={currentUser.avatar} 
                      alt={currentUser.name} 
                      className="w-28 h-28 rounded-[2rem] object-cover border-4 border-white shadow-2xl"
                    />
                    {currentUser.isVerified && (
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-black/5">
                        <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{currentUser.name}</h3>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center justify-center gap-1.5">
                      {currentUser.role === 'PARENT' ? (
                        <>
                          <Smile className="w-4 h-4 text-pink-500" />
                          {tP.caringParent}
                        </>
                      ) : (
                        <>
                          <Award className="w-4 h-4 text-emerald-500" />
                          {tP.trustedNanny}
                        </>
                      )}
                    </p>
                  </div>

                  {currentUser.role === 'NANNY' && (
                    <div className="flex gap-8 bg-white/70 backdrop-blur px-8 py-3 rounded-2xl border border-white shadow-sm">
                      <div className="text-center">
                        <p className="text-sm font-black text-slate-900">{currentUser.experienceYears} {language === 'UZ' ? 'yil' : language === 'EN' ? 'yrs' : 'лет'}</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{tP.experienceLabel}</p>
                      </div>
                      <div className="w-px h-6 bg-slate-200 self-center" />
                      <div className="text-center">
                        <p className="text-sm font-black text-slate-900">{(currentUser.hourlyRate || 0).toLocaleString()} UZS</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{tP.ratePerHour}</p>
                      </div>
                      <div className="w-px h-6 bg-slate-200 self-center" />
                      <div className="text-center flex items-center flex-col">
                        <p className="text-sm font-black text-slate-900 flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          {currentUser.rating || '4.9'}
                        </p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{tP.ratingLabel}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile Body Options */}
                <div className="p-8 space-y-8">
                  
                  {/* Parent specific: Children profiles & management */}
                  {currentUser.role === 'PARENT' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{tP.myChildren}</h4>
                        <button 
                          onClick={() => setShowAddChild(!showAddChild)}
                          className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-pink-500 hover:text-pink-600 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          {tP.addBtn}
                        </button>
                      </div>

                      {showAddChild && (
                        <motion.form 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          onSubmit={handleAddChild}
                          className="bg-slate-50 rounded-2xl p-5 border border-black/[0.03] space-y-3"
                        >
                          <input 
                            type="text" 
                            placeholder={tP.childName} 
                            value={newChildName}
                            onChange={(e) => setNewChildName(e.target.value)}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-black/5 text-xs font-bold focus:outline-none"
                            required
                          />
                          <input 
                            type="text" 
                            placeholder={tP.childAge} 
                            value={newChildAge}
                            onChange={(e) => setNewChildAge(e.target.value)}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-black/5 text-xs font-bold focus:outline-none"
                            required
                          />
                          <input 
                            type="text" 
                            placeholder={tP.childNotes} 
                            value={newChildNotes}
                            onChange={(e) => setNewChildNotes(e.target.value)}
                            className="w-full px-4 py-3 bg-white rounded-xl border border-black/5 text-xs font-bold focus:outline-none"
                          />
                          <button className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-colors">
                            {tP.addChildBtn}
                          </button>
                        </motion.form>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {children.map((child, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-pink-50/30 to-orange-50/40 rounded-2xl p-5 border border-pink-100/40 flex items-start gap-3 relative shadow-inner">
                            <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                              <Smile className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <h5 className="font-black text-slate-800 text-sm">{child.name}</h5>
                              <p className="text-[10px] font-black uppercase tracking-wider text-pink-500">{child.age}</p>
                              {child.notes && (
                                <p className="text-xs text-slate-500 font-medium italic leading-snug">{child.notes}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Nanny specific: Certifications Upload Simulation */}
                  {currentUser.role === 'NANNY' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{tP.docsTitle}</h4>
                        <span className="text-[10px] bg-emerald-100 text-emerald-600 font-black uppercase px-2 py-1 rounded">{tP.classSuffix}</span>
                      </div>

                      {/* File upload drag zone */}
                      <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={cn(
                          "border-2 border-dashed rounded-[2rem] p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2",
                          isDragging 
                            ? "border-emerald-500 bg-emerald-50/40" 
                            : "border-slate-200 bg-slate-50/50 hover:border-emerald-400 hover:bg-emerald-50/10"
                        )}
                        onClick={() => document.getElementById('file-upload-input')?.click()}
                      >
                        <input 
                          type="file" 
                          id="file-upload-input" 
                          multiple 
                          className="hidden" 
                          onChange={handleFileSelect}
                        />
                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                          <Upload className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-black text-slate-700 uppercase tracking-tight">{tP.uploadTitle}</p>
                        <p className="text-[10px] text-slate-400 font-bold">{tP.uploadDesc}</p>
                      </div>

                      {/* Uploaded items */}
                      <div className="space-y-2">
                        {uploadedCertificates.map((cert, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-100 p-4 rounded-xl group hover:border-emerald-200 hover:bg-white transition-all">
                            <div className="flex items-center gap-3">
                              <FileText className="w-4 h-4 text-emerald-500" />
                              <span className="text-xs font-bold text-slate-800 truncate max-w-[200px] sm:max-w-xs">{cert}</span>
                            </div>
                            <span className="text-[8px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 px-2.5 py-1 rounded-full flex items-center gap-1">
                              {tP.verifiedBadge}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* General Profile Info List */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{tP.personalInfo}</h4>
                    <div className="bg-slate-50 rounded-2xl p-5 space-y-4 border border-slate-100">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400 uppercase tracking-tight">Email</span>
                        <span className="font-black text-slate-900">{currentUser.email}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400 uppercase tracking-tight">Telefon</span>
                        <span className="font-black text-slate-900">{currentUser.phone}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-slate-400 uppercase tracking-tight">{tP.cityLabel}</span>
                        <span className="font-black text-slate-900">{currentUser.city || tP.tashkent}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action controls */}
                  <div className="pt-2 flex flex-col gap-3">
                    <button 
                      onClick={onLogout}
                      className="w-full flex items-center justify-between p-5 rounded-2xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                          <LogOut className="w-5 h-5 text-rose-500" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">{tP.logoutBtn}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
