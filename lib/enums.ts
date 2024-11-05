export enum UserType {
  REPAIR = "repair",
  CLERK = "clerk",
  CUSTOMER = "customer",
}

export type TableType = "customer" | "repairperson" | "service" | "request";

export type TableConfig = {
  showMineToggle: boolean;
  tabs: TableTab[];
};

export type TableTab = {
  value: TableType;
  label: string;
};
