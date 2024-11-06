"use client";

import { useEffect, useState } from "react";
import AddCustomerModal from "../modal/AddCustomerModal";
import AddServiceModal from "../modal/AddServiceModal";
import UpdateProfileModal from "../modal/UpdateProfileModal";
import ChangePasswordModal from "../modal/ChangePasswordModal";
import DefectiveItemDetailsModal from "../modal/DefectiveItemDetailsModal";
import RequestApprovalDetailsModal from "../modal/RequestApprovalDetailsModal";
import NewItemRequestModal from "../modal/NewItemRequestModal";
import CloseServiceModal from "../modal/CloseServiceModal";
import GenerateInvoiceConfirmationModal from "../modal/GenerateInvoiceConfirmationModal";
import EnterInvoiceOtpModal from "../modal/EnterInvoiceOtpModal";
import InvoiceDetailsModal from "../modal/InvoiceDetailsModal";

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
      <DefectiveItemDetailsModal />
      <RequestApprovalDetailsModal />
      <NewItemRequestModal />
      <CloseServiceModal />
      <GenerateInvoiceConfirmationModal />
      <EnterInvoiceOtpModal />
      <InvoiceDetailsModal />
    </>
  );
};

export default ModalProvider;
