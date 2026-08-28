'use client';
import { useState } from 'react';
import { Store, Utensils, HandHeart, CheckCircle2, ArrowLeft, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

export default function IncomePage() {
  const [tab, setTab] = useState<'store' | 'delivery' | 'gov'>('store');
  
  // State หน้าร้าน
  const [cash, setCash] = useState('');
  const [transfer, setTransfer] = useState('');
  
  // State เดลิเวอรี
  const [deliveryApp, setDeliveryApp] = useState('LINE MAN');
  const [grossSales, setGrossSales] = useState('');
  const [gpFee, setGpFee] = useState('');

  // State โครงการรัฐ (ไทยช่วยไทย 40/60)
  const [govSales, setGovSales] = useState('');

  // คำนวณยอด
  const deliveryNet = (parseFloat(grossSales) || 0) - (parseFloat(gpFee) || 0);
  const govAmount = parseFloat(govSales) || 0;
  const gov40 = govAmount * 0.4;
  const gov60 = govAmount * 0.6;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans text-slate-800">
      
      {/* Header คลีนๆ */}
      <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200/80 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="p-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition border border-slate-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-black text-xl text-slate-900 flex items-center gap-2">
              บันทึกรายรับประจำวัน 💰
            </h1>
            <p className="text-xs text-slate-500 font-medium">NJ Accounting - ระบบบัญชีร้านค้า</p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-emerald-200/60">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span>ระบบลงบัญชีง่ายๆ</span>
        </div>
      </div>

      {/* Grid 2 Column สำหรับ Desktop / 1 Column สำหรับ Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

        {/* ฝั่งซ้าย: กล่องให้กำลังใจแบบไอคอนสั้นๆ คลีนๆ */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-orange-500/10 border border-amber-200/80 p-5 rounded-3xl shadow-sm flex items-center gap-4">
            
            {/* ไอคอนน้องหมาโกลเด้น */}
            <div className="w-14 h-14 bg-amber-400/20 border border-amber-300 rounded-2xl flex items-center justify-center text-3xl shadow-inner flex-shrink-0 animate-bounce">
              🐕
            </div>

            {/* ข้อความสั้นๆ ให้กำลังใจ */}
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-black text-amber-900 text-sm">สู้ๆ ครับ! 🐾</span>
              </div>
              <p className="text-xs font-bold text-slate-600 leading-relaxed">
                "ลงบัญชีวันละนิด การเงินเป๊ะปังแน่นอนครับ! 💛✨"
              </p>
            </div>

          </div>
        </div>

        {/* ฝั่งขวา: ฟอร์มกรอกข้อมูลหลัก */}
        <div className="md:col-span-7">
          
          {/* แท็บเลือกประเภทรายรับ */}
          <div className="grid grid-cols-3 gap-1.5 bg-slate-200/60 p-1.5 rounded-2xl mb-4">
            <button
              type="button"
              onClick={() => setTab('store')}
              className={`py-3 text-xs md:text-sm font-extrabold rounded-xl transition flex items-center justify-center gap-2 ${
                tab === 'store' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>หน้าร้าน</span>
            </button>

            <button
              type="button"
              onClick={() => setTab('delivery')}
              className={`py-3 text-xs md:text-sm font-extrabold rounded-xl transition flex items-center justify-center gap-2 ${
                tab === 'delivery' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>เดลิเวอรี</span>
            </button>

            <button
              type="button"
              onClick={() => setTab('gov')}
              className={`py-3 text-xs md:text-sm font-extrabold rounded-xl transition flex items-center justify-center gap-2 ${
                tab === 'gov' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HandHeart className="w-4 h-4" />
              <span>ไทยช่วยไทย</span>
            </button>
          </div>

          {/* โหมด 1: ขายหน้าร้าน (เงินสด + สแกนโอน) */}
          {tab === 'store' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 space-y-5">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider">🍔 สรุปยอดขายหน้าร้าน</h2>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">💵 เงินสดในลิ้นชัก (บาท)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={cash}
                  onChange={(e) => setCash(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">📱 เงินโอนเข้าสแกนหน้าร้าน (บาท)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={transfer}
                  onChange={(e) => setTransfer(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
              </div>

              <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-4 text-center">
                <span className="text-xs text-emerald-700 font-bold block mb-1">รวมเงินสด + โอนเข้าทันที</span>
                <span className="text-2xl font-black text-emerald-600">
                  ฿{((parseFloat(cash) || 0) + (parseFloat(transfer) || 0)).toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          )}

          {/* โหมด 2: เดลิเวอรี (LINE MAN / Grab / ShopeeFood) */}
          {tab === 'delivery' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 space-y-5">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider">🛵 ยอดขายเดลิเวอรี</h2>

              {/* เลือกแอปเดลิเวอรี 3 ค่าย */}
              <div className="grid grid-cols-3 gap-2.5">
                {['LINE MAN', 'Grab', 'ShopeeFood'].map((app) => (
                  <button
                    key={app}
                    type="button"
                    onClick={() => setDeliveryApp(app)}
                    className={`py-2.5 text-xs font-bold rounded-xl border transition ${
                      deliveryApp === app
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {app}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">1. ยอดขายบนแอป (ก่อนหัก GP)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={grossSales}
                  onChange={(e) => setGrossSales(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">2. ค่า GP / หักเงินในแอป</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={gpFee}
                  onChange={(e) => setGpFee(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-rose-600 text-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition"
                />
              </div>

              <div className="bg-sky-50/80 border border-sky-100 rounded-2xl p-4 text-center">
                <span className="text-xs text-sky-700 font-bold block mb-1">💵 เงิน {deliveryApp} จะเข้าธนาคารวันถัดไป</span>
                <span className="text-2xl font-black text-sky-600">
                  ฿{deliveryNet > 0 ? deliveryNet.toLocaleString('th-TH', { minimumFractionDigits: 2 }) : '0.00'}
                </span>
              </div>
            </div>
          )}

          {/* โหมด 3: โครงการรัฐ (ไทยช่วยไทย 40% / 60%) */}
          {tab === 'gov' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 space-y-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider">🇹🇭 โครงการไทยช่วยไทย</h2>
                <span className="text-[10px] bg-blue-50 text-blue-600 font-extrabold px-2.5 py-1 rounded-full border border-blue-100">
                  เข้า 2 รอบ
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">ยอดขายโครงการรวมวันนี้ (บาท)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={govSales}
                  onChange={(e) => setGovSales(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 font-bold text-slate-800 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                />
              </div>

              {/* สรุปตารางรอบเงินเข้า */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 text-xs">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="font-medium">🔵 รอบที่ 1 (เข้าพรุ่งนี้ - 40%):</span>
                  <span className="font-extrabold text-sm text-slate-900">
                    ฿{gov40.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-600 border-t border-slate-200 pt-3">
                  <span className="font-medium">🟣 รอบที่ 2 (เข้าวันถัดไป/งวดถัดไป - 60%):</span>
                  <span className="font-extrabold text-sm text-slate-900">
                    ฿{gov60.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ปุ่มกดบันทึก */}
          <button
            type="button"
            className="w-full mt-5 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-2 active:scale-[0.99]"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>บันทึกรายการรายรับ</span>
          </button>

        </div>

      </div>

    </div>
  );
}