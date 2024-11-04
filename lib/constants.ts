import { TABLE_TYPE, UserType } from "./enums";

export const AUTH_COOKIE_KEYWORD = "jwt";

type TableConfig = {
  showMineToggle: boolean;
  tabs: TABLE_TYPE[];
};

export const USER_TABLE_CONFIG: Record<UserType, TableConfig> = {
  [UserType.CLERK]: {
    tabs: ["customer", "service", "repairperson"],
    showMineToggle: true,
  },
  [UserType.CUSTOMER]: {
    tabs: ["service", "request"],
    showMineToggle: false,
  },
  [UserType.REPAIR]: {
    tabs: ["service", "request"],
    showMineToggle: false,
  },
};

export const TABLE_INFO: Record<
  TABLE_TYPE,
  {
    key: string;
    value: string;
    headers: string[];
  }
> = {
  customer: {
    key: "customers",
    value: "Customers",
    headers: ["ID", "Name", "Email", "Phone", "Created by"],
  },
  repairperson: {
    key: "repairpersons",
    value: "Repair Persons",
    headers: ["ID", "Name", "Email", "Phone", "Created by"],
  },
  service: {
    key: "services",
    value: "Services",
    headers: ["ID", "Service Code", "Defective Item", "Status", "Customer"],
  },
  request: {
    key: "requests",
    value: "Requests",
    headers: ["ID", "Service Code", "Defective Item", "New Item", "Price"],
  },
};
