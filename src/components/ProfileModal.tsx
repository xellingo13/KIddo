import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Mail, Phone, Lock, ArrowRight, ShieldCheck, UserCircle, LogOut, Package, CreditCard, Bell, Settings, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { User as UserType } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserType | null;
  onLogin: (user: UserType) => void;
  onLogout: () => void;
}

type AuthMode = 'LOGIN' | 'REGISTER';

export default function ProfileModal({ isOpen, onClose, currentUser, onLogin, onLogout }: ProfileModalProps) {
  const [mode, setMode] = useState<AuthMode>('LOGIN');
  const [userRole, setUserRole] = useState<'REALTOR' | 'USER'>('USER');

  // Simulated Login
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: UserType = {
      id: '1',
      name: 'Ilyosbek K.',
      email: 'ilyos@example.com',
      phone: '+998 90 123 45 67',
      role: userRole,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
      listingsCount: userRole === 'REALTOR' ? 12 : 0,
      callsCount: userRole === 'REALTOR' ? 450 : 0
    };
    onLogin(newUser);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-full max-w-lg bg-white rounded-[3rem] shadow-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!currentUser ? (
              <div className="p-10 space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                    {mode === 'LOGIN' ? 'Xush kelibsiz' : 'Ro\'yxatdan o\'tish'}
                  </h2>
                  <p className="text-slate-400 font-medium">
                    {mode === 'LOGIN' ? 'Tizimga kirish uchun ma\'lumotlarni kiriting' : 'Yangi hisob yaratish uchun formani to\'ldiring'}
                  </p>
                </div>

                {/* Role Toggle for Register */}
                {mode === 'REGISTER' && (
                  <div className="flex p-1.5 bg-slate-100 rounded-2xl">
                    <button
                      onClick={() => setUserRole('USER')}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                        userRole === 'USER' ? "bg-white text-slate-900 shadow-sm" : "text-slate-400"
                      )}
                    >
                      <UserCircle className="w-4 h-4" />
                      Foydalanuvchi
                    </button>
                    <button
                      onClick={() => setUserRole('REALTOR')}
                      className={cn(
                        "flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2",
                        userRole === 'REALTOR' ? "bg-white text-slate-900 shadow-sm" : "text-slate-400"
                      )}
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Rieltor
                    </button>
                  </div>
                )}

                <form onSubmit={handleAuth} className="space-y-4">
                  {mode === 'REGISTER' && (
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="To'liq ism" 
                        className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-emerald-400/20 transition-all outline-none"
                        required
                      />
                    </div>
                  )}
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="email" 
                      placeholder="Email manzili" 
                      className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-emerald-400/20 transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="password" 
                      placeholder="Parol" 
                      className="w-full pl-14 pr-5 py-5 bg-slate-50 rounded-2xl border border-black/[0.03] text-sm font-bold focus:bg-white focus:ring-2 focus:ring-emerald-400/20 transition-all outline-none"
                      required
                    />
                  </div>

                  <button className="w-full py-5 rounded-2xl glass-green text-white font-black uppercase text-xs tracking-[0.2em] shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
                    {mode === 'LOGIN' ? 'Kirish' : 'Ro\'yxatdan o\'tish'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="text-center pt-4">
                  <button 
                    onClick={() => setMode(mode === 'LOGIN' ? 'REGISTER' : 'LOGIN')}
                    className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    {mode === 'LOGIN' ? 'Hisobingiz yo\'qmi? Ro\'yxatdan o\'ting' : 'Hisobingiz bormi? Kirish'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-0 overflow-hidden">
                {/* Profile Header */}
                <div className="p-10 bg-gradient-to-br from-emerald-50 to-emerald-100 flex flex-col items-center text-center space-y-6 relative">
                   <div className="relative">
                     <img 
                       src={currentUser.avatar} 
                       alt={currentUser.name} 
                       className="w-32 h-32 rounded-[2.5rem] object-cover border-4 border-white shadow-2xl"
                     />
                     <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                        {currentUser.role === 'REALTOR' ? <ShieldCheck className="w-5 h-5 text-emerald-500" /> : <UserCircle className="w-5 h-5 text-blue-500" />}
                     </div>
                   </div>
                   <div className="space-y-1">
                     <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{currentUser.name}</h3>
                     <p className="text-xs font-black uppercase tracking-widest text-emerald-600">
                       {currentUser.role === 'REALTOR' ? 'Pro Rieltor' : 'Foydalanuvchi'}
                     </p>
                   </div>

                   {currentUser.role === 'REALTOR' && (
                     <div className="flex gap-10">
                        <div className="text-center">
                          <p className="text-2xl font-black text-slate-900 leading-none">{currentUser.listingsCount}</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">E'lonlar</p>
                        </div>
                        <div className="w-px h-8 bg-black/10 self-center" />
                        <div className="text-center">
                          <p className="text-2xl font-black text-slate-900 leading-none">{currentUser.callsCount}</p>
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Qo'ng'iroqlar</p>
                        </div>
                     </div>
                   )}
                </div>

                {/* Profile Menu */}
                <div className="p-8 space-y-2">
                  <MenuItem icon={Package} label="Mening e'lonlarim" />
                  <MenuItem icon={CreditCard} label="Hamyon va to'lovlar" />
                  <MenuItem icon={Bell} label="Bildirishnomalar" badge="2" />
                  <MenuItem icon={Settings} label="Sozlamalar" />
                  
                  <div className="pt-6">
                    <button 
                      onClick={onLogout}
                      className="w-full flex items-center justify-between p-5 rounded-2xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                          <LogOut className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">Tizimdan chiqish</span>
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

function MenuItem({ icon: Icon, label, badge }: { icon: any, label: string, badge?: string }) {
  return (
    <button className="w-full flex items-center justify-between p-5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-black/[0.03] group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-slate-500" />
        </div>
        <span className="text-sm font-black text-slate-900 uppercase tracking-tight">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        {badge && (
          <span className="px-2 py-0.5 rounded-lg bg-rose-500 text-[10px] font-black text-white">{badge}</span>
        )}
        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
      </div>
    </button>
  );
}
