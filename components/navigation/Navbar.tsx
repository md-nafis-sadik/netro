import { auth, images } from "@/services";
import { handleSignOut } from "@/services/actions";
import { adminPaths, rootPaths } from "@/services/routes";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

async function Navbar() {
  const session = await auth();
  const isLoggedIn = session?.user;

  return (
    <header className="py-6 border-b border-neutral-200">
      <div className="containerX">
        <div className="flex items-center justify-between gap-6">
          <div className="logo">
            <Link href={rootPaths.home.path}>
              <Image
                src={images.logo}
                width={144}
                height={30}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <nav>
            <ul className="flex items-center gap-10 text-neutral-950 font-medium">
              <li>
                <Link href={adminPaths.users.path}>Users</Link>
              </li>
              <li>
                <Link href={adminPaths.posts.path}>Posts</Link>
              </li>
              <li>
                <Link href={adminPaths.admin.path}>Admin</Link>
              </li>

              {isLoggedIn && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer outline-none border-none">
                    <Image
                      src={session?.user?.image || images.avatar}
                      alt="user image"
                      width={100}
                      height={100}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" side="bottom">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              {!isLoggedIn && (
                <li>
                  <Link
                    className="py-2.5 px-6 bg-blue-500 text-white rounded-full text-sm"
                    href={rootPaths.login.path}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
