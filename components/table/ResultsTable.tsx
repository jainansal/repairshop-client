import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const ResultsTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Created by</TableHead>
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
        
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
