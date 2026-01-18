'use client';

import { useState } from 'react';

const BookingCalendar = () => {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM'];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
    setSelectedDate(null);
  };

  const isPastDate = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(currentYear, currentMonth, day);
    return checkDate < today;
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <span key={`empty-${i}`} className="p-2.5 text-slate-300"></span>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isPast = isPastDate(day);
      days.push(
        <button
          key={day}
          type="button"
          onClick={() => !isPast && setSelectedDate(day)}
          disabled={isPast}
          className={`p-2.5 rounded-lg cursor-pointer font-medium transition-all ${
            isPast
              ? 'text-slate-300 cursor-not-allowed'
              : day === selectedDate
              ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20'
              : 'text-slate-700 hover:bg-primary/5'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    if (!selectedDate || !selectedTime) {
      setSubmitStatus('error');
      setErrorMessage('Please select a date and time');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: `${monthNames[currentMonth]} ${selectedDate}, ${currentYear}`,
          time: selectedTime
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book consultation');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: ''
      });
      setSelectedDate(null);
      setSelectedTime('02:00 PM');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-slate-50 p-6 border-b border-slate-200">
        <h3 className="text-xl font-bold mb-1 text-slate-900">Book a Consultation</h3>
        <p className="text-sm text-slate-500">30-minute technical discovery session</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-slate-900">{monthNames[currentMonth]} {currentYear}</span>
            <div className="flex gap-1">
              <button 
                type="button"
                onClick={() => navigateMonth('prev')}
                className="p-1.5 hover:bg-slate-100 rounded-md transition-colors"
              >
                <span className="material-symbols-outlined text-xl">chevron_left</span>
              </button>
              <button 
                type="button"
                onClick={() => navigateMonth('next')}
                className="p-1.5 hover:bg-slate-100 rounded-md transition-colors"
              >
                <span className="material-symbols-outlined text-xl">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-[10px] mb-4 text-slate-400 font-bold uppercase tracking-widest">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {renderCalendarDays()}
          </div>
          <div className="mt-10">
            <h4 className="text-sm font-bold mb-4 text-slate-900">Available Times (PST)</h4>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`border py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    time === selectedTime
                      ? 'border-2 border-primary bg-primary/5 text-primary font-bold'
                      : 'border-slate-200 text-slate-600 hover:border-primary hover:text-primary'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information Form */}
          <div className="mt-8 pt-8 border-t border-slate-200 space-y-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Full Name *</span>
              <input
                type="text"
                required
                className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Email Address *</span>
              <input
                type="email"
                required
                className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Company *</span>
              <input
                type="text"
                required
                className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Phone Number</span>
              <input
                type="tel"
                className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 text-sm text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="+44 20 1234 5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </label>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200">
              <p className="text-sm font-semibold text-green-800">
                ✓ Consultation booked! We'll send you a confirmation email shortly.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm font-semibold text-red-800">
                {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
              </p>
            </div>
          )}
        </div>
        <div className="px-6 py-5 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <p className="text-xs text-slate-500 italic">Next available: Tomorrow</p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                Booking...
              </>
            ) : (
              <>
                Confirm Slot <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingCalendar;
