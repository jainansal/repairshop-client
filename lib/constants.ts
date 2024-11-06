import { GetRFADto, GetServiceDto } from "./dto";
import { TableConfig, TableType, UserType } from "./enums";

export const AUTH_COOKIE_KEYWORD = "jwt";

export const USER_TABLE_CONFIG: Record<UserType, TableConfig> = {
  [UserType.CLERK]: {
    showMineToggle: true,
    tabs: [
      { value: "customer", label: "Customers" },
      { value: "service", label: "Services" },
      { value: "repairperson", label: "Repair Persons" },
    ],
  },
  [UserType.CUSTOMER]: {
    showMineToggle: false,
    tabs: [
      { value: "service", label: "Services" },
      { value: "request", label: "Requests" },
    ],
  },
  [UserType.REPAIR]: {
    showMineToggle: false,
    tabs: [
      { value: "service", label: "Services" },
      { value: "request", label: "Requests" },
    ],
  },
};

export const TABLE_INFO: Record<
  TableType,
  {
    key: string;
    value: string;
    isLink?: boolean;
    headers: {
      label: string;
      key: string;
    }[];
  }
> = {
  customer: {
    key: "customers",
    value: "Customers",
    isLink: true,
    headers: [
      { label: "ID", key: "id" },
      { label: "Name", key: "name" },
      { label: "Email", key: "email" },
      { label: "Phone", key: "phone" },
      { label: "Address", key: "address" },
    ],
  },
  repairperson: {
    key: "repairpersons",
    value: "Repair Persons",
    isLink: true,
    headers: [
      { label: "ID", key: "id" },
      { label: "Name", key: "name" },
      { label: "Email", key: "email" },
      { label: "Phone", key: "phone" },
      { label: "Specialty", key: "specialty" },
    ],
  },
  service: {
    key: "services",
    value: "Services",
    isLink: true,
    headers: [
      { label: "ID", key: "id" },
      { label: "Service Code", key: "code" },
      { label: "Defective Item", key: "defItem.title" },
      { label: "Status", key: "status" },
      { label: "Customer", key: "custName" },
      { label: "Assigned to", key: "repairName" },
      { label: "Created by", key: "clerkName" },
    ] as {
      label: string;
      key: keyof GetServiceDto;
    }[],
  },
  request: {
    key: "requests",
    value: "Requests",
    isLink: false,
    headers: [
      { label: "ID", key: "id" },
      { label: "New Item", key: "newItem.title" },
      { label: "New Item Price (Rs.)", key: "newItem.price" },
      { label: "Service Charge (Rs.)", key: "serviceCharge" },
      { label: "Defective Item", key: "defItemTitle" },
      { label: "Status", key: "status" },
    ] as {
      label: string;
      key: keyof GetRFADto;
    }[],
  },
};

export const REQUEST_LABELS = ["Generic Service", "High Priority"];
