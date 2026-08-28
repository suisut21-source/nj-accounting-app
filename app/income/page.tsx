'use client';

import { useState } from 'react';
import { 
  FiDollarSign, FiCalendar, FiTag, FiFileText, 
  FiUploadCloud, FiCheckCircle, FiArrowLeft, FiTrendingUp, FiCreditCard, FiSmartphone, FiShield
} from 'react-icons/fi';
import Link from 'next/link';

export default function IncomePage() {
  const [category, setCategory] = useState('ขายหน้าร้าน (เงินสด/โอน)');
  
  // สำหรับหน้าร้าน (แยกเงินสด / เงินโอนทันที)
  const [cashAmount, setCashAmount] = useState('');
  const [transferAmount, setTransferAmount] = useState('');

  // สำหรับเดลิเวอรี
  const [deliveryGross, setDeliveryGross] = useState('');
  const [gpAmount, setGpAmount] = useState('');
  const [adsAmount, setAdsAmount] = useState('');
  const [loanDeduction, setLoanDeduction] = useState('');

  // สำหรับโครงการไทยช่วยไทย (ยอดขายเต็ม)
  const [thaiHelpGross, setThaiHelpGross] = useState('');

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);

  // คำนวณยอด
  const cash = parseFloat(cashAmount) || 0;
  const transfer = parseFloat(transferAmount) || 0;
  const delivery = parseFloat(deliveryGross) || 0;
  const gp = parseFloat(gpAmount) || 0;
  const ads = parseFloat(adsAmount) || 0;
  const loan = parseFloat(loanDeduction) || 0;
  const thaiGross = parseFloat(thaiHelpGross) || 0;

  const isStoreFront = category === 'ขายหน้าร้าน (เงินสด/โอน)';
  const isThaiHelp = category === 'โครงการไทยช่วยไทย';

  // ยอดเงินเข้าบัญชีตามประเภท
  const instantDeposit = transfer; 
  const nextDayDeliveryDeposit = Math.max(0, delivery - gp - ads - loan);

  const totalStoreSales = isStoreFront ? (cash + transfer) : isThaiHelp ? thaiGross : delivery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      category,
      cashAmount: cash,
      transferAmount: transfer,
      deliveryGross: delivery,
      gpAmount: gp,
      adsAmount: ads,
      loanDeduction: loan,
      thaiHelpGross: thaiGross,
      totalStoreSales,
      date,
      note
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setCashAmount('');
      setTransferAmount('');
      setDeliveryGross('');
      setGpAmount('');
      setAdsAmount('');
      setLoanDeduction('');
      setThaiHelpGross('');
      setNote('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* ส่วนหัว */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
              <FiArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><FiDollarSign size={20} /></span>
                บันทึกปิดยอดขายประจำวัน
              </h1>
              <p className="text-sm text-gray-500">รองรับหน้าร้าน, เดลิเวอรี และโครงการไทยช่วยไทย</p>
            </div>
          </div>
          <span className="text-2xl">🐕</span>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center gap-3">
            <FiCheckCircle size={24} className="text-emerald-500" />
            <div>
              <p className="font-semibold">บันทึกยอดปิดร้านสำเร็จแล้วครับพี่!</p>
              <p className="text-sm">บันทึกรายได้เรียบร้อยครับ</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* เลือกประเภทการขาย */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiTag size={16} /> ช่องทางการขาย / โครงการ
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'ขายหน้าร้าน (เงินสด/โอน)', 
                'GrabFood', 
                'LINE MAN', 
                'ShopeeFood',
                'โครงการไทยช่วยไทย'
              ].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                    category === cat
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 1. ฟอร์มกรณีขายหน้าร้าน */}
          {isStoreFront ? (
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-4">
              <div className="font-semibold text-gray-700 text-sm flex items-center gap-2">
                <FiCreditCard className="text-emerald-600" size={18} /> แยกยอดเงินสด (เข้าเก๊ะ) และเงินโอน (เข้าบัญชีทันที)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">ยอดเงินสด (เก็บเข้าเก๊ะร้าน)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 text-sm">฿</span>
                    <input
                      type="number"
                      step="0.01"
                      value={cashAmount}
                      onChange={(e) => setCashAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-semibold text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">ยอดเงินโอน / QR (เข้าบัญชีทันที)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 text-sm">฿</span>
                    <input
                      type="number"
                      step="0.01"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-8 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm font-semibold text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : isThaiHelp ? (
            /* 2. ฟอร์มกรณีโครงการไทยช่วยไทย (ไม่มีช่องหักค่าบริการ โชว์ยอดเต็ม) */
            <div className="p-5 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-4">
              <div className="font-semibold text-indigo-900 text-sm flex items-center gap-2">
                <FiShield className="text-indigo-600" size={18} /> โครงการไทยช่วยไทย (ยอดขายรวม)
              </div>
              <div>
                <label className="block text-xs font-medium text-indigo-800 mb-1">ยอดขายรวมโครงการ (บาท) *</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 font-bold">฿</span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={thaiHelpGross}
                    onChange={(e) => setThaiHelpGross(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-indigo-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-lg font-semibold text-gray-800"
                  />
                </div>
                <p className="text-xs text-indigo-500 mt-1">*ยอดเงินเข้าพรุ่งนี้แบ่งเป็น 2 รอบ (ยอดไม่ตายตัวตามการซื้อเพิ่ม)</p>
              </div>
            </div>
          ) : (
            /* 3. ฟอร์มกรณีเดลิเวอรีปกติ */
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                  <FiSmartphone size={16} /> ยอดขายรวมบนแอป {category} (Gross Sales) *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 font-bold">฿</span>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={deliveryGross}
                    onChange={(e) => setDeliveryGross(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none text-lg font-semibold text-gray-800 transition-all"
                  />
                </div>
              </div>

              <div className="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
                  รายการหัก / ค่าบริการ / หักหนี้ (ถ้ามี)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">หัก GP</label>
                    <input
                      type="number"
                      step="0.01"
                      value={gpAmount}
                      onChange={(e) => setGpAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-xs font-medium text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">หัก ค่าโฆษณา</label>
                    <input
                      type="number"
                      step="0.01"
                      value={adsAmount}
                      onChange={(e) => setAdsAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-xs font-medium text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">หัก ผ่อนหนี้</label>
                    <input
                      type="number"
                      step="0.01"
                      value={loanDeduction}
                      onChange={(e) => setLoanDeduction(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none text-xs font-medium text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* สรุปยอดขายรวมทั้งหมด และยอดเงินเข้าบัญชีจริง */}
          {isThaiHelp ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-xs font-medium text-blue-700">ยอดขายรวมโครงการไทยช่วยไทย</p>
                <p className="text-lg font-bold text-blue-900 mt-1">
                  ฿{totalStoreSales.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col justify-center">
                <p className="text-xs font-medium text-emerald-800 flex items-center gap-1">
                  <FiTrendingUp size={14} /> สถานะเงินเข้าบัญชี
                </p>
                <p className="text-base font-bold text-emerald-700 mt-1">
                  💰 เงินเข้าพรุ่งนี้ (แบ่งจ่าย 2 รอบ)
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-xs font-medium text-blue-700">ยอดขายรวมของวันนี้</p>
                <p className="text-lg font-bold text-blue-900 mt-1">
                  ฿{totalStoreSales.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                <p className="text-xs font-medium text-emerald-800 flex items-center gap-1">
                  <FiTrendingUp size={14} /> 
                  {isStoreFront ? 'เงินโอนเข้าบัญชีทันที' : 'เงินเข้าบัญชี (พรุ่งนี้เช้า)'}
                </p>
                <p className="text-lg font-extrabold text-emerald-700 mt-1">
                  ฿{(isStoreFront ? instantDeposit : nextDayDeliveryDeposit).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>
          )}

          {/* วันที่ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiCalendar size={16} /> วันที่ทำรายการ
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none text-gray-800 transition-all"
            />
          </div>

          {/* หมายเหตุ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiFileText size={16} /> หมายเหตุ / รายละเอียดเพิ่มเติม
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="เช่น ปิดยอดโครงการไทยช่วยไทย..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none text-gray-800 transition-all resize-none"
            />
          </div>

          {/* ปุ่มบันทึก */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <Link
              href="/"
              className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium transition-colors"
            >
              ยกเลิก
            </Link>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/20 transition-all"
            >
              บันทึกปิดยอดขาย
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}