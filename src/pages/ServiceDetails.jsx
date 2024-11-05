import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceCode } = useParams();
  const location = useLocation();
  const serviceData = location.state;

  // State for managing the dialog box
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Sample earlier request data
  const approvalRequests = [
    {
      id: 1,
      title: "Main battery request",
      newItemDetails: "Battery Model 123",
      productCode: "BATT123",
      description: "Replace the main battery due to power retention issues",
      price: "₹1200",
      status: "Pending for approval",
    },
    {
      id: 2,
      title: "Display change request",
      newItemDetails: "Display Model XYZ",
      productCode: "DISP456",
      description: "Screen flickering issue requires display replacement",
      price: "₹3500",
      status: "Approved",
    },
    {
      id: 3,
      title: "Buttons change request",
      newItemDetails: "Button Model XYZ",
      productCode: "BTn456",
      description: "Power button issue requires buttons replacement",
      price: "₹1500",
      status: "Approved",
    },
    {
      id: 4,
      title: "Motherboard change request",
      newItemDetails: "MotherBoard Model XYZ",
      productCode: "MTB456",
      description: "Sound and call compatibility problem requires replacement",
      price: "₹6500",
      status: "Approved",
    },
    {
      id: 5,
      title: "Camera change request",
      newItemDetails: "Camera Model XYZ",
      productCode: "CAm456",
      description: "Camera flickering issue requires replacement",
      price: "₹5500",
      status: "Approved",
    },
    // Add more requests as needed
  ];

  const openModal = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRequest(null);
    setIsModalOpen(false);
  };

  return (
    <div
      className="service-details-container "
      style={{
        width: "1530px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>
        Service Information
      </h1>

      <div
        className="service-details"
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Column: Service Details */}
        <div
          className="left-column"
          style={{
            flex: "1",
            padding: "20px",
            borderRight: "2px solid #eee",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "16px",
              color: "#0056b3",
            }}
          >
            Service Details
          </h2>
          <div style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#555" }}>Service Code:</strong>{" "}
            <span style={{ color: "#333" }}>
              {serviceData?.serviceCode || serviceCode}
            </span>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#555" }}>Defective Item:</strong>{" "}
            <span style={{ color: "#333" }}>
              {serviceData?.defectiveItem || "N/A"}
            </span>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#555" }}>Latest Status:</strong>{" "}
            <span style={{ color: "#333" }}>
              {serviceData?.latestStatus || "Pending"}
            </span>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#555" }}>Customer:</strong>{" "}
            <span style={{ color: "#333" }}>
              {serviceData?.customer || "Dhruv Sharma"}
            </span>
          </div>
          <div style={{ marginBottom: "8px" }}>
            <strong style={{ color: "#555" }}>Repair Person ID:</strong>{" "}
            <span style={{ color: "#333" }}>
              {serviceData?.repairPersonId || "N/A"}
            </span>
          </div>
        </div>

        {/* Right Column: Approval Requests */}
        <div
          className="right-column"
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingLeft: "20px",
          }}
        >
          <div
            className="defective-item-panel"
            style={{
              padding: "20px",
              backgroundColor: "#e6f2ff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#0073e6",
                marginBottom: "10px",
              }}
            >
              Defective Item Details
            </h3>
            <p style={{ color: "#555" }}>
              <strong>Item Name:</strong>{" "}
              {serviceData?.defectiveItem || "Item not specified"}
            </p>
            <p style={{ color: "#555" }}>
              <strong>Description:</strong> Detailed information about the
              defective item.
            </p>
            <p style={{ color: "#555" }}>
              <strong>Date Received:</strong> 2024-10-29
            </p>
            <p style={{ color: "#555" }}>
              <strong>Condition:</strong> Moderate wear and tear
            </p>
          </div>
          <div
            className="approval-request-panel"
            style={{
              padding: "20px",
              backgroundColor: "#f9e6ff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                color: "#c44dff",
                marginBottom: "10px",
              }}
            >
              Request for Approval
            </h3>
            {approvalRequests.map((request, index) => (
              <h4
                key={request.id}
                style={{
                  color: "#554",
                  cursor: "pointer",
                  borderRadius: "8px",
                  border: "2px gray solid",
                  padding: "4px",
                  margin: "2px",
                  fontWeight: "bold",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onClick={() => openModal(request)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f0f0f0";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {`${index + 1}. ${request.title}`}
              </h4>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Dialog for Showing Request Details */}
      {isModalOpen && selectedRequest && (
        <div
          className="modal"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "8px",
              width: "500px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ color: "#333", marginBottom: "16px" }}>
              {selectedRequest.title}
            </h2>
            <p>
              <strong>New Item Details:</strong>{" "}
              {selectedRequest.newItemDetails}
            </p>
            <p>
              <strong>Product Code:</strong> {selectedRequest.productCode}
            </p>
            <p>
              <strong>Description:</strong> {selectedRequest.description}
            </p>
            <p>
              <strong>Price:</strong> {selectedRequest.price}
            </p>
            <p>
              <strong>Status:</strong> {selectedRequest.status}
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;

// import React from "react";
// import { useLocation, useParams } from "react-router-dom";

// const ServiceDetails = () => {
//   const { serviceCode } = useParams();
//   const location = useLocation();
//   const serviceData = location.state;

//   return (
//     <div
//       className="service-details-container "
//       style={{
//         width: "1530px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "40px",
//         backgroundColor: "#f4f6f8",
//         minHeight: "100vh",
//       }}
//     >
//       <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#333" }}>
//         Service Information
//       </h1>

//       <div
//         className="service-details"
//         style={{
//           display: "flex",
//           gap: "20px",
//           width: "100%",
//           maxWidth: "1200px",
//           backgroundColor: "#fff",
//           borderRadius: "12px",
//           padding: "30px",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {/* Left Column: Service Details */}
//         <div
//           className="left-column"
//           style={{
//             flex: "1",
//             padding: "20px",
//             borderRight: "2px solid #eee",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "1.8rem",
//               marginBottom: "16px",
//               color: "#0056b3",
//             }}
//           >
//             Service Details
//           </h2>
//           <div style={{ marginBottom: "8px" }}>
//             <strong style={{ color: "#555" }}>Service Code:</strong>{" "}
//             <span style={{ color: "#333" }}>
//               {serviceData?.serviceCode || serviceCode}
//             </span>
//           </div>
//           <div style={{ marginBottom: "8px" }}>
//             <strong style={{ color: "#555" }}>Defective Item:</strong>{" "}
//             <span style={{ color: "#333" }}>
//               {serviceData?.defectiveItem || "N/A"}
//             </span>
//           </div>
//           <div style={{ marginBottom: "8px" }}>
//             <strong style={{ color: "#555" }}>Latest Status:</strong>{" "}
//             <span style={{ color: "#333" }}>
//               {serviceData?.latestStatus || "Pending"}
//             </span>
//           </div>
//           <div style={{ marginBottom: "8px" }}>
//             <strong style={{ color: "#555" }}>Customer:</strong>{" "}
//             <span style={{ color: "#333" }}>
//               {serviceData?.customer || "Dhruv Sharma"}
//             </span>
//           </div>
//           <div style={{ marginBottom: "8px" }}>
//             <strong style={{ color: "#555" }}>Repair Person ID:</strong>{" "}
//             <span style={{ color: "#333" }}>
//               {serviceData?.repairPersonId || "N/A"}
//             </span>
//           </div>
//         </div>

//         {/* Right Column: Additional Details */}
//         <div
//           className="right-column"
//           style={{
//             flex: "1",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//             paddingLeft: "20px",
//           }}
//         >
//           {/* Defective Item Details Panel */}
//           <div
//             className="defective-item-panel"
//             style={{
//               padding: "20px",
//               backgroundColor: "#e6f2ff",
//               borderRadius: "8px",
//               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "1.5rem",
//                 color: "#0073e6",
//                 marginBottom: "10px",
//               }}
//             >
//               Defective Item Details
//             </h3>
//             <p style={{ color: "#555" }}>
//               <strong>Item Name:</strong>{" "}
//               {serviceData?.defectiveItem || "Item not specified"}
//             </p>
//             <p style={{ color: "#555" }}>
//               <strong>Description:</strong> Detailed information about the
//               defective item.
//             </p>
//             <p style={{ color: "#555" }}>
//               <strong>Date Received:</strong> 2024-10-29
//             </p>
//             <p style={{ color: "#555" }}>
//               <strong>Condition:</strong> Moderate wear and tear
//             </p>
//           </div>

//           {/* Request for Approval Panel */}
//           <div
//             className="approval-request-panel"
//             style={{
//               padding: "20px",
//               backgroundColor: "#f9e6ff",
//               borderRadius: "8px",
//               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3
//               style={{
//                 fontSize: "1.5rem",
//                 color: "#c44dff",
//                 marginBottom: "10px",
//               }}
//             >
//               Request for Approval
//             </h3>
//             <h4
//               style={{
//                 color: "#555",
//                 cursor: "pointer",
//                 borderRadius: "2px",
//                 padding: "4px",
//                 margin: "2px",
//                 transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "#f0f0f0";
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 8px rgba(0, 0, 0, 0.1)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "white";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               1. Main battery request
//             </h4>
//             <h4
//               style={{
//                 color: "#555",
//                 cursor: "pointer",
//                 borderRadius: "2px",
//                 padding: "4px",
//                 margin: "2px",
//                 transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "#f0f0f0";
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 8px rgba(0, 0, 0, 0.1)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "white";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               2. Display change request{" "}
//             </h4>
//             <h4
//               style={{
//                 color: "#555",
//                 cursor: "pointer",
//                 borderRadius: "2px",
//                 padding: "4px",
//                 margin: "2px",
//                 transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "#f0f0f0";
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 8px rgba(0, 0, 0, 0.1)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "white";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               3. Button change request
//             </h4>
//             <h4
//               style={{
//                 color: "#555",
//                 cursor: "pointer",
//                 borderRadius: "2px",
//                 padding: "4px",
//                 margin: "2px",
//                 transition: "transform 0.2s ease, box-shadow 0.2s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "#f0f0f0";
//                 e.currentTarget.style.transform = "translateY(-4px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 8px rgba(0, 0, 0, 0.1)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "white";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               4. Motherboard change request
//             </h4>
//             <button
//               style={{
//                 marginTop: "16px",
//                 padding: "10px 20px",
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 borderRadius: "5px",
//                 border: "none",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//               }}
//             >
//               Request Approval
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;
