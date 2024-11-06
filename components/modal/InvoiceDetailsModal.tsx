import { useModal } from "@/hooks/useModalStore";
import React from "react";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import InvoiceDetails from "../InvoiceDetails";

const InvoiceDetailsModal = () => {
  const { isOpen, type, onClose, data, onOpen } = useModal();
  const isModalOpen = isOpen && type === "invoiceDetails";
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg border border-gray-300 p-0">
        {data.service && data.invoice ? (
          <InvoiceDetails service={data.service} invoice={data.invoice} />
        ) : (
          ""
        )}
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <Button variant={"primary"}>Download</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceDetailsModal;
