"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface ToastMessage {
  id: number;
  text: string;
}

let toastId = 0;
let addToastFn: ((text: string) => void) | null = null;

export function showToast(text: string) {
  addToastFn?.(text);
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    addToastFn = (text: string) => {
      const id = ++toastId;
      setToasts((prev) => {
        // Keep max 3 toasts visible
        const next = prev.length >= 3 ? prev.slice(1) : prev;
        return [...next, { id, text }];
      });
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 2500);
    };
    return () => {
      addToastFn = null;
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-[8px] shadow-lg text-sm font-medium animate-[toast-in_0.3s_ease-out]"
        >
          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
          {toast.text}
        </div>
      ))}
    </div>
  );
}
