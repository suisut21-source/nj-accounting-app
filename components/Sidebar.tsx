'use client';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Home, 
  ArrowDownLeft, 
  ArrowUpRight, 
  ArrowLeftRight, 
  FileText, 
  BarChart3, 
  Settings,
  CreditCard,
  Menu,
  X
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ปุ่มเปิดเมนูบนมือถือ */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#0d1424] text-white rounded-xl shadow-md"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* ฉากหลังมืดเวลาเปิดเมนบบนมือถือ */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}

      {/* ตัว Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40
        w-64 bg-white min-h-screen p-5 border-r border-slate-100 
        flex flex-col justify-between font-sans
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="space-y-6 pt-12 md:pt-0">
          
          {/* โลโก้ NJ Accounting พร้อมรูปน้องเอ็นเจจริง */}
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-2xl overflow-hidden bg-amber-950 border border-amber-300 shadow-sm flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="NJ Accounting Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-black text-slate-900 text-base tracking-tight leading-none">
                NJ Accounting
              </h1>
              <span className="text-[11px] font-bold text-amber-800">ระบบบัญชีร้านค้า</span>
            </div>
          </div>

          {/* เมนูหลัก */}
          <nav className="space-y-1">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 bg-[#0d1424] text-white font-extrabold text-sm rounded-2xl shadow-sm"
            >
              <Home className="w-4 h-4" />
              <span>หน้าหลัก</span>
            </Link>
          </nav>

          {/* บันทึกรายการ */}
          <div className="space-y-1 pt-2">
            <p className="px-4 text-[11px] font-black text-slate-400 uppercase tracking-wider">บันทึกรายการ</p>
            <Link href="/income" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <ArrowDownLeft className="w-4 h-4 text-emerald-500" />
              <span>เงินเข้า</span>
            </Link>
            <Link href="/expense" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <ArrowUpRight className="w-4 h-4 text-rose-500" />
              <span>เงินออก</span>
            </Link>
            <Link href="/transfer" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <ArrowLeftRight className="w-4 h-4 text-slate-400" />
              <span>โอนเงิน / ธนาคาร</span>
            </Link>
          </div>

          {/* เดลิเวอรี */}
          <div className="space-y-1 pt-2">
            <p className="px-4 text-[11px] font-black text-slate-400 uppercase tracking-wider">เดลิเวอรี</p>
            <div className="flex items-center gap-3 px-4 py-2 text-slate-600 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span>Grab</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-slate-600 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <span>LINE MAN</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 text-slate-600 font-bold text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
              <span>ShopeeFood</span>
            </div>
          </div>

          {/* ภาษี & เอกสาร */}
          <div className="space-y-1 pt-2">
            <p className="px-4 text-[11px] font-black text-slate-400 uppercase tracking-wider">ภาษี & เอกสาร</p>
            <Link href="/tax" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <CreditCard className="w-4 h-4 text-slate-400" />
              <span>ภาษีเงินได้ & VAT</span>
            </Link>
            <Link href="/documents" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>ใบเสร็จ / ใบกำกับภาษี</span>
            </Link>
            <Link href="/reports" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <BarChart3 className="w-4 h-4 text-slate-400" />
              <span>รายงานสรุปการเงิน</span>
            </Link>
            <Link href="/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm rounded-xl transition">
              <Settings className="w-4 h-4 text-slate-400" />
              <span>ตั้งค่าร้านค้า</span>
            </Link>
          </div>

        </div>
      </aside>
    </>
  );
}