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

interface ResultsTableProps {
  activeTab: string;
}

type TABLE_OPTIONS = "Customers" | "Services" | "Requests" | "Repair Persons";

const TABLE_HEADERS: Record<TABLE_OPTIONS, string[]> = {
  Customers: ["ID", "Name", "Email", "Phone", "Created by"],
  Services: ["ID", "Service Code", "Defective Item", "Status", "Customer"],
  Requests: ["ID", "Service Code", "Defective Item", "New Item", "Price"],
  "Repair Persons": ["ID", "Name", "Email", "Phone", "Created by"],
};

const ResultsTable = ({ activeTab }: ResultsTableProps) => {
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
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">101</TableCell>
          <TableCell>Ansal Jain</TableCell>
          <TableCell>jainansal@gmail.com</TableCell>
          <TableCell>+91-8267182678</TableCell>
          <TableCell>Harshit</TableCell>
          <TableCell className="text-right">Generate Invoice</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
