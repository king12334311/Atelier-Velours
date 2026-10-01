import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  onDismiss
}) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#1B0E0B] text-[#FAF6F0] rounded-2xl shadow-2xl border border-[#4A2A22] animate-bounce-subtle">
      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
      <span className="text-xs font-medium tracking-wide">{message}</span>
      <button
        onClick={onDismiss}
        className="p-1 text-[#8D786A] hover:text-[#FAF6F0] transition-colors ml-2"
        aria-label="Dismiss"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
