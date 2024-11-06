"use client";

import SinglePageServiceTable from "@/components/SinglePageServiceTable";
import { toast } from "@/hooks/use-toast";
import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { TABLE_INFO } from "@/lib/constants";
import { GetCustomerDto, GetServiceDto } from "@/lib/dto";
import { UserType } from "@/lib/enums";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function CustomerDetails() {
  const { user, isAuthenticated } = useUser();
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState<GetCustomerDto>();
  const [services, setServices] = useState<GetServiceDto[]>();
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
  const id = params?.customerid;

  if (!id) {
    router.push("/home");
  }

  useEffect(() => {
    async function fetchCustomer() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/clerk/customer/${id}`);
        setCustomer(response.data);
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
    async function fetchServices() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/clerk/services?custId=${id}`
        );
        setServices(response.data.content);
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
    Promise.all([fetchCustomer(), fetchServices()]);
  }, [id]);

  const { onOpen } = useModal();

  return (
    <div className="p-8 bg-gray-100 h-full flex justify-center items-center overflow-hidden">
      <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col h-full">
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Customer Details</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => onOpen("addService", { user: customer })}
            >
              Create New Service
            </button>
          </div>
          <div className="mt-4">
            <p>
              <strong>Name:</strong> {customer?.name}
            </p>
            <p>
              <strong>Email:</strong> {customer?.email}
            </p>
            <p>
              <strong>Phone:</strong> {customer?.phone}
            </p>
            <p>
              <strong>Address:</strong> {customer?.address}
            </p>
          </div>
        </div>

        <SinglePageServiceTable
          data={services || []}
          id={id?.toString() || ""}
        />
      </div>
    </div>
  );
}

export default CustomerDetails;
