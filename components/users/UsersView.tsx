import { fetchData } from "@/services";
import UserCard from "./UserCard";

async function UsersView() {
  const data = await fetchData({
    query: "/users?limit=10",
    options: { cache: "force-cache" },
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {data?.users?.map((user: any, idx: number) => (
        <UserCard key={idx} user={user} />
      ))}
    </div>
  );
}

export default UsersView;
