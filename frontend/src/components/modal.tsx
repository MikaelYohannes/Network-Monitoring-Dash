import type { ModalProps } from "../types/modal";

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 flex z-100 items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
