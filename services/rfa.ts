import axiosInstance from "@/lib/axios";
import { UserType } from "@/lib/enums";

export const approveRequest = async (id: number) => {
  await axiosInstance.put(`/${UserType.CUSTOMER}/request/${id}?response=1`);
};

export const rejectRequest = async (id: number) => {
  await axiosInstance.put(`/${UserType.CUSTOMER}/request/${id}?response=0`);
};

export const createRequest = async (serviceId: number, values: any) => {
  await axiosInstance.post(
    `/${UserType.REPAIR}/service/${serviceId}/request`,
    values
  );
};
