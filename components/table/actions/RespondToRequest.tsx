import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { GetRFADto } from "@/lib/dto";
import { approveRequest, rejectRequest } from "@/services/rfa";
import { Check, X } from "lucide-react";
import React, { useState } from "react";

interface RespondToRequestProps {
  data: GetRFADto;
}

const RespondToRequest = ({ data }: RespondToRequestProps) => {
  const [loading, setLoading] = useState(false);
  const respond = async (approved: boolean) => {
    try {
      setLoading(true);
      approved ? await approveRequest(data.id) : await rejectRequest(data.id);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Some error occured while responding to the request",
      });
    } finally {
      setLoading(false);
    }
  };
  if (data.status == "Requested") {
    return (
      <div className="flex gap-2 justify-end">
        <Button
          variant={"reject"}
          className="p-1"
          size={"icon"}
          onClick={() => respond(false)}
          disabled={loading}
        >
          <X />
        </Button>
        <Button
          variant={"approve"}
          className="p-1"
          size={"icon"}
          onClick={() => respond(true)}
          disabled={loading}
        >
          <Check />
        </Button>
      </div>
    );
  }
  return <p className="text-neutral-400">Responded</p>;
};

export default RespondToRequest;
