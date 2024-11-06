"use client";

import { useModal } from "@/hooks/useModalStore";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useUser } from "@/hooks/useUser";
import { UserType } from "@/lib/enums";
import { approveRequest, rejectRequest } from "@/services/rfa";
import { toast } from "@/hooks/use-toast";

const RequestApprovalDetailsModal = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, type, onClose, data } = useModal();
  const { user } = useUser();
  const isModalOpen = isOpen && type === "requestApprovalDetails";

  const respond = async (approved: boolean) => {
    try {
      if (data.request?.id) {
        setLoading(true);
        approved
          ? await approveRequest(data.request?.id)
          : await rejectRequest(data.request.id);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Some error occured while responding to the request",
      });
    } finally {
      setLoading(false);
    }
  };

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
        <div className="space-y-4 text-gray-700">
          <div>
            <p className="font-semibold">Product Code:</p>
            <p>{data.request?.productCode}</p>
          </div>
          <div>
            <p className="font-semibold">Title:</p>
            <p>{data?.request?.newItem.title}</p>
          </div>
          <div>
            <p className="font-semibold">Product charges:</p>
            <p>Rs. {data?.request?.newItem?.price}</p>
          </div>
          <div>
            <p className="font-semibold">Service charges:</p>
            <p>Rs. {data?.request?.serviceCharge}</p>
          </div>
          <div>
            <p className="font-semibold">Status:</p>
            <p>{data?.request?.status}</p>
          </div>
          <div>
            <p className="font-semibold">Label:</p>
            <p>{data?.request?.label}</p>
          </div>
          {user &&
          data?.request?.status == "Requested" &&
          user?.type == UserType.CUSTOMER ? (
            <div className="flex gap-4">
              <Button
                variant={"approve"}
                className="w-full"
                disabled={loading}
                onClick={() => respond(true)}
              >
                Approve
              </Button>
              <Button
                variant={"reject"}
                className="w-full"
                disabled={loading}
                onClick={() => respond(false)}
              >
                Reject
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestApprovalDetailsModal;
