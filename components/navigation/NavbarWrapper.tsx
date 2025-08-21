import { fetchWithDelay } from "@/lib/apiHandler";
import Navbar from "./Navbar";

type NavbarWrapperProps = {
  show?: boolean;
};

export default async function NavbarWrapper({ show }: NavbarWrapperProps) {
  const response = (await fetchWithDelay(`/services/all`)) as {
    status: number;
    message: string;
    data: any[];
  };

  const services = response.data;

  return <Navbar show={show} services={services} />;
}
