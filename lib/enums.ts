export enum UserType {
  REPAIR = "repairperson",
  CLERK = "clerk",
  CUSTOMER = "customer",
}

export enum RFAResponse {
  APPROVE = "Approved",
  REJECT = "Rejected"
}

export type TableType = "customer" | "repairperson" | "service" | "request";

export type TableAction =
  | "generateInvoice"
  | "respondToRequest"
  | "closeService"
  | "createService"
  | "deleteRequest";

export type TableConfig = {
  showMineToggle: boolean;
  tabs: TableTab[];
};

export type TableTab = {
  value: TableType;
  label: string;
};

export type UserTableAction = {
  type: UserType;
  action: TableAction;
};
