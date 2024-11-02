import { create } from "zustand";

export type ModalType =
  | "addCustomer"
  | "addService"
  | "updateProfile"
  | "changePassword"
  | "defectiveItemDetails"
  | "requestApprovalDetails";

interface User {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

interface ModalData {
  user?: User;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: Boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => {
    console.log(type);
    set({ isOpen: true, type, data });
  },
  onClose: () => set({ type: null, isOpen: false }),
}));
