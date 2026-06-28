import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Phone, Navigation, MapPin, X, Star, ShieldCheck, Award, MessageCircle, Video, Volume2, MicOff, CameraOff, Sparkles, Languages, Clock, User, CheckCircle2, CheckCircle } from 'lucide-react';
import { Nanny, Review } from '../types';
import { cn } from '../lib/utils';

interface PlaceDetailProps {
  place: Nanny; // mapping as place for compatibility
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  language?: 'UZ' | 'EN' | 'RU';
}

export default function PlaceDetail({ 
  place: nanny, 
  onClose, 
  isFavorite, 
  onToggleFavorite,
  language = 'UZ'
}: PlaceDetailProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const tD = {
    UZ: {
      back: "Orqaga qaytish",
      startChat: "Suhbat boshlash (Chat)",
      call: "Qo'ng'iroq qilish",
      videoMeeting: "Video uchrashuv",
      yearsExperience: "Yil Tajriba",
      docsVerified: "Hujjatlari tasdiqlangan",
      reviews: "sharh",
      perHour: "UZS / soatbay",
      aboutDetail: "Enaga haqida batafsil",
      qualifications: "Malaka va Ko'rsatkichlar",
      hourlyRateLabel: "Soatbay xizmat haqqi",
      profExperienceLabel: "Oliy kasbiy tajriba",
      commLanguagesLabel: "Muloqot tillari",
      preferredAgeLabel: "Afzal ko'rilgan yosh guruhi",
      availableDaysLabel: "Mavjud ish kunlari",
      personalRatingLabel: "Shaxsiy reyting",
      certificatesTitle: "Malaka Sertifikatlari & Diplomlar",
      verifiedDoc: "Tasdiqlangan hujjat",
      recommendationsTitle: "Ota-onalardan Tavsiyanomalar",
      certifiedRec: "Sertifikatlangan tavsiya",
      workArea: "Ish hududi va Joylashuv",
      searchArea: "Hududni qidirish...",
      find: "Topish",
      fullMap: "To'liq xarita",
      reviewsTitle: "Sharhlar",
      imagesCount: "rasm",
      safetyGuarantee: "KIDDOO Xavfsizlik Kafolati",
      safetyText: "KIDDOO platformasidagi barcha enagalarning shaxsi, tibbiy sog'ligi, ruhiy holati va sudlanmaganligi Ichki Ishlar va Sog'liqni Saqlash vazirliklari hamkorligida to'liq tekshirilgan.",
      insured: "100% Sug'urtalangan xizmatlar",
      online: "Onlayn",
      writeMsg: "Xabaringizni yozing...",
      calling: "Qo'ng'iroq qilinmoqda...",
      connected: "Bog'landi",
      callEnded: "Qo'ng'iroq yakunlandi",
      welcomeMsg: "Assalomu alaykum! Men " + nanny.name + " bo'laman. Farzandingiz tarbiyasida qanday yordam bera olaman?",
      replyGeneral: "Tushunarli. Men har bir bolaga individual yondashaman. Batafsil gaplashish uchun qo'ng'iroq qilsangiz ham bo'ladi!",
      replyPrice: `Mening soatbay xizmat haqqim ${nanny.hourlyRate.toLocaleString()} UZS. Haftalik yoki oylik kelishuv bo'lsa, yana ozgina chegirma qilib berishim mumkin.`,
      replyAddress: `Men ${nanny.location.city}da yashayman. To'liq manzilim: ${nanny.location.address}. Sizning uyingizga borib ishlashim ham mumkin.`,
      replyDays: `Men asosan ${nanny.availability.join(', ')} kunlarida ishlay olaman. Soat 09:00 dan 18:00 gacha bemalolman.`,
      replyExperience: `Mening ${nanny.experienceYears} yillik enalik tajribam bor. Profilimda tasdiqlangan pedagogik va tibbiy sertifikatlarimni ko'rishingiz mumkin.`,
      quickPrompts: [
        "Xizmat narxi qancha?",
        "Manzilingiz qayerda?",
        "Tajribangiz haqida so'ramoqchi edim",
        "Mavjud ish vaqtlaringiz qanday?"
      ],
      roleMap: {
        'Tibbiy Koordinatsiya': 'Tibbiy Koordinatsiya',
        'Oila repetitori': 'Oila repetitori',
        'Logoped-Defektolog': 'Logoped-Defektolog',
        'Mustaqil Enaga': 'Mustaqil Enaga'
      } as Record<string, string>,
      categories: {
        'Barchasi': 'Barchasi',
        'Chaqaloqlar (0-2 yosh)': 'Chaqaloqlar (0-2 yosh)',
        'Kichkintoylar (3-5 yosh)': 'Kichkintoylar (3-5 yosh)',
        'Maktab yoshi (6+ yosh)': 'Maktab yoshi (6+ yosh)',
        'Maxsus enagalar': 'Maxsus enagalar'
      } as Record<string, string>,
      langsMap: {
        'O\'zbekcha': 'O\'zbekcha',
        'Ruscha': 'Ruscha',
        'Inglizcha': 'Inglizcha'
      } as Record<string, string>
    },
    EN: {
      back: "Go Back",
      startChat: "Start Chat",
      call: "Make a Call",
      videoMeeting: "Video Call",
      yearsExperience: "Years Experience",
      docsVerified: "Documents Verified",
      reviews: "reviews",
      perHour: "UZS / hour",
      aboutDetail: "More About Babysitter",
      qualifications: "Qualifications & Metrics",
      hourlyRateLabel: "Hourly rate",
      profExperienceLabel: "Professional experience",
      commLanguagesLabel: "Communication languages",
      preferredAgeLabel: "Preferred age group",
      availableDaysLabel: "Available work days",
      personalRatingLabel: "Personal rating",
      certificatesTitle: "Certificates & Diplomas",
      verifiedDoc: "Verified document",
      recommendationsTitle: "Parent Recommendations",
      certifiedRec: "Certified recommendation",
      workArea: "Work Area & Location",
      searchArea: "Search area...",
      find: "Find",
      fullMap: "Full map",
      reviewsTitle: "Reviews",
      imagesCount: "images",
      safetyGuarantee: "KIDDOO Safety Guarantee",
      safetyText: "The identity, medical health, mental state, and background of all babysitters on the KIDDOO platform are thoroughly verified in cooperation with Ministries of Health & Internal Affairs.",
      insured: "100% Insured Services",
      online: "Online",
      writeMsg: "Write a message...",
      calling: "Calling...",
      connected: "Connected",
      callEnded: "Call ended",
      welcomeMsg: "Hello! I am " + nanny.name + ". How can I help you with your childcare needs?",
      replyGeneral: "Understood. I approach every child individually. Feel free to call me so we can discuss details!",
      replyPrice: `My hourly rate is ${nanny.hourlyRate.toLocaleString()} UZS. If we agree on a weekly or monthly commitment, I can offer a discount.`,
      replyAddress: `I live in ${nanny.location.city_en || nanny.location.city}. Full address: ${nanny.location.address_en || nanny.location.address}. I can also travel to your home to work.`,
      replyDays: `I can work mainly on these days: ${nanny.availability.map(d => d.replace('Dushanba', 'Mon').replace('Seshanba', 'Tue').replace('Chorshanba', 'Wed').replace('Payshanba', 'Thu').replace('Juma', 'Fri').replace('Shanba', 'Sat').replace('Yakshanba', 'Sun')).join(', ')}. I'm free from 9:00 AM to 6:00 PM.`,
      replyExperience: `I have ${nanny.experienceYears} years of childcare experience. You can view my verified pedagogical and medical certificates on my profile.`,
      quickPrompts: [
        "How much is the rate?",
        "Where are you located?",
        "Tell me about your experience",
        "What is your available work time?"
      ],
      roleMap: {
        'Tibbiy Koordinatsiya': 'Medical Coordination',
        'Oila repetitori': 'Family Tutor',
        'Logoped-Defektolog': 'Speech Therapist',
        'Mustaqil Enaga': 'Independent Sitter'
      } as Record<string, string>,
      categories: {
        'Barchasi': 'All',
        'Chaqaloqlar (0-2 yosh)': 'Infants (0-2 yo)',
        'Kichkintoylar (3-5 yosh)': 'Toddlers (3-5 yo)',
        'Maktab yoshi (6+ yosh)': 'School age (6+ yo)',
        'Maxsus enagalar': 'Special Sitters'
      } as Record<string, string>,
      langsMap: {
        'O\'zbekcha': 'Uzbek',
        'Ruscha': 'Russian',
        'Inglizcha': 'English'
      } as Record<string, string>
    },
    RU: {
      back: "Назад",
      startChat: "Начать чат",
      call: "Позвонить",
      videoMeeting: "Видеозвонок",
      yearsExperience: "Лет опыта",
      docsVerified: "Документы проверены",
      reviews: "отзывов",
      perHour: "UZS / в час",
      aboutDetail: "Подробнее о няне",
      qualifications: "Квалификация и показатели",
      hourlyRateLabel: "Почасовая ставка",
      profExperienceLabel: "Профессиональный опыт",
      commLanguagesLabel: "Языки общения",
      preferredAgeLabel: "Предпочтительный возраст",
      availableDaysLabel: "Рабочие дни",
      personalRatingLabel: "Личный рейтинг",
      certificatesTitle: "Сертификаты и дипломы",
      verifiedDoc: "Проверенный документ",
      recommendationsTitle: "Рекомендации родителей",
      certifiedRec: "Сертифицированная рекомендация",
      workArea: "Рабочая зона и локация",
      searchArea: "Поиск района...",
      find: "Найти",
      fullMap: "Полная карта",
      reviewsTitle: "Отзывы",
      imagesCount: "фото",
      safetyGuarantee: "Гарантия безопасности KIDDOO",
      safetyText: "Личность, медицинское здоровье, психическое состояние и отсутствие судимости всех нянь на платформе KIDDOO были полностью проверены в сотрудничестве с МВД и Минздравом.",
      insured: "100% Застрахованные услуги",
      online: "Онлайн",
      writeMsg: "Напишите сообщение...",
      calling: "Идет вызов...",
      connected: "Соединено",
      callEnded: "Звонок завершен",
      welcomeMsg: "Здравствуйте! Я " + nanny.name + ". Как я могу помочь вам в воспитании и заботе о вашем ребенке?",
      replyGeneral: "Понимаю. Я подхожу к каждому ребенку индивидуально. Можете позвонить мне, чтобы обсудить все детали подробнее!",
      replyPrice: `Моя почасовая ставка составляет ${nanny.hourlyRate.toLocaleString()} UZS. При долгосрочном недельном или месячном соглашении могу сделать небольшую скидку.`,
      replyAddress: `Я живу в городе ${nanny.location.city_ru || nanny.location.city}. Полный адрес: ${nanny.location.address_ru || nanny.location.address}. Могу также работать с выездом к вам на дом.`,
      replyDays: `Я могу работать в основном в эти дни: ${nanny.availability.map(d => d.replace('Dushanba', 'Пн').replace('Seshanba', 'Вт').replace('Chorshanba', 'Ср').replace('Payshanba', 'Чт').replace('Juma', 'Пт').replace('Shanba', 'Сб').replace('Yakshanba', 'Вс')).join(', ')}. Свободна с 09:00 до 18:00.`,
      replyExperience: `У меня ${nanny.experienceYears} лет профессионального опыта няни. Все мои педагогические и медицинские сертификаты подтверждены и опубликованы в моем профиле.`,
      quickPrompts: [
        "Какова стоимость услуг?",
        "Где вы находитесь?",
        "Расскажите о вашем опыте",
        "Какое ваше рабочее время?"
      ],
      roleMap: {
        'Tibbiy Koordinatsiya': 'Медицинская координация',
        'Oila repetitori': 'Семейный репетитор',
        'Logoped-Defektolog': 'Логопед-дефектолог',
        'Mustaqil Enaga': 'Частная няня'
      } as Record<string, string>,
      categories: {
        'Barchasi': 'Все',
        'Chaqaloqlar (0-2 yosh)': 'Младенцы (0-2 года)',
        'Kichkintoylar (3-5 yosh)': 'Малыши (3-5 лет)',
        'Maktab yoshi (6+ yosh)': 'Школьники (6+ лет)',
        'Maxsus enagalar': 'Специальные няни'
      } as Record<string, string>,
      langsMap: {
        'O\'zbekcha': 'Узбекский',
        'Ruscha': 'Русский',
        'Inglizcha': 'Английский'
      } as Record<string, string>
    }
  }[language];
  
  // Interactive Chat Simulator
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{sender: 'parent' | 'nanny', text: string, time: string}[]>([
    { sender: 'nanny', text: tD.welcomeMsg, time: '11:45' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Interactive Call Simulator (Audio & Video)
  const [activeCallType, setActiveCallType] = useState<'audio' | 'video' | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const [callStatus, setCallStatus] = useState<'ringing' | 'connected' | 'ended'>('ringing');

  // Sync initial welcome message on language change
  useEffect(() => {
    setChatMessages([
      { sender: 'nanny', text: tD.welcomeMsg, time: '11:45' }
    ]);
  }, [language]);

  // Trigger call duration
  useEffect(() => {
    let timer: any;
    if (activeCallType && callStatus === 'connected') {
      timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      setCallDuration(0);
    }
    return () => clearInterval(timer);
  }, [activeCallType, callStatus]);

  // Handle auto responses
  useEffect(() => {
    if (chatMessages.length > 0 && chatMessages[chatMessages.length - 1].sender === 'parent') {
      const parentMsg = chatMessages[chatMessages.length - 1].text.toLowerCase();
      let replyText = tD.replyGeneral;
      
      const priceKeywords = ['narx', 'necha', 'pul', 'how much', 'rate', 'cost', 'цена', 'сколько', 'стоит'];
      const locationKeywords = ['manzil', 'qayer', 'uydami', 'where', 'location', 'live', 'адрес', 'где', 'живете'];
      const timeKeywords = ['vaqt', 'qachon', 'kun', 'time', 'days', 'when', 'время', 'дни', 'когда', 'часы'];
      const experienceKeywords = ['tajriba', 'sertifikat', 'diplom', 'experience', 'certificate', 'diploma', 'опыт', 'диплом', 'сертификат'];

      if (priceKeywords.some(kw => parentMsg.includes(kw))) {
        replyText = tD.replyPrice;
      } else if (locationKeywords.some(kw => parentMsg.includes(kw))) {
        replyText = tD.replyAddress;
      } else if (timeKeywords.some(kw => parentMsg.includes(kw))) {
        replyText = tD.replyDays;
      } else if (experienceKeywords.some(kw => parentMsg.includes(kw))) {
        replyText = tD.replyExperience;
      }

      const timer = setTimeout(() => {
        setChatMessages(prev => [...prev, {
          sender: 'nanny',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [chatMessages, nanny, language]);

  // Auto scroll to chat bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isChatOpen]);

  // Send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setChatMessages(prev => [...prev, {
      sender: 'parent',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setNewMessage('');
  };

  // Start Call Simulation
  const startCall = (type: 'audio' | 'video') => {
    setActiveCallType(type);
    setCallStatus('ringing');
    
    // Simulate connection after 2.5 seconds
    setTimeout(() => {
      setCallStatus('connected');
    }, 2500);
  };

  const endCall = () => {
    setCallStatus('ended');
    setTimeout(() => {
      setActiveCallType(null);
    }, 1000);
  };

  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const mappedCategory = tD.categories[nanny.category] || nanny.category;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-200 overflow-y-auto bg-slate-50/98 backdrop-blur-3xl pb-24"
    >
      {/* Top Navbar */}
      <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-black/[0.03] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-black uppercase text-xs tracking-wider transition-colors"
          >
            <X className="w-5 h-5" />
            {tD.back}
          </button>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={onToggleFavorite}
              className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 transition-all shadow-sm"
            >
              <Heart className={cn("w-5 h-5", isFavorite ? "text-red-500 fill-red-500" : "text-slate-500")} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 space-y-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          
          {/* Left Column: Info & Actions */}
          <div className="xl:col-span-7 space-y-10 order-2 xl:order-1">
            
            {/* Action Bar */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsChatOpen(true)}
                className="flex-1 min-w-[180px] bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-5 rounded-3xl font-black uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-pink-500" />
                {tD.startChat}
              </button>
              
              <button 
                onClick={() => startCall('audio')}
                className="flex-1 min-w-[180px] glass-green text-white px-8 py-5 rounded-3xl font-black uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone className="w-5 h-5 text-white" />
                {tD.call}
              </button>
              
              <button 
                onClick={() => startCall('video')}
                className="flex-1 min-w-[180px] glass-blue text-white px-8 py-5 rounded-3xl font-black uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Video className="w-5 h-5 text-white" />
                {tD.videoMeeting}
              </button>
            </div>

            {/* Category Tags */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-5 py-2.5 rounded-xl bg-pink-50 text-[10px] font-black uppercase tracking-widest text-pink-600">
                  {mappedCategory}
                </span>
                <span className="px-5 py-2.5 rounded-xl bg-emerald-50 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                  {nanny.experienceYears} {tD.yearsExperience}
                </span>
              </div>
              
              {nanny.isVerified && (
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{tD.docsVerified}</span>
                </div>
              )}
            </div>

            {/* Title, Name & Rating */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {nanny.name}
                </h1>
                <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-xl text-xs font-black">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  {nanny.rating} ({nanny.reviewsCount} {tD.reviews})
                </span>
              </div>
              <p className="text-3xl font-black text-slate-900">
                {nanny.hourlyRate.toLocaleString()} <span className="text-xl text-slate-400 font-bold uppercase">{tD.perHour}</span>
              </p>
            </div>

            {/* Descriptions */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-[2.5rem] border border-black/[0.03] shadow-sm space-y-4">
                <h3 className="text-lg font-black text-slate-950 flex items-center gap-2">
                  <User className="w-5 h-5 text-pink-500" />
                  {tD.aboutDetail}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {
                    language === 'EN'
                      ? (nanny.bio_en || nanny.bio)
                      : language === 'RU'
                        ? (nanny.bio_ru || nanny.bio)
                        : (nanny.bio_uz || nanny.bio)
                  }
                </p>
              </div>
              
              {/* Custom Details List */}
              <div className="space-y-4 pt-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{tD.qualifications}</h4>
                <div className="bg-white p-8 rounded-[2.5rem] border border-black/[0.03] shadow-sm space-y-4">
                  {[
                    { label: tD.hourlyRateLabel, value: `${nanny.hourlyRate.toLocaleString()} UZS` },
                    { label: tD.profExperienceLabel, value: `${nanny.experienceYears} ${language === 'UZ' ? 'yil' : language === 'EN' ? 'years' : 'лет'}` },
                    { label: tD.commLanguagesLabel, value: nanny.languages.map(l => tD.langsMap[l] || l).join(', ') },
                    { 
                      label: tD.preferredAgeLabel, 
                      value: language === 'EN' 
                        ? (nanny.ageGroupPreference_en || nanny.ageGroupPreference)
                        : language === 'RU'
                          ? (nanny.ageGroupPreference_ru || nanny.ageGroupPreference)
                          : (nanny.ageGroupPreference_uz || nanny.ageGroupPreference)
                    },
                    { 
                      label: tD.availableDaysLabel, 
                      value: nanny.availability.map(d => 
                        language === 'EN' 
                          ? d.replace('Dushanba', 'Mon').replace('Seshanba', 'Tue').replace('Chorshanba', 'Wed').replace('Payshanba', 'Thu').replace('Juma', 'Fri').replace('Shanba', 'Sat').replace('Yakshanba', 'Sun')
                          : language === 'RU'
                            ? d.replace('Dushanba', 'Пн').replace('Seshanba', 'Вт').replace('Chorshanba', 'Ср').replace('Payshanba', 'Чт').replace('Juma', 'Пт').replace('Shanba', 'Сб').replace('Yakshanba', 'Вс')
                            : d
                      ).join(', ') 
                    },
                    { label: tD.personalRatingLabel, value: `${nanny.rating} / 5.0` }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <span className="text-sm font-bold text-slate-500">{item.label}</span>
                      <div className="flex-1 mx-4 border-b border-dotted border-slate-200" />
                      <span className="text-sm font-black text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Credentials / Certificates */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{tD.certificatesTitle}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(language === 'EN' ? (nanny.certificates_en || nanny.certificates) : language === 'RU' ? (nanny.certificates_ru || nanny.certificates) : (nanny.certificates_uz || nanny.certificates)).map((cert, idx) => {
                  return (
                    <div key={idx} className="bg-gradient-to-br from-emerald-50/50 to-teal-50/40 border border-emerald-100 p-5 rounded-2xl flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-black text-slate-900 text-xs uppercase tracking-tight">{cert}</h5>
                        <p className="text-[10px] text-emerald-600 font-bold uppercase mt-1">{tD.verifiedDoc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations / Letters */}
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">{tD.recommendationsTitle}</h4>
              <div className="space-y-4">
                {nanny.recommendations.map((rec, idx) => {
                  let translatedRec = rec;
                  if (language === 'EN') {
                    translatedRec = rec
                      .replace('Shahlo A.: "Nargizaxon farzandlarim uchun shunchaki enaga emas, balki eng yaqin do\'st bo\'la oldi. Uni barcha ota-onalarga tavsiya etaman."', 'Shahlo A.: "Nargiza has been more than a babysitter for my children, she became their best friend. Highly recommend her."')
                      .replace('Nodira B.: "Dilbarxon juda tartibli va ma\'suliyatli enaga. Bolamizning gigiyenasi va rejimiga qattiq rioya qiladi."', 'Nodira B.: "Dilbar is extremely organized and responsible. Strictly follows child hygiene and sleep schedule."')
                      .replace('Komiljon K.: "O\'g\'limizning maktabga tayyorgarlik darslarida Madinaning pedagogik mahorati juda yordam berdi. Darslarni a\'lo o\'zlashtirdi."', 'Komiljon K.: "Madina\'s pedagogical skills helped immensely in preparing our son for school. Excellent progress."')
                      .replace('Dr. Natalya S.: "Dilnoza professional tibbiy enaga hisoblanadi. Murakkab vaziyatlarda tezkor va sovuqqon qaror qabul qila oladi."', 'Dr. Natalya S.: "Dilnoza is a professional medical nurse. Able to make quick and calm decisions in complex situations."')
                      .replace('Farrux K.: "O\'g\'limizning nutq rivojlanishida va jismoniy mashg\'ulotlarida Dilnozaning yordami beqiyos bo\'ldi."', 'Farrux K.: "Dilnoza\'s support in our son\'s speech development and physical activities was invaluable."')
                      .replace('Diyora M.: "Nargiza chaqalog\'imiz tug\'ilgan kundan boshlab uydagi eng katta yordamchimiz bo\'ldi. Chaqaloqni to\'g\'ri parvarishlashni o\'rgatdi."', 'Diyora M.: "Nargiza has been our helper since baby\'s birth. Taught us how to take care of a newborn properly."')
                      .replace('Shahzoda K.: "Zilola bolajonlarni juda tez o\'ziga jalb qiladi. Qizim uning kelishini intiqlik bilan kutadi."', 'Shahzoda K.: "Zilola attracts children very quickly. My daughter eagerly awaits her arrival."')
                      .replace('Sardor B.: "O\'g\'limizning maktabdagi baholari ancha yaxshilandi, dars qilishga bo\'lgan qiziqishi oshdi. Kamolaxon juda yaxshi ustoz."', 'Sardor B.: "Our son\'s school grades improved, and his interest in studying increased. Kamola is an excellent tutor."')
                      .replace('Mohira S.: "Umidaning mashg\'ulotlaridan so\'ng o\'g\'limiz 4 yoshida gapira boshladi. Haqiqiy o\'z kasbining ustasi!"', 'Mohira S.: "After Umida\'s therapy sessions, our son started talking at age 4. A true professional!"');
                  } else if (language === 'RU') {
                    translatedRec = rec
                      .replace('Shahlo A.: "Nargizaxon farzandlarim uchun shunchaki enaga emas, balki eng yaqin do\'st bo\'la oldi. Uni barcha ota-onalarga tavsiya etaman."', 'Шахло А.: "Наргиза стала не просто няней, но и лучшим другом для моих детей. Рекомендую ее всем родителям."')
                      .replace('Nodira B.: "Dilbarxon juda tartibli va ma\'suliyatli enaga. Bolamizning gigiyenasi va rejimiga qattiq rioya qiladi."', 'Нодира Б.: "Дильбар очень дисциплинированная и ответственная няня. Строго соблюдает гигиену и режим ребенка."')
                      .replace('Komiljon K.: "O\'g\'limizning maktabga tayyorgarlik darslarida Madinaning pedagogik mahorati juda yordam berdi. Darslarni a\'lo o\'zlashtirdi."', 'Комилжон К.: "Педагогическое мастерство Мадины очень помогло в подготовке нашего сына к школе. Уроки усвоены отлично."')
                      .replace('Dr. Natalya S.: "Dilnoza professional tibbiy enaga hisoblanadi. Murakkab vaziyatlarda tezkor va sovuqqon qaror qabul qila oladi."', 'Др. Наталья С.: "Дильноза является профессиональной медицинской няней. Способна принимать оперативные и хладнокровные решения."')
                      .replace('Farrux K.: "O\'g\'limizning nutq rivojlanishida va jismoniy mashg\'ulotlarida Dilnozaning yordami beqiyos bo\'ldi."', 'Фаррух К.: "Помощь Дильнозы в развитии речи и физических занятиях нашего сына была неоценимой."')
                      .replace('Diyora M.: "Nargiza chaqalog\'imiz tug\'ilgan kundan boshlab uydagi eng katta yordamchimiz bo\'ldi. Chaqaloqni to\'g\'ri parvarishlashni o\'rgatdi."', 'Диёра М.: "Наргиза была нашим самым большим помощником со дня рождения малыша. Научила правильному уходу за новорожденным."')
                      .replace('Shahzoda K.: "Zilola bolajonlarni juda tez o\'ziga jalb qiladi. Qizim uning kelishini intiqlik bilan kutadi."', 'Шахзода К.: "Зилола очень быстро находит подход к детям. Дочь с нетерпением ждет ее прихода."')
                      .replace('Sardor B.: "O\'g\'limizning maktabdagi baholari ancha yaxshilandi, dars qilishga bo\'lgan qiziqishi oshdi. Kamolaxon juda yaxshi ustoz."', 'Сардор Б.: "Оценки нашего сына в школе заметно улучшились, проявился интерес к учебе. Камола — прекрасный учитель."')
                      .replace('Mohira S.: "Umidaning mashg\'ulotlaridan so\'ng o\'g\'limiz 4 yoshida gapira boshladi. Haqiqiy o\'z kasbining ustasi!"', 'Мохира С.: "После занятий с Умидой наш сын заговорил в 4 года. Настоящий мастер своего дела!"');
                  }
                  return (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-black/[0.02] flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shrink-0 font-black text-xs">
                        {rec.charAt(0)}
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-bold text-slate-800 italic leading-relaxed">"{translatedRec}"</p>
                        <span className="text-[9px] font-black uppercase tracking-widest text-pink-500 block">{tD.certifiedRec}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Location */}
            <div className="space-y-6 pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black tracking-tight text-slate-900">{tD.workArea}</h3>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold">{nanny.location.city}, {nanny.location.address}</span>
                </div>
              </div>
              
              <div className="relative aspect-[16/7] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-black/5 shadow-xl group">
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
                  <div className="flex bg-white/95 backdrop-blur-md rounded-2xl p-1 pointer-events-auto shadow-lg max-w-sm border border-black/5">
                    <input type="text" placeholder={tD.searchArea} className="flex-1 px-4 py-2 bg-transparent text-xs font-bold focus:outline-none" />
                    <button className="glass-blue text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest">{tD.find}</button>
                  </div>
                  <div>
                    <button className="glass-blue text-white px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest pointer-events-auto shadow-lg">{tD.fullMap}</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-black text-slate-900">{tD.reviewsTitle} ({nanny.reviews.length})</h3>
              <div className="space-y-4">
                {nanny.reviews.map((rev) => {
                  let translatedComment = rev.comment;
                  if (language === 'EN') {
                    translatedComment = rev.comment_en || rev.comment;
                  } else if (language === 'RU') {
                    translatedComment = rev.comment_ru || rev.comment;
                  } else {
                    translatedComment = rev.comment_uz || rev.comment;
                  }
                  return (
                    <div key={rev.id} className="bg-white p-6 rounded-[2rem] border border-black/[0.03] shadow-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img src={rev.authorAvatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <h4 className="font-black text-xs text-slate-900">{rev.authorName}</h4>
                            <span className="text-[9px] text-slate-400 font-bold">{rev.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-lg text-[10px] font-black">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {rev.rating}
                        </div>
                      </div>
                      <p className="text-xs font-medium text-slate-600 leading-relaxed">{translatedComment}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Image Gallery & Agent Profile */}
          <div className="xl:col-span-5 space-y-8 order-1 xl:order-2">
            <div className="space-y-4">
              
              {/* Image Carousel (Guaranteed 5+ images) */}
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-black/5 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImageIdx}
                    src={nanny.images[activeImageIdx]} 
                    alt={nanny.name} 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Image Index Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-[10px] font-black text-white uppercase tracking-widest">
                  {activeImageIdx + 1} / {nanny.images.length} {tD.imagesCount}
                </div>
              </div>

              {/* Grid Indicator Bars */}
              <div className="grid grid-cols-5 gap-2">
                {nanny.images.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className="h-1.5 bg-slate-200 rounded-full overflow-hidden cursor-pointer"
                  >
                    {idx === activeImageIdx && (
                      <motion.div 
                        layoutId="active-bar-indicator"
                        className="h-full bg-pink-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2.5 overflow-x-auto pb-2 no-scrollbar">
                {nanny.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all",
                      idx === activeImageIdx ? "border-pink-500 scale-95 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Safety & Trust Banner */}
            <div className="bg-gradient-to-br from-pink-500/5 to-orange-500/5 border border-pink-500/10 p-8 rounded-[2.5rem] space-y-4">
              <div className="flex items-center gap-2 text-pink-500">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <h4 className="font-black text-xs uppercase tracking-wider">{tD.safetyGuarantee}</h4>
              </div>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">
                {tD.safetyText}
              </p>
              <div className="flex items-center gap-2 pt-2 text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="w-4 h-4" />
                {tD.insured}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ----------------- CHAT SIMULATOR MODAL ----------------- */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-250 bg-black/40 backdrop-blur-md flex items-end sm:items-center justify-center p-4"
          >
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-3xl overflow-hidden border border-black/5 flex flex-col h-[80vh] sm:h-[600px]"
            >
              {/* Chat Header */}
              <div className="p-5 border-b border-black/[0.03] flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={nanny.images[0]} alt="" className="w-10 h-10 rounded-xl object-cover" />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs text-slate-900">{nanny.name}</h4>
                    <span className="text-[9px] text-emerald-600 font-black uppercase tracking-widest">{tD.online}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4 no-scrollbar bg-slate-50/30">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "flex flex-col max-w-[80%] rounded-2xl p-4 text-xs font-medium relative shadow-sm",
                      msg.sender === 'parent' 
                        ? "bg-pink-500 text-white ml-auto rounded-tr-none" 
                        : "bg-white text-slate-800 mr-auto rounded-tl-none border border-black/[0.02]"
                    )}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className={cn("text-[8px] mt-1.5 block text-right opacity-60", msg.sender === 'parent' ? "text-white" : "text-slate-400")}>
                      {msg.time}
                    </span>
                  </div>
                ))}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Prompt Ideas */}
              <div className="px-5 py-2.5 border-t border-black/[0.02] flex gap-2 overflow-x-auto no-scrollbar bg-white">
                {tD.quickPrompts.map((idea, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      setChatMessages(prev => [...prev, {
                        sender: 'parent',
                        text: idea,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      }]);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-pink-50 hover:text-pink-600 text-slate-600 font-bold text-[10px] whitespace-nowrap transition-colors border border-black/[0.02]"
                  >
                    {idea}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-black/[0.03] flex gap-2">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={tD.writeMsg} 
                  className="flex-1 px-5 py-3.5 bg-slate-50 rounded-xl border border-black/5 text-xs font-bold focus:bg-white focus:outline-none transition-all"
                />
                <button type="submit" className="w-12 h-12 rounded-xl bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center transition-colors">
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ----------------- CALL SIMULATOR MODAL ----------------- */}
      <AnimatePresence>
        {activeCallType && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-300 bg-slate-950 flex flex-col justify-between p-10 text-white"
          >
            {/* Background blur for call */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img src={nanny.images[0]} alt="" className="w-full h-full object-cover blur-3xl scale-125" />
            </div>

            {/* Video Feed */}
            {activeCallType === 'video' && callStatus === 'connected' && !isCamOff && (
              <div className="absolute inset-0 z-10">
                <img src={nanny.images[1]} alt="" className="w-full h-full object-cover" />
                {/* Selfie Mini Feed */}
                <div className="absolute top-10 right-6 w-28 h-40 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            {/* Call Status Header */}
            <div className="relative z-20 text-center space-y-3 pt-10">
              <div className="w-24 h-24 rounded-[2rem] overflow-hidden mx-auto border-2 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md">
                <img src={nanny.images[0]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight">{nanny.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {callStatus === 'ringing' && tD.calling}
                  {callStatus === 'connected' && `${tD.connected} • ${formatDuration(callDuration)}`}
                  {callStatus === 'ended' && tD.callEnded}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-20 space-y-10 max-w-sm mx-auto w-full pb-10">
              <div className="grid grid-cols-3 gap-6 text-center">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-white/10 transition-all",
                    isMuted ? "bg-white text-slate-950" : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  <MicOff className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setIsCamOff(!isCamOff)}
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mx-auto border border-white/10 transition-all",
                    isCamOff || activeCallType === 'audio' ? "bg-white text-slate-950" : "bg-white/10 text-white hover:bg-white/20"
                  )}
                  disabled={activeCallType === 'audio'}
                >
                  <CameraOff className="w-6 h-6" />
                </button>
                <button className="w-16 h-16 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center mx-auto border border-white/10">
                  <Volume2 className="w-6 h-6" />
                </button>
              </div>

              {/* End Call Button */}
              <button 
                onClick={endCall}
                className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center mx-auto shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-6 h-6 rotate-135 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
