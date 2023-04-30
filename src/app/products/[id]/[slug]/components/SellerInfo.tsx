import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SellerInformation(props: { supplier: any }) {
  const supplierName = props.supplier.company_name as string;

  return (
    <div className="m-2 flex basis-[25%] flex-col gap-3 border p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary p-3 text-white">
          {supplierName
            .match(/(\b\S)?/g)!
            .join("")
            .toUpperCase()}
        </div>
        <p className="text-gray-500">
          Seller Information
          <br />
          <span className="font-bold text-gray-800">{supplierName}</span>
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <button className="btn bg-[#15BA53] text-sm">
          <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-1" /> Chat
          on whatsapp
        </button>
        <button className="btn border border-primary bg-transparent text-sm text-primary">
          <FontAwesomeIcon icon={faEnvelope} size="xl" className="mr-1" /> Send
          email to seller
        </button>
      </div>
    </div>
  );
}
