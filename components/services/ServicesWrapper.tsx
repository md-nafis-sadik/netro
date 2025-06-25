import { Fragment } from "react";
import ProductAnimationService from "@/components/services/ProductAnimationService";
import SaasDevelopmentService from "@/components/services/SaasDevelopmentService";
import SoftwareService from "@/components/services/SoftwareService";
import UXUIService from "@/components/services/UXUIService";
import { fetchWithDelay } from "@/lib/apiHandler";

const ServicesWrapper = async () => {
  let services = (await fetchWithDelay(`/services/all`)) as any;

  const softwareService = services?.data?.find(
    (service: any) => service.title === "Software Development"
  );
  const uxUiService = services?.data?.find(
    (service: any) => service.title === "Product Design (UI/UX Design)"
  );
  const productAnimationService = services?.data?.find(
    (service: any) => service.title === "3D Product Animation"
  );
  const saasDevelopmentService = services?.data?.find(
    (service: any) => service.title === "SaaS Development & SQA"
  );

  return (
    <Fragment>
      <SoftwareService data={softwareService} />
      <UXUIService data={uxUiService} />
      <ProductAnimationService data={productAnimationService} />
      <SaasDevelopmentService data={saasDevelopmentService} />
    </Fragment>
  );
};

export default ServicesWrapper;
