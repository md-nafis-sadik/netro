import { clientCompanyData } from "@/services/data/shared.data";
import Image from "next/image";

const ClientServiceList = () => {
  return (
    <section className="containerX py-10 md:py-20 ">
      <p className="font-scoutcond text-2xl lg:text-[48px] font-bold !leading-[0.9] services_client_weve_served_header uppercase tracking-[2px] text-center">
        {"Client we've served"}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6">
        {clientCompanyData.slice(0, 12).map((image, index) => (
          <div
            className="flex_center border border-dashed border-natural-300 py-[52px] md:py-[42px] px-6 md:px-8 lg:px-[52px] min-h-fit md:min-h-[156px]"
            key={index}
          >
            <Image
              className="w-full h-auto max-w-[170px]"
              src={image}
              alt={`Client image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientServiceList;
