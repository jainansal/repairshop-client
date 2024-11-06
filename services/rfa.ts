import axiosInstance from "@/lib/axios";
import { RFAResponse, UserType } from "@/lib/enums";

export const approveRequest = async (id: number) => {
  await axiosInstance.put(
    `/${UserType.CUSTOMER}/request/${id}?response=${RFAResponse.APPROVE}`
  );
};

export const rejectRequest = async (id: number) => {
  await axiosInstance.put(
    `/${UserType.CUSTOMER}/request/${id}?response=${RFAResponse.REJECT}`
  );
};

export const createRequest = async (serviceId: number, values: any) => {
  await axiosInstance.post(
    `/${UserType.REPAIR}/service/${serviceId}/request`,
    values
  );
};
