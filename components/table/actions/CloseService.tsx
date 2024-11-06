import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModalStore";
import React from "react";

const CloseService = ({ service }: { service: any }) => {
  const { onOpen } = useModal();
  if (service.status == "Closed")
    return <div className="text-neutral-400">Service closed</div>;
  return (
    <Button
      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 h-fit"
      onClick={(e) => {
        onOpen("closeService", { serviceId: service.id });
        e.stopPropagation();
      }}
    >
      Close Service
    </Button>
  );
};

export default CloseService;
