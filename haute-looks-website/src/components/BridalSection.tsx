import React from 'react';
import { MessageCircle, Crown, Sparkles, Check } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const BridalSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Haute Looks, I would like to book a Bridal Consultation for my wedding celebration.'
  )}`;

  const bridalHighlights = [
    {
      title: 'Wedding day makeup',
      desc: 'Personalised bridal artistry with a look that feels radiant, refined and made for your muhurtham.',
    },
    {
      title: 'Engagements and receptions',
      desc: 'Dramatic glam, soft elegance and subtle details for every memorable celebration.',
    },
    {
      title: 'Pre-wedding consultations',
      desc: 'Plan your styling, timing and beauty routine ahead of the big day with confidence.',
    },
  ];

  return (
    <section id="bridal" className="relative overflow-hidden bg-[#f5eee6] py-24 text-charcoal lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,175,101,0.18),transparent_25%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-gold-dark uppercase">
            <Crown size={15} /> Bridal at Haute Looks
          </p>

          <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            Signature bridal beauty for your most unforgettable moments.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
            From elegant pre-bridal prep to timeless wedding-day glam, we create looks that feel naturally beautiful, camera-ready and perfectly yours.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 relative md:col-span-8">
                <div className="relative overflow-hidden rounded-[28px] border-2 border-gold/30 bg-white shadow-[0_28px_50px_rgba(40,20,10,0.10)]">
                  <img
                    src="/bridal-section.png"
                    alt="Luxury bridal makeup portrait"
                    className="h-[420px] w-full object-cover object-center transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120f0e]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-gold/30 bg-[#120f0e]/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-gold-light backdrop-blur-md">
                    Bridal Signature
                  </div>
                </div>
              </div>

              <div className="col-span-12 space-y-4 md:col-span-4">
                <div className="relative overflow-hidden rounded-[22px] border border-gold/30 bg-white shadow-[0_18px_36px_rgba(40,20,10,0.08)]">
                  <img
                    src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"
                    alt="Bridal hair styling and floral details"
                    className="h-48 w-full object-cover object-center transition-transform duration-500 hover:scale-105 sm:h-52"
                  />
                  <div className="absolute inset-0 bg-charcoal/15" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-gold/30 bg-charcoal/75 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-ivory backdrop-blur-sm">
                    Floral artistry
                  </div>
                </div>

                <div className="rounded-[22px] border border-gold/30 bg-[#f0e4d8] p-4 shadow-[0_18px_36px_rgba(40,20,10,0.08)]">
                  <div className="mb-2 flex items-center gap-2 text-gold-dark">
                    <Sparkles size={16} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                      Bridal promise
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal/80">
                    Soft glam, long-wear finish and close attention to every detail from consultation to final reveal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-gold-dark">Plan your bridal look</span>
                <h3 className="mt-2 font-serif text-2xl font-normal text-charcoal sm:text-3xl lg:text-4xl">
                  Let&apos;s create a look that feels effortlessly you.
                </h3>
              </div>

              <div className="space-y-4">
                {bridalHighlights.map((item) => (
                  <div key={item.title} className="rounded-[18px] border border-gold/20 bg-white/60 p-4 shadow-[0_12px_24px_rgba(59,38,25,0.04)]">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        <Check size={14} />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-charcoal">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-charcoal/75">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-light"
                >
                  <MessageCircle size={18} className="text-charcoal" />
                  Book Bridal Consultation
                </a>

                <span className="text-xs leading-relaxed text-charcoal/75 sm:max-w-[180px]">
                  Message us on WhatsApp to discuss your bridal plans and availability.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
