import TableSection from "@/components/table/TableSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="h-full w-full p-4 gap-4 flex flex-col overflow-hidden">
      <div className="flex gap-4">
        <Input placeholder="Search..." />
        <Button>Add</Button>
      </div>
      <TableSection />
    </div>
  );
};

export default HomePage;
