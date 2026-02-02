import React from 'react';
import { MessageCircle } from './Icons';

export const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-10 px-4">
    <h2 className={`text-3xl md:text-4xl font-extrabold uppercase tracking-tight ${light ? 'text-white' : 'text-tosca-dark'}`}>
      {title}
    </h2>
    {subtitle && (
      <div className={`mt-2 h-1 w-24 mx-auto rounded-full ${light ? 'bg-tosca-accent' : 'bg-tosca'}`}></div>
    )}
    {subtitle && (
      <p className={`mt-3 text-lg font-medium ${light ? 'text-tosca-light' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-lg border-b-4 border-tosca overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const WhatsAppButton: React.FC<{ 
  text?: string; 
  size?: 'sm' | 'md' | 'lg' | 'xl'; 
  fullWidth?: boolean;
  message?: string;
  variant?: 'primary' | 'outline' | 'white';
}> = ({ 
  text = "Chat WhatsApp", 
  size = 'md', 
  fullWidth = false,
  message = "Halo Sinar Jaya Travel, saya mau tanya...",
  variant = 'primary'
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-95";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl"
  };

  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-600 text-white border-2 border-transparent",
    outline: "bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-50",
    white: "bg-white text-green-600 hover:bg-gray-100 border-2 border-transparent"
  };

  const url = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      <MessageCircle className="mr-2 w-5 h-5 md:w-6 md:h-6" />
      {text}
    </a>
  );
};
