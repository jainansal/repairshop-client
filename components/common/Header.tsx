"use client";

import { useUser } from "@/hooks/useUser";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axiosInstance from "@/lib/axios";

const Header = () => {
  const router = useRouter();
  const { login } = useUser();

  useEffect(() => {
    async function init() {
      try {
        const response = await axiosInstance.get("/init");
        const { id, type, name, email, phone, address } = response.data;
        if (id) {
          login({
            id,
            name,
            email,
            phone,
            address,
            type,
          });
        }
      } catch (error) {
        console.log("[INIT_ERROR]", error);
      }
    }
    init();
  }, []);

  const logout = async () => {
    await axiosInstance.post("/logout");
    router.push("/login");
  };

  return (
    <div className=" text-white flex items-center justify-between p-4 bg-blue-500">
      <h1
        className="text-4xl cursor-pointer"
        onClick={() => router.push("/home")}
      >
        Repair Shop
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-8 w-8 rounded-full bg-white cursor-pointer"></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
