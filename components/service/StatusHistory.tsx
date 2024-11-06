"use client";

import { toast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { GetServiceHistoryDto } from "@/lib/dto";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const StatusHistory = () => {
  const params = useParams();
  const id = params?.serviceid;
  const { user } = useUser();
  const [history, setHistory] = useState<GetServiceHistoryDto[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/${user?.type}/service/${id}/history`
        );
        setHistory(response.data);
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
    if (user?.id) fetchHistory();
  }, [id, user]);
  return (
    <>
      <h2 className="text-xl font-bold mb-2">Status History</h2>
      <div className="space-y-2">
        {history?.map((status) => (
          <div key={status.id}>
            <p>{status.description}</p>
            <p className="text-sm text-gray-500">
              {`${new Date(status.createdAt)}`}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatusHistory;
