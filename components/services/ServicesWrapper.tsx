import { Fragment } from "react";
import ProductAnimationService from "@/components/services/ProductAnimationService";
import SaasDevelopmentService from "@/components/services/SaasDevelopmentService";
import SoftwareService from "@/components/services/SoftwareService";
import UXUIService from "@/components/services/UXUIService";
import { servicesData } from "@/services/data/services.data";

const ServicesWrapper = () => {
  const softwareService = servicesData.find(
    (service) => service.title === "Software Development"
  );
  const uxUiService = servicesData.find(
    (service) => service.title === "Product Design (UI/UX Design)"
  );
  const productAnimationService = servicesData.find(
    (service) => service.title === "3D Product Animation"
  );
  const saasDevelopmentService = servicesData.find(
    (service) => service.title === "SaaS Development & SQA"
  );

  return (
    <Fragment>
      {softwareService && <SoftwareService data={softwareService} />}
      {uxUiService && <UXUIService data={uxUiService} />}
      {productAnimationService && <ProductAnimationService data={productAnimationService} />}
      {saasDevelopmentService && <SaasDevelopmentService data={saasDevelopmentService} />}
    </Fragment>
  );
};

export default ServicesWrapper;
