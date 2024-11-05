// src/pages/CustomerProfile.jsx
import React from "react";
import CustomerDetails from "../components/CustomerDetails";
import ServiceItem from "../components/ServiceItem";
import Header from "../components/Header";
// Demo data for now
const dummyCustomerData = {
  name: "Dhruv Sharma",
  email: "dhruvsharma@gmail.com",
  phone: "9832323233",
  address: "Faridabad",
  services: [
    {
      serviceCode: 1,
      defectiveItem: "JBL PartyBox",
      latestStatus: "Created",
      repairPersonId: "HR5129",
    },
    {
      serviceCode: 2,
      defectiveItem: "JBL PartyBox",
      latestStatus: "In Progress",
      repairPersonId: "RJ1559",
    },
    {
      serviceCode: 3,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
    {
      serviceCode: 37,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
    {
      serviceCode: 378,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
    {
      serviceCode: 563,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
    {
      serviceCode: 7993,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
    {
      serviceCode: 8893,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
    {
      serviceCode: 7883,
      defectiveItem: "JBL PartyBox",
      latestStatus: "complete",
      repairPersonId: "UP1559",
    },
  ],
};

const CustomerProfile = () => {
  const customerData = dummyCustomerData;

  return (
    <div
      className="customer-profile"
      style={{
        width: "1470px",
        margin: "20px 20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <Header />
      <CustomerDetails customer={customerData} />

      <h2
        className="text-2xl font-medium"
        style={{ margin: "20px 90px 0px ", padding: "20px 20px 5px" }}
      >
        Services
      </h2>
      <div className="services">
        {customerData.services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default CustomerProfile;
