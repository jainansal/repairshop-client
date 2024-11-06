"use client";

import { toast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { GetRFADto } from "@/lib/dto";
import { UserType } from "@/lib/enums";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const RequestForApproval = ({ showNew }: { showNew: boolean }) => {
  const params = useParams();
  const id = params?.serviceid;
  const { user } = useUser();
  const { onOpen } = useModal();
  const [requests, setRequests] = useState<GetRFADto[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRequests() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/${user?.type}/service/${id}/request`
        );
        setRequests(response.data);
      } catch (error) {
        toast({
          variant: "destructive",
          description: "Some error occured",
        });
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (user?.id) fetchRequests();
  }, [id, user]);
  return (
    <div className="border rounded-lg p-4 bg-neutral-200">
      <div className="flex justify-between mb-2 items-center">
        <h3 className="text-lg font-bold">Requests For Approval</h3>
        {user?.type == UserType.REPAIR && showNew ? (
          <div
            className="flex px-2 py-1 gap-1 rounded bg-blue-600 text-sm items-center text-neutral-100 hover:bg-blue-700 cursor-pointer"
            onClick={() =>
              onOpen("newItemRequest", {
                serviceId: parseInt(id?.toString() || "0"),
              })
            }
          >
            <Plus size={16} />
            New
          </div>
        ) : (
          ""
        )}
      </div>

      {requests && requests?.length > 0 ? (
        <ul className="list-disc list-inside">
          {requests?.map((req) => (
            <li
              key={req.id}
              className="cursor-pointer"
              onClick={() => onOpen("requestApprovalDetails", { request: req })}
            >
              {req.newItem.title} - {req.status}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-neutral-400">No requests</p>
      )}
    </div>
  );
};

export default RequestForApproval;
