import UserCard from "@/components/users/UserCard";
import { fetchData } from "@/services";

async function SingleUser({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await fetchData({ query: `/users/${id}` });

  return (
    <section className="py-14">
      <div className="containerX">
        <div className="w-full max-w-[420px] mx-auto">
          <UserCard user={user} />
        </div>
      </div>
    </section>
  );
}

export default SingleUser;
