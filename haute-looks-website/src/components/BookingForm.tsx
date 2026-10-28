import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { BookingFormData, BranchId } from '../types';

interface BookingFormProps {
  initialService?: string;
  initialBranch?: BranchId;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService,
  initialBranch,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    branch: initialBranch || 'unisex',
    service: initialService || '',
    date: '',
    timeSlot: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: initialService ?? '',
      branch: initialBranch ?? prev.branch,
    }));
  }, [initialService, initialBranch]);

  const todayParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const today = `${todayParts.find((part) => part.type === 'year')?.value}-${todayParts.find((part) => part.type === 'month')?.value}-${todayParts.find((part) => part.type === 'day')?.value}`;

  const timeSlots = [
    '09:00 AM - 10:00 AM',
    '10:30 AM - 11:30 AM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:30 PM - 04:30 PM',
    '05:00 PM - 06:00 PM',
    '06:30 PM - 07:30 PM',
    '07:30 PM - 08:30 PM',
  ];

  const serviceOptions = [
    // Women
    "Women: Haircut and styling",
    "Women: Hair colour",
    "Women: Hair spa and treatment",
    "Women: Smoothening and anti-frizz",
    "Women: Bridal makeup",
    "Women: Facial and skincare",
    "Women: Manicure, pedicure and body care",
    // Men
    "Men: Haircut and styling",
    "Men: Beard grooming",
    "Men: Hair colour",
    "Men: Hair spa and treatment",
    "Men: Facial and skincare",
    "Men: Manicure and pedicure",
    // Bridal
    "Bridal: Bridal makeup",
    "Bridal: Occasion makeup",
    "Bridal: Styling consultation",
    "General: Service enquiry",
  ];
  const availableServiceOptions =
    initialService && !serviceOptions.includes(initialService)
      ? [...serviceOptions, initialService]
      : serviceOptions;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.trim().replace(/[()\s-]/g, '');
    const nationalPhone = cleanPhone.startsWith('+91')
      ? cleanPhone.slice(3)
      : cleanPhone.length === 12 && cleanPhone.startsWith('91')
        ? cleanPhone.slice(2)
        : cleanPhone;
    if (!nationalPhone) {
      errs.phone = 'Please enter your phone number.';
    } else if (!/^[6-9]\d{9}$/.test(nationalPhone)) {
      errs.phone = 'Enter a valid Indian mobile number with 10 digits.';
    }

    if (!formData.service) {
      errs.service = 'Please select a service.';
    }

    const dateValue = new Date(`${formData.date}T00:00:00Z`);
    const isValidDate =
      /^\d{4}-\d{2}-\d{2}$/.test(formData.date) &&
      !Number.isNaN(dateValue.getTime()) &&
      dateValue.toISOString().slice(0, 10) === formData.date;
    if (!formData.date) {
      errs.date = 'Please select your preferred date.';
    } else if (!isValidDate || formData.date < today) {
      errs.date = 'Choose a valid date today or later.';
    }

    if (!formData.timeSlot) {
      errs.timeSlot = 'Please select a preferred time slot.';
    } else if (!timeSlots.includes(formData.timeSlot)) {
      errs.timeSlot = 'Please select one of the listed time slots.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const createWhatsAppText = () => {
    const branchName =
      formData.branch === 'unisex'
        ? 'Unisex Salon & Bridal Studio (College Road)'
        : "Men's Grooming Branch (JS Complex, CK Mahal Rd)";

    return `Hello Haute Looks, I would like to request an appointment:
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Preferred Branch: ${branchName}
• Service: ${formData.service}
• Preferred Date: ${formData.date}
• Preferred Time: ${formData.timeSlot}${formData.notes ? `\n• Notes: ${formData.notes}` : ''}

Please let me know if this slot is available. Thank you!`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = createWhatsAppText();
    setWhatsappUrl(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`);
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-gradient-to-b from-ivory via-white to-blush/20 text-charcoal relative snap-start">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold tracking-wide text-gold-dark mb-3">Appointments</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            Book a visit
          </h2>
          <p className="mt-4 text-charcoal/80 text-base">
            Choose a branch and service, then send your request on WhatsApp. We’ll confirm availability with you.
          </p>
        </div>

        {/* Main Booking Form Card */}
        <div className="relative overflow-hidden rounded-[28px] border border-gold/30 bg-white p-5 shadow-[0_30px_90px_rgba(41,37,34,0.1)] sm:p-10 lg:p-12">
          {/* Decorative gold top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark rounded-t-2xl" />

          <form onSubmit={handleWhatsAppSubmit} className="space-y-8 text-left">
            
            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-name" className="block text-sm text-charcoal font-semibold mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-dark">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    id="booking-name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Sundaram / Karthik Raja"
                    className={`w-full pl-10 pr-4 py-3.5 bg-ivory rounded-lg border-2 text-sm font-medium text-charcoal placeholder-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all ${
                      errors.fullName ? 'border-red-400' : 'border-gold/40'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-sm text-charcoal font-semibold mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-dark">
                    <Phone size={16} />
                  </div>
                  <input
                    type="tel"
                    id="booking-phone"
                    autoComplete="tel"
                    maxLength={16}
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className={`w-full pl-10 pr-4 py-3.5 bg-ivory rounded-lg border-2 text-sm font-medium text-charcoal placeholder-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all ${
                      errors.phone ? 'border-red-400' : 'border-gold/40'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Preferred Branch Radio Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal font-bold mb-3">
                Preferred Salon Branch <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all duration-300 ${
                    formData.branch === 'unisex'
                      ? 'bg-gold/10 border-gold shadow-md ring-1 ring-gold'
                      : 'bg-ivory border-gold/30 hover:bg-gold/5 hover:border-gold/60'
                  }`}
                >
                  <input
                    type="radio"
                    name="branch"
                    value="unisex"
                    required
                    checked={formData.branch === 'unisex'}
                    onChange={() => setFormData({ ...formData, branch: 'unisex' })}
                    className="mt-1 text-gold focus:ring-gold"
                  />
                  <div>
                    <p className="font-serif text-base font-semibold text-charcoal">
                      Unisex Salon &amp; Bridal Studio
                    </p>
                    <p className="text-xs text-charcoal/70 mt-0.5 font-medium">
                      1/5, 7th Street ICICI, Opp. College Rd, Subramaniyapuram
                    </p>
                  </div>
                </label>

                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all duration-300 ${
                    formData.branch === 'mens'
                      ? 'bg-gold/10 border-gold shadow-md ring-1 ring-gold'
                      : 'bg-ivory border-gold/30 hover:bg-gold/5 hover:border-gold/60'
                  }`}
                >
                  <input
                    type="radio"
                    name="branch"
                    value="mens"
                    checked={formData.branch === 'mens'}
                    onChange={() => setFormData({ ...formData, branch: 'mens' })}
                    className="mt-1 text-gold focus:ring-gold"
                  />
                  <div>
                    <p className="font-serif text-base font-semibold text-charcoal">
                      Haute Looks Men&apos;s Grooming
                    </p>
                    <p className="text-xs text-charcoal/70 mt-0.5 font-medium">
                      JS Complex, CK Mahal Road, Burma Colony, Kalanivasal
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Row 3: Service Required */}
            <div>
              <label htmlFor="booking-service" className="block text-xs uppercase tracking-widest text-charcoal font-bold mb-2">
                Service Required <span className="text-red-500">*</span>
              </label>
              <select
                id="booking-service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className={`w-full px-4 py-3.5 bg-ivory rounded-lg border-2 text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all ${
                  errors.service ? 'border-red-400' : 'border-gold/40'
                }`}
              >
                <option value="">Select a service category...</option>
                {availableServiceOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.service}
                </p>
              )}
            </div>

            {/* Row 4: Preferred Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-date" className="block text-xs uppercase tracking-widest text-charcoal font-bold mb-2">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-dark">
                    <Calendar size={16} />
                  </div>
                  <input
                    type="date"
                    id="booking-date"
                    min={today}
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3.5 bg-ivory rounded-lg border-2 text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all ${
                      errors.date ? 'border-red-400' : 'border-gold/40'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="booking-time" className="block text-xs uppercase tracking-widest text-charcoal font-bold mb-2">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-dark">
                    <Clock size={16} />
                  </div>
                  <select
                    id="booking-time"
                    required
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3.5 bg-ivory rounded-lg border-2 text-sm font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all ${
                      errors.timeSlot ? 'border-red-400' : 'border-gold/40'
                    }`}
                  >
                    <option value="">Choose slot (8:30 AM - 9:00 PM)...</option>
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.timeSlot && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.timeSlot}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5: Notes / Requests */}
            <div>
              <label htmlFor="booking-notes" className="block text-xs uppercase tracking-widest text-charcoal font-bold mb-2">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                id="booking-notes"
                rows={3}
                maxLength={500}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any specific stylist preferences, wedding dates, or hair/skin considerations..."
                className="w-full px-4 py-3.5 bg-ivory rounded-lg border-2 border-gold/40 text-sm font-medium text-charcoal placeholder-charcoal/50 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold transition-all resize-none"
              />
            </div>

            {/* Transparency Note */}
            <div className="rounded-2xl border border-gold/25 bg-[linear-gradient(135deg,rgba(198,165,107,0.13),rgba(245,237,227,0.55))] p-4 text-xs font-medium leading-relaxed text-charcoal">
              <strong className="font-bold text-charcoal">Note:</strong> Appointments are subject to final schedule verification. Submitting this form opens WhatsApp with your prefilled details to confirm your exact appointment with our front desk team.
            </div>

            {/* Submission Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-charcoal shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-hover sm:w-auto sm:text-sm"
              >
                <MessageCircle size={18} />
                <span>Continue to WhatsApp</span>
              </button>

              <div className="text-xs text-charcoal font-medium text-center sm:text-right">
                Direct phone helpline: <br />
                <a
                  href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="font-bold text-gold-dark hover:underline"
                >
                  {SALON_INFO.primaryPhone}
                </a>
              </div>
            </div>

          </form>

        </div>

      </div>

      {/* Confirmation Feedback Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-request-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full border border-gold/40 shadow-2xl text-center relative"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E]/10 text-[#128C7E]">
                <MessageCircle size={28} />
              </div>

              <h3 id="booking-request-title" className="font-serif text-2xl text-charcoal font-medium mb-2">
                Your request is ready
              </h3>

              <p className="text-xs sm:text-sm text-charcoal leading-relaxed mb-6">
                Continue to WhatsApp and press Send to contact Haute Looks. This is a request only; your appointment is not confirmed until the team replies.
              </p>

              <div className="bg-ivory p-4 rounded-lg border border-gold/20 text-left text-xs space-y-1.5 mb-6 text-charcoal">
                <p><strong>Client:</strong> {formData.fullName}</p>
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Date &amp; Time:</strong> {formData.date} ({formData.timeSlot})</p>
                <p><strong>Branch:</strong> {formData.branch === 'unisex' ? 'Unisex & Bridal' : "Men's Grooming"}</p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#128C7E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f796c]"
                >
                  <MessageCircle size={16} />
                  Open WhatsApp to send request
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full rounded-full bg-gold py-3 text-xs font-semibold uppercase tracking-widest text-charcoal transition-all hover:bg-gold-light"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
