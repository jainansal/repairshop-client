"use client";

import { useModal } from "@/hooks/useModalStore";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

const RequestApprovalDetailsModal = () => {
  const { isOpen, type, onClose } = useModal();
  const isModalOpen = isOpen && type === "requestApprovalDetails";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white p-8 rounded-lg border border-gray-300">
        <DialogHeader className="mb-4 text-blue-600">
          <DialogTitle className="text-2xl font-bold text-center">
            Request for Approval
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-lg text-gray-700">
          <div>
            <p className="font-semibold">Product Code:</p>
            <p>P2211</p>
          </div>
          <div>
            <p className="font-semibold">Title:</p>
            <p>Samsung battery</p>
          </div>
          <div>
            <p className="font-semibold">Price:</p>
            <p>Rs. 700</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p>Pending for approval</p>
          </div>
          <div className="flex gap-4">
            <Button variant={"approve"} className="w-full">
              Approve
            </Button>
            <Button variant={"reject"} className="w-full">
              Reject
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestApprovalDetailsModal;
