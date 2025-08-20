// context/ColorContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextType {
  textColor: string;
  logoColor: string;
  updateColors: (bgValue: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColor = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [textColor, setTextColor] = useState<string>('white');
  const [logoColor, setLogoColor] = useState<string>('white');

  const updateColors = (bgValue: string): void => {
    const brightness = calculateBrightness(bgValue);
    
    if (brightness > 0.6) {
      setTextColor('black');
      setLogoColor('black');
    } else {
      setTextColor('white');
      setLogoColor('white');
    }
  };

  const calculateBrightness = (bgValue: string): number => {
    if (bgValue.startsWith('url')) {
      return 0.5;
    } else if (bgValue.startsWith('#')) {
      const hex = bgValue.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    } else if (bgValue.startsWith('rgb')) {
      const match = bgValue.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      }
    } else {
      const colorMap: Record<string, number> = {
        black: 0, white: 1, red: 0.5, blue: 0.3, green: 0.4,
        purple: 0.2, dodgerblue: 0.4, gray: 0.5, darkgray: 0.3,
        '#aaddaa': 0.7, '#ffdddd': 0.85, '#212121': 0.13
      };
      return colorMap[bgValue] || 0.5;
    }
    return 0.5;
  };

  return (
    <ColorContext.Provider value={{ textColor, logoColor, updateColors }}>
      {children}
    </ColorContext.Provider>
  );
};