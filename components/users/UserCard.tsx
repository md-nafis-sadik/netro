import { adminPaths } from "@/services/routes";
import Image from "next/image";
import Link from "next/link";

function UserCard({ user }: { user: any }) {
  return (
    <Link
      href={`${adminPaths.users.path}/${user?.id}`}
      className="w-full block border border-neutral-300 rounded-lg overflow-hidden bg-white cursor-pointer"
    >
      <div className="h-44 relative">
        <Image
          src={user?.image}
          alt="user image"
          width={240}
          height={240}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 border-t border-neutral-300">
        <h2 className="text-neutral-900 text-lg font-semibold mb-2 flex items-center gap-1 flex-wrap">
          <span>{user?.firstName}</span>
          <span>{user?.lastName}</span>
        </h2>
        <div className="flex flex-col gap-1">
          <p className="text-neutral-700 text-sm flex items-center gap-1">
            <span>Email:</span>
            <span>{user?.email}</span>
          </p>
          <p className="text-neutral-700 text-sm flex items-center gap-1">
            <span>Phone:</span>
            <span>{user?.phone}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;
