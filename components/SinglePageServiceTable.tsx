import { TABLE_INFO } from "@/lib/constants";
import { GetServiceDto } from "@/lib/dto";
import { getNestedValue } from "@/lib/utils";
import React from "react";

interface SinglePageServiceTableProps {
  data: GetServiceDto[];
  id: string;
}

const SinglePageServiceTable = ({ data, id }: SinglePageServiceTableProps) => {
  return (
    <div className="border-t pt-4 overflow-auto">
      <h2 className="text-xl font-bold mb-2">Services</h2>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-200">
            {TABLE_INFO["service"].headers
              .map((header) => header.label)
              .map((header) => (
                <th className="border px-4 py-2" key={`${id}-${header}`}>
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((service) => (
            <tr key={service.id}>
              {TABLE_INFO["service"].headers
                .map((header) => header.key)
                .map((key) => (
                  <td className="border px-4 py-2" key={`${id}-${key}`}>
                    {getNestedValue(service, key)}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SinglePageServiceTable;
