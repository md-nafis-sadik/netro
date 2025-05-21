import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Journal - Netrosystems",
  path: "/journal",
});

const JournalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full w-full">{children}</div>;
};

export default JournalLayout;
