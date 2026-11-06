import React from 'react';

interface WhatsAppIconProps {
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = 'w-5 h-5' }) => {
  return (
    <img
      src="./assets/aistudio/image_bafe8f51.png"
      alt="WhatsApp"
      referrerPolicy="no-referrer"
      className={`object-contain rounded-full shrink-0 ${className}`}
    />
  );
};
