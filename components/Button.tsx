import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-4 border text-lg font-bold rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-1";
  
  const variants = {
    primary: "border-transparent text-white bg-green-600 hover:bg-green-700 focus:ring-green-500 shadow-green-500/30 shadow-lg",
    secondary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 focus:ring-brand-500",
    outline: "border-brand-600 text-brand-600 bg-transparent hover:bg-brand-50"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};