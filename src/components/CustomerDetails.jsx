import React from "react";

const CustomerDetails = ({ customer }) => (
  //   <div className="customer-details">
  //     <h2>Customer Details</h2>
  //     <p>
  //       <strong>Name:</strong> {customer.name}
  //     </p>
  //     <p>
  //       <strong>Email:</strong> {customer.email}
  //     </p>
  //     <p>
  //       <strong>Phone:</strong> {customer.phone}
  //     </p>
  //     <p>
  //       <strong>Address:</strong> {customer.address}
  //     </p>
  //   </div>
  <div className="w-full mx-auto p-8 max-w-7xl bg-white shadow-md rounded-lg">
    <div className="px-4 sm:px-0">
      <h3 className="text-base/7 font-semibold text-gray-900 text-2xl">
        Customer Profile
      </h3>
      <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">
        Personal details and services.
      </p>
    </div>
    <div className="mt-6 border-t border-gray-100">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900">Name:</dt>
          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            {customer.name}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900">Email:</dt>
          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            {customer.email}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900">Phone:</dt>
          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            {customer.phone}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm/6 font-medium text-gray-900">Address:</dt>
          <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            {customer.address}
          </dd>
        </div>
      </dl>
    </div>
  </div>
);

export default CustomerDetails;
