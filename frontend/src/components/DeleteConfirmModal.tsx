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
      <div className="flex justify-cernter flex-col p-10 border border-orange-400 rounded-xl">
        <h2 className="text-xl mb-5">Delete Device?</h2>

        <p>Are you sure you want to delete {deviceName}?</p>
        <button
          onClick={onConfirm}
          className="mt-7 border border-red-500 w-50 text-red-500 rounded-xl hover:cursor-pointer hover:bg-red-500 hover:text-white duration-500"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
