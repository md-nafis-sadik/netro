import UserSkeleton from "@/components/users/UserSkeleton";
import UsersView from "@/components/users/UsersView";
import { Suspense } from "react";

async function Users() {
  return (
    <section className="py-14">
      <div className="containerX">
        <div className="mb-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            dignissimos, beatae, sequi dolores dolore tempora perferendis sunt
            error fugiat odio accusamus totam. Iusto tempore perspiciatis
            repudiandae! Animi ad omnis nihil.
          </p>
        </div>

        <Suspense fallback={<UserSkeleton />}>
          <UsersView />
        </Suspense>
      </div>
    </section>
  );
}

export default Users;
