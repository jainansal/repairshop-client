import axiosInstance from "@/lib/axios";
import { UserType } from "@/lib/enums";

export const closeService = async (id: number) => {
  await axiosInstance.put(`/${UserType.REPAIR}/service/${id}/close`);
};

export const sendOtpForInvoice = async (id: number) => {
  return await axiosInstance.get(
    `/${UserType.CLERK}/service/${id}/generate-invoice`
  );
};

export const validateOtpForInvoice = async (invoiceId: number, otp: string) => {
  return await axiosInstance.post(
    `/${UserType.CLERK}/invoice/${invoiceId}?otp=${otp}`
  );
};
