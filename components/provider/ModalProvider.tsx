"use client";

import { useEffect, useState } from "react";
import AddCustomerModal from "../modal/AddCustomerModal";
import AddServiceModal from "../modal/AddServiceModal";
import UpdateProfileModal from "../modal/UpdateProfileModal";
import ChangePasswordModal from "../modal/ChangePasswordModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AddCustomerModal />
      <AddServiceModal />
      <UpdateProfileModal />
      <ChangePasswordModal />
    </>
  );
};

export default ModalProvider;
