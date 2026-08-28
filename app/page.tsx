'use client';

import Link from 'next/link';
import { 
  Bell, HelpCircle, Calendar, Plus, Upload, ArrowUpRight, ArrowDownLeft, 
  AlertCircle, ChevronRight, X, Camera, FileOutput, Calculator, ChevronDown, TrendingUp
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6 pb-20 max-w-7xl mx-auto font-sans">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-amber-200 shadow-sm flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="NJ Accounting Logo" 
              className="w-full h-full object-cover" 
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-black text-slate-900 tracking-tight">สวัสดีครับ, เจ้าของร้าน 👋</h1>
              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md border border-amber-200">
                PRO PLAN
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">ร้านข้าวพันผัก • ภาพรวมการเงินและภาษีประจำวัน</p>
          </div>
        </div>

        {/* Top Right Controls */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button className="relative p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
          <button className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition">
            <HelpCircle className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 font-bold cursor-pointer hover:bg-slate-100 transition">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>สิงหาคม 2567</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* KPI 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* รายรับ */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500"></div>
          <div className="flex justify-between items-start pt-1">
            <div>
              <span className="text-xs font-bold text-slate-500">รายรับเดือนนี้</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight">185,420</span>
                <span className="text-xs font-bold text-slate-400">บาท</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ArrowDownLeft className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">จาก 162 รายการ</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">↑ 12.5% จากเดือนที่แล้ว</span>
          </div>
        </div>

        {/* ค่าใช้จ่าย */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500"></div>
          <div className="flex justify-between items-start pt-1">
            <div>
              <span className="text-xs font-bold text-slate-500">ค่าใช้จ่ายเดือนนี้</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-slate-900 tracking-tight">92,350</span>
                <span className="text-xs font-bold text-slate-400">บาท</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">จาก 118 รายการ</span>
            <span className="font-bold text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded">↑ 8.3% จากเดือนที่แล้ว</span>
          </div>
        </div>

        {/* กำไรสุทธิ */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>
          <div className="flex justify-between items-start pt-1">
            <div>
              <span className="text-xs font-bold text-slate-500">กำไรสุทธิ</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-indigo-950 tracking-tight">93,070</span>
                <span className="text-xs font-bold text-slate-400">บาท</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-slate-50 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">คิดเป็น 50.2%</span>
            <span className="font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">↑ 16.8% จากเดือนที่แล้ว</span>
          </div>
        </div>

        {/* ภาษีที่ควรเตรียม */}
        <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-2xl border border-amber-200 p-4 shadow-sm hover:shadow-md transition relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
          <div className="flex justify-between items-start pt-1">
            <div>
              <span className="text-xs font-bold text-amber-900">ภาษีที่ควรเตรียม</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-amber-950 tracking-tight">8,652</span>
                <span className="text-xs font-bold text-amber-800/60">บาท</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <Calculator className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-amber-100/60 flex items-center justify-between text-[11px]">
            <span className="text-amber-800/70">ประมาณการตามข้อมูลปัจจุบัน</span>
            <button className="font-bold text-amber-900 hover:underline">ดูรายละเอียดภาษี →</button>
          </div>
        </div>

      </div>

      {/* 🚀 QUICK ACTIONS SECTION */}
      <div>
        <div className="flex items-center gap-2 mb-2.5 px-1">
          <span className="text-sm">✨</span>
          <h2 className="text-xs font-black text-slate-700 tracking-wider uppercase">เมนูจัดการข้อมูลด่วน (Quick Actions)</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {/* บันทึกเงินเข้า */}
          <Link 
            href="/income"
            className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4 rounded-2xl border border-emerald-400 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition duration-200 flex items-center gap-3 text-left group relative overflow-hidden block"
          >
            <div className="absolute -right-2 -bottom-2 text-4xl opacity-10 font-black">💰</div>
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black shrink-0 group-hover:scale-110 transition">
              <Plus className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-black tracking-tight">เงินเข้า</p>
                <span className="text-xs">💰</span>
              </div>
              <p className="text-[10px] text-emerald-100 font-medium">บันทึกรายรับ</p>
            </div>
          </Link>

          {/* บันทึกเงินออก */}
          <Link 
            href="/expense"
            className="bg-gradient-to-br from-rose-500 to-red-600 text-white p-4 rounded-2xl border border-rose-400 shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 transition duration-200 flex items-center gap-3 text-left group relative overflow-hidden block"
          >
            <div className="absolute -right-2 -bottom-2 text-4xl opacity-10 font-black">💸</div>
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black shrink-0 group-hover:scale-110 transition">
              <ArrowUpRight className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-black tracking-tight">เงินออก</p>
                <span className="text-xs">💸</span>
              </div>
              <p className="text-[10px] text-rose-100 font-medium">บันทึกรายจ่าย</p>
            </div>
          </Link>

          {/* ถ่ายใบเสร็จ */}
          <Link 
            href="/expense"
            className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 rounded-2xl border border-sky-400 shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5 transition duration-200 flex items-center gap-3 text-left group relative overflow-hidden block"
          >
            <div className="absolute -right-2 -bottom-2 text-4xl opacity-10 font-black">📸</div>
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black shrink-0 group-hover:scale-110 transition">
              <Camera className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-black tracking-tight">ถ่ายใบเสร็จ</p>
                <span className="text-xs">📸</span>
              </div>
              <p className="text-[10px] text-sky-100 font-medium">สแกนอัปโหลด</p>
            </div>
          </Link>

          {/* สร้างรายงาน */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4 rounded-2xl border border-amber-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 transition duration-200 flex items-center gap-3 text-left group relative overflow-hidden cursor-pointer">
            <div className="absolute -right-2 -bottom-2 text-4xl opacity-10 font-black">📊</div>
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black shrink-0 group-hover:scale-110 transition">
              <FileOutput className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-black tracking-tight">สร้างรายงาน</p>
                <span className="text-xs">📊</span>
              </div>
              <p className="text-[10px] text-amber-100 font-medium">ส่งออก PDF/Excel</p>
            </div>
          </div>

          {/* คำนวณภาษี */}
          <div className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-4 rounded-2xl border border-indigo-400 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition duration-200 flex items-center gap-3 text-left group relative overflow-hidden col-span-2 sm:col-span-1 cursor-pointer">
            <div className="absolute -right-2 -bottom-2 text-4xl opacity-10 font-black">🧮</div>
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black shrink-0 group-hover:scale-110 transition">
              <Calculator className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-black tracking-tight">คำนวณภาษี</p>
                <span className="text-xs">🧮</span>
              </div>
              <p className="text-[10px] text-indigo-100 font-medium">ประมาณการภาษี</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Row: Bar Chart & Delivery Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Left Side: 6-Month BAR CHART */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-black text-slate-900 text-sm">เปรียบเทียบ รายรับ - รายจ่าย 6 เดือนล่าสุด</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-emerald-500"></span>
                <span>รายรับ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-rose-400"></span>
                <span>รายจ่าย</span>
              </div>
            </div>
          </div>

          <div className="h-56 relative border-b border-slate-100 flex items-end justify-between px-2 sm:px-6 pt-6 pb-2 gap-2">
            <div className="absolute inset-x-0 top-0 border-b border-dashed border-slate-100 text-[9px] text-slate-300 font-mono">200K</div>
            <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-slate-100 text-[9px] text-slate-300 font-mono">100K</div>

            {[
              { month: 'มี.ค.', inc: '60%', exp: '40%' },
              { month: 'เม.ย.', inc: '75%', exp: '45%' },
              { month: 'พ.ค.', inc: '80%', exp: '50%' },
              { month: 'มิ.ย.', inc: '85%', exp: '55%' },
              { month: 'ก.ค.', inc: '90%', exp: '48%' },
              { month: 'ส.ค.', inc: '95%', exp: '47%' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 h-full justify-end z-10 flex-1">
                <div className="flex items-end gap-1 h-full w-full justify-center max-w-[48px]">
                  <div 
                    className="w-1/2 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-md shadow-sm hover:brightness-110 transition cursor-pointer relative group"
                    style={{ height: item.inc }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow pointer-events-none transition whitespace-nowrap z-20">
                      รับ: {item.inc}
                    </div>
                  </div>
                  <div 
                    className="w-1/2 bg-gradient-to-t from-rose-500 to-rose-300 rounded-t-md shadow-sm hover:brightness-110 transition cursor-pointer relative group"
                    style={{ height: item.exp }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow pointer-events-none transition whitespace-nowrap z-20">
                      จ่าย: {item.exp}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-bold">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Delivery Breakdown */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-slate-900 text-sm">ยอดขายจากเดลิเวอรี (เดือนนี้)</h3>
            <button className="text-xs text-amber-600 font-bold hover:underline">ดูทั้งหมด →</button>
          </div>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white font-black text-xs flex items-center justify-center shadow-sm">Grab</div>
                <div>
                  <p className="text-xs font-black text-slate-800">Grab</p>
                  <p className="text-[10px] text-slate-400">ยอดขายรวม</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-900">80,000 บาท</p>
                <p className="text-[10px] text-slate-400">ค่าบริการ 24,000 | <strong className="text-emerald-600">รับจริง 56,000</strong></p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-sm">M</div>
                <div>
                  <p className="text-xs font-black text-slate-800">LINE MAN</p>
                  <p className="text-[10px] text-slate-400">ยอดขายรวม</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-900">30,000 บาท</p>
                <p className="text-[10px] text-slate-400">ค่าบริการ 9,000 | <strong className="text-emerald-600">รับจริง 21,000</strong></p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-500 text-white font-black text-xs flex items-center justify-center shadow-sm">S</div>
                <div>
                  <p className="text-xs font-black text-slate-800">ShopeeFood</p>
                  <p className="text-[10px] text-slate-400">ยอดขายรวม</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-slate-900">20,000 บาท</p>
                <p className="text-[10px] text-slate-400">ค่าบริการ 6,000 | <strong className="text-emerald-600">รับจริง 14,000</strong></p>
              </div>
            </div>
          </div>

          <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-bold border border-slate-200 transition">
            + เชื่อมต่อบัญชีเพิ่มเติม
          </button>
        </div>

      </div>

      {/* Bottom 3 Columns: Transactions, Tax Calendar, Action Needed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* รายการล่าสุด */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-black text-xs text-slate-900">รายการล่าสุด</h4>
            <button className="text-[11px] text-amber-600 font-bold hover:underline">ดูทั้งหมด →</button>
          </div>

          <div className="space-y-2.5">
            <div className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-50 transition">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">💵</div>
                <div>
                  <p className="font-extrabold text-xs text-slate-800">ขายอาหารหน้าร้าน</p>
                  <p className="text-[10px] text-slate-400">เงินสด • 26 ส.ค. 67 10:30</p>
                </div>
              </div>
              <span className="font-black text-xs text-emerald-600">+2,500.00 บาท</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-50 transition">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">🛒</div>
                <div>
                  <p className="font-extrabold text-xs text-slate-800">ซื้อวัตถุดิบ - หมู</p>
                  <p className="text-[10px] text-slate-400">Makro สาขาใหญ่ • 26 ส.ค. 67 09:15</p>
                </div>
              </div>
              <span className="font-black text-xs text-rose-500">-1,850.00 บาท</span>
            </div>

            <div className="flex justify-between items-center p-2.5 rounded-xl hover:bg-slate-50 transition">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">🚴</div>
                <div>
                  <p className="font-extrabold text-xs text-slate-800">ยอดขายจาก Grab</p>
                  <p className="text-[10px] text-slate-400">โอนเข้าบัญชี • 25 ส.ค. 67 16:45</p>
                </div>
              </div>
              <span className="font-black text-xs text-emerald-600">+4,200.00 บาท</span>
            </div>
          </div>
        </div>

        {/* ปฏิทินภาษี */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-black text-xs text-slate-900">ปฏิทินภาษี</h4>
            <button className="text-[11px] text-amber-600 font-bold hover:underline">ดูทั้งหมด →</button>
          </div>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between">
              <div>
                <p className="font-extrabold text-xs text-slate-900">ภาษีเงินได้นิติบุคคลครึ่งปี</p>
                <p className="text-[10px] text-amber-800">(ภ.ง.ด. 51)</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full">เหลืออีก 12 วัน</span>
                <p className="text-[9px] text-slate-400 mt-0.5">ยื่นภายใน 5 ก.ย. 67</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-extrabold text-xs text-slate-900">ภาษีมูลค่าเพิ่ม (VAT)</p>
                <p className="text-[10px] text-slate-400">เดือน ส.ค. 67 (ภ.พ.30)</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">เหลืออีก 15 วัน</span>
                <p className="text-[9px] text-slate-400 mt-0.5">ยื่นภายใน 7 ก.ย. 67</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-extrabold text-xs text-slate-900">ภาษีหัก ณ ที่จ่าย</p>
                <p className="text-[10px] text-slate-400">เดือน ส.ค. 67 (ภ.ง.ด. 3,53)</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">เหลืออีก 15 วัน</span>
                <p className="text-[9px] text-slate-400 mt-0.5">ยื่นภายใน 7 ก.ย. 67</p>
              </div>
            </div>
          </div>
        </div>

        {/* เอกสารที่ต้องดำเนินการ */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-center">
            <h4 className="font-black text-xs text-slate-900">เอกสารที่ต้องดำเนินการ</h4>
            <button className="text-[11px] text-amber-600 font-bold hover:underline">ดูทั้งหมด →</button>
          </div>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-100 transition cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">⚠️</div>
                <div>
                  <p className="font-extrabold text-xs text-slate-800">ใบเสร็จรอจัดหมวดหมู่</p>
                  <p className="text-[10px] text-slate-400">มีเอกสาร 8 รายการ</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50/50 border border-slate-100 transition cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">❗️</div>
                <div>
                  <p className="font-extrabold text-xs text-slate-800">รายจ่ายไม่มีเอกสาร</p>
                  <p className="text-[10px] text-slate-400">มูลค่า 12,500 บาท</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </div>

            <div className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50/50 border border-slate-100 transition cursor-pointer flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs">ℹ️</div>
                <div>
                  <p className="font-extrabold text-xs text-slate-800">หัก ณ ที่จ่ายยังไม่อัปโหลด</p>
                  <p className="text-[10px] text-slate-400">มีเอกสาร 2 รายการ</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </div>
          </div>
        </div>

      </div>

      {/* Mascot Assistant Banner */}
      <div className="bg-amber-100/70 border border-amber-200/80 p-3.5 rounded-2xl flex items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-xl shrink-0 shadow-sm">
            🐕
          </div>
          <div>
            <p className="text-xs font-black text-amber-950">น้อง NJ เตือนนะครับ 🐾</p>
            <p className="text-[11px] text-amber-900 font-medium">
              เดือนนี้มีรายจ่ายที่ยังไม่มีเอกสาร 12,500 บาท อย่าลืมอัปโหลดใบเสร็จนะครับ 😊
            </p>
          </div>
        </div>
        <button className="text-amber-800 hover:text-amber-950 p-1 rounded-lg transition">
          <X className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}