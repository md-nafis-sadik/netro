import { servicesData } from "@/services/data/services.data";
import Navbar from "./Navbar";

type NavbarWrapperProps = {
  show?: boolean;
};

export default function NavbarWrapper({ show }: NavbarWrapperProps) {
  const services = [...servicesData];

  return <Navbar show={show} services={services} />;
}
