import { auth } from "@/services";
import { rootPaths } from "@/services/routes";
import { redirect } from "next/navigation";

async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session?.user) redirect(rootPaths.home.path);
  return <>{children}</>;
}

export default AdminLayout;
