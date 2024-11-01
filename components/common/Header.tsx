"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className=" text-white flex items-center justify-between p-4 bg-blue-500">
      <h1 className="text-4xl cursor-pointer" onClick={() => router.push("/clerk/home")}>Repair Shop</h1>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-8 w-8 rounded-full bg-white cursor-pointer"></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => router.push("/clerk/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
