"use client";

import { useModal } from "@/hooks/useModalStore";
import React from "react";

function RepairPersonDetails() {
  const { onOpen } = useModal();

  return (
    <div className="p-8 bg-gray-100 h-full flex justify-center items-center overflow-hidden">
      <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col h-full">
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Repair Person Details</h2>
          </div>
          <div className="mt-4">
            <p>
              <strong>Name:</strong> Ansal Jain
            </p>
            <p>
              <strong>Email:</strong> jainansal@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 9876543210
            </p>
            <p>
              <strong>Address:</strong> Faridabad
            </p>
          </div>
        </div>

        <div className="border-t pt-4 overflow-auto">
          <h2 className="text-xl font-bold mb-2">Services</h2>
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Code</th>
                <th className="border px-4 py-2">Defective Item</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Customer</th>
                <th className="border px-4 py-2">Created by</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">S9810</td>
                <td className="border px-4 py-2">JBL PartyBox</td>
                <td className="border px-4 py-2">Created</td>
                <td className="border px-4 py-2">Abdul</td>
                <td className="border px-4 py-2">Rajan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RepairPersonDetails;
