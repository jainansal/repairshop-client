"use client";

import { useModal } from "@/hooks/useModalStore";
import { useUser } from "@/hooks/useUser";
import { UserType } from "@/lib/enums";
import { CirclePlus, Plus, PlusSquare } from "lucide-react";
import React, { useState } from "react";

function ServiceDetails() {
  const { user } = useUser();
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
              <strong>Service Code:</strong> S998011
            </p>
            <p>
              <strong>Status:</strong> In Progress
            </p>
            <p>
              <strong>Base Charge:</strong> Rs. 7700
            </p>
            <p>
              <strong>Customer:</strong> Rajan Singh
            </p>
            <p>
              <strong>Assigned to:</strong> Ankit Kumar
            </p>
          </div>

          {/* Status History Section */}
          <div className="mt-6 pt-4">
            <h2 className="text-xl font-bold mb-2">Status History</h2>
            <div className="space-y-2">
              <div>
                <p>Service created</p>
                <p className="text-sm text-gray-500">19th Jan 2024</p>
              </div>
              <div className="bg-blue-200 p-2 rounded">
                <p className="font-semibold">In Progress</p>
                <p className="text-sm text-gray-500">19th Jan 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 space-y-4">
          {/* Defective Item Section */}
          <div
            className="border rounded-lg p-4 bg-neutral-200 cursor-pointer"
            onClick={() => onOpen("defectiveItemDetails")}
          >
            <h3 className="text-lg font-bold mb-2">Defective Item</h3>
            <p>
              <strong>Item Code:</strong> P22891
            </p>
            <p>
              <strong>Item Name:</strong> JBL PartyBox
            </p>
            <p>
              <strong>Model:</strong> 9901
            </p>
            <button className="mt-2 bg-gray-200 text-gray-700 px-3 py-1 rounded">
              Electronics
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
