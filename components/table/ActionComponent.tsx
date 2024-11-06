import { TableAction } from "@/lib/enums";
import React from "react";
import RespondToRequest from "./actions/RespondToRequest";
import GenerateInvoice from "./actions/GenerateInvoice";
import CreateService from "./actions/CreateService";

interface ActionComponentProps {
  action: TableAction;
  item: any;
}

const ActionComponent = ({ action, item }: ActionComponentProps) => {
  if (action == "closeService") {
  }
  if (action == "createService") {
    return <CreateService customer={item} />;
  }
  if (action == "deleteRequest") {
  }
  if (action == "generateInvoice") {
    return <GenerateInvoice customer={item} />;
  }
  if (action == "respondToRequest") {
    return <RespondToRequest data={item} />;
  }
  return null;
};

export default ActionComponent;
