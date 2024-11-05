"use client";

import { toast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { GetServiceDto, GetServiceHistoryDto } from "@/lib/dto";
import { UserType } from "@/lib/enums";
import { CirclePlus, Plus, PlusSquare } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ServiceDetails() {
  const { user, isAuthenticated } = useUser();
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState<GetServiceDto>();
  const [serviceHistory, setServiceHistory] =
    useState<GetServiceHistoryDto[]>();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user?.type !== UserType.CLERK) {
      router.push("/home");
    }
  }, [isAuthenticated, user, router]);

  if (isAuthenticated && user?.type !== UserType.CLERK) {
    return null;
  }

  const params = useParams();
  const id = params?.serviceid;

  if (!id) {
    router.push("/home");
  }

  useEffect(() => {
    async function fetchService() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/clerk/service/${id}`);
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
    async function fetchStatusHistory() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/clerk/service/${id}/history`
        );
        setServiceHistory(response.data);
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
    Promise.all([fetchService(), fetchStatusHistory()]);
  }, [id]);
  const { onOpen } = useModal();

  return (
    <div className="p-8 bg-gray-100 h-full flex flex-col">
      <div className="grid grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="col-span-2">
          {/* Service Details Section */}
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

          {/* Status History Section */}
          <div className="mt-6 pt-4">
            <h2 className="text-xl font-bold mb-2">Status History</h2>
            <div className="space-y-2">
              {serviceHistory?.map((status) => (
                <div key={status.id}>
                  <p>{status.description}</p>
                  <p className="text-sm text-gray-500">
                    {`${new Date(status.createdAt)}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 space-y-4">
          {/* Defective Item Section */}
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

          {/* Requests for Approval Section */}
          <div className="border rounded-lg p-4 bg-neutral-200">
            <div className="flex justify-between mb-2 items-center">
              <h3 className="text-lg font-bold">Requests For Approval</h3>
              {user?.type == UserType.REPAIR ? (
                <div
                  className="flex px-2 py-1 gap-1 rounded bg-blue-600 text-sm items-center text-neutral-100 hover:bg-blue-700 cursor-pointer"
                  onClick={() => onOpen("newItemRequest")}
                >
                  <Plus size={16} />
                  New
                </div>
              ) : (
                ""
              )}
            </div>

            <ul className="list-disc list-inside">
              <li
                onClick={() => onOpen("requestApprovalDetails")}
                className="cursor-pointer"
              >
                Main Battery - requested
              </li>
              <li>Main Battery - approved</li>
              <li>Main Battery - rejected</li>
            </ul>
          </div>
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
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full disabled:bg-green-400 disabled:hover:bg-green-400 disabled:cursor-not-allowed"
              onClick={() => onOpen("addService")}
            >
              Mark as completed
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
