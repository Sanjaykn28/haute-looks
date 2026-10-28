import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...rest
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus:outline-none';
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-r from-gold-light via-gold to-gold-dark text-charcoal shadow-gold-glow hover:shadow-gold-hover hover:scale-105',
    secondary: 'bg-white text-charcoal border border-gold/40 hover:bg-gold hover:text-white shadow-sm hover:scale-105',
    outline: 'bg-transparent text-gold border border-gold/40 hover:bg-gold hover:text-charcoal shadow-sm hover:scale-105',
  };

  const combined = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button className={combined} {...rest}>
      {children}
    </button>
  );
};

export default Button;
