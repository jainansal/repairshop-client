export interface PostServiceDto {
  baseCharge: number;
  productCode: string;
  productTitle: string;
  productCategory: string;
  description: string;
  custId: number;
  repairId: number;
}

export interface GetServiceDto {
  id: number;
  code: string;
  baseCharge: number;
  defItem: GetDefectiveItemDto;
  status: string;
  description: string;
  custName: string;
  repairName: string;
  clerkName: string;
}

export interface GetDefectiveItemDto {
  id: number;
  productCode: string;
  title: string;
  category: string;
}

export interface GetUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  specialty?: string;
}

export interface GetRepairPersonDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  specialty: string;
}

export interface GetCustomerDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface GetServiceHistoryDto {
  id: number;
  description: string;
  createdAt: string;
}

export interface GetRFADto {
  id: number;
  description: string;
  serviceCharge: number;
  label: string;
  productCode: string;
  defItemTitle: string;
  status: string;
  newItem: GetNewItemDto;
}

export interface GetNewItemDto {
  id: number;
  productCode: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  price: number;
}
