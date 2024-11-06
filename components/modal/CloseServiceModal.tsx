import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { closeService } from "@/services/service";
import { toast } from "@/hooks/use-toast";

const CloseServiceModal = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen, type, onClose, data } = useModal();
  const isModalOpen = isOpen && type === "closeService";

  const handleConfirm = async () => {
    try {
      if (data.serviceId) {
        setLoading(true);
        closeService(data.serviceId);
      }
      onClose();
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
    if (!loading) {
      onClose();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white rounded-lg border border-gray-300 p-0">
        <div className="p-6 flex items-center justify-center pb-2">
          Please confirm if you wish to close this service.
        </div>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <Button
            disabled={loading}
            variant={"outline"}
            onClick={handleClose}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            disabled={loading}
            variant={"primary"}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CloseServiceModal;
