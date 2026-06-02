/**
 * Types representing data for Agent Olga Nieruchomości Rapczyńska boutique applet.
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  location?: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  numberValue: number;
  suffix: string;
  label: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  subtitle: string;
  category: string;
}

export interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  email: string;
  propertyType: 'mieszkanie' | 'dom' | 'dzialka' | 'inny';
  propertySize?: string;
  location?: string;
  message?: string;
  createdAt: string;
}
