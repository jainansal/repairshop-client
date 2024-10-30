"use client";

import { useEffect, useState } from "react";
import AddCustomerModal from "../modal/AddCustomerModal";
import AddServiceModal from "../modal/AddServiceModal";

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
    </>
  );
};

export default ModalProvider;
