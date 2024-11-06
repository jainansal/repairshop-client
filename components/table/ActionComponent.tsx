import { TableAction } from "@/lib/enums";
import React from "react";
import RespondToRequest from "./actions/RespondToRequest";
import GenerateInvoice from "./actions/GenerateInvoice";
import CreateService from "./actions/CreateService";
import CloseService from "./actions/CloseService";

interface ActionComponentProps {
  action: TableAction;
  item: any;
}

const ActionComponent = ({ action, item }: ActionComponentProps) => {
  if (action == "closeService") {
    return <CloseService service={item} />
  }
  if (action == "createService") {
    return <CreateService customer={item} />;
  }
  if (action == "generateInvoice") {
    return <GenerateInvoice service={item} />;
  }
  if (action == "respondToRequest") {
    return <RespondToRequest data={item} />;
  }
  return null;
};

export default ActionComponent;
