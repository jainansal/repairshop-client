import { GetCustomerDto, GetInvoiceDto, GetServiceDto } from "@/lib/dto";

const InvoiceDetails = ({
  invoice,
  service,
}: {
  invoice: GetInvoiceDto;
  service: GetServiceDto;
}) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div>
        Customer: <span>{service.custName}</span>
      </div>
      <div>
        Service: <span>{service.code}</span>
      </div>
      <div>
        Base Charges: <span>{service.baseCharge}</span>
      </div>
      {invoice.list.map((rfa) => (
        <div key={rfa.id}>
          <div>{rfa.newItem.title}</div>
          <div>{rfa.newItem.price}</div>
          <div>{rfa.serviceCharge}</div>
        </div>
      ))}
      <div>
        Total amount: <span>{invoice.totalAmount}</span>
      </div>
    </div>
  );
};

export default InvoiceDetails;
