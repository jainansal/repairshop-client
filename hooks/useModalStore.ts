import { GetInvoiceDto, GetRFADto, GetServiceDto, GetUserDto } from "@/lib/dto";
import { create } from "zustand";

export type ModalType =
  | "addCustomer"
  | "addService"
  | "updateProfile"
  | "changePassword"
  | "defectiveItemDetails"
  | "requestApprovalDetails"
  | "newItemRequest"
  | "closeService"
  | "generateInvoiceConfirmation"
  | "enterInvoiceOtp"
  | "invoiceDetails"

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address?: string;
}

interface ModalData {
  user?: GetUserDto;
  serviceId?: number;
  service?: GetServiceDto;
  request?: GetRFADto;
  invoiceId?: number;
  invoice?: GetInvoiceDto;
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
