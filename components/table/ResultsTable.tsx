import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { TABLE_OPTIONS } from "@/lib/enums";
import { useModal } from "@/hooks/useModalStore";
import { useRouter } from "next/navigation";

interface ResultsTableProps {
  activeTab: TABLE_OPTIONS;
}

const TABLE_HEADERS: Record<TABLE_OPTIONS, string[]> = {
  Customers: ["ID", "Name", "Email", "Phone", "Created by"],
  Services: ["ID", "Service Code", "Defective Item", "Status", "Customer"],
  Requests: ["ID", "Service Code", "Defective Item", "New Item", "Price"],
  "Repair Persons": ["ID", "Name", "Email", "Phone", "Created by"],
};

const ResultsTable = ({ activeTab }: ResultsTableProps) => {
  const { onOpen } = useModal();
  const router = useRouter();
  return (
    <Table className="bg-blue-50">
      <TableCaption>A list of your recent {activeTab}.</TableCaption>
      <TableHeader>
        <TableRow>
          {TABLE_HEADERS[activeTab as TABLE_OPTIONS].map((header) => (
            <TableHead>{header}</TableHead>
          ))}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          onClick={() => {
            if (activeTab == "Customers") router.push("/customer/1");
            if (activeTab == "Services") router.push("/service/1");
            if (activeTab == "Repair Persons") router.push("/repair/1");
            if (activeTab == "Requests") onOpen("requestApprovalDetails");
          }}
        >
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          {activeTab == "Requests" ? (
            <TableCell className="text-right">
              <Button
                variant={"approve"}
                title="Approve"
                className="p-2 mr-2 h-fit"
              >
                <Check />
              </Button>
              <Button variant={"reject"} title="Reject" className="p-2 h-fit">
                <X />
              </Button>
            </TableCell>
          ) : (
            <TableCell className="text-right">Generate Invoice</TableCell>
          )}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
