"use client";

import { useModal } from "@/hooks/useModalStore";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const DefectiveItemDetailsModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "defectiveItemDetails";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white p-8 rounded-lg">
        <DialogHeader className="mb-4 text-blue-600">
          <DialogTitle className="text-2xl font-bold text-center">
            Defective Item
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-lg">
          <div>
            <p className="font-semibold">Product Code</p>
            <p>JBL889</p>
          </div>
          <div>
            <p className="font-semibold">Name</p>
            <p>JBL Speakers</p>
          </div>
          <div>
            <p className="font-semibold">Category</p>
            <p>Speakers</p>
          </div>
          <div>
            <p className="font-semibold">Customer</p>
            <p>Karan</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DefectiveItemDetailsModal;
