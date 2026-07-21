import type { ReactNode } from "react";

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};


export type DeleteConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  deviceName: string;
};