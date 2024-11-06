"use client";

import RequestForApproval from "@/components/service/RequestForApproval";
import StatusHistory from "@/components/service/StatusHistory";
import { toast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { SERVICE_CLOSED_STATUS } from "@/lib/constants";
import { GetServiceDto, GetServiceHistoryDto } from "@/lib/dto";
import { UserType } from "@/lib/enums";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ServiceDetails() {
  const { user, isAuthenticated } = useUser();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState<GetServiceDto>();
  const [serviceHistory, setServiceHistory] =
    useState<GetServiceHistoryDto[]>();
  const router = useRouter();

  const params = useParams();
  const id = params?.serviceid;

  if (!id) {
    router.push("/home");
  }

  useEffect(() => {
    async function fetchService() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/${user?.type}/service/${id}`
        );
        setService(response.data);
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
    if (user?.type) fetchService();
  }, [id, user]);
  const { onOpen } = useModal();

  return (
    <div className="p-8 bg-gray-100 h-full flex flex-col">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="pb-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Service</h2>
            <p>
              <strong>Service Code:</strong> {service?.code}
            </p>
            <p>
              <strong>Status:</strong> {service?.status}
            </p>
            <p>
              <strong>Base Charge:</strong> Rs. {service?.baseCharge}
            </p>
            <p>
              <strong>Customer:</strong> {service?.custName}
            </p>
            <p>
              <strong>Assigned to:</strong> {service?.repairName}
            </p>
            <p>
              <strong>Created by:</strong> {service?.clerkName}
            </p>
          </div>

          <div className="mt-6 pt-4">
            <StatusHistory />
          </div>
        </div>

        <div className="col-span-1 space-y-4">
          <div className="border rounded-lg p-4 bg-neutral-200">
            <h3 className="text-lg font-bold mb-2">Defective Item</h3>
            <p>
              <strong>Item Code:</strong> {service?.defItem.productCode}
            </p>
            <p>
              <strong>Item Name:</strong> {service?.defItem.title}
            </p>
            <button className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded">
              {service?.defItem.category}
            </button>
          </div>

          <RequestForApproval
            showNew={service?.status !== SERVICE_CLOSED_STATUS}
          />
          {user?.type == UserType.CLERK ? (
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full disabled:bg-purple-400 disabled:hover:bg-purple-400 disabled:cursor-not-allowed"
              onClick={() => onOpen("addService")}
            >
              Generate Invoice
            </button>
          ) : (
            ""
          )}
          {user?.type == UserType.REPAIR ? (
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full disabled:bg-neutral-400 disabled:hover:bg-neutral-400 disabled:cursor-not-allowed"
              onClick={() => onOpen("closeService", { serviceId: service?.id })}
              disabled={service?.status == SERVICE_CLOSED_STATUS}
            >
              {service?.status == SERVICE_CLOSED_STATUS
                ? "Closed"
                : "Close Service"}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
