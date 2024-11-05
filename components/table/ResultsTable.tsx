import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TABLE_INFO } from "@/lib/constants";
import { TableTab } from "@/lib/enums";

interface ResultsTableProps {
  activeTab: TableTab;
  content: any;
}

const ResultsTable = ({ activeTab, content }: ResultsTableProps) => {
  return (
    <Table className="bg-blue-50">
      <TableCaption>A list of your recent {activeTab.label}.</TableCaption>
      <TableHeader>
        <TableRow>
          {TABLE_INFO[activeTab.value].headers
            .map((header) => header.label)
            .map((header) => (
              <TableHead key={`${activeTab.value}-${header}`}>{header}</TableHead>
            ))}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {content.map((item: any) => {
          return (
            <TableRow key={`${item["id"]}`}>
              {TABLE_INFO[activeTab.value].headers
                .map((header) => header.key)
                .map((key) => (
                  <TableCell key={`${item["id"]}-${key}`}>
                    {item[key]}
                  </TableCell>
                ))}
              <TableCell className="text-right">Action</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
