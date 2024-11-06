import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModalStore";
import React from "react";

interface GenerateInvoiceProps {
  service: any;
}

const GenerateInvoice = ({ service }: GenerateInvoiceProps) => {
  const { onOpen } = useModal();
  return (
    <Button
      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 h-fit"
      onClick={(e) => {
        onOpen("generateInvoiceConfirmation", {
          serviceId: service.id,
          service,
        });
        e.stopPropagation();
      }}
    >
      Generate Invoice
    </Button>
  );
};

export default GenerateInvoice;
