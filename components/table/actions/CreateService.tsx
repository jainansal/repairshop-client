import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModalStore";
import React from "react";

const CreateService = ({ customer }: { customer: any }) => {
  const { onOpen } = useModal();
  return (
    <Button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={(e) => {
        onOpen("addService", { user: customer });
        e.stopPropagation();
      }}
    >
      Create Service
    </Button>
  );
};

export default CreateService;
