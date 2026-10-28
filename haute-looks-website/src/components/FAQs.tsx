import React from 'react';
import { ArrowUpRight, CircleHelp } from 'lucide-react';

const questions = [
  {
    question: 'Which branch should I choose?',
    answer: 'The Unisex Salon & Bridal Studio near College Road offers hair, beauty and bridal services. The CK Mahal Road branch is Haute Looks Men’s Grooming.',
  },
  {
    question: 'How does an appointment request work?',
    answer: 'Choose your branch, service, preferred date and time in the booking form, then send the request on WhatsApp. The team will confirm whether the requested slot is available; submitting the form is not a confirmed appointment.',
  },
  {
    question: 'When are you open?',
    answer: 'Both branches are listed as open daily from 8:30 AM to 9:00 PM.',
  },
  {
    question: 'Can I discuss my bridal look before booking?',
    answer: 'Yes. Bridal consultations and trials can be discussed by arrangement. Share your wedding date and preferred look when you contact the team.',
  },
];

export const FAQs: React.FC = () => (
  <section id="faqs" className="relative overflow-hidden bg-white py-20 text-charcoal sm:py-24 lg:py-28">
    <div className="pointer-events-none absolute -right-36 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,165,107,0.12),transparent_68%)]" />
    <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
      <div>
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">
          <CircleHelp size={15} /> A few helpful details
        </p>
        <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-5xl">
          Before you visit
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70 sm:text-base">
          A little more about choosing a branch, planning a visit and getting in touch.
        </p>
        <a
          href="#booking"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory transition-all hover:bg-gold hover:text-charcoal"
        >
          Plan your visit <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="divide-y divide-gold/20 border-y border-gold/20">
        {questions.map((item, index) => (
          <details key={item.question} className="group rounded-2xl px-4 py-1 transition-colors open:bg-[#fbf7f1] sm:px-5" open={index === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-lg leading-snug sm:text-xl">{item.question}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold-dark transition-all duration-300 group-open:rotate-45 group-open:bg-gold/10">
                <span aria-hidden="true" className="text-xl leading-none">+</span>
              </span>
            </summary>
            <p className="max-w-2xl pb-5 pr-12 text-sm leading-relaxed text-charcoal/70 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
