import type { DeleteConfirmModalProps } from "../types/modal";
import Modal from "./modal";

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  deviceName,
}: DeleteConfirmModalProps) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl">Delete Device?</h2>

      <p>Are you sure you want to delete {deviceName}?</p>
      <button onClick={onConfirm}>Delete</button>
    </Modal>
  );
}
