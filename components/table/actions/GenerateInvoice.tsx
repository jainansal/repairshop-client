import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModalStore";
import React from "react";

interface GenerateInvoiceProps {
  customer: any;
}

const GenerateInvoice = ({ customer }: GenerateInvoiceProps) => {
  const { onOpen } = useModal();
  return (
    <Button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={(e) => {
        onOpen("addService");
        e.stopPropagation();
      }}
    >
      Generate Invoice
    </Button>
  );
};

export default GenerateInvoice;
