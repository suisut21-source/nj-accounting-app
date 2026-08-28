'use client';

import { useState } from 'react';
import { 
  FiDollarSign, FiCalendar, FiTag, FiFileText, 
  FiUploadCloud, FiCheckCircle, FiCreditCard, FiAlertCircle, FiHome 
} from 'react-icons/fi';

export default function ExpensePage() {
  const [category, setCategory] = useState('ค่าวัตถุดิบ / ของสด');
  const [paymentMethod, setPaymentMethod] = useState('เงินสด');
  const [amount, setAmount] = useState('');
  const [vendor, setVendor] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);

  // ฟังก์ชันกลับหน้าแรกแบบบังคับตรงๆ ไม่มีค้าง
  const goHome = () => {
    window.location.href = '/';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      category,
      paymentMethod,
      amount: parseFloat(amount) || 0,
      vendor,
      date,
      note
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setAmount('');
      setVendor('');
      setNote('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        
        {/* ส่วนหัว */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={goHome} 
              className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors cursor-pointer flex items-center gap-1 text-sm font-medium"
              title="กลับหน้าหลัก"
            >
              <FiHome size={20} className="text-rose-500" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="p-2 bg-rose-100 text-rose-600 rounded-lg"><FiDollarSign size={20} /></span>
                บันทึกรายจ่าย (เงินออก)
              </h1>
              <p className="text-sm text-gray-500">บันทึกค่าใช้จ่ายร้านค้าเพื่อใช้เป็นหลักฐานหักลดหย่อนภาษี</p>
            </div>
          </div>
          <span className="text-2xl">🐕</span>
        </div>

        {/* 🐕 คำเตือนเรื่องใบเสร็จสุดน่ารัก */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-amber-800">
          <FiAlertCircle size={22} className="text-amber-500 shrink-0 mt-0.5" />
          <div className="text-sm font-medium">
            🐕 พี่ๆ อย่าลืมใบเสร็จ หรือใบกำกับภาษีเวลาซื้อของนะครับ (สำคัญมากต่อการจ่ายภาษี!)
          </div>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center gap-3">
            <FiCheckCircle size={24} className="text-emerald-500" />
            <div>
              <p className="font-semibold">บันทึกรายจ่ายสำเร็จแล้วครับพี่!</p>
              <p className="text-sm">บันทึกข้อมูลและเก็บหลักฐานค่าใช้จ่ายเรียบร้อยครับ</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* หมวดหมู่รายจ่าย */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiTag size={16} /> หมวดหมู่รายจ่าย
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                'ค่าวัตถุดิบ / ของสด', 
                'ค่าบรรจุภัณฑ์ / กล่อง', 
                'ค่าน้ำ / ค่าไฟ / ค่าเช่า', 
                'ค่าจ้างพนักงาน', 
                'อุปกรณ์ / เครื่องมือ',
                'อื่นๆ'
              ].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
                    category === cat
                      ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ช่องทางการจ่ายเงิน (เงินสด / เงินโอน) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiCreditCard size={16} /> ช่องทางการจ่ายเงิน
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['เงินสด', 'เงินโอนผ่านบัญชี'].map((method) => (
                <button
                  type="button"
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-all ${
                    paymentMethod === method
                      ? 'bg-rose-500 text-white border-rose-500 shadow-sm'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* จำนวนเงิน */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              จำนวนเงิน (บาท) *
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 font-bold">฿</span>
              <input
                type="number"
                step="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-lg font-semibold text-gray-800 transition-all"
              />
            </div>
          </div>

          {/* ร้านค้า / ผู้ขาย (สำหรับออกใบกำกับภาษี) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ชื่อร้านค้า / ผู้ขาย (สำหรับลงบัญชี)
            </label>
            <input
              type="text"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
              placeholder="เช่น แม็คโคร, ตลาดสด, ร้านขายส่งกล่อง..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-gray-800 transition-all"
            />
          </div>

          {/* วันที่ทำรายการ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiCalendar size={16} /> วันที่จ่ายเงิน
            </label>
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-gray-800 transition-all"
            />
          </div>

          {/* หมายเหตุ */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
              <FiFileText size={16} /> หมายเหตุ / รายละเอียด
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="เช่น ซื้อวัตถุดิบทำของขายรอบสัปดาห์นี้..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:bg-white outline-none text-gray-800 transition-all resize-none"
            />
          </div>

          {/* อัปโหลดใบเสร็จ / ใบกำกับภาษี */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📸 แนบรูปใบเสร็จ / ใบกำกับภาษี <span className="text-rose-500 font-bold">*แนะนำให้ถ่ายเก็บไว้</span>
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center hover:border-rose-500 transition-colors cursor-pointer bg-gray-50">
              <FiUploadCloud className="mx-auto text-gray-400 mb-2" size={28} />
              <p className="text-sm text-gray-600 font-medium">คลิกเพื่ออัปโหลดรูปภาพใบเสร็จ / บิลเงินสด</p>
              <p className="text-xs text-gray-400 mt-1">รองรับไฟล์ JPG, PNG หรือ PDF</p>
            </div>
          </div>

          {/* ปุ่มบันทึก */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={goHome}
              className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 font-medium transition-colors cursor-pointer"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg shadow-rose-500/20 transition-all cursor-pointer"
            >
              บันทึกรายจ่าย
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}