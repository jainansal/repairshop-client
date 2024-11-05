"use client";

import SinglePageServiceTable from "@/components/SinglePageServiceTable";
import { toast } from "@/hooks/use-toast";
import { useUser } from "@/hooks/useUser";
import axiosInstance from "@/lib/axios";
import { TABLE_INFO } from "@/lib/constants";
import { GetRepairPersonDto, GetServiceDto } from "@/lib/dto";
import { UserType } from "@/lib/enums";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function RepairPersonDetails() {
  const { user, isAuthenticated } = useUser();
  const [loading, setLoading] = useState(true);
  const [repairPerson, setRepairPerson] = useState<GetRepairPersonDto>();
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
  const id = params?.repairid;

  if (!id) {
    router.push("/home");
  }

  useEffect(() => {
    async function fetchRepairPerson() {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/clerk/repairperson/${id}`);
        setRepairPerson(response.data);
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
          `/clerk/services?repairId=${id}`
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
    Promise.all([fetchRepairPerson(), fetchServices()]);
  }, [id]);

  return (
    <div className="p-8 bg-gray-100 h-full flex justify-center items-center overflow-hidden">
      <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col h-full">
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Repair Person Details</h2>
          </div>
          <div className="mt-4">
            <p>
              <strong>Name:</strong> {repairPerson?.name}
            </p>
            <p>
              <strong>Email:</strong> {repairPerson?.email}
            </p>
            <p>
              <strong>Phone:</strong> {repairPerson?.phone}
            </p>
            <p>
              <strong>Address:</strong> {repairPerson?.address}
            </p>
            <p>
              <strong>Specialty:</strong> {repairPerson?.specialty}
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

export default RepairPersonDetails;
