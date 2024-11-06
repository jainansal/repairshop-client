import { useUser } from "@/hooks/useUser";
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
import { getNestedValue } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ResultsTableProps {
  activeTab: TableTab;
  content: any;
}

const ResultsTable = ({ activeTab, content }: ResultsTableProps) => {
  const router = useRouter();
  const goToResource = (id: number) => {
    if (TABLE_INFO[activeTab.value].isLink)
      router.push(`/${activeTab.value}/${id}`);
  };
  return (
    <Table className="bg-blue-50">
      <TableCaption>A list of your recent {activeTab.label}.</TableCaption>
      <TableHeader>
        <TableRow>
          {TABLE_INFO[activeTab.value].headers
            .map((header) => header.label)
            .map((header) => (
              <TableHead key={`${activeTab.value}-${header}`}>
                {header}
              </TableHead>
            ))}
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {content.map((item: any) => {
          return (
            <TableRow
              key={`${item["id"]}`}
              onClick={() => goToResource(item.id)}
            >
              {TABLE_INFO[activeTab.value].headers
                .map((header) => header.key)
                .map((key) => (
                  <TableCell key={`${item["id"]}-${key}`}>
                    {getNestedValue(item, key)}
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
