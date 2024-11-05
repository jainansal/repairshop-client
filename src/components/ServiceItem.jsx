import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate(`/customer/service/${service.serviceCode}`, { state: service });
  };

  return (
    <div
      onClick={handleServiceClick}
      className="service-item w-full mx-auto p-8 max-w-7xl bg-white shadow-md rounded-lg"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        alignItems: "center",
        padding: "8px 38px",
        borderBottom: "1px solid #ddd",
        fontSize: "0.9rem",
        color: "#333",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f0f0f0";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "white";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span>{service.serviceCode}</span>
      <span>{service.defectiveItem}</span>
      <span>{service.latestStatus}</span>
      <span>{service.repairPersonId}</span>
    </div>
  );
};

export default ServiceItem;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ServiceItem = ({ service }) => {
//   const navigate = useNavigate();

//   const handleServiceClick = () => {
//     navigate(`/customer/service/${service.serviceCode}`);
//   };

//   <div
//     onClick={handleServiceClick}
//     className="service-item w-full mx-auto p-8 max-w-7xl bg-white shadow-md rounded-lg"
//     style={{
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr 1fr 1fr",
//       alignItems: "center",
//       padding: "8px 38px",
//       borderBottom: "1px solid #ddd",
//       fontSize: "0.9rem",
//       color: "#333",
//       // className="service-item"
//       // style={{
//       //   display: "flex",
//       //   justifyContent: "space-between",
//       //   padding: "8px 0",
//       //   borderBottom: "1px solid #ddd",
//     }}
//   >
//     <span>{service.serviceCode}</span>
//     <span>{service.defectiveItem}</span>
//     <span>{service.latestStatus}</span>
//     <span>{service.repairPersonId}</span>
//   </div>;
// };
// export default ServiceItem;
