import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}